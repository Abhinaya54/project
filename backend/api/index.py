import sys
import os

# Add parent directory to path to import app module
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db
from app.routers import auth, goals, portfolio, progress, simulation, simulations

# Initialize database
try:
    init_db()
except Exception as e:
    print(f"Database initialization warning: {e}")

app = FastAPI(title="Wealth Management API")

# Update CORS to accept frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for now, restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/db")
def database():
    return {"status": "DB connected & backend running"}

@app.get("/port")
def portf():
    return {"message": "Welcome to the Portfolio Management API"}

@app.get("/")
def root():
    return {"message": "Wealth Management API is running"}

app.include_router(auth.router)
app.include_router(goals.router)
app.include_router(portfolio.router, prefix="/portfolio", tags=["portfolio"])
app.include_router(progress.router)
app.include_router(simulation.router, prefix="/simulation", tags=["simulation"])
app.include_router(simulations.router, prefix="/simulations", tags=["simulations"])
