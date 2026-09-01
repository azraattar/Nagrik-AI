from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import schemas
import crud
import models
from auth import require_admin

router = APIRouter(prefix="/api/admin", tags=["Admin"])

@router.get("/dashboard")
def get_admin_dashboard(current_user: models.User = Depends(require_admin)):
    return {
        "message": "Admin access granted"
    }

@router.get("/complaints", response_model=List[schemas.ComplaintResponse])
def get_all_complaints_admin(
    current_user: models.User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    return crud.get_all_complaints(db=db)

@router.get("/departments", response_model=List[schemas.DepartmentResponse])
def get_all_departments_admin(
    current_user: models.User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    return crud.get_departments(db=db)

@router.get("/analytics", response_model=schemas.AdminAnalyticsResponse)
def get_admin_analytics_data(
    current_user: models.User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    return crud.get_admin_analytics(db=db)
