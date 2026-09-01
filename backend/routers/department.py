from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
import schemas
import crud
import models
from auth import require_officer

router = APIRouter(prefix="/api/department", tags=["Department"])

@router.get("/dashboard")
def get_department_dashboard(current_user: models.User = Depends(require_officer)):
    return {
        "message": "Department access granted",
        "department_id": current_user.department_id
    }

@router.get("/complaints", response_model=List[schemas.ComplaintResponse])
def get_department_complaints(
    current_user: models.User = Depends(require_officer),
    db: Session = Depends(get_db)
):
    if not current_user.department_id:
        return []
    return crud.get_department_complaints(db=db, department_id=current_user.department_id)
