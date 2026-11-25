/**
 * contact.js — content for the Contact page.
 */

export const contact = {
  heading: 'Say hello.',
  intro: 'Want to talk about a role, ask about a project, or go on a photo walk? Send me a note.',

  // The clock on the page shows the current time in this time zone.
  // Use any IANA time zone name, for example 'Europe/London'.
  timeZone: 'Asia/Dhaka',
  timeZoneLabel: 'Dhaka, UTC+6',
};

/**
 * Topic buttons.
 *   label   : text on the button
 *   subject : the email subject line used when that topic is selected
 */
export const topics = [
  { label: 'A role', subject: 'Job opportunity' },
  { label: 'Research', subject: 'Research collaboration' },
  { label: 'A talk', subject: 'Speaking invitation' },
  { label: 'A project', subject: 'A question about your work' },
  { label: 'Photo or sketch collab', subject: 'Photography or sketch collaboration' },
  { label: 'Just saying hi', subject: 'Hello' },
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
