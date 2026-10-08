import asyncio

from sqlalchemy import delete

from app.db.session import async_session_factory
from app.models.education import Education
from app.models.experience import Experience
from app.models.profile import Profile
from app.models.project import Project
from app.models.skill import Skill

PROJECTS_DATA = [
    {
        "title": "Financial Record Management System",
        "category": "Backend / Web Application",
        "date": "April 2026 - May 2026",
        "summary": (
            "A backend-focused financial record management application "
            "for organizing financial records, categories, and dashboard analytics."
        ),
        "bullet_intro": (
            "Built a modular REST API for managing financial records "
            "with secure authentication and relational data modeling."
        ),
        "bullets": [
            "Developed RESTful APIs for managing financial records, categories, and dashboard analytics.",
            "Implemented JWT authentication and role-based access control (RBAC).",
            "Designed relational PostgreSQL schemas using Prisma ORM.",
            "Built modular APIs with request validation and centralized error handling.",
        ],
        "demo_url": None,
        "github_url": "https://github.com/Lavkushkatiyar/Finance-Data-Processing",
        "image_url": "/projects/financial-record-management.webp",
        "featured_image_url": "/projects/financial-record-management.webp",
        "tech_stack": [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Zod",
        ],
        "more_tech_count": "2",
        "highlights": [
            "Secure JWT authentication and role-based access control.",
            "Relational database design with PostgreSQL and Prisma.",
            "Modular API architecture with centralized error handling.",
            "Request validation using Zod.",
        ],
        "completedModules": [
            "Authentication",
            "Financial Records",
            "Categories",
            "Dashboard Analytics",
            "Role-Based Access Control",
        ],
    },
]



SKILLS_DATA = [
    {"name": "Python", "iconKey": "python", "category": "Backend"},
    {"name": "FastAPI", "iconKey": "fastapi", "category": "Backend"},
    {"name": "SQLAlchemy", "iconKey": "sqlalchemy", "category": "Backend"},
    {"name": "Pydantic", "iconKey": "pydantic", "category": "Backend"},
    {"name": "REST APIs", "iconKey": "rest-api", "category": "Backend"},
    {"name": "JWT", "iconKey": "jwt", "category": "Backend"},
    {"name": "PostgreSQL", "iconKey": "postgresql", "category": "Databases"},
    {"name": "Redis", "iconKey": "redis", "category": "Databases"},
    {"name": "Alembic", "iconKey": "alembic", "category": "Databases"},
    {"name": "Celery", "iconKey": "celery", "category": "Distributed Systems"},
    {"name": "LLM Integration", "iconKey": "llm", "category": "AI"},
    {"name": "RAG", "iconKey": "rag", "category": "AI"},
    {"name": "Ollama", "iconKey": "ollama", "category": "AI"},
    {"name": "HTML", "iconKey": "html5", "category": "Frontend"},
    {"name": "CSS", "iconKey": "css3", "category": "Frontend"},
    {"name": "JavaScript", "iconKey": "javascript", "category": "Frontend"},
    {"name": "React", "iconKey": "react", "category": "Frontend"},
    {"name": "Tailwind CSS", "iconKey": "tailwindcss", "category": "Frontend"},
    {"name": "Deno", "iconKey": "deno", "category": "Runtime"},
    {"name": "Node.js", "iconKey": "nodejs", "category": "Runtime"},
    {"name": "Docker", "iconKey": "docker", "category": "DevOps"},
    {"name": "Git", "iconKey": "git", "category": "Tools"},
]



PROFILE_DATA = {
    "name": "Lavkush",
    "title": "Backend Developer | AI & Web Applications",
    "subtitle": "Building reliable backends and AI-powered web applications with Python, FastAPI, PostgreSQL & React",
    "avatar_url": "https://example.com/avatar.png",
    "email": "worklavkush@gmail.com",
    "phone": "+91 7905837232",
    "location": "Bengaluru, India",
    "github": "https://github.com/Lavkushkatiyar",
    "linkedin": "https://www.linkedin.com/in/lavkush-katiyar",
    "verified_skills_count": len(SKILLS_DATA),
    "professional_projects": len(PROJECTS_DATA),
    "dsa_solved_count": "200+",

}



