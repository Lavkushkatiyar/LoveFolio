import asyncio

from sqlalchemy import select

from app.db.session import async_session_factory
from app.models.profile import Profile


async def seed_profile() -> None:
    async with async_session_factory() as session:
        result = await session.execute(select(Profile))
        profile = result.scalar_one_or_none()
        print(profile)

        if profile is None:
            profile = Profile(
                name="Lavkush",
                title="Backend Engineer",
                subtitle=(
                    "I have earned many skills and built industry grade "
                    "projects using them. Explore my projects below"
                ),
                avatar_url="https://api.dicebear.com/7.x/bottts/svg?seed=Lavkush",
                email="worklavkush@gmail.com",
                phone="+91 7905837232",
                location="Bengaluru, Karnataka",
                github="https://github.com/LavkushKatiyar",
                linkedin="https://linkedin.com/in/Lavkush-Katiyar",
                verified_skills_count=37,
                professional_projects=6,
                dsa_solved_count="200+",
            )

            session.add(profile)
            await session.commit()


async def main() -> None:
    await seed_profile()


if __name__ == "__main__":
    asyncio.run(main())