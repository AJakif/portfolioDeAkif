import { NavLink } from 'react-router-dom';

import './SegmentedNav.css';

/**
 * SegmentedNav — the small tab switch on the Background page
 * (Experience / Skills / Education).
 *
 * @param {{ label: string, to: string }[]} items
 *        From `backgroundNav` in src/data/navigation.js.
 *
 * Like the main menu, it uses NavLink, which adds the class "active"
 * to the tab for the current URL.
 */
export default function SegmentedNav({ items }) {
  return (
    <nav className="segmented-nav" aria-label="Background sections">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className="segmented-nav__link">
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
