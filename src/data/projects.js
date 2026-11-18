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
    kind: 'Hiring intelligence platform, from job description to offer',
    short: 'Inument',
    meta: [
      { label: 'Where', value: 'Inument Solution Limited' },
      { label: 'My role', value: 'AI Engineer' },
      { label: 'Status', value: 'Live, launched 2026' },
    ],
    problem:
      "Hiring decisions still rest on interview notes, memory and gut feel, and recording tools stop at the transcript. Hire-a-Mind connects every step of hiring with evidence: it drafts the role, screens CVs, runs first-round AI interviews, scores human panels against the same criteria and puts finalists side by side. It's built for recruitment agencies, high-volume BPO teams and growing in-house teams.",
    flow: {
      title: 'One flow from role to offer',
      steps: [
        { name: 'Beacon', note: 'Drafts the job description and weighted criteria' },
        { name: 'Sift', note: 'Scores and ranks every CV, with the lines behind each score' },
        { name: 'Scout', note: 'Text or voice AI interviews, on the candidate’s schedule' },
        { name: 'Panel', note: 'Human interviews on Google Meet, scored on the same bar' },
        { name: 'Laura', note: 'Compares finalists into one decision record and offer' },
      ],
    },
    built: [
      'The AI interviewer, built from scratch: smooth voice interviews that greet the candidate, ask follow-up questions based on each answer, and save the full transcript',
      'Built to meet the compliance rules for AI : GDPR, the EU AI Act, NYC Local Law 144, EEOC guidance, SOC 2 and ISO 27001',
      'A four-agent LangGraph orchestrator that scores each criterion in isolation: Capability, Communication, Behavioral, and Potential and fit',
      'Scoring on a BARS 1 to 5 rubric, combined with role-specific weights and a confidence adjustment; borderline and knockout results go to a human reviewer',
      'A dual-vector RAG pipeline on PGVector and ChromaDB, with hybrid caching of user data and system prompts to cut token cost',
      'Multilingual speech recognition with speaker diarization, so every answer is tied to who said it',
      'A production MCP server that lets non-technical teams, or any AI agent, query evaluation data in plain language',
      'Model routing per plan tier and organisation, backed by cost-per-token research across providers',
      'AWS infrastructure (EC2, S3, CloudFront) in Terraform, AI observability in Signoz, and TDD with pytest',
    ],
    idea: 'AI assesses, people decide. A low score sends a candidate to a person, never to the reject pile.',
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
      { label: 'hireamind.ai', url: 'https://www.hireamind.ai/' },
      { label: 'Hire-a-Mind on Product Hunt', url: 'https://www.producthunt.com/products/hire-a-mind' },
    ],
  },

  {
    id: 'elx',
    name: 'ELX Chatbot',
    kind: 'AI sales assistant for online stores',
    short: 'Echologyx',
    meta: [
      { label: 'Where', value: 'Echologyx Ltd' },
      { label: 'My role', value: 'Software Engineer, led core AI service development' },
      { label: 'Status', value: 'Live on Shopify, WooCommerce and BigCommerce' },
    ],
    problem:
      "Most of a store's support questions repeat, and shoppers ask things a search box can't answer: what fits my budget, which one suits me, where is my order. ELX Chatbot learns the store's catalogue and FAQs, recommends products, tracks orders and hands the chat to a person with full context when it should. I led it from a demo to a plug-and-play product that stores install on Shopify, WooCommerce, BigCommerce and Adobe Commerce, in 80+ languages.",
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
      'The assistant end to end on GPT, Gemini, LangChain, Ollama, Redis, FastAPI and MongoDB, with a self-built RAG system',
      "A natural-language search extension for a client's store, routing site search through the RAG engine so shoppers can search in plain words",
      "An automatic switch between OpenAI and Gemini, so one provider's outage doesn't take the assistant down",
      'Responses 10 times faster through prompt engineering, caching, intent verification and tuned vector retrieval',
      'Cost-per-token research and dynamic model switching that lowered LLM costs for the client',
      'Web scrapers (BeautifulSoup, Playwright) and automated EDA pipelines to process and enrich client data',
    ],
    idea: 'Answer from the store’s real catalogue, and know when to hand over to a human.',
    stack: ['LangChain', 'FastAPI', 'GPT', 'Gemini', 'Ollama', 'Redis', 'MongoDB', 'Sentence transformers', 'Playwright'],
    links: [
      { label: 'elxchatbot.ai', url: 'https://www.elxchatbot.ai/' },
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
    links: [{ label: 'Querio on GitHub', url: 'https://github.com/AJakif/Querio' }],
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
