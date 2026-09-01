from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr

# User Schemas
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    phone: Optional[str] = None
    role: Optional[str] = "citizen"
    department_id: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str] = None
    role: str
    department_id: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str
    redirect: str

# Department Schemas
class DepartmentResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None

    class Config:
        from_attributes = True

# Media Schemas
class MediaResponse(BaseModel):
    id: int
    complaint_id: int
    file_type: str
    file_url: str
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# AI Analysis Schemas
class AIAnalysisResponse(BaseModel):
    id: int
    complaint_id: int
    category: Optional[str] = None
    department: Optional[str] = None
    priority_score: Optional[float] = None
    duplicate_score: Optional[float] = None
    summary: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Complaint Schemas
class ComplaintCreate(BaseModel):
    title: str
    description: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None

class ComplaintStatusUpdate(BaseModel):
    status: str

class ComplaintResponse(BaseModel):
    id: int
    user_id: int
    department_id: Optional[str] = None
    title: str
    description: str
    category: Optional[str] = None
    priority: Optional[str] = None
    priority_score: Optional[float] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    status: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    media: List[MediaResponse] = []
    ai_analysis: Optional[AIAnalysisResponse] = None

    class Config:
        from_attributes = True

# Admin Analytics Schema
class AdminAnalyticsResponse(BaseModel):
    total_complaints: int
    submitted: int
    under_review: int
    in_progress: int
    resolved: int
    rejected: int
