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
  title: 'Generative AI & Full Stack Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'akifahmedjahin@gmail.com',

  /**
   * Social links. Used on the Contact page.
   *   icon : a logo name from src/components/ui/BrandIcon.jsx
   */
  links: [
    { label: 'LinkedIn', icon: 'linkedin', display: 'linkedin.com/in/ajakif', url: 'https://www.linkedin.com/in/ajakif' },
    { label: 'GitHub', icon: 'github', display: 'github.com/AJakif', url: 'https://github.com/AJakif' },
    {
      label: 'Instagram',
      icon: 'instagram',
      display: 'instagram.com/akfigram, my photography',
      url: 'https://www.instagram.com/akfigram/',
    },
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
  meaning: 'The first character of アキフ (a-ki-fu) , my name in Japanese katakana.',
  label: 'The first letter of Akif in Japanese',
};

/** Text for the big opening section on the Home page. */
export const hero = {
  greeting: "Hi, I'm",

  // The typing animation cycles through these, in order.
  // The first one is what people see before the animation starts.
  roles: [
    'Generative AI & Full Stack Engineer',
    'AI Engineer at Inument',
    'Builder of multi agent systems',
    'Builder of compliance ready AI products',
    'Photographer and sketch artist',
  ],

  intro:
    'I build software end to end, and lately that software thinks. Five years in, I have shipped enterprise web apps, an AI shopping assistant that went live in online stores, and now hiring intelligence built to meet compliance rules for AI . Database to UI, prompt to production.',

  // Buttons under the intro. `variant: 'hot'` makes the filled apricot button.
  actions: [
    { label: 'See my work', to: '/work', variant: 'hot' },
    { label: 'My background', to: '/background/experience' },
    { label: 'Contact me', to: '/contact' },
  ],
};

/** Words that scroll across the apricot tape on the Home page. */
export const homeTape = [
  'Multi agent systems',
  'Compliance ready AI products',
  'Street photographer',
  'React and .NET',
  'Pencil sketch artist',
  'RAG pipelines',
  'Mars rover crew',
  'AWS and Terraform',
  'FastAPI',
  'Night shift coder',
  'MCP servers',
  'Lifestyle shots',
  'Anime inspired design',
  'PostgreSQL',
  'Guinness World Record cyclist',
  'AI research',
];

/**
 * The four headline numbers under the tape. Keep `value` short: it is set
 * very large. These describe me, not one project's or one team's results.
 */
export const facts = [
  { value: '5+ yrs', label: 'building software, from web apps to multi agent AI' },
  { value: '50+', label: 'students I mentored as a teaching assistant in algorithms and AI' },
  { value: '~70', label: 'engineers from 20+ companies at my talk on AI evaluation' },
  { value: '3', label: 'production grade AI SaaS products I have worked on' },
]

/**
 * "Selected work" cards on the Home page.
 * `projectId` must match an `id` in src/data/projects.js;
 * clicking the card opens that project on the Work page.
 */
export const now = [
  {
    projectId: 'hire-a-mind',
    tag: 'Inument, now',
    title: 'Hire-a-Mind',
    text: 'Compliance ready hiring intelligence from job description to offer. I build the AI and infrastructure behind it, including the voice AI interviewer.',
  },
  {
    projectId: 'elx',
    tag: 'Echologyx, 2023 – 2025',
    title: 'ELX Chatbot',
    text: 'AI sales assistant I led from demo to a live app on Shopify, WooCommerce and BigCommerce.',
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
