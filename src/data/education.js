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
 */
export const schools = [
  {
    id: 'aiub',
    period: 'Jan 2017 – Nov 2021',
    name: 'American International University-Bangladesh',
    subject: 'BSc in Computer Science and Engineering, major in Data Science · CGPA 3.23 / 4.00',
    summary:
      'Where both halves of my work started: software engineering on one side, data science and machine learning on the other.',
    highlights: [
      'Teaching Assistant for Algorithms and AI in my final year, mentoring 50+ students in OOP, Python and data structures',
      'Mechanical team lead, software crew member and rover operator for the AIUB Robotic Crew, reaching the 2019 University Rover Challenge finals in Utah: 18th in the world and 4th in Asia',
      'Led a team at Esho Robot Banai 2018, run by Channel i and CRID USA',
      "Received Dr. Anwarul Abedin's Leadership Award for voluntary work and leadership",
      'Coordinated events for the Photography Club',
      'Member of the Computer Club web development team and the IEEE Student Branch',
    ],
  },
  {
    id: 'hsc',
    period: '2014 – 2016',
    name: 'Birshreshtha Munshi Abdur Rouf Public College',
    subject: 'Higher Secondary Certificate (HSC), Science · GPA 4.42 / 5.00',
    highlights: ['Cadet Sergeant in the Bangladesh National Cadet Corps, Naval Wing'],
  },
  {
    id: 'ssc',
    period: '2004 – 2014',
    name: "Dhanmondi Govt. Boys' High School",
    subject: 'Secondary School Certificate (SSC), Science · GPA 5.00 / 5.00',
    highlights: ["Patrol Leader of the Horse Patrol in the school's Bangladesh Scouts group"],
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
  // Sireio: commented out for now, will open it up in the future.
  // {
  //   title: 'Research behind Sireio',
  //   text: 'A framework that combines just-in-time adaptive interventions, self-efficacy theory and attachment theory, mapped to validated clinical instruments.',
  // },
];
