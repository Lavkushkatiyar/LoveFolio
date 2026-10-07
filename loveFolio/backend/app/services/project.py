from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.project import Project
from app.schemas.project import ProjectSchema


class ProjectService:
    @staticmethod
    async def get_all_projects(session: AsyncSession) -> list[ProjectSchema]:
        """Get all projects from the database."""
        result = await session.execute(select(Project).order_by(Project.date.desc()))
        projects = result.scalars().all()
        return [ProjectSchema.model_validate(project) for project in projects]

    @staticmethod
    async def add_project(
        session: AsyncSession, project_data: ProjectSchema
    ) -> ProjectSchema | None:
        """Add a new project to the database."""
        project = Project(**project_data.model_dump())
        session.add(project)
        await session.commit()
        await session.refresh(project)
        return ProjectSchema.model_validate(project)

    @staticmethod
    async def delete_project(session: AsyncSession, project_name: str) -> bool:
        """Delete a project from the database."""
        result = await session.execute(
            select(Project).where(Project.title == project_name)
        )

        project = result.scalars().first()

        if project is None:
            return False

        await session.delete(project)
        await session.commit()

        return True
