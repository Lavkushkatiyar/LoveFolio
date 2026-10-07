from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.dependencies import get_db
from app.schemas.education import EducationSchema 
from app.services.education import EducationService

router = APIRouter(prefix="/educations", tags=["Educations"])

@router.get("/", response_model=list[EducationSchema])
async def get_all_educations(session: AsyncSession = Depends(get_db)):
    """Get all education records from the database."""
    return await EducationService.get_all_education(session)

@router.post("", response_model=EducationSchema)
async def create_education(
    education_data: EducationSchema,
    session: AsyncSession = Depends(get_db),
) -> EducationSchema:
    """Add a new education record to the database."""
    education = await EducationService.add_education(session, education_data)

    if not education:
        raise HTTPException(status_code=400, detail="Education could not be added.")
    return education

@router.delete("/{institution}", response_model=dict)
async def delete_education(
    institution: str,
    session: AsyncSession = Depends(get_db),
) -> dict:
    """Delete an education record from the database."""
    education = await EducationService.delete_education(session, institution)
    if not education:
        raise HTTPException(status_code=404, detail="Education not found.")
    return {"message": "Education deleted successfully."}