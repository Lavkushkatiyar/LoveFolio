from dataclasses import field

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.profile import Profile
from app.schemas.profile import ProfileUpdate

class ProfileService:
    @staticmethod
    async def get_profile(
        session: AsyncSession,
    ) -> Profile | None:
        result = await session.execute(
            select(Profile)
        )

        return result.scalar_one_or_none()


    @staticmethod
    async def update_profile(session:AsyncSession ,profile_data:ProfileUpdate)-> Profile|None:
        profile= await ProfileService.get_profile(session)
        if profile is None:
            return None
        updated_data = profile_data.model_dump(exclude_unset=True)
        for field,value in updated_data.items():
            setattr(profile , field,value) 

        await session.commit()
        await session.refresh(profile)

        return profile
