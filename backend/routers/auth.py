import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
import schemas
import crud
from auth import verify_password, create_access_token

router = APIRouter(prefix="/api/auth", tags=["Auth"])

logger = logging.getLogger("auth_router")

@router.post("/register", response_model=schemas.UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    logger.info(f"[REGISTER ATTEMPT] Email: '{user.email}', Name: '{user.name}', Role: '{user.role}'")
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        logger.warning(f"[REGISTER FAILED] Email '{user.email}' is already registered.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered"
        )
    new_user = crud.create_user(db=db, user=user)
    logger.info(f"[REGISTER SUCCESS] Created User ID: {new_user.id}")
    return new_user

@router.post("/login", response_model=schemas.TokenResponse)
def login_user(credentials: schemas.UserLogin, db: Session = Depends(get_db)):
    logger.info(f"[LOGIN ATTEMPT] Email: '{credentials.email}'")

    # 1. User lookup
    user = crud.get_user_by_email(db, email=credentials.email)
    if not user:
        logger.warning(f"[LOGIN FAILED] No user found with email: '{credentials.email}'")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Login failed: No account registered with email '{credentials.email}'"
        )

    logger.info(f"[USER FOUND] User ID: {user.id}, Role: '{user.role}', Dept: '{user.department_id}'")

    # 2. Password verification
    password_matches = verify_password(credentials.password, user.password)
    if not password_matches:
        logger.warning(f"[LOGIN FAILED] Incorrect password provided for email: '{credentials.email}'")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Login failed: Invalid password"
        )

    logger.info(f"[PASSWORD OK] Password matched for User ID: {user.id}")

    # 3. Determine role-based redirect
    role = user.role.lower() if user.role else "citizen"
    if role == "officer":
        redirect_url = "/department"
    elif role == "admin":
        redirect_url = "/admin"
    else:
        redirect_url = "/user"

    # 4. Generate JWT access token
    jwt_payload = {
        "user_id": user.id,
        "role": role,
        "department_id": str(user.department_id) if user.department_id else None
    }
    access_token = create_access_token(data=jwt_payload)

    logger.info(f"[LOGIN SUCCESS] Generated JWT token for User ID: {user.id}, Redirect: '{redirect_url}'")

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": role,
        "redirect": redirect_url
    }
