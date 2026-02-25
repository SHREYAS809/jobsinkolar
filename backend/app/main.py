from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import uvicorn
import logging
import traceback
from fastapi import Request
from fastapi.responses import JSONResponse

import os
from . import models, schemas, crud, auth, database

# Create tables (simple approach for initialization)
# With pool_pre_ping to handle TiDB connection timeouts
database.engine.pool_pre_ping = True
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Jobs In Kolar API")

# Explicit CORS configuration for Vercel and local development
origins = [
    "http://localhost:3000",
    "https://jobs-in-kolar.vercel.app",
    "https://jobsinkolar.vercel.app",
    "https://jobsinkolar-shreyas809.vercel.app", # Potential variant
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global Exception Handler to expose errors for debugging
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    error_msg = f"Exception: {str(exc)}\n{traceback.format_exc()}"
    print(error_msg)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error", "error": str(exc), "traceback": traceback.format_exc()}
    )

@app.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if not db_user or not auth.verify_password(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = auth.create_access_token(
        data={"sub": db_user.email, "role": db_user.role}
    )
    return {"access_token": access_token, "token_type": "bearer", "role": db_user.role}

@app.get("/jobs", response_model=List[schemas.JobResponse])
def read_jobs(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    jobs = crud.get_jobs(db, skip=skip, limit=limit)
    return jobs

@app.post("/seed")
def seed_data(db: Session = Depends(database.get_db)):
    # Create a test employer user
    test_user = crud.get_user_by_email(db, "hr@tata.com")
    if not test_user:
        test_user = crud.create_user(db, schemas.UserCreate(email="hr@tata.com", password="password123", role="employer"))
    
    # Create Employer Profile if it doesn't exist
    employer_profile = db.query(models.EmployerProfile).filter(models.EmployerProfile.user_id == test_user.id).first()
    if not employer_profile:
        employer_profile = models.EmployerProfile(
            user_id=test_user.id,
            company_name="Tata Consultancy Services",
            industry="IT Services",
            website="https://www.tcs.com",
            description="Leading global IT services provider"
        )
        db.add(employer_profile)
        db.commit()
        db.refresh(employer_profile)

    # Create some jobs linked to the profile
    jobs = [
        {"title": "Software Engineer", "description": "Looking for React developers", "location": "Kolar", "salary_range": "30k - 50k", "job_type": "Full-time"},
        {"title": "Data Entry Operator", "description": "Need fast typing speed", "location": "Kolar", "salary_range": "15k - 20k", "job_type": "Part-time"},
        {"title": "Nurse", "description": "Looking for experienced nurses", "location": "Kolar", "salary_range": "25k - 40k", "job_type": "Full-time"},
    ]
    
    for job_data in jobs:
        # Check if job already exists to avoid duplicates during re-seeding
        existing_job = db.query(models.Job).filter(models.Job.title == job_data["title"], models.Job.employer_id == employer_profile.id).first()
        if not existing_job:
            crud.create_job(db, schemas.JobCreate(**job_data), employer_id=employer_profile.id)
    
    return {"message": "Seed data created successfully"}

@app.get("/")
async def root():
    return {"message": "Welcome to Jobs In Kolar API", "status": "online"}

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
