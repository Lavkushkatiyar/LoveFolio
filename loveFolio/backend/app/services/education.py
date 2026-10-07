from app.db.dependencies import get_db
from app.db.session import AsyncSession 
from app.models.education import Education
from app.schemas.education import EducationSchema
from sqlalchemy import select


class EducationService:
    @staticmethod
    async def get_all_education(session: AsyncSession) -> list[ EducationSchema]:
        """Get all education records from the database."""
        result = await session.execute(select(Education).order_by(Education.period))
        return [EducationSchema.model_validate(education) for education in result.scalars().all()]

    @staticmethod
    async def add_education(session: AsyncSession, education_data: EducationSchema) -> EducationSchema | None:
        """Add a new education record to the database."""
        education = Education(**education_data.model_dump())
        session.add(education)
        await session.commit()
        await session.refresh(education)
        return EducationSchema.model_validate(education)

    @staticmethod
    async def delete_education(session: AsyncSession, institution: str) -> EducationSchema | None:
        """Delete an education record from the database."""
        result = await session.execute(
            select(Education).where(Education.institution == institution)
        )

        education = result.scalars().first()

        if education is None:
            return None

        await session.delete(education)
        await session.commit()

        return EducationSchema.model_validate(education)