/**
 * about.js — content for the About page.
 */

/**
 * The story, one string per paragraph.
 * The first paragraph is shown larger than the rest.
 */
export const story = [
  'I care less about whether a model can produce an answer and more about whether anyone can trust it.',
  "That's why I keep ending up in the same place on every project: evaluation, audit trails, safety gates, evidence you can click through. I gave a talk on it too, Building Scalable AI Evaluation Systems, at AI Adda for Senior Tech Professionals.",
  "I studied data science at AIUB in Dhaka and spent a lot of it outside the classroom. I went to Utah with the university's Mars rover team, ran a LEO Club region and coordinated events for the photography club.",
  "At Echologyx I built the AI behind ELX Chatbot, which grew from a demo into a product that stores install. At Inument I own the AI behind Hire-a-Mind. Alongside that I co-founded Sireio, where I'm CTO.",
  'I would rather be challenged than agreed with. Before I build, I write the spec, lock the big decisions and keep a log of why. Anime shaped my eye for design, this site included, and I do most of my coding at night.',
];

/** Rows on the profile card. Add or remove rows freely. */
export const profileRows = [
  { label: 'Base', value: 'Dhaka, Bangladesh' },
  { label: 'Day job', value: 'Inument Solution Limited' },
  { label: 'Startup', value: 'Sireio, co-founder and CTO' },
  { label: 'Experience', value: '4 years, hands-on' },
  { label: 'Specialities', value: 'Agent orchestration, retrieval, evaluation, speech' },
  { label: 'Studied', value: 'Data science, AIUB' },
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
    text: '18th in the world and 4th in Asia with the AIUB Robotic Crew.',
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
    text: 'ELX Chatbot went from a demo to a SaaS product on the Shopify App Store.',
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

/** "More of me" short notes. */
export const more = [
  {
    title: 'Also led',
    text: 'A patrol in Bangladesh Scouts, and served as Cadet Sergeant in the Bangladesh National Cadet Corps.',
  },
  {
    title: 'Writing',
    text: 'I write on LinkedIn about AI engineering, careers and what breaks in production.',
  },
  {
    title: 'How I use AI myself',
    text: 'I build my own AI skills for thinking: one interviews me one question at a time, another turns the conversation into a requirements doc.',
  },
];
