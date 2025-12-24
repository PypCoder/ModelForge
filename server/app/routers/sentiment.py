import pandas as pd
import numpy as np
from fastapi import APIRouter
from pydantic import BaseModel
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import joblib

# ---------------------------
# Model and encoder loading
# ---------------------------
tokenizer = joblib.load("models/sentiment_tokenizer.pkl")
model = load_model("models/sentiment_model.keras")

sentiment = APIRouter(prefix="/sentiment", tags=["Sentiment Analyzer"])

# ---------------------------
# Pydantic input schema
# ---------------------------
class SentimentInput(BaseModel):
    text: str

# ---------------------------
# Prediction function
# ---------------------------
def predict_sentiment(text):
    # Convert text to sequence
    seq = tokenizer.texts_to_sequences([text])

    # Pad sequence
    max_len = 100
    padded = pad_sequences(seq, maxlen=max_len)

    # Predict
    prob = model.predict(padded)[0][0]

    # Convert probability to label
    sentiment = "Positive" if prob >= 0.5 else "Negative"

    return {
        "sentiment": sentiment,
        "confidence": int(prob * 100)
    }

# ---------------------------
# FastAPI endpoint
# ---------------------------
@sentiment.post("/predict")
def predict_sentiment_endpoint(data: SentimentInput):
    user_dict = data.dict()
    result = predict_sentiment(user_dict["text"])
    return result
