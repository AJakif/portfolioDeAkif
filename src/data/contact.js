/**
 * contact.js — content for the Contact page.
 */

export const contact = {
  heading: 'Say hello.',
  intro: "Pick what it's about, then reach me whichever way suits you.",

  // The clock on the page shows the current time in this time zone.
  // Use any IANA time zone name, for example 'Europe/London'.
  timeZone: 'Asia/Dhaka',
  timeZoneLabel: 'Dhaka, UTC+6',
};

/**
 * Topic buttons.
 *   label   : text on the button
 *   subject : the email subject line used when that topic is selected
 * The first topic is selected when the page opens.
 */
export const topics = [
  { label: 'A role', subject: 'A role you might like' },
  { label: 'Research', subject: 'Research collaboration' },
  { label: 'A talk', subject: 'Speaking invitation' },
  { label: 'One of my projects', subject: 'About one of your projects' },
  { label: 'Photo or sketch collab', subject: 'Photography or sketch collaboration' },
  { label: 'Just hello', subject: 'Hello' },
];

/** Words that scroll across the tape at the bottom of the Contact page. */
export const contactTape = [
  'AI roles',
  'Full stack builds',
  'Photo walks',
  'Research',
  'Sketch collabs',
  'Talks',
  'Street and landscape shoots',
  'Hard evaluation problems',
  'Robotics chat',
  'Anime recommendations',
];
