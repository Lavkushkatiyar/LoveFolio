
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.experience import Experience
from app.schemas.experience import ExperienceResponse,ExperienceCreate


class ExperienceService:
    @staticmethod
    async def get_experiences(
        session: AsyncSession,
    ) -> list[ExperienceResponse]:
        result = await session.execute(
            select(Experience))
        return [ExperienceResponse.model_validate(experience) for experience in result.scalars().all()]
        

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