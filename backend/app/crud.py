from sqlalchemy.orm import Session
from . import models, schemas, auth

# User CRUD
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password, role=user.role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Job CRUD
def get_jobs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Job).filter(models.Job.is_active == True).offset(skip).limit(limit).all()

def create_job(db: Session, job: schemas.JobCreate, employer_id: int):
    db_job = models.Job(**job.dict(), employer_id=employer_id)
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

# Application CRUD
def create_application(db: Session, application: schemas.ApplicationCreate, user_id: int):
    db_app = models.Application(job_id=application.job_id, user_id=user_id)
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return db_app
