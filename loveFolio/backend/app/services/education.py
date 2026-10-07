from app.db.dependencies import get_db
from app.db.session import AsyncSession 
from app.schemas.education import Education
from sqlalchemy import select


class EducationService:
    @staticmethod
    async def get_all_education(session: AsyncSession) -> list[Education]:
        """Get all education records from the database."""
        result = await session.execute(select(Education).order_by(Education.period))
        return [education for education in result.scalars().all()]

    @staticmethod
    async def add_education(session: AsyncSession, education_data: Education) -> Education | None:
        """Add a new education record to the database."""
        education = Education(**education_data.model_dump())
        session.add(education)
        await session.commit()
        await session.refresh(education)
        return education

    @staticmethod
    async def delete_education(session: AsyncSession, institution: str) -> Education | None:
        """Delete an education record from the database."""
        result = await session.execute(
            select(Education).where(Education.institution == institution)
        )

        education = result.scalars().first()

        if education is None:
            return None

        await session.delete(education)
        await session.commit()

        return education