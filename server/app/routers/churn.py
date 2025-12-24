import pandas as pd
import numpy as np
from fastapi import APIRouter
from pydantic import BaseModel
import joblib
import shap

# ---------------------------
# Model and encoder loading
# ---------------------------
rf_model = joblib.load("models/churn_rf_model.pkl")
encoder = joblib.load("models/churn_enc.pkl")

MODEL_COLUMNS = [
    'gender', 'Partner', 'PaperlessBilling', 'TotalCharges',
    'InternetService_Fiber optic', 'InternetService_No',
    'OnlineSecurity_No internet service', 'OnlineSecurity_Yes',
    'Contract_One year', 'Contract_Two year',
    'PaymentMethod_Credit card (automatic)',
    'PaymentMethod_Electronic check', 'PaymentMethod_Mailed check'
]

BINARY_MAP = {
    "Yes": 1,
    "No": 0,
    "Female": 0,
    "Male": 1
}

# Mapping encoded columns back to original features
ORIGINAL_FEATURE_MAP = {
    'gender': 'gender',
    'Partner': 'Partner',
    'PaperlessBilling': 'PaperlessBilling',
    'TotalCharges': 'TotalCharges',
    'InternetService_Fiber optic': 'InternetService',
    'InternetService_No': 'InternetService',
    'OnlineSecurity_No internet service': 'OnlineSecurity',
    'OnlineSecurity_Yes': 'OnlineSecurity',
    'Contract_One year': 'Contract',
    'Contract_Two year': 'Contract',
    'PaymentMethod_Credit card (automatic)': 'PaymentMethod',
    'PaymentMethod_Bank transfer (automatic)': 'PaymentMethod',
    'PaymentMethod_Electronic check': 'PaymentMethod',
    'PaymentMethod_Mailed check': 'PaymentMethod'
}

churn = APIRouter(prefix="/churn", tags=["Churn Predictor"])

# ---------------------------
# Pydantic input schema
# ---------------------------
class ChurnInput(BaseModel):
    gender: str
    Partner: str
    PaperlessBilling: str
    TotalCharges: float
    InternetService: str
    OnlineSecurity: str
    Contract: str
    PaymentMethod: str

# ---------------------------
# Prediction function
# ---------------------------
def preprocess_and_predict(user_input_dict, rf_model, encoder, debug=False):
    try:
        df = pd.DataFrame([user_input_dict])
        if debug: print("\n[DEBUG] Initial user input:\n", df)

        # if "Bank transfer" in df['PaymentMethod'][0]:
        #   df['PaymentMethod'] = df['PaymentMethod']+" (automatic)"

        encoder_cols = [c.split('_')[0] for c in encoder.get_feature_names_out()]

        # Binary mapping
        for col in df.columns:
            if col in BINARY_MAP or df[col].dtype == object and col not in encoder_cols:
                df[col] = df[col].map(BINARY_MAP).fillna(df[col])
        if debug: print("\n[DEBUG] After binary mapping:\n", df)

        # Handle categorical columns for one-hot (must match training encoder)
        cat_cols = [c for c in df.columns if c in encoder_cols]
        if debug: print("\n[DEBUG] Categorical columns detected:", cat_cols)

        if cat_cols:
            encoded_array = encoder.transform(df[cat_cols])
            if debug: print("\n[DEBUG] One-hot encoded array:\n", encoded_array)
            encoded_df = pd.DataFrame(
                encoded_array,
                columns=encoder.get_feature_names_out(cat_cols),
                index=df.index
            )
            df = pd.concat([df.drop(columns=cat_cols), encoded_df], axis=1)
            if debug: print("\n[DEBUG] After one-hot encoding:\n", df)

        # Ensure all model columns exist
        for col in MODEL_COLUMNS:
            if col not in df.columns:
                df[col] = 0
        df = df[MODEL_COLUMNS]  # reorder
        if debug: print("\n[DEBUG] After aligning model columns:\n", df)

        # Predict
        pred_prob = rf_model.predict_proba(df)[:, 1][0]
        pred_class = rf_model.predict(df)[0]
        if debug: print("\n[DEBUG] Prediction probability:", pred_prob)
        if debug: print("[DEBUG] Prediction class:", pred_class)

        # ---------------------------
        # SHAP explanation
        # ---------------------------
        # explainer = shap.TreeExplainer(rf_model)
        # shap_values = explainer(df)

        # shap_df = pd.DataFrame({
        #     'encoded_feature': df.columns,
        #     'shap_value': np.array(shap_values.values[0])
        # })
        # shap_df['original_feature'] = shap_df['encoded_feature'].map(ORIGINAL_FEATURE_MAP)

        # feature_contrib = shap_df.groupby('original_feature')['shap_value'].apply(lambda x: np.sum(np.abs(x)))
        # feature_contrib = feature_contrib.sort_values(ascending=False)
        # top_feature = feature_contrib.index[0]

        # if debug:
        #     print("\n[DEBUG] SHAP feature contributions:\n", feature_contrib)
        #     print("[DEBUG] Top contributing feature:", top_feature)

        return {
            "prediction": int(pred_class),
            "churn_probability": int(pred_prob * 100),
            # "top_contributing_feature": top_feature,
            # "feature_contributions": feature_contrib.to_dict()
        }
    except Exception as e:
        return {"error": str(e)}

# ---------------------------
# FastAPI endpoint
# ---------------------------
@churn.post("/predict")
def predict_churn_endpoint(data: ChurnInput):
    user_dict = data.dict()
    result = preprocess_and_predict(user_dict, rf_model, encoder, debug=False)
    return result
