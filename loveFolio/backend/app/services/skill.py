

from sqlalchemy import select

from app.models.skill import Skill
from app.schemas.skill import SkillResponse


class SkillService:
    @staticmethod
    async def get_all_skills(session) -> list[Skill]:
        """Get all skills from the database."""
        result = await session.execute(select(Skill).order_by(Skill.name))
        return result.scalars().all()

    @staticmethod
    async def add_skill(session, skill_data: SkillResponse) -> Skill | None:
        """Add a new skill to the database."""
        skill = Skill(name=skill_data.name,
            iconKey=skill_data.iconKey,
            category=skill_data.category,
        )
        session.add(skill)
        await session.commit()
        await session.refresh(skill)
        return skill