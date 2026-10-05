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
