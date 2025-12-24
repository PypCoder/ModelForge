from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import churn, sentiment

app = FastAPI(title="ModelForge API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(churn.churn)
app.include_router(sentiment.sentiment)


@app.get("/")
def read_root():
    return {"message": "Welcome to ModelForge API! Visit /docs for API documentation."}
