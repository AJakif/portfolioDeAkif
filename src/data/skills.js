/**
 * skills.js — content for Background > Skills.
 *
 * Each object is one card.
 *   title  : the skill area
 *   items  : individual skills, shown as tags
 *   usedIn : where you used them (free text, shown after "Used in")
 *
 * To add a skill, add a string to `items`.
 * To add a whole new area, add a new object.
 */
export const skillGroups = [
  {
    title: 'Agents and orchestration',
    items: ['LangGraph', 'LangChain', 'Pydantic AI', 'MCP servers', 'Multi-agent design'],
    usedIn: 'Hire-a-Mind, ELX Chatbot, Querio',
  },
  {
    title: 'Retrieval and RAG',
    items: ['PGVector', 'ChromaDB', 'Sentence transformers', 'Hybrid BM25 and dense search', 'Citation grounding'],
    usedIn: 'Hire-a-Mind, ELX Chatbot',
  },
  {
    title: 'Evaluation and safety',
    items: ['LLM as judge', 'Validators and guardrails', 'Fail-closed safety gates', 'Audit trails', 'Refusal logic'],
    usedIn: 'Sireio, Querio, Pencil',
  },
  {
    title: 'Models and providers',
    items: ['Claude', 'GPT', 'Gemini', 'Ollama', 'Provider failover'],
    usedIn: 'ELX Chatbot, Querio, Sireio',
  },
  {
    title: 'Fine-tuning and on-device',
    items: ['LoRA', '4-bit quantization', 'llama.cpp', 'MediaPipe', 'Gemma'],
    usedIn: 'Pencil, my current research',
  },
  {
    title: 'Speech',
    items: ['Multilingual speech recognition', 'Speaker diarization'],
    usedIn: 'Hire-a-Mind',
  },
  {
    title: 'Backend and data',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'dbt', 'SQLite', 'Docker', 'nginx'],
    usedIn: 'every project',
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Laravel'],
    usedIn: 'Sireio, Querio',
  },
  {
    title: 'How I run a project',
    items: ['Requirements docs', 'Spec-first vertical slices', 'Decision logs', 'Test-driven development', 'Domain-driven design'],
    usedIn: 'everything I lead',
  },
];
