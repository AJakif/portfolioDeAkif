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
 */
export const jobs = [
  {
    id: 'inument',
    period: 'Jan 2026 – Present',
    current: true,
    org: 'Inument Solution Limited',
    title: 'AI Engineer',
    summary:
      'I build the AI and the infrastructure behind Hire-a-Mind, a hiring intelligence platform that runs from job description to offer, with people making every final call.',
    highlights: [
      'Built the AI interviewer from scratch: smooth voice interviews with greetings, follow-up questions and saved transcripts',
      'Built the platform to meet compliance rules for AI in hiring: GDPR, the EU AI Act, NYC Local Law 144, EEOC guidance, SOC 2 and ISO 27001',
      'Built a four-agent LangGraph orchestrator for isolated, criteria-driven candidate scoring',
      'Built a production MCP server, so Claude, ChatGPT or Gemini can query evaluation data in plain language with no extra UI',
      'Architected a dual-vector RAG pipeline on PGVector and ChromaDB, with caching for user data and system prompts',
      'Engineered multilingual speech recognition with speaker diarization for multi-party interviews',
      'Researched cost per token across models and added per-tier, per-org model routing to cut LLM spend',
      'Co-designed the system and database; provisioned AWS (EC2, S3, CloudFront) with Terraform and shell tooling',
      'Set up AI observability with Signoz and practised TDD with pytest across agents and APIs',
      'Gathered requirements from stakeholders and presented the platform to enterprise clients',
    ],
    projectId: 'hire-a-mind',
  },
  // Sireio: commented out for now, will open it up in the future.
  // {
  //   id: 'sireio',
  //   period: '',
  //   current: true,
  //   org: 'Sireio',
  //   title: 'Co-founder and CTO',
  //   summary: 'I lead technology for a wellbeing app for expectant and new fathers in the UK.',
  //   highlights: [
  //     'Built the research foundation the product stands on',
  //     'Designed a fail-closed safety architecture with an append-only audit trail',
  //     'Wrote the product spec: requirements, user stories and API contracts',
  //     'Chose a lean MVP stack on FastAPI, PostgreSQL and React',
  //   ],
  //   projectId: 'sireio',
  // },
  {
    id: 'echologyx',
    period: 'May 2023 – Oct 2025',
    current: false,
    org: 'Echologyx Ltd',
    title: 'Software Engineer',
    summary:
      'I led end-to-end development of ELX Chatbot, an AI sales assistant for online stores that went from demo to a live product on Shopify, WooCommerce and BigCommerce.',
    highlights: [
      'Built the assistant on GPT, Gemini, LangChain, Ollama, Redis, FastAPI and MongoDB, with a self-built RAG system',
      "Built a natural-language search extension for a client's store, routing site search through the RAG engine",
      'Auto-switched between OpenAI and Gemini during provider outages to keep the assistant up',
      'Made responses 10 times faster with prompt engineering, caching, intent checks and tuned vector retrieval',
      'Ran cost-per-token research and dynamic model switching to cut LLM costs for the client',
      'Wrote web scrapers (BeautifulSoup, Playwright) and automated EDA pipelines for client data',
      'Ran requirement sessions with stakeholders and demoed the platform to clients',
    ],
    projectId: 'elx',
  },
  {
    id: 'spectrum',
    period: 'Nov 2021 – Apr 2023',
    current: false,
    org: 'Spectrum Engineering Consortium Ltd',
    title: 'Junior Developer',
    summary: 'My full stack foundation: responsive business web apps on Angular and .NET Core.',
    highlights: [
      'Built and maintained Angular and .NET Core web apps with secure authentication and SSO',
      'Tuned complex SQL queries, cutting dashboard load times from over 5 minutes to under 30 seconds',
      'Wrote SRS documentation and ran R&D on new client-side modules',
    ],
  },
  {
    id: 'aiub-ta',
    period: 'Jun 2021 – Aug 2021',
    current: false,
    org: 'American International University-Bangladesh',
    title: 'Teaching Assistant, Algorithms and AI',
    summary: 'I mentored more than 50 undergraduates in OOP, Python and data structures.',
    highlights: ['Ran lab sessions and gave one-on-one academic support'],
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
 *   joiner   : the small word between role and organisation ("at" or "of")
 *   duration : how long, shown on the right. Leave '' to show nothing there.
 */
export const leadership = [
  {
    role: 'Mechanical Team Lead and Rover Operator',
    joiner: 'at',
    org: 'AIUB Robotic Crew',
    duration: 'URC finals, Utah, 2019',
  },
  { role: 'Team Lead', joiner: 'at', org: 'Esho Robot Banai, Channel i and CRID USA', duration: '2018' },
  { role: 'Regional President', joiner: 'at', org: 'LEO Club International', duration: '3 yrs 4 mos' },
  { role: 'Patrol Leader', joiner: 'at', org: 'Bangladesh Scouts', duration: '4 yrs 9 mos' },
  { role: 'Event Coordinator', joiner: 'at', org: 'AIUB Photography Club', duration: '4 yrs 7 mos' },
  { role: 'Cadet Sergeant', joiner: 'at', org: 'Bangladesh National Cadet Corps', duration: '2 yrs 5 mos' },
  { role: 'Member', joiner: 'of', org: 'AIUB Computer Club', duration: '4 yrs 1 mo' },
  { role: 'Member', joiner: 'of', org: 'IEEE AIUB Student Branch', duration: '2 yrs 9 mos' },
  {
    role: 'Volunteer and Official Photographer',
    joiner: 'at',
    org: 'AIUB CS Fest, Gaming Fest, ICCA 2020 and Cisco Networking Competition',
    duration: '2018 – 2020',
  },
];
