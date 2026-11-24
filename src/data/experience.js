/**
 * experience.js — jobs, talks, and volunteering for the Experience page.
 *
 * `jobs` is the work history, shown newest first.
 *
 *   id         : (required) unique, lowercase, no spaces
 *   period     : the dates, exactly as they should appear,
 *                e.g. 'Jan 2024 – Present' or 'Mar 2021 – Dec 2023'.
 *                Leave it as '' if unknown; the page then shows
 *                "Now" (current: true) or "Earlier" (current: false).
 *   current    : true = still working there (highlighted row)
 *   org        : company name
 *   title      : job title
 *   location   : (optional) e.g. 'Dhaka, Bangladesh' or 'Remote'
 *   summary    : the contribution shown in the row
 *   highlights : (optional) extra details shown on request
 *   projectId  : (optional) an id from projects.js; adds a link to the project
 *
 */
export const jobs = [
  {
    id: 'inument',
    period: 'Jan 2026 – Present',
    current: true,
    org: 'Inument Solution Limited',
    title: 'AI Engineer',
    summary: 'Built a voice interviewer that asks follow-up questions and saves a transcript for the hiring team.',
    highlights: [
      'I work across several AI projects, building features and helping run the web apps and cloud services behind them.',
      'Worked on sending borderline interview scores and potential disqualifiers to a person for review',
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
    summary: 'Made chatbot replies 10× faster by reusing answers and speeding up product search.',
    highlights: [
      'I led the AI work on ELX Chatbot from demo to a live app on Shopify, WooCommerce, and BigCommerce.',
      "Built a natural-language search extension for a client's store, routing site search through the RAG engine",
      'Auto-switched between OpenAI and Gemini during provider outages to keep the assistant up',
      'Built the service that looks up store information and gives it to the assistant before it replies',
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
    summary: 'Cut dashboard load times from over 5 minutes to under 30 seconds by tuning database queries.',
    highlights: [
      'Built and maintained Angular and .NET Core web apps with secure authentication and SSO',
      'Wrote SRS documentation and ran R&D on new client-side modules',
    ],
  },
  {
    id: 'aiub-ta',
    period: 'Jun 2021 – Aug 2021',
    current: false,
    org: 'American International University-Bangladesh',
    title: 'Teaching Assistant, Algorithms and AI',
    summary: 'Mentored more than 50 students in Python, object-oriented programming, and data structures through labs and one-on-one support.',
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
    text: 'About 70 attendees from more than 20 companies',
    host: 'Geeky Solutions',
  },
];

/**
 * Leadership and volunteering rows.
 *   note     : optional context for the organisation or event
 *   duration : dates or time in the role, shown on the right
 */
export const leadership = [
  {
    role: 'Mechanical Team Lead and Rover Operator',
    org: 'AIUB Robotic Crew',
    note: 'University Rover Challenge finals, Utah',
    duration: '2019',
  },
  { role: 'Team Lead', org: 'Esho Robot Banai, Channel i and CRID USA', duration: '2018' },
  { role: 'Regional President', org: 'LEO Club International', duration: '3 years 4 months' },
  { role: 'Patrol Leader', org: 'Bangladesh Scouts', duration: '4 years 9 months' },
  { role: 'Event Coordinator', org: 'AIUB Photography Club', duration: '4 years 7 months' },
  { role: 'Cadet Sergeant', org: 'Bangladesh National Cadet Corps', duration: '2 years 5 months' },
  {
    role: 'Volunteer and Official Photographer',
    org: 'AIUB CS Fest, Gaming Fest, ICCA 2020 and Cisco Networking Competition',
    duration: '2018 – 2020',
  },
];

export const memberships = [
  { org: 'AIUB Computer Club', duration: '4 years 1 month' },
  { org: 'IEEE AIUB Student Branch', duration: '2 years 9 months' },
];
