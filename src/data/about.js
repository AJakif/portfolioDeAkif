/**
 * about.js — content for the About page.
 */

/**
 * The story, one string per paragraph.
 * The first paragraph is shown larger than the rest.
 */
export const story = [
  'I got my start building business web apps. One dashboard took more than five minutes to load. I got it down to under 30 seconds by fixing the database queries.',
  'Before that, I led the mechanical team for the AIUB Robotic Crew and operated our Mars rover at the University Rover Challenge in Utah. Away from the keyboard, I shoot street and landscape photos and sketch in pencil. Anime shaped how I think about design, including this site.',
  'At Echologyx, I led the AI work on a shopping assistant from demo to launch. Part of that work was making sure it could keep answering questions when a model provider went down.',
  'Now at Inument, I work on AI features, web apps, and the cloud services behind them. I spend a lot of time thinking about how to check an AI answer. I gave a talk about that at AI Adda for Senior Tech Professionals.',
  'I studied computer science and data science at AIUB in Dhaka and helped teach algorithms and AI there. I still do most of my coding at night.',
];

/** Rows on the profile card. Add or remove rows freely. */
export const profileRows = [
  { label: 'Base', value: 'Dhaka, Bangladesh' },
  { label: 'Day job', value: 'AI Engineer, Inument Solution Limited' },
  { label: 'Experience', value: '5+ years in web development and AI' },
  { label: 'Studied', value: 'Computer science and data science at AIUB' },
  { label: 'Off screen', value: 'Street and landscape photography, pencil sketching' },
  { label: 'Speaks', value: 'Bengali, English, some Hindi' },
  { label: 'Active hours', value: 'Night' },
];

/** "Rules I build by" cards. */
export const rules = [
  { title: 'Show where an answer came from', text: 'In Querio, I show the database query with the answer so anyone reviewing it can see what got counted.' },
  { title: 'Stop if a check fails', text: 'If a required check fails, I stop that step so someone can look into it.' },
  {
    title: 'Decide what counts as a pass',
    text: 'I write down what a good result would look like before an experiment. It’s much easier to be honest about the results that way.',
  },
  { title: 'Find what’s slow first', text: 'When a page takes ages to load, I start by measuring where the time goes.' },
  { title: 'Write down what we’re building', text: 'I agree on what the first version needs to do and keep a short note on the big decisions.' },
  { title: 'Keep it simple', text: 'I look for a design I can explain to the person who’ll have to maintain it.' },
];

/**
 * Milestones shown on the About page.
 *   badge : 1 to 3 characters shown in the small square
 */
export const achievements = [
  {
    badge: '18',
    title: 'University Rover Challenge finals, Utah, 2019',
    text: '18th in the world and 4th in Asia with the AIUB Robotic Crew, among 36 finalists from 10 countries.',
  },
  {
    badge: 'GW',
    title: 'Guinness World Record',
    text: 'One of 1,186 riders in the longest single line of moving bicycles.',
  },
  {
    badge: 'LA',
    title: "Dr. Anwarul Abedin's Leadership Award",
    text: 'From AIUB, for voluntary work and leadership.',
  },
  {
    badge: '10×',
    title: 'Demo to product',
    text: 'ELX Chatbot went from a demo to a SaaS product on Shopify, WooCommerce and BigCommerce, answering 10 times faster.',
  },
  {
    badge: '70',
    title: 'Speaker, AI Adda for Senior Tech Professionals',
    text: 'Building Scalable AI Evaluation Systems, hosted by Geeky Solutions.',
  },
  {
    badge: 'RP',
    title: 'Regional President, LEO Club International',
    text: 'Blood donation camps, winter clothing drives and traffic assistance.',
  },
];

/**
 * Short notes about interests outside the project pages.
 *   kana : small katakana tag shown on the card (decorative)
 *   The first item is shown as a wide card.
 */
export const more = [
  {
    kana: 'フォト',
    title: 'Photography',
    text: 'I like shooting streets, landscapes, and everyday life. I also photographed university events and conferences. I share my photos on Instagram as @akfigram.',
  },
  {
    kana: 'スケッチ',
    title: 'Pencil sketching',
    text: 'Just pencil and paper. Sketching has changed how I frame my photos.',
  },
  {
    kana: 'リーダー',
    title: 'Scouts and cadets',
    text: 'I led a patrol in Bangladesh Scouts and served as a Cadet Sergeant in the Bangladesh National Cadet Corps.',
  },
  {
    kana: 'ライティング',
    title: 'Writing',
    text: 'I write on LinkedIn about AI engineering, careers and what breaks in production.',
  },
  {
    kana: 'ツール',
    title: 'How I use AI myself',
    text: 'When I’m working through an idea, I use a tool I made that asks me one question at a time. Then I turn the conversation into a short plan.',
  },
];
