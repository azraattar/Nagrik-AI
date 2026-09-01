from database import SessionLocal
import models

db = SessionLocal()
users = db.query(models.User).all()
print("=== ACCOUNTS REGISTERED IN YOUR SUPABASE POSTGRESQL DATABASE ===")
for i, u in enumerate(users, 1):
    print(f"{i}. Email: {u.email} | Password: {u.password} | Role: {u.role} | Department ID: {u.department_id}")
