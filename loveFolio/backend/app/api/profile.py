from fastapi.openapi.utils import status_code_ranges
from pydantic import HttpUrl
from app.schemas.profile import ProfileUpdate
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.dependencies import get_db
from app.schemas.profile import ProfileResponse
from app.services.profile import get_profile , update_profile


router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


@router.get(
    "",
    response_model=ProfileResponse,
)
async def read_profile(
    session: AsyncSession = Depends(get_db),
) -> ProfileResponse:
    profile = await get_profile(session)

    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found",
        )

    return ProfileResponse.model_validate(profile)


@router.patch("",response_model=ProfileResponse)
async def update_profile(profile_data:ProfileUpdate, session:AsyncSession=Depends(get_db))->ProfileResponse:
    profile = await update_profile(session,profile_data)
    if profile is None:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail="profile not found")

    return ProfileResponse.model_validate(profile)



