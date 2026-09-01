import os
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from database import engine, Base, SessionLocal
import models
import auth
from routers import auth as auth_router, complaints, user as user_router, department as department_router, admin

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("main")

# Create database tables if they do not exist
try:
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created/verified successfully.")
except Exception as e:
    logger.warning(f"Metadata create_all notice: {e}")

app = FastAPI(title="NagrikAI API")

# Configure CORS
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files for file uploads
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "uploads")
os.makedirs(os.path.join(UPLOAD_DIR, "images"), exist_ok=True)
os.makedirs(os.path.join(UPLOAD_DIR, "videos"), exist_ok=True)
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

# Routers
app.include_router(auth_router.router)
app.include_router(complaints.router)
app.include_router(user_router.router)
app.include_router(department_router.router)
app.include_router(admin.router)

@app.on_event("startup")
def startup_db_seed():
    db = SessionLocal()
    try:
        # Check departments
        try:
            if db.query(models.Department).count() == 0:
                departments = [
                    models.Department(id=1, name="Public Works", description="Roads, potholes, and physical infrastructure"),
                    models.Department(id=2, name="Water & Sewage", description="Water supply, drainage, and pipeline leakage"),
                    models.Department(id=3, name="Electrical Grid", description="Streetlights, transformers, and power outages"),
                    models.Department(id=4, name="Sanitation", description="Waste management, garbage pickup, and hygiene")
                ]
                db.add_all(departments)
                db.commit()
        except Exception as err:
            db.rollback()
            logger.info(f"Departments seed check skipped: {err}")

        # Check users
        try:
            if db.query(models.User).count() == 0:
                citizen_user = models.User(
                    id=1,
                    name="Rahul Sharma",
                    email="user@example.com",
                    phone="9876543210",
                    password=auth.get_password_hash("password123"),
                    role="citizen",
                    department_id=None
                )
                db.add(citizen_user)
                db.commit()
        except Exception as err:
            db.rollback()
            logger.info(f"Users seed check skipped: {err}")

    finally:
        db.close()

@app.get("/")
def root():
    return {
        "message": "Welcome to NagrikAI Role-Based Auth API",
        "docs": "/docs"
    }
