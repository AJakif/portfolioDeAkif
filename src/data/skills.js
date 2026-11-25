/**
 * skills.js — skills grouped by the kind of work, with links to project examples.
 * Each project ID points to an entry in projects.js.
 */
export const skillGroups = [
  {
    title: 'AI workflows',
    items: ['LangGraph', 'LangChain', 'Pydantic AI', 'MCP', 'Tool calling', 'Structured output', 'Model switching'],
    projectIds: ['hire-a-mind', 'querio'],
  },
  {
    title: 'Web apps and APIs',
    items: ['React', 'TypeScript', 'Angular', '.NET Core', 'C#', 'Python', 'FastAPI', 'Authentication'],
    projectIds: ['hire-a-mind', 'elx', 'querio'],
  },
  {
    title: 'Data and search',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'dbt', 'pgvector', 'ChromaDB', 'Search and retrieval'],
    projectIds: ['elx', 'querio'],
  },
  {
    title: 'Cloud and DevOps',
    items: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Shell scripting', 'SigNoz', 'Cost tracking'],
    projectIds: ['hire-a-mind', 'elx'],
  },
  {
    title: 'Testing AI answers',
    items: ['Scoring guides', 'Query validation', 'Human review', 'Audit trails', 'Model evaluation', 'pytest'],
    projectIds: ['hire-a-mind', 'querio'],
  },
  {
    title: 'Speech and on-device AI',
    items: ['Speech recognition', 'Detecting who spoke', 'LoRA fine-tuning', '4-bit quantization', 'llama.cpp', 'MediaPipe'],
    projectIds: ['hire-a-mind', 'pencil'],
  },
];
