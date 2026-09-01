from sqlalchemy.orm import Session
from sqlalchemy import func
import models
import schemas
from auth import get_password_hash

# User CRUD
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        password=get_password_hash(user.password), # Save hashed password in 'password' column
        role=user.role or "citizen",
        department_id=user.department_id
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Department CRUD
def get_departments(db: Session):
    return db.query(models.Department).all()

def create_department(db: Session, name: str, description: str = None):
    dept = models.Department(name=name, description=description)
    db.add(dept)
    db.commit()
    db.refresh(dept)
    return dept

# Complaint CRUD
def create_complaint(
    db: Session,
    title: str,
    description: str,
    user_id: int,
    latitude: float = None,
    longitude: float = None,
    department_id: str = None,
    media_files: list = None,
    ai_data: dict = None
):
    db_complaint = models.Complaint(
        user_id=user_id,
        title=title,
        description=description,
        latitude=latitude,
        longitude=longitude,
        department_id=department_id,
        status="Submitted",
        category=ai_data.get("category") if ai_data else None,
        priority_score=ai_data.get("priority_score") if ai_data else None,
    )
    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)

    if media_files:
        for m in media_files:
            db_media = models.Media(
                complaint_id=db_complaint.id,
                file_type=m["file_type"],
                file_url=m["file_url"]
            )
            db.add(db_media)

    if ai_data:
        db_ai = models.AIAnalysis(
            complaint_id=db_complaint.id,
            category=ai_data.get("category"),
            department=ai_data.get("department"),
            priority_score=ai_data.get("priority_score"),
            duplicate_score=ai_data.get("duplicate_score"),
            summary=ai_data.get("summary")
        )
        db.add(db_ai)

    db.commit()
    db.refresh(db_complaint)
    return db_complaint

def get_complaint(db: Session, complaint_id: int):
    return db.query(models.Complaint).filter(models.Complaint.id == complaint_id).first()

def get_user_complaints(db: Session, user_id: int):
    return db.query(models.Complaint).filter(models.Complaint.user_id == user_id).order_by(models.Complaint.created_at.desc()).all()

def get_department_complaints(db: Session, department_id: str):
    return db.query(models.Complaint).filter(models.Complaint.department_id == str(department_id)).order_by(models.Complaint.created_at.desc()).all()

def get_all_complaints(db: Session):
    return db.query(models.Complaint).order_by(models.Complaint.created_at.desc()).all()

def update_complaint_status(db: Session, complaint_id: int, status: str):
    complaint = db.query(models.Complaint).filter(models.Complaint.id == complaint_id).first()
    if complaint:
        complaint.status = status
        db.commit()
        db.refresh(complaint)
    return complaint

# Admin Analytics CRUD
def get_admin_analytics(db: Session):
    total = db.query(func.count(models.Complaint.id)).scalar() or 0
    submitted = db.query(func.count(models.Complaint.id)).filter(models.Complaint.status == "Submitted").scalar() or 0
    under_review = db.query(func.count(models.Complaint.id)).filter(models.Complaint.status == "Under Review").scalar() or 0
    in_progress = db.query(func.count(models.Complaint.id)).filter(models.Complaint.status == "In Progress").scalar() or 0
    resolved = db.query(func.count(models.Complaint.id)).filter(models.Complaint.status == "Resolved").scalar() or 0
    rejected = db.query(func.count(models.Complaint.id)).filter(models.Complaint.status == "Rejected").scalar() or 0

    return {
        "total_complaints": total,
        "submitted": submitted,
        "under_review": under_review,
        "in_progress": in_progress,
        "resolved": resolved,
        "rejected": rejected
    }
