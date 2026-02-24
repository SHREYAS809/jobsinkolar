from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from .models import UserRole

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    role: UserRole

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Job Schemas
class JobBase(BaseModel):
    title: str
    description: str
    location: Optional[str] = "Kolar"
    salary_range: Optional[str] = None
    job_type: str

class JobCreate(JobBase):
    pass

class JobResponse(JobBase):
    id: int
    employer_id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Application Schemas
class ApplicationBase(BaseModel):
    job_id: int

class ApplicationCreate(ApplicationBase):
    pass

class ApplicationResponse(ApplicationBase):
    id: int
    user_id: int
    status: str
    applied_at: datetime

    class Config:
        from_attributes = True
