from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Text, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base
import enum

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    EMPLOYEE = "employee"
    EMPLOYER = "employer"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    role = Column(String(50), default="employee")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())

    profile = relationship("UserProfile", back_populates="user", uselist=False)
    employer_profile = relationship("EmployerProfile", back_populates="user", uselist=False)
    applications = relationship("Application", back_populates="user")

class UserProfile(Base):
    __tablename__ = "user_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    full_name = Column(String(255))
    phone = Column(String(50))
    resume_url = Column(String(255))
    skills = Column(Text)
    experience = Column(Text)

    user = relationship("User", back_populates="profile")

class EmployerProfile(Base):
    __tablename__ = "employer_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    company_name = Column(String(255), index=True)
    industry = Column(String(255))
    website = Column(String(255))
    description = Column(Text)
    is_verified = Column(Boolean, default=False)

    user = relationship("User", back_populates="employer_profile")
    jobs = relationship("Job", back_populates="employer")

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    employer_id = Column(Integer, ForeignKey("employer_profiles.id"))
    title = Column(String(255), index=True)
    description = Column(Text)
    location = Column(String(255), default="Kolar")
    salary_range = Column(String(255))
    job_type = Column(String(50)) # Full-time, Part-time, etc.
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, server_default=func.now())

    employer = relationship("EmployerProfile", back_populates="jobs")
    applications = relationship("Application", back_populates="job")

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    resume_snapshot = Column(String(255)) # URL to resume at time of app
    status = Column(String(50), default="pending") # pending, reviewed, accepted, rejected
    applied_at = Column(DateTime, server_default=func.now())

    job = relationship("Job", back_populates="applications")
    user = relationship("User", back_populates="applications")
