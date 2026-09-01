import os
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

load_dotenv()

engine = create_engine(os.getenv("DATABASE_URL"))
with engine.connect() as conn:
    res = conn.execute(text("SELECT id, name, email, password, role, department_id FROM users;"))
    rows = res.fetchall()
    print("=== USERS IN YOUR SUPABASE DATABASE ===")
    for row in rows:
        print(f"ID: {row[0]} | Name: {row[1]} | Email: '{row[2]}' | Password: '{row[3]}' | Role: '{row[4]}' | Dept: '{row[5]}'")
