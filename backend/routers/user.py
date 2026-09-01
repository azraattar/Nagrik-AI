from fastapi import APIRouter, Depends
from auth import require_citizen
import models

router = APIRouter(prefix="/api/user", tags=["Citizen"])

@router.get("/dashboard")
def get_user_dashboard(current_user: models.User = Depends(require_citizen)):
    return {
        "message": "Citizen access granted",
        "user_id": current_user.id
    }
