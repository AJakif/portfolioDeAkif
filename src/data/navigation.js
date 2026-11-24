/**
 * navigation.js — the menu entries.
 *
 * To add a menu item, add an object here AND a matching <Route> in src/App.jsx.
 *   label : text shown in the menu
 *   to    : the URL path it opens
 *   end   : true = only highlight on an exact match (needed for "/")
 */

/** Main menu (the floating pill at the top, or bottom on phones). */
export const mainNav = [
  { label: 'Home', to: '/', end: true },
  { label: 'Work', to: '/work' },
  { label: 'Experience', to: '/background' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

/** The three tabs inside the Background page. */
export const backgroundNav = [
  { label: 'Work history', to: '/background/experience' },
  { label: 'Skills', to: '/background/skills' },
  { label: 'Education', to: '/background/education' },
];
