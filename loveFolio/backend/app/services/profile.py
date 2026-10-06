from dataclasses import field
from app.schemas.profile import ProfileUpdate
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.profile import Profile


async def get_profile(
    session: AsyncSession,
) -> Profile | None:
    result = await session.execute(
        select(Profile)
    )

    return result.scalar_one_or_none()


async def update_profile(session:AsyncSession ,profile_data:ProfileUpdate)-> Profile|None:
    profile= await get_profile(session)
    if profile is None:
        return None
    updated_data = profile_data.model_dump(exclude_unset=True)
    for feild,value in updated_data.items():
        setattr(profile , field,value)

    await session.commit()
    await session.refresh(profile)

    return profile
