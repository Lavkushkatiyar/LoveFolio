from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.api.dependencies import require_admin

from app.db.dependencies import get_db
from app.schemas.experience import ExperienceCreate, ExperienceResponse
from app.services.experience import ExperienceService

router = APIRouter(tags=["Experiences"], prefix="/experiences")


@router.get("/", response_model=list[ExperienceResponse])
async def get_experiences(
    session: AsyncSession = Depends(get_db),
) -> list[ExperienceResponse]:
    return await ExperienceService.get_experiences(session)


@router.post("", dependencies=[Depends(require_admin)], response_model=ExperienceResponse)
async def create_experience(
    experience_data: ExperienceCreate,
    session: AsyncSession = Depends(get_db),
) -> ExperienceResponse:
    return await ExperienceService.create_experience(session, experience_data)


@router.delete("/{experience_id}", dependencies=[Depends(require_admin)], response_model=dict)
async def delete_experience(
    experience_id: str,
    session: AsyncSession = Depends(get_db),
) -> dict:
    success = await ExperienceService.delete_experience(session, experience_id)
    if not success:
        raise HTTPException(status_code=404, detail="Experience not found.")
    return {"message": "Experience deleted successfully."}
