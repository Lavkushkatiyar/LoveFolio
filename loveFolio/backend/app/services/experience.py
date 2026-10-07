from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.experience import Experience
from app.schemas.experience import ExperienceCreate, ExperienceResponse


class ExperienceService:
    @staticmethod
    async def get_experiences(
        session: AsyncSession,
    ) -> list[ExperienceResponse]:
        result = await session.execute(select(Experience))
        return [
            ExperienceResponse.model_validate(experience)
            for experience in result.scalars().all()
        ]

    @staticmethod
    async def create_experience(
        session: AsyncSession,
        experience_data: ExperienceCreate,
    ) -> ExperienceResponse:
        new_experience = Experience(**experience_data.model_dump())
        session.add(new_experience)
        await session.commit()
        await session.refresh(new_experience)
        return ExperienceResponse.model_validate(new_experience)

    @staticmethod
    async def delete_experience(
        session: AsyncSession,
        experience_id: str,
    ) -> bool:
        result = await session.execute(
            select(Experience).where(Experience.id == experience_id)
        )
        experience = result.scalars().first()

        if experience is None:
            return False

        await session.delete(experience)
        await session.commit()
        return True