EXPERIENCE_DATA = [
    {
        "role": "STEP Intern",
        "company": "ThoughtWorks India",
        "period": "July 2025 - March 2026",
        "location": "India",
        "description": (
            "Early-career software engineering experience focused on "
            "backend fundamentals, Deno, HTTP, Unix tooling, and structured problem solving."
        ),
        "bullets": [
            "Built CLI utilities with Deno and JavaScript, focusing on modular code and clean abstractions.",
            "Worked with HTTP client-server interactions using curl and fetch to understand requests, responses, and API behavior.",
            "Used Unix command-line tools and shell scripting for file processing and workflow automation.",
            "Applied structured problem-solving techniques such as decomposition and 5W1H to break down ambiguous requirements.",
            "Strengthened software engineering fundamentals through readable code, focused functions, and modular design.",
        ],
    },
    {
        "role": "Trainee",
        "company": "Techpile Technology Pvt. Ltd.",
        "period": "July 2024 - September 2024",
        "location": "Lucknow, India",
        "description": (
            "Software development training focused on Python, Django, "
            "web development, backend logic, and database integration."
        ),
        "bullets": [
            "Gained hands-on experience with Python, Django, and web development fundamentals through guided training and projects.",
            "Worked on backend logic, database integration, and basic application workflows under mentorship.",
            "Strengthened problem-solving skills and understanding of software development best practices.",
        ],
    },
]


EDUCATION_DATA = [
    {
        "degree": "Bachelor of Computer Applications (BCA)",
        "institution": "University of Mysore",
        "period": "2025 - 2028",
        "location": "India",
        "grade": "8.5 CGPA",
        "description": (
            "Pursuing through distance learning, with a focus on "
            "computer applications and software development."
        ),
    },
    {
        "degree": "Diploma in Information Technology",
        "institution": "Government Polytechnic Lucknow",
        "period": "2022 - 2025",
        "location": "Lucknow, India",
        "grade": "A+",
        "description": (
            "Built a strong foundation in information technology, "
            "programming, databases, and software development."
        ),
    },
]


PROJECTS_DATA = [
    {
        "title": "Financial Record Management System",
        "category": "Backend / Web Application",
        "date": "April 2026 - May 2026",
        "summary": (
            "A backend-focused financial record management application "
            "for organizing financial records, categories, and dashboard analytics."
        ),
        "bullet_intro": (
            "Built a modular REST API for managing financial records "
            "with secure authentication and relational data modeling."
        ),
        "bullets": [
            "Developed RESTful APIs for managing financial records, categories, and dashboard analytics.",
            "Implemented JWT authentication and role-based access control (RBAC).",
            "Designed relational PostgreSQL schemas using Prisma ORM.",
            "Built modular APIs with request validation and centralized error handling.",
        ],
        "demo_url": None,
        "github_url": "https://github.com/Lavkushkatiyar/Finance-Data-Processing",
        "image_url": "/projects/financial-record-management.webp",
        "featured_image_url": "/projects/financial-record-management.webp",
        "tech_stack": [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Zod",
        ],
        "more_tech_count": "2",
        "highlights": [
            "Secure JWT authentication and role-based access control.",
            "Relational database design with PostgreSQL and Prisma.",
            "Modular API architecture with centralized error handling.",
            "Request validation using Zod.",
        ],
        "completedModules": [
            "Authentication",
            "Financial Records",
            "Categories",
            "Dashboard Analytics",
            "Role-Based Access Control",
        ],
    },
]

async def clear_database(session):
    print("Clearing existing portfolio data...")

    await session.execute(delete(Project))
    await session.execute(delete(Education))
    await session.execute(delete(Experience))
    await session.execute(delete(Skill))
    await session.execute(delete(Profile))

    await session.commit()

    print("Database cleared.")


async def seed_database():
    async with async_session_factory() as session:
        await clear_database(session)

        print("Seeding profile...")
        session.add(Profile(**PROFILE_DATA))

        print(f"Seeding {len(SKILLS_DATA)} skills...")
        session.add_all(
            Skill(**skill_data)
            for skill_data in SKILLS_DATA
        )

        print(f"Seeding {len(EXPERIENCE_DATA)} experiences...")
        session.add_all(
            Experience(**experience_data)
            for experience_data in EXPERIENCE_DATA
        )

        print(f"Seeding {len(EDUCATION_DATA)} education records...")
        session.add_all(
            Education(**education_data)
            for education_data in EDUCATION_DATA
        )

        print(f"Seeding {len(PROJECTS_DATA)} projects...")
        session.add_all(
            Project(
                **{
                    **project_data,
                    "completedModules": project_data["completedModules"],
                }
            )
            for project_data in PROJECTS_DATA
        )

        await session.commit()

        print("Seed completed successfully.")


if __name__ == "__main__":
    asyncio.run(seed_database())
