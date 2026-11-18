/**
 * education.js — content for Background > Education.
 */

/**
 * The education timeline, shown in this order. Put the NEWEST FIRST.
 *
 *   id         : (required) unique, lowercase, no spaces
 *   period     : the years, e.g. '2016 – 2020'. Leave '' if unknown
 *                (the dates line is then simply not shown).
 *   name       : the school, college or university
 *   subject    : the degree or certificate, and the field of study,
 *                e.g. 'BSc in Computer Science and Engineering'
 *   current    : (optional) true = still studying there
 *   summary    : (optional) one or two sentences
 *   highlights : (optional) bullet points
 *
 * TODO: add the exact degree title and years for AIUB, then add
 *       college (HSC) and school (SSC) entries below it.
 */
export const schools = [
  {
    id: 'aiub',
    period: '',
    name: 'American International University-Bangladesh',
    subject: 'Data science',
    highlights: [
      'Reached the University Rover Challenge finals in Utah in 2019 with the AIUB Robotic Crew: 18th in the world, 4th in Asia',
      "Received Dr. Anwarul Abedin's Leadership Award for voluntary work and leadership",
      'Coordinated events for the Photography Club',
      'Member of the Computer Club and the IEEE Student Branch',
    ],
  },
];

/**
 * The research cards under the timeline.
 *   projectId : (optional) an id from projects.js; adds a button to that project
 */
export const research = [
  {
    title: 'Research interests',
    text: 'Evaluating LLM and agent systems, explainable answers, Bangla language modelling, small on-device models, and adaptive interventions in digital health.',
  },
  {
    title: 'Research in progress',
    text: 'Pencil is a study of Bangla authorship style on small on-device models, with pass and fail criteria set before each experiment.',
    projectId: 'pencil',
  },
  {
    title: 'Research behind Sireio',
    text: 'A framework that combines just-in-time adaptive interventions, self-efficacy theory and attachment theory, mapped to validated clinical instruments.',
  },
];
