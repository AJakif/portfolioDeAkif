/**
 * profile.js — who the site is about, plus all the text on the Home page.
 *
 * Change your name, email, links, hero text, headline numbers and the
 * "right now" cards here. No component code needs to change.
 */

export const profile = {
  name: 'Ahmed Jahin Akif',
  shortName: 'Akif', // shown in the top-left corner
  kana: 'アキフ', // "Akif" in katakana (decorative lettering)
  kanaInitial: 'ア', // first katakana character, used as the avatar
  title: 'GenAI full stack engineer',
  location: 'Dhaka, Bangladesh',
  email: 'akifahmedjahin@gmail.com',

  /** Social links. Used on the Contact page. */
  links: [
    { label: 'LinkedIn', display: 'linkedin.com/in/ajakif', url: 'https://www.linkedin.com/in/ajakif' },
    { label: 'GitHub', display: 'github.com/AJakif', url: 'https://github.com/AJakif' },
  ],
};

/**
 * Tooltip text for the Japanese lettering.
 * Each object is passed straight to <Tooltip> (src/components/ui/Tooltip.jsx):
 *   word       : shown large at the top of the card
 *   say        : how to pronounce it
 *   soundsLike : a plain-English sound
 *   meaning    : what it means
 *   label      : what a screen reader calls the word
 */
export const kanaGloss = {
  word: 'アキフ',
  say: 'a-ki-fu',
  soundsLike: 'ah-kee-foo',
  meaning: 'My name, Akif, written in katakana: the Japanese script used for foreign names.',
  label: 'Akif in Japanese',
};

/** The same, for the single character used as the avatar. */
export const kanaInitialGloss = {
  word: 'ア',
  say: 'a',
  soundsLike: 'ah',
  meaning: 'The first character of アキフ, my name in Japanese katakana.',
  label: 'The first letter of Akif in Japanese',
};

/** Text for the big opening section on the Home page. */
export const hero = {
  greeting: "Hi, I'm",

  // The typing animation cycles through these, in order.
  // The first one is what people see before the animation starts.
  roles: [
    'GenAI Full Stack Engineer',
    'AI Engineer at Inument',
    'Co-founder and CTO of Sireio',
    'Speaker on AI evaluation',
  ],

  intro:
    'I design and ship AI products end to end: multi-agent systems, RAG pipelines, speech and the evaluation behind them. Four years in, from first prototype to production.',

  // Buttons under the intro. `variant: 'hot'` makes the filled apricot button.
  actions: [
    { label: 'See my work', to: '/work', variant: 'hot' },
    { label: 'My background', to: '/background/experience' },
    { label: 'Contact me', to: '/contact' },
  ],
};

/** Words that scroll across the apricot tape on the Home page. */
export const homeTape = [
  'Multi-agent orchestration',
  'Retrieval',
  'Evaluation',
  'Speech',
  'LangGraph',
  'Pydantic AI',
  'FastAPI',
  'pgvector',
  'On-device models',
  'Safety gates',
];

/** The four headline numbers under the tape. */
export const facts = [
  { value: '4 yrs', label: 'building generative AI and full stack products' },
  { value: '10×', label: 'faster ELX Chatbot after caching and database tuning' },
  { value: '18th', label: 'in the world at the University Rover Challenge, 2019' },
  { value: '~70', label: 'people from 20+ companies at my talk on AI evaluation' },
];

/**
 * "What I'm on right now" cards.
 * `projectId` must match an `id` in src/data/projects.js;
 * clicking the card opens that project on the Work page.
 */
export const now = [
  {
    projectId: 'hire-a-mind',
    tag: 'Inument',
    title: 'Hire-a-Mind',
    text: 'AI engineer and technical owner of an interview intelligence platform.',
  },
  {
    projectId: 'elx',
    tag: 'Echologyx',
    title: 'ELX Chatbot',
    text: 'AI shopping assistant that grew from a demo into a live Shopify app.',
  },
  // Sireio: commented out for now, will open it up in the future.
  // {
  //   projectId: 'sireio',
  //   tag: 'Co-founder and CTO',
  //   title: 'Sireio',
  //   text: 'A wellbeing app for expectant and new fathers in the UK.',
  // },
  {
    projectId: 'querio',
    tag: 'Open source',
    title: 'Querio',
    text: 'A data assistant built so you can verify every answer it gives.',
  },
  {
    projectId: 'pencil',
    tag: 'Research',
    title: 'Pencil',
    text: "Can a small model on a phone write Bangla in one author's voice?",
  },
];
