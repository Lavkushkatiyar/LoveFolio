from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.dependencies import require_admin

from app.db.dependencies import get_db
from app.schemas.profile import ProfileResponse, ProfileUpdate
from app.services.profile import ProfileService

router = APIRouter(prefix="/profile", tags=["Profiles"])


@router.get(
    "",
    response_model=ProfileResponse,
)
async def read_profile(
    session: AsyncSession = Depends(get_db),
) -> ProfileResponse:
    profile = await ProfileService.get_profile(session)

    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found",
        )

    return ProfileResponse.model_validate(profile)


@router.patch("", dependencies=[Depends(require_admin)], response_model=ProfileResponse)
async def update_profile(
    profile_data: ProfileUpdate, session: AsyncSession = Depends(get_db)
) -> ProfileResponse:
    profile = await ProfileService.update_profile(session, profile_data)
    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="profile not found"
        )

    return ProfileResponse.model_validate(profile)
