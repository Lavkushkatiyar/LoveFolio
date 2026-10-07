from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.db.session import AsyncSession
from app.schemas.skill import SkillCreate, SkillResponse
from app.services.skill import SkillService

router = APIRouter(tags=["Skills"], prefix="/skills")


@router.get("/", response_model=list[SkillResponse])
async def get_all_skills(session: Session = Depends(get_db)):
    return await SkillService.get_all_skills(session)


@router.post("", response_model=SkillResponse)
async def create_skill(
    skill_data: SkillCreate,
    session: AsyncSession = Depends(get_db),
) -> SkillResponse:
    print(f"Adding skill: {skill_data}")
    skill = await SkillService.add_skill(session, skill_data)
    if not skill:
        raise HTTPException(status_code=400, detail="Skill could not be added.")
    return skill  # type: ignore


@router.delete("/{skill_name}", response_model=dict)
async def delete_skill(
    skill_name: str,
    session: AsyncSession = Depends(get_db),
) -> dict:
    print(f"Deleting skill: {skill_name}")
    success = await SkillService.delete_skill(session, skill_name)
    if not success:
        raise HTTPException(status_code=404, detail="Skill not found.")
    return {"message": "Skill deleted successfully."}
