/**
 * education.js — content for Experience > Education.
 */

/**
 * Education records, shown newest first.
 *
 *   id         : (required) unique, lowercase, no spaces
 *   period     : the years, e.g. '2016 – 2020'. Leave '' if unknown
 *                (the dates line is then simply not shown).
 *   name       : the school, college or university
 *   subject    : the degree or certificate
 *   field      : (optional) the field of study or major
 *   grade      : (optional) the grade, with its scale
 *   current    : (optional) true = still studying there
 *   featured   : (optional) highlight a completed record
 *   summary    : (optional) the highlight shown in the row
 *   highlights : (optional) bullet points
 */
export const schools = [
  {
    id: 'aiub',
    period: 'Jan 2017 – Nov 2021',
    name: 'American International University-Bangladesh',
    subject: 'BSc in Computer Science and Engineering',
    field: 'Data Science major',
    grade: 'CGPA 3.23 / 4.00',
    featured: true,
    summary: 'Received Dr. Anwarul Abedin’s Leadership Award for voluntary work and leadership.',
    highlights: [
      'Teaching Assistant for Algorithms and AI in my final year, mentoring 50+ students in OOP, Python and data structures',
      'Mechanical team lead, software crew member and rover operator for the AIUB Robotic Crew, reaching the 2019 University Rover Challenge finals in Utah: 18th in the world and 4th in Asia',
      'Led a team at Esho Robot Banai 2018, run by Channel i and CRID USA',
      'Coordinated events for the Photography Club',
      'Member of the Computer Club web development team and the IEEE Student Branch',
    ],
  },
  {
    id: 'hsc',
    period: '2014 – 2016',
    name: 'Birshreshtha Munshi Abdur Rouf Public College',
    subject: 'Higher Secondary Certificate',
    field: 'Science',
    grade: 'GPA 4.42 / 5.00',
    summary: 'Cadet Sergeant in the Bangladesh National Cadet Corps, Naval Wing.',
  },
  {
    id: 'ssc',
    period: '2004 – 2014',
    name: 'Dhanmondi Govt. Boys’ High School',
    subject: 'Secondary School Certificate',
    field: 'Science',
    grade: 'GPA 5.00 / 5.00',
    summary: 'Patrol Leader of the Horse Patrol in the school’s Bangladesh Scouts group.',
  },
];

/**
 * Research entries under the education records.
 *   projectId : (optional) an id from projects.js; adds a link to that project
 */
export const research = [
  {
    title: 'Research in progress',
    text: 'I’m testing whether a small AI model can learn someone’s Bangla writing style and run offline on a phone.',
    projectId: 'pencil',
  },
  {
    title: 'Research interests',
    text: 'Evaluating language models and AI agents, explaining AI answers, building language models for Bangla, running small models on devices, and adapting digital health tools to people’s needs.',
  },
  // Sireio: commented out for now, will open it up in the future.
  // {
  //   title: 'Research behind Sireio',
  //   text: 'A framework that combines just-in-time adaptive interventions, self-efficacy theory and attachment theory, mapped to validated clinical instruments.',
  // },
];
