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
        skill = Skill(**skill_data.model_dump())
        session.add(skill)
        await session.commit()
        await session.refresh(skill)
        return skill

    @staticmethod
    async def delete_skill(session, skill_name: str) -> bool:
        """Delete a skill from the database."""
        result = await session.execute(select(Skill).where(Skill.name == skill_name))

        skill = result.scalars().first()

        if skill is None:
            return False

        await session.delete(skill)
        await session.commit()

        return True
