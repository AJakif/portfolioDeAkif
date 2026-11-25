/**
 * profile.js — who the site is about, plus all the text on the Home page.
 *
 * Change your name, email, links, hero text and headline numbers here.
 */

export const profile = {
  name: 'Ahmed Jahin Akif',
  shortName: 'Akif', // shown in the top-left corner
  kana: 'アキフ', // "Akif" in katakana (decorative lettering)
  kanaInitial: 'ア', // first katakana character, used as the avatar
  title: 'AI & Full-Stack Engineer',
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
  meaning: 'This is how you write my name in katakana, a Japanese script often used for names from other languages.',
  label: 'アキフ, Akif in Japanese',
};

/** The same, for the single character used as the avatar. */
export const kanaInitialGloss = {
  word: 'ア',
  say: 'a',
  soundsLike: 'ah',
  meaning: 'The first character in the Japanese spelling of my name.',
  label: 'ア, the first character of Akif in Japanese',
};

/** Text for the big opening section on the Home page. */
export const hero = {
  greeting: "Hi, I'm",

  intro:
    'I started out building web apps. These days, I work on several AI projects at Inument. I build AI features, work on the apps people use, and help get them running in the cloud.',

  // Buttons under the intro. `variant: 'hot'` makes the filled apricot button.
  actions: [
    { label: 'See my work', to: '/work', variant: 'hot' },
    { label: 'Get in touch', to: '/contact' },
  ],
};

/** The words on the scrolling apricot strip below Selected work. */
export const homeTape = [
  'Multi-agent AI',
  'Voice AI',
  'Street photography',
  'React and .NET',
  'Pencil sketches',
  'Search and retrieval',
  'Mars rover crew',
  'AWS and Terraform',
  'FastAPI',
  'Late-night coding',
  'MCP servers',
  'Lifestyle photography',
  'Anime-inspired design',
  'PostgreSQL',
  'Guinness World Record cyclist',
  'AI research',
];

/**
 * Highlights below the selected projects. Short values fit the large type.
 */
export const facts = [
  { value: '5+ yrs', label: 'building web apps, backends, and AI tools' },
  { value: '50+', label: 'students I mentored while teaching algorithms and AI' },
  { value: '~70', label: 'people at my talk on how to test AI systems' },
  { value: '10×', label: 'faster replies after we tuned ELX Chatbot' },
];
