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
 *   short    (required) small label under the name in the project list
 *   meta     (required) three quick facts: [{ label, value }]
 *   problem  (required) a short paragraph: what problem does it solve?
 *   built    (required) bullet list of what was built
 *   stack    (required) technologies, shown as tags
 *   flow     (optional) numbered steps: { title, steps: [{ name, note }] }
 *   idea     (optional) one highlighted sentence, the key idea
 *   links    (optional) buttons to outside pages: [{ label, url }]
 */
export const projects = [
  {
    id: 'hire-a-mind',
    name: 'Hire-a-Mind',
    kind: 'Interview intelligence platform',
    short: 'Inument',
    meta: [
      { label: 'Where', value: 'Inument Solution Limited' },
      { label: 'My role', value: 'AI Engineer and Technical Owner' },
      { label: 'Status', value: 'Live product' },
    ],
    problem:
      'After interviews, hiring teams need to go back over what was actually said and compare candidates fairly. Hire-a-Mind turns interviews into evidence a team can review in minutes.',
    built: [
      'A four-agent orchestrator built on LangGraph',
      'A dual-vector RAG pipeline across PGVector and ChromaDB',
      'Multilingual speech recognition with speaker diarization, so the system knows who said what',
      'An MCP server',
    ],
    idea: 'Every recommendation points back to interview evidence, with reasoning you can read and an audit trail. People make the final call.',
    stack: ['LangGraph', 'PGVector', 'ChromaDB', 'Speech recognition', 'Speaker diarization', 'MCP'],
    links: [{ label: 'Hire-a-Mind on Product Hunt', url: 'https://www.producthunt.com/products/hire-a-mind' }],
  },

  {
    id: 'elx',
    name: 'ELX Chatbot',
    kind: 'AI shopping assistant for online stores',
    short: 'Echologyx',
    meta: [
      { label: 'Where', value: 'Echologyx Ltd' },
      { label: 'My role', value: 'Software Engineer' },
      { label: 'Status', value: 'Live on the Shopify App Store' },
    ],
    problem:
      "Shoppers ask things a search box can't answer: what fits my budget, which one suits me, where is my order. ELX Chatbot answers from the store's real catalogue. It started as a demo and became a SaaS product.",
    built: [
      'A RAG and agent system built in-house',
      'Sentence-transformer embeddings stored in pgvector',
      'LangChain and LangGraph behind a FastAPI service',
      "Failover across GPT, Claude and Gemini, so one provider's outage doesn't take the assistant down",
      'Caching and database optimization that made it 10 times faster',
    ],
    stack: ['LangChain', 'LangGraph', 'FastAPI', 'pgvector', 'Sentence transformers', 'GPT', 'Claude', 'Gemini'],
    links: [
      { label: 'elxchatbot.ai', url: 'https://elxchatbot.ai/' },
      { label: 'Shopify App Store listing', url: 'https://apps.shopify.com/elx-chatbot' },
    ],
  },

  {
    id: 'sireio',
    name: 'Sireio',
    kind: 'Wellbeing app for expectant and new fathers',
    short: 'Co-founder and CTO',
    meta: [
      { label: 'Where', value: 'Sireio, UK market' },
      { label: 'My role', value: 'Co-founder and CTO' },
      { label: 'Status', value: 'Building the MVP' },
    ],
    problem:
      'Fathers get very little support of their own around pregnancy and birth. Sireio is preventative support for the father, built on research before code.',
    built: [
      "A theoretical framework that combines just-in-time adaptive interventions, Bandura's self-efficacy theory and attachment theory",
      'Five dimensions mapped to validated clinical instruments: Emotional Awareness, Partner Attunement, Practical Readiness, Identity Transition and Support Network Clarity',
      'A safety gate that screens what users write and fails closed if anything goes wrong',
      'An append-only audit trail, and deletion designed for GDPR from day one',
      'One shared safety prompt under every model call, versioned in code',
      'A human in the loop for decisions that affect a user',
    ],
    idea: 'If the safety check breaks, nothing gets through.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Vite', 'Claude API'],
  },

  {
    id: 'querio',
    name: 'Querio',
    kind: 'Open-source data assistant',
    short: 'Open source',
    meta: [
      { label: 'Where', value: 'Personal project, Apache 2.0' },
      { label: 'My role', value: 'Creator' },
      { label: 'Status', value: 'Version 3 in development' },
    ],
    problem:
      "Two analysts bring two different numbers from the same data, and the person deciding can't check either. Querio lets anyone ask a question in plain language and see exactly how the answer was produced. It is self-hosted, so the data never leaves your own instance.",
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
      'Every answer shows its assumptions and the full SQL reasoning behind it',
      'Verified queries carry the name of the person who verified them, with four trust states from Verified to Unverified',
    ],
    idea: 'Generating SQL is no longer the hard problem. Trusting the answer is.',
    stack: ['LangGraph', 'Pydantic AI', 'dbt', 'React', 'Ollama', 'Anthropic', 'OpenAI'],
  },

  {
    id: 'pencil',
    name: 'Pencil',
    kind: 'Bangla persona writing research',
    short: 'Research',
    meta: [
      { label: 'Where', value: 'Independent research' },
      { label: 'My role', value: 'Researcher and engineer' },
      { label: 'Status', value: 'Preparing the corpus' },
    ],
    problem:
      'Can a small model that runs fully offline on a phone write Bangla in the voice of one specific author? The authors come from a private literary writing group and have given their consent. Privacy is the hard constraint, so nothing leaves the device.',
    flow: {
      title: 'Five hypotheses, each with pass and fail criteria set in advance',
      steps: [
        { name: 'Style is separable', note: 'Authors can be told apart' },
        { name: 'Fine-tuning beats prompting' },
        { name: 'There is enough data' },
        { name: 'It survives quantization', note: 'Quality holds at 4-bit' },
        { name: 'Indistinguishable', note: "Readers can't tell" },
      ],
    },
    built: [
      'LoRA fine-tuning of a small Bangla-capable model (Gemma 3 4B or TigerLLM), quantized to 4-bit and served with llama.cpp or MediaPipe',
      'Training pairs built by instruction backtranslation: real posts as outputs, synthetic prompts kept short to match how people will really prompt it',
      'Evaluation with an authorship classifier, a blind panel of the authors and an LLM judge',
    ],
    idea: 'Decide what counts as failure before you run the experiment.',
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
