from fastapi import APIRouter, Depends, HTTPException
from app.api.dependencies import require_admin
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.dependencies import get_db
from app.schemas.project import ProjectSchema
from app.services.project import ProjectService

router = APIRouter(prefix="/projects", tags=["Projects"])


@router.get("/", response_model=list[ProjectSchema])
async def get_all_projects(session: AsyncSession = Depends(get_db)):
    """Get all projects from the database."""
    return await ProjectService.get_all_projects(session)


@router.post("/", dependencies=[Depends(require_admin)], response_model=ProjectSchema)
async def add_project(
    project_data: ProjectSchema,
    session: AsyncSession = Depends(get_db),
):
    """Add a new project to the database."""
    project = await ProjectService.add_project(session, project_data)
    if not project:
        raise HTTPException(status_code=400, detail="Project could not be added.")
    return project


@router.delete("/{project_name}", dependencies=[Depends(require_admin)], response_model=dict)
async def delete_project(
    project_name: str,
    session: AsyncSession = Depends(get_db),
):
    """Delete a project from the database."""
    success = await ProjectService.delete_project(session, project_name)
    if not success:
        raise HTTPException(status_code=404, detail="Project not found.")
    return {"message": "Project deleted successfully."}
