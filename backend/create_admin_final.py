import sys
from app.database import SessionLocal
from app import crud, schemas

def create_admin(email, password):
    db = SessionLocal()
    try:
        # Check if user already exists
        existing_user = crud.get_user_by_email(db, email)
        if existing_user:
            print(f"Error: User with email {email} already exists!")
            return

        user_in = schemas.UserCreate(
            email=email,
            password=password,
            role="admin"
        )
        user = crud.create_user(db, user_in)
        print(f"Successfully created admin account: {user.email} (ID: {user.id})")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python create_admin_final.py <email> <password>")
    else:
        create_admin(sys.argv[1], sys.argv[2])
