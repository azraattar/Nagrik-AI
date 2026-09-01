from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_supabase_login():
    print("=== TESTING LOGIN ON SUPABASE DATABASE ===")
    
    # 1. Test existing user 'az@gmail.com' or test registered emails
    print("\n--- Test 1: Querying registered emails from Supabase ---")
    from database import SessionLocal
    import models
    db = SessionLocal()
    users = db.query(models.User).all()
    print(f"Found {len(users)} users in Supabase PostgreSQL database:")
    for u in users:
        print(f" - ID: {u.id} | Email: '{u.email}' | Role: '{u.role}' | Password: '{u.password}'")
    
    if users:
        test_user = users[0]
        print(f"\n--- Test 2: Attempting Login for Email '{test_user.email}' with stored password '{test_user.password}' ---")
        res = client.post("/api/auth/login", json={
            "email": test_user.email,
            "password": test_user.password
        })
        print("Status Code:", res.status_code)
        print("Response Body:", res.json())

if __name__ == "__main__":
    test_supabase_login()
