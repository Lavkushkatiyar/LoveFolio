import { getProfile ,getSkills,getProjects,getEducation,getExperience } from "../api/portfolio";

export const PROFILE_DATA = await getProfile();


export const SKILLS_DATA = await getSkills();

export const EXPERIENCE_DATA = await getExperience();

export const EDUCATION_DATA = await getEducation();


export const PROJECTS_DATA = await getProjects();

export const SKILLS_DETAILS_MAP ={
  // Backend
  python: { subtitle: 'Scripting & Automation' },
  fastapi: { subtitle: 'Async REST APIs' },
  'rest-api': { subtitle: 'API Design' },
  pydantic: { subtitle: 'Validation & Schemas' },
  sqlalchemy: { subtitle: 'ORM & Database' },
  nodejs: { subtitle: 'JavaScript Runtime' },
  javascript: { subtitle: 'ES6+ Async' },
  deno: { subtitle: 'Secure Runtime' },
  jwt: { subtitle: 'Authentication' },

  // Frontend
  react: { subtitle: 'Hooks & State' },
  redux: { subtitle: 'Global State' },
  tailwindcss: { subtitle: 'Utility-First CSS' },
  html5: { subtitle: 'Semantic Web' },
  css3: { subtitle: 'Flexbox & Grid' },

  // AI
  llm: { subtitle: 'LLM Integration' },
  ollama: { subtitle: 'Local AI Models' },
  rag: { subtitle: 'Retrieval-Augmented Generation' },
  embeddings: { subtitle: 'Semantic Search' },
  'ai-evaluation': { subtitle: 'Quality & Accuracy' },

  // Databases
  postgresql: { subtitle: 'Relational Database' },
  redis: { subtitle: 'Caching & Data Store' },
  alembic: { subtitle: 'Database Migrations' },
  pgvector: { subtitle: 'Vector Similarity Search' },

  // DevOps
  docker: { subtitle: 'Containerization' },
  'github-actions': { subtitle: 'Workflow Automation' },
  cicd: { subtitle: 'Continuous Integration' },
  linux: { subtitle: 'Core OS' },

  // Distributed Systems
  celery: { subtitle: 'Background Tasks' },

  // Testing
  pytest: { subtitle: 'Automated Testing' },
  postman: { subtitle: 'API Testing' },
  bruno: { subtitle: 'API Testing' },

  // Tools
  git: { subtitle: 'Version Control' },
  github: { subtitle: 'Code Collaboration' },

  // Legacy keys (if older records still use these)
  http: { subtitle: 'Protocols' },
  css: { subtitle: 'Flexbox & Grid' },
  bootstrap: { subtitle: 'UI Framework' },
  html: { subtitle: 'Semantic Web' },
  rest: { subtitle: 'API Architecture' },
  js: { subtitle: 'ES6+ Async' },
  node: { subtitle: 'Runtime' },
  express: { subtitle: 'Middleware' },
};