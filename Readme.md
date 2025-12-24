
# ModelForge

ModelForge is a modular, full-stack machine learning platform that demonstrates how real-world ML models can be built, served, and consumed through clean APIs.
It focuses on practical ML engineering, not just model training.

The project is designed as both:

- A portfolio-grade ML system

- A foundation for future expansion into more advanced ML and AI systems


## Features

### Current Features

- Customer Churn Prediction
    - Predicts the likelihood of customer churn using structured data

- Sentiment Analysis
    - Analyzes and classifies sentiment from text input

- FastAPI Backend
    - Clean, well-structured REST APIs

- Modular ML Architecture
    - Each model is independent and easy to extend or replace

- Frontend Integration
    - Simple UI to demonstrate real-world usage

- Production-inspired Design
    - Clear separation between ML logic, API layer, and frontend

### Planned / Future Features

- Additional ML models
- Containerized deployment (Docker)
- Advanced AI/DL models


## Architecture Overview

```
Frontend (UI)   
    ↓  
FastAPI Backend     
    ↓   
ML Models (Churn, Sentiment, etc.)
```
- ML logic is isolated from API logic
- Models are plug-and-play
- New models can be added with minimal backend changes
## Tech Stack

### Backend
- Python 3.10+
- FastAPI
- NumPy
- Pandas

### Frontend
- Node.js 18+
- Next.js
- AppRouter
- Tailwind CSS

### ML
- scikit-learn
- Joblib
- Tensorflow
- Classical ML models
- Models run in-memory
## Setup & Installation
### Backend
```git
# Clone the repository
git clone https://github.com/PypCoder/ModelForge.git
cd ModelForge

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Go into the main directory
cd server/app

# Run the API
uvicorn main:app --reload
```

API will be available at:

`http://localhost:8000`

Interactive docs: `http://localhost:8000/docs`

### Frontend
```
cd client
npm install
npm run dev
```
## API Documentation

ModelForge uses FastAPI, which provides automatic API documentation:

- Swagger UI: /docs
- ReDoc: /redoc

No additional API documentation is required.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


<p align="center">
  <a href="https://github.com/PypCoder" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-PypCoder-181717?style=for-the-badge&logo=github&logoColor=white" alt="PypCoder GitHub"/>
  </a>
</p>