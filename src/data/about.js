/**
 * about.js — content for the About page.
 */

/**
 * The story, one string per paragraph.
 * The first paragraph is shown larger than the rest.
 */
export const story = [
  "I'm a full stack engineer who ended up building AI, and I think that order matters.",
  'I started on the load-bearing parts of software. At Spectrum Engineering Consortium I built Angular and .NET Core apps with secure sign-in and SSO, and learned how much a slow query costs when I took a dashboard from over five minutes to under thirty seconds.',
  "At Echologyx I led ELX Chatbot from a demo to an AI sales assistant that stores install on Shopify, WooCommerce and BigCommerce. That meant RAG and model failover, but also caching, scrapers, client demos and an API that stays up when a provider goes down.",
  "Now at Inument I build the AI and the infrastructure behind Hire-a-Mind: LangGraph agents that score interviews, speech recognition, an MCP server, model routing and the AWS underneath, all in Terraform. Across all of it I care about one question: can anyone trust the answer? I gave a talk on that, Building Scalable AI Evaluation Systems, at AI Adda for Senior Tech Professionals.",
  "I studied computer science with a data science major at AIUB in Dhaka, taught algorithms and AI as a TA, and went to Utah as mechanical team lead and rover operator for the AIUB Robotic Crew's Mars rover. Before I build, I write the spec and keep a log of why. Off screen I shoot street and landscape photography and sketch in pencil. Anime shaped my eye for design, this site included, and I do most of my coding at night.",
];

/** Rows on the profile card. Add or remove rows freely. */
export const profileRows = [
  { label: 'Base', value: 'Dhaka, Bangladesh' },
  { label: 'Day job', value: 'AI Engineer, Inument Solution Limited' },
  { label: 'Experience', value: '5+ years, full stack to generative AI' },
  { label: 'AI', value: 'Multi-agent systems, RAG, MCP, speech, evaluation' },
  { label: 'Software', value: 'Python, React, Angular, .NET Core, FastAPI, SQL, AWS' },
  { label: 'Studied', value: 'BSc CSE (data science major), AIUB' },
  { label: 'Off screen', value: 'Street and landscape photography, pencil sketching' },
  { label: 'Speaks', value: 'Bengali, English, some Hindi' },
  { label: 'Active hours', value: 'Night' },
];

/** "Rules I build by" cards. */
export const rules = [
  { title: 'Trust is the product', text: "Generating an answer is no longer the hard part. Showing why it's right is." },
  { title: 'Fail closed', text: 'If a safety check breaks, nothing gets through. No exceptions.' },
  {
    title: 'Decide what failure looks like first',
    text: "I set thresholds and pass criteria before I run an experiment, so I can't talk myself into the result.",
  },
  { title: 'Diagnose before redesigning', text: 'A system that chokes on a small dataset has a leak, not a scaling problem.' },
  { title: 'Scope before building', text: 'A requirements doc and a decision log come before the first commit.' },
  { title: 'Lean and defensible', text: 'I pick the design I can justify over the one with the most features.' },
];

/**
 * "Unlocked along the way" achievements.
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
 * "More of me" short notes.
 *   kana : small katakana tag shown on the card (decorative)
 *   The first item is shown as a wide card.
 */
export const more = [
  {
    kana: 'フォト',
    title: 'Photography',
    text: 'Street, landscape and lifestyle. I was the official photographer of many major events in university and conferences, and I post my work on Instagram as @akfigram.',
  },
  {
    kana: 'スケッチ',
    title: 'Pencil sketching',
    text: 'Just pencil and paper. Sketching trained the same eye for line and composition that shapes my photos and this site.',
  },
  {
    kana: 'リーダー',
    title: 'Also led',
    text: 'A patrol in Bangladesh Scouts, and served as Cadet Sergeant in the Bangladesh National Cadet Corps.',
  },
  {
    kana: 'ライティング',
    title: 'Writing',
    text: 'I write on LinkedIn about AI engineering, careers and what breaks in production.',
  },
  {
    kana: 'ツール',
    title: 'How I use AI myself',
    text: 'I build my own AI skills for thinking: one interviews me one question at a time, another turns the conversation into a requirements doc.',
  },
];
