import os
import uuid
from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, status
from sqlalchemy.orm import Session
from database import get_db
import schemas
import crud
import models
from auth import get_current_user
from ai.analysis import analyze_complaint

router = APIRouter(prefix="/api/complaints", tags=["Complaints"])

ALLOWED_IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_VIDEO_EXTENSIONS = {".mp4", ".mov", ".webm"}

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "uploads")
IMAGE_DIR = os.path.join(UPLOAD_DIR, "images")
VIDEO_DIR = os.path.join(UPLOAD_DIR, "videos")

os.makedirs(IMAGE_DIR, exist_ok=True)
os.makedirs(VIDEO_DIR, exist_ok=True)

VALID_STATUSES = {"Submitted", "Under Review", "In Progress", "Resolved", "Rejected"}

@router.post("", status_code=status.HTTP_201_CREATED)
async def create_new_complaint(
    title: str = Form(...),
    description: str = Form(...),
    latitude: Optional[float] = Form(None),
    longitude: Optional[float] = Form(None),
    image: Optional[UploadFile] = File(None),
    video: Optional[UploadFile] = File(None),
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    media_files = []

    if image and image.filename:
        ext = os.path.splitext(image.filename)[1].lower()
        if ext not in ALLOWED_IMAGE_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail=f"Invalid image format. Allowed: {', '.join(ALLOWED_IMAGE_EXTENSIONS)}"
            )
        filename = f"{uuid.uuid4()}{ext}"
        filepath = os.path.join(IMAGE_DIR, filename)
        with open(filepath, "wb") as f:
            f.write(await image.read())
        media_files.append({
            "file_type": "image",
            "file_url": f"/uploads/images/{filename}"
        })

    if video and video.filename:
        ext = os.path.splitext(video.filename)[1].lower()
        if ext not in ALLOWED_VIDEO_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail=f"Invalid video format. Allowed: {', '.join(ALLOWED_VIDEO_EXTENSIONS)}"
            )
        filename = f"{uuid.uuid4()}{ext}"
        filepath = os.path.join(VIDEO_DIR, filename)
        with open(filepath, "wb") as f:
            f.write(await video.read())
        media_files.append({
            "file_type": "video",
            "file_url": f"/uploads/videos/{filename}"
        })

    # AI Analysis placeholder
    ai_result = analyze_complaint(title=title, description=description)

    complaint = crud.create_complaint(
        db=db,
        title=title,
        description=description,
        user_id=current_user.id,
        latitude=latitude,
        longitude=longitude,
        department_id=current_user.department_id,
        media_files=media_files,
        ai_data=ai_result
    )

    return {
        "complaint_id": complaint.id,
        "status": complaint.status,
        "message": "Complaint submitted successfully"
    }

@router.get("/my", response_model=List[schemas.ComplaintResponse])
def get_my_complaints(
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return crud.get_user_complaints(db=db, user_id=current_user.id)

@router.get("/{complaint_id}", response_model=schemas.ComplaintResponse)
def get_complaint_by_id(
    complaint_id: int,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    complaint = crud.get_complaint(db=db, complaint_id=complaint_id)
    if not complaint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Complaint with ID {complaint_id} not found"
        )
    return complaint

@router.put("/{complaint_id}/status", response_model=schemas.ComplaintResponse)
def update_status(
    complaint_id: int,
    status_update: schemas.ComplaintStatusUpdate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if status_update.status not in VALID_STATUSES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid status '{status_update.status}'. Allowed: {', '.join(VALID_STATUSES)}"
        )

    complaint = crud.get_complaint(db=db, complaint_id=complaint_id)
    if not complaint:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Complaint with ID {complaint_id} not found"
        )

    updated_complaint = crud.update_complaint_status(
        db=db,
        complaint_id=complaint_id,
        status=status_update.status
    )
    return updated_complaint
