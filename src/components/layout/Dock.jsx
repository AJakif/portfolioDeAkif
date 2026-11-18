import { NavLink } from 'react-router-dom';

import { mainNav } from '../../data/navigation.js';
import './Dock.css';

/**
 * Dock — the main menu (the rounded pill of links).
 *
 * The links come from `mainNav` in src/data/navigation.js.
 *
 * NavLink is React Router's link component. It automatically adds the
 * class "active" to the link of the page you are on, which Dock.css
 * uses to draw the apricot highlight.
 */
export default function Dock() {
  return (
    <nav className="dock" aria-label="Main menu">
      {mainNav.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.end} className="dock__link">
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
