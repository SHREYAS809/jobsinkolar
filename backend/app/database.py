from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Engine initialization with safety check
engine = None
if SQLALCHEMY_DATABASE_URL:
    try:
        # Optimized for TiDB Cloud and long-running connections
        engine = create_engine(
            SQLALCHEMY_DATABASE_URL,
            pool_pre_ping=True,
            pool_recycle=300,
            pool_size=5,
            max_overflow=10
        )
        print("Database engine created successfully.")
    except Exception as e:
        print(f"Error creating database engine: {e}")
else:
    print("WARNING: DATABASE_URL not set. Database features will be unavailable.")

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency to get DB session
def get_db():
    if engine is None:
        raise Exception("Database engine not initialized. Check DATABASE_URL environment variable.")
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

