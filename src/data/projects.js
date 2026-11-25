/**
 * projects.js — every project shown on the Work page.
 *
 * TO ADD A PROJECT: copy one object below, give it a new unique `id`,
 * and fill in the fields. It appears in the list automatically.
 * The order here is the order on the page.
 *
 * Fields:
 *   id       (required) unique, lowercase, no spaces. Used in the URL: /work/<id>
 *   name     (required) project name
 *   kind     (required) one-line description shown above the name
 *   short    (required) small label on the project card
 *   preview  (required) short description for the Home and Work cards
 *   homeLabel (optional) label for the Home card when it differs from short
 *   summary  (required) what it does, your contribution, and the outcome or status
 *   meta     (required) three quick facts: [{ label, value }]
 *   problem  (required) a short paragraph: what problem does it solve?
 *   built    (required) bullet list of what was built
 *   stack    (required) technologies, shown as tags
 *   flow     (optional) numbered steps: { title, steps: [{ name, note }] }
 *   idea     (optional) one highlighted sentence, the key idea
 *   links    (optional) buttons to outside pages: [{ label, url }]
 *   image    (optional) real project screenshot: { file, alt, width, height, caption }
 *   contextTitle, builtTitle, stackTitle (optional) headings tailored to the project
 */
export const projects = [
  {
    id: 'hire-a-mind',
    name: 'Hire-a-Mind',
    kind: 'AI tools for hiring teams',
    short: 'Inument',
    homeLabel: 'Inument, now',
    preview: 'I built the voice interviewer and worked on the AI and cloud services behind the hiring platform.',
    summary:
      'Hire-a-Mind helps recruiters screen CVs, run interviews, and compare candidates. I built the voice interviewer from scratch, worked on how interviews are scored, and helped set up the AWS infrastructure.',
    meta: [
      { label: 'Where', value: 'Inument Solution Limited' },
      { label: 'My role', value: 'AI Engineer' },
      { label: 'Status', value: 'Live, launched 2026' },
    ],
    problem:
      'It’s hard to compare candidates when every interviewer takes different notes. Hire-a-Mind gives the team a shared set of criteria and keeps the interview answers behind each score so a recruiter can review them.',
    flow: {
      title: 'How a hiring round works',
      steps: [
        { name: 'Beacon', note: 'Drafts the job description and weighted criteria' },
        { name: 'Sift', note: 'Scores and ranks every CV, with the lines behind each score' },
        { name: 'Scout', note: 'Text or voice AI interviews, on the candidate’s schedule' },
        { name: 'Panel', note: 'Uses the same criteria to score interviews on Google Meet' },
        { name: 'Laura', note: 'Puts finalists side by side for the hiring team' },
      ],
    },
    built: [
      'Built the voice interviewer to ask follow-up questions based on each answer and save the full transcript',
      'Used four LangGraph agents to score separate criteria, including capability and communication',
      'Used a 1–5 scoring guide with weights that vary by role',
      'A dual-vector RAG pipeline on PGVector and ChromaDB, with hybrid caching of user data and system prompts to cut token cost',
      'Multilingual speech recognition with speaker diarization, so every answer is tied to who said it',
      'An MCP server so teams can ask about evaluation data in plain language from a connected AI tool',
      'Model routing per plan tier and organisation, backed by cost-per-token research across providers',
      'AWS infrastructure (EC2, S3, CloudFront) in Terraform, AI observability in Signoz, and TDD with pytest',
    ],
    idea: 'I worked on sending borderline scores and potential disqualifiers to a human reviewer.',
    stack: [
      'LangGraph',
      'LangChain',
      'FastAPI',
      'PostgreSQL',
      'PGVector',
      'ChromaDB',
      'Speech recognition',
      'Speaker diarization',
      'MCP',
      'AWS',
      'Terraform',
      'Signoz',
      'pytest',
    ],
    links: [
      { label: 'Visit Hire-a-Mind', url: 'https://www.hireamind.ai/' },
      { label: 'Hire-a-Mind on Product Hunt', url: 'https://www.producthunt.com/products/hire-a-mind' },
    ],
  },

  {
    id: 'elx',
    name: 'ELX Chatbot',
    kind: 'AI sales assistant for online stores',
    short: 'Echologyx',
    homeLabel: 'Echologyx, 2023 – 2025',
    preview: 'I led the AI work from demo to launch. We made the chatbot’s replies 10× faster.',
    summary:
      'I led the AI work on ELX Chatbot from demo to a live app for Shopify, WooCommerce, and BigCommerce. We made replies 10× faster by reusing answers to common questions and speeding up how the app looks up products.',
    meta: [
      { label: 'Where', value: 'Echologyx Ltd' },
      { label: 'My role', value: 'Software Engineer, led core AI service development' },
      { label: 'Status', value: 'Live on Shopify, WooCommerce and BigCommerce' },
    ],
    problem:
      'Shoppers ask things a search box can’t answer. What fits my budget? Where’s my order? ELX answers using the store’s catalogue and support information, and hands the full chat to a person when the shopper needs more help.',
    flow: {
      title: 'What happens when a shopper asks',
      steps: [
        { name: 'Check intent', note: 'Product, FAQ, order or human?' },
        { name: 'Cache', note: 'Answer repeat questions instantly' },
        { name: 'Retrieve', note: 'Vector search over the live catalogue' },
        { name: 'Answer', note: 'Recommend, explain or track the order' },
        { name: 'Hand off', note: 'A person joins with the full chat' },
      ],
    },
    built: [
      'Built the AI service and the catalogue search that supplies product information before the assistant replies',
      'Added a search box for a client’s store so shoppers could describe what they wanted in their own words',
      'Set up automatic switching between OpenAI and Gemini so the assistant could keep working during an outage',
      'Compared model costs and switched between models to lower running costs',
      'Automated how we collected, cleaned, and checked client data',
    ],
    idea: 'Answer from the store’s real catalogue, and know when to hand over to a human.',
    stack: ['LangChain', 'FastAPI', 'GPT', 'Gemini', 'Ollama', 'Redis', 'MongoDB', 'Sentence transformers', 'Playwright'],
    links: [
      { label: 'Visit ELX Chatbot', url: 'https://www.elxchatbot.ai/' },
      { label: 'Shopify App Store listing', url: 'https://apps.shopify.com/elx-chatbot' },
    ],
  },

  // Sireio: commented out for now, will open it up in the future.
  // {
  //   id: 'sireio',
  //   name: 'Sireio',
  //   kind: 'Wellbeing app for expectant and new fathers',
  //   short: 'Co-founder and CTO',
  //   meta: [
  //     { label: 'Where', value: 'Sireio, UK market' },
  //     { label: 'My role', value: 'Co-founder and CTO' },
  //     { label: 'Status', value: 'Building the MVP' },
  //   ],
  //   problem:
  //     'Fathers get very little support of their own around pregnancy and birth. Sireio is preventative support for the father, built on research before code.',
  //   built: [
  //     "A theoretical framework that combines just-in-time adaptive interventions, Bandura's self-efficacy theory and attachment theory",
  //     'Five dimensions mapped to validated clinical instruments: Emotional Awareness, Partner Attunement, Practical Readiness, Identity Transition and Support Network Clarity',
  //     'A safety gate that screens what users write and fails closed if anything goes wrong',
  //     'An append-only audit trail, and deletion designed for GDPR from day one',
  //     'One shared safety prompt under every model call, versioned in code',
  //     'A human in the loop for decisions that affect a user',
  //   ],
  //   idea: 'If the safety check breaks, nothing gets through.',
  //   stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Vite', 'Claude API'],
  // },

  {
    id: 'querio',
    name: 'Querio',
    kind: 'Open-source data assistant',
    short: 'Open source',
    preview: 'Ask your database a question in plain English. Querio shows you the query it ran so you can check the answer.',
    summary:
      'I built Querio so people can ask a database a question in plain English, get an answer, and see the exact query behind it. Reviewers can mark queries they’ve checked so teammates know which ones have been verified.',
    contextTitle: 'Why I built it',
    meta: [
      { label: 'Where', value: 'Personal project, MIT license' },
      { label: 'My role', value: 'Creator' },
      { label: 'Status', value: 'Version 3 in development' },
    ],
    problem:
      'Two people can get different numbers from the same database by counting different things. I wanted the assumptions and the query to be easy to find, especially when an answer gets shared with someone who wasn’t there to ask the original question.',
    image: {
      file: 'querio-answer.png',
      alt: 'Querio showing an answer marked Unverified and the database query in its Show the work panel',
      width: 1280,
      height: 1250,
      caption: 'An early Querio answer with its verification status and the SQL query behind it.',
    },
    flow: {
      title: 'Four agents, one after another',
      steps: [
        { name: 'Planner', note: 'Works out what is being asked' },
        { name: 'SQL Generator', note: 'Writes the query' },
        { name: 'Validator', note: 'Checks it against guardrails' },
        { name: 'Aggregator', note: 'Builds the answer and chart' },
      ],
    },
    built: [
      'LangGraph orchestrating four Pydantic AI agents, each with its own model setting',
      'Bring your own API key, or run local models through Ollama',
      'Answers show the assumptions and the SQL that ran',
      'Verified queries carry the name of the person who verified them, with four trust states from Verified to Unverified',
    ],
    stack: ['LangGraph', 'Pydantic AI', 'dbt', 'React', 'Ollama', 'Anthropic', 'OpenAI'],
    links: [{ label: 'View on GitHub', url: 'https://github.com/AJakif/Querio' }],
  },

  {
    id: 'pencil',
    name: 'Pencil',
    kind: 'Research on writing style in Bangla',
    short: 'Research in progress',
    homeLabel: 'Research',
    preview: 'Can a small model on a phone write Bangla in one author’s voice?',
    summary:
      'Can a small model running offline on a phone write Bangla in one author’s style? I’m gathering writing samples with the authors’ consent and deciding how to test the results.',
    contextTitle: 'Why I’m testing this',
    builtTitle: 'What I’m testing',
    stackTitle: 'Tools I’m considering',
    meta: [
      { label: 'Where', value: 'Independent research' },
      { label: 'My role', value: 'Researcher and engineer' },
      { label: 'Status', value: 'Gathering writing samples' },
    ],
    problem:
      'I want to find out whether a phone can run a model small enough to work offline and still pick up the details that make a writer’s style recognizable. The writing comes from a private literary group, so keeping it on the device is part of the experiment.',
    flow: {
      title: 'Five questions I want to answer',
      steps: [
        { name: 'Can we tell the authors apart?' },
        { name: 'Does extra training help more than prompts alone?' },
        { name: 'How many samples does it take?' },
        { name: 'Does it still work after shrinking the model?' },
        { name: 'Can readers tell who wrote it?' },
      ],
    },
    built: [
      'Compare prompting with LoRA fine-tuning, a way to train a model without changing all of it',
      'See how the model handles short prompts and whether quality holds once it’s small enough to run on a phone',
      'Ask authors to judge samples without seeing who or what wrote them, then compare their scores with automated checks',
    ],
    idea: 'I’m setting the pass and fail criteria before running the experiment.',
    stack: ['LoRA', 'Gemma 3 4B', 'TigerLLM', 'llama.cpp', 'MediaPipe', 'SQLite'],
  },
];

/**
 * Find one project by its id.
 * Returns `undefined` when no project has that id, so always check the result.
 *
 * Example: getProjectById('querio').name  ->  'Querio'
 */
export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
