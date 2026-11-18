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
    items: ['LangGraph', 'LangChain', 'Pydantic AI', 'MCP servers', 'Multi-agent design', 'Function calling', 'Structured output'],
    usedIn: 'Hire-a-Mind, ELX Chatbot, Querio',
  },
  {
    title: 'Full stack web',
    items: ['React', 'TypeScript', 'Angular', '.NET Core', 'C#', 'Next.js', 'Vite', 'Tailwind', 'SSO and auth'],
    usedIn: 'Spectrum Engineering, Hire-a-Mind, Querio',
  },
  {
    title: 'Retrieval and RAG',
    items: ['PGVector', 'ChromaDB', 'Sentence transformers', 'Hybrid vector search', 'Semantic caching', 'Citation grounding'],
    usedIn: 'Hire-a-Mind, ELX Chatbot',
  },
  {
    title: 'Backend and APIs',
    items: ['Python', 'FastAPI', 'Flask', 'Pydantic', 'Celery', 'SQLAlchemy', 'REST APIs'],
    usedIn: 'every project',
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MS SQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'dbt', 'Query tuning'],
    usedIn: 'Spectrum Engineering, ELX Chatbot, Hire-a-Mind, Querio',
  },
  {
    title: 'Cloud and DevOps',
    items: ['AWS EC2, ECS, S3, CloudFront', 'Terraform', 'Docker', 'CI/CD', 'nginx', 'Shell scripting', 'Git'],
    usedIn: 'Hire-a-Mind, ELX Chatbot',
  },
  {
    title: 'Models, cost and observability',
    items: ['GPT', 'Claude', 'Gemini', 'Ollama', 'Provider failover', 'Model routing', 'Cost-per-token research', 'Signoz', 'LLM tracing'],
    usedIn: 'Hire-a-Mind, ELX Chatbot, Querio',
  },
  {
    title: 'Evaluation, safety and compliance',
    items: ['LLM as judge', 'BARS rubrics', 'Validators and guardrails', 'Hallucination mitigation', 'Human in the loop', 'Audit trails', 'GDPR', 'EU AI Act', 'NYC Local Law 144', 'EEOC guidance', 'SOC 2', 'ISO 27001'],
    usedIn: 'Hire-a-Mind, Querio, Pencil',
  },
  {
    title: 'Speech',
    items: ['Voice AI interviewer', 'Multilingual speech recognition', 'Speaker diarization'],
    usedIn: 'Hire-a-Mind',
  },
  {
    title: 'Fine-tuning and on-device',
    items: ['LoRA', '4-bit quantization', 'llama.cpp', 'MediaPipe', 'Gemma', 'PyTorch', 'TensorFlow', 'Hugging Face'],
    usedIn: 'Pencil, my current research',
  },
  {
    title: 'Data engineering',
    items: ['BeautifulSoup', 'Playwright', 'Pandas', 'NumPy', 'EDA', 'Data visualization'],
    usedIn: 'ELX Chatbot, client data pipelines',
  },
  {
    title: 'How I run a project',
    items: ['Requirements and SRS docs', 'Spec-first vertical slices', 'Decision logs', 'TDD with pytest', 'Stakeholder demos'],
    usedIn: 'everything I lead',
  },
];
