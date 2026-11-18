/**
 * experience.js — content for Background > Experience.
 *
 * `jobs` is the work timeline, shown in this order. Put the NEWEST FIRST.
 *
 *   id         : (required) unique, lowercase, no spaces
 *   period     : the dates, exactly as they should appear,
 *                e.g. 'Jan 2024 – Present' or 'Mar 2021 – Dec 2023'.
 *                Leave it as '' if unknown; the page then shows
 *                "Now" (current: true) or "Earlier" (current: false).
 *   current    : true = still working there (solid diamond on the timeline)
 *   org        : company name
 *   title      : job title
 *   location   : (optional) e.g. 'Dhaka, Bangladesh' or 'Remote'
 *   summary    : one or two sentences
 *   highlights : (optional) bullet points
 *   projectId  : (optional) an id from projects.js; adds an "Open the ... project" button
 *
 * TODO: fill in every `period`, and add any earlier jobs that are missing.
 */
export const jobs = [
  {
    id: 'inument',
    period: '',
    current: true,
    org: 'Inument Solution Limited',
    title: 'GenAI Full Stack Engineer',
    summary: "I'm the AI engineer and technical owner of Hire-a-Mind, the company's interview intelligence platform.",
    highlights: [
      'Built the four-agent LangGraph orchestrator at the core of the platform',
      'Built a dual-vector RAG pipeline on PGVector and ChromaDB',
      'Added multilingual speech recognition with speaker diarization',
      'Built its MCP server',
    ],
    projectId: 'hire-a-mind',
  },
  {
    id: 'sireio',
    period: '',
    current: true,
    org: 'Sireio',
    title: 'Co-founder and CTO',
    summary: 'I lead technology for a wellbeing app for expectant and new fathers in the UK.',
    highlights: [
      'Built the research foundation the product stands on',
      'Designed a fail-closed safety architecture with an append-only audit trail',
      'Wrote the product spec: requirements, user stories and API contracts',
      'Chose a lean MVP stack on FastAPI, PostgreSQL and React',
    ],
    projectId: 'sireio',
  },
  {
    id: 'echologyx',
    period: '',
    current: false,
    org: 'Echologyx Ltd',
    title: 'Software Engineer',
    summary: 'I built the AI behind ELX Chatbot, a shopping assistant that grew from a demo into a SaaS product.',
    highlights: [
      'Built the RAG and agent system in-house with LangChain, LangGraph and FastAPI',
      'Stored sentence-transformer embeddings in pgvector for product search',
      'Added failover across GPT, Claude and Gemini',
      'Made it 10 times faster through caching and database optimization',
    ],
    projectId: 'elx',
  },
];

/**
 * Talks and presentations.
 *   when : (optional) the date, e.g. 'Oct 2026'. Leave '' if unknown.
 */
export const talks = [
  {
    id: 'ai-adda',
    when: '',
    title: 'Building Scalable AI Evaluation Systems',
    event: 'AI Adda for Senior Tech Professionals',
    text: 'Presented to about 70 attendees from more than 20 companies. Geeky Solutions hosted the event.',
  },
];

/**
 * Leadership and volunteering rows.
 *   joiner : the small word between role and organisation ("at" or "of")
 */
export const leadership = [
  { role: 'Regional President', joiner: 'at', org: 'LEO Club International', duration: '3 yrs 4 mos' },
  { role: 'Patrol Leader', joiner: 'at', org: 'Bangladesh Scouts', duration: '4 yrs 9 mos' },
  { role: 'Event Coordinator', joiner: 'at', org: 'AIUB Photography Club', duration: '4 yrs 7 mos' },
  { role: 'Cadet Sergeant', joiner: 'at', org: 'Bangladesh National Cadet Corps', duration: '2 yrs 5 mos' },
  { role: 'Member', joiner: 'of', org: 'AIUB Computer Club', duration: '4 yrs 1 mo' },
  { role: 'Member', joiner: 'of', org: 'IEEE AIUB Student Branch', duration: '2 yrs 9 mos' },
];
