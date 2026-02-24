# Jobs In Kolar Backend (Python/FastAPI)

This is the backend for the Jobs In Kolar platform.

## Prerequisites
- Python 3.9+
- PostgreSQL

## Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure `.env`:
   - Update `DATABASE_URL` with your PostgreSQL credentials.
4. Run the server:
   ```bash
   python app/main.py
   ```

## API Endpoints
- `GET /`: Health check
- `POST /register`: User registration
- `GET /jobs`: List all jobs
