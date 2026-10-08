# ⚡ LoveFolio

A modern full-stack portfolio application built with **React, FastAPI, and PostgreSQL**.

LoveFolio separates the presentation layer from the backend API while keeping the project simple, maintainable, and deployment-ready.

---

## 🏗️ Architecture


                    ┌──────────────────┐
                    │   React + Vite   │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                          REST API
                             │
                             ▼
                    ┌──────────────────┐
                    │     FastAPI      │
                    │     Backend      │
                    └────────┬─────────┘
                             │
                        SQLAlchemy
                             │
                             ▼
                    ┌──────────────────┐
                    │    PostgreSQL    │
                    │     Supabase     │
                    └──────────────────┘


### Deployment

```text
GitHub
  │
  ├── React/Vite ──────► Vercel
  │
  └── FastAPI ─────────► Render
                           │
                           ▼
                        Supabase
                       PostgreSQL
```

---

## 🧰 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- ESLint

### Backend

- Python
- FastAPI
- SQLAlchemy 2.x
- Pydantic v2
- Alembic
- PostgreSQL
- asyncpg
- uv
- Ruff

### Infrastructure

- Supabase PostgreSQL
- Render
- Vercel
- Git & GitHub

---

## 📁 Project Structure

```text
loveFolio/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   │
│   ├── alembic/
│   ├── scripts/
│   ├── pyproject.toml
│   └── uv.lock
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔄 Backend Architecture

The backend follows a simple layered architecture:

```text
Request
   ↓
FastAPI Router
   ↓
Pydantic Schema
   ↓
Service Layer
   ↓
SQLAlchemy
   ↓
PostgreSQL
```

### Responsibilities

**Router**

Handles HTTP requests, response models, and dependency injection.

**Schema**

Defines and validates API input/output using Pydantic.

**Service**

Contains application and database operations instead of putting business logic directly inside routes.

**Model**

Defines the database structure using SQLAlchemy ORM.

**Alembic**

Tracks and applies database schema migrations.

---

## 🗄️ Database

PostgreSQL is used as the production database through Supabase.

The application uses:

- SQLAlchemy 2.x
- Async database sessions
- Alembic migrations
- PostgreSQL in production
- SQLite for local development

Database schema changes are managed through Alembic rather than manually modifying the production database.

---

## 🔐 Configuration

Environment-specific configuration is kept outside the source code.

Example:

```env
DATABASE_URL=postgresql+asyncpg://...
```

Frontend environment variables should also be stored in environment configuration rather than committed to Git.

> Never commit `.env` files, database credentials, API keys, or other secrets.

---

## 🌱 Database Seeding

Initial portfolio data can be inserted using the seed script:

```bash
cd backend
uv run python -m scripts.seed
```

The seed initializes the portfolio data including:

- Profile
- Skills
- Experience
- Education
- Projects

The seed script is intended for development/bootstrap purposes rather than normal production updates.

---

## 🧱 Database Migrations

Create a migration after changing SQLAlchemy models:

```bash
cd backend

uv run alembic revision --autogenerate -m "describe change"
```

Apply migrations:

```bash
uv run alembic upgrade head
```

Rollback the latest migration:

```bash
uv run alembic downgrade -1
```

---

## 🚀 Local Development

### Backend

```bash
cd backend
uv sync
```

Run the API:

```bash
uv run uvicorn app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

### Frontend

From the repository root:

```bash
npm install
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🧪 Validation & Code Quality

The backend uses Ruff for linting and formatting.

```bash
cd backend

uv run ruff check .
uv run ruff format --check .
```

The frontend uses ESLint:

```bash
npm run lint
```

The API also uses Pydantic schemas to validate incoming and outgoing data at the application boundary.

---

## 🔌 API Resources

The backend currently exposes resources for:

| Resource | Operations |
|----------|------------|
| Profile | Get, Update |
| Skills | Create, Read, Delete |
| Experience | Create, Read, Delete |
| Education | Create, Read, Delete |
| Projects | Create, Read, Delete |

API documentation is automatically generated by FastAPI.

---

## 📦 Production Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite |
| Backend | FastAPI |
| ORM | SQLAlchemy |
| Validation | Pydantic |
| Migrations | Alembic |
| Database | PostgreSQL |
| Database Hosting | Supabase |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 🎯 Engineering Principles

LoveFolio follows a few simple principles:

- Keep API routes thin.
- Keep database logic inside the service layer.
- Validate external data with Pydantic.
- Keep database schema changes version-controlled with Alembic.
- Keep secrets outside the repository.
- Separate frontend and backend responsibilities.
- Prefer simple architecture over unnecessary abstractions.
- Use environment-specific configuration for deployment.
- Keep the production database independent from local development data.

---

## 📄 License

This project is available for learning, experimentation, and portfolio purposes.
```
