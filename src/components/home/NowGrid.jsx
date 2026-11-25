import { Link } from 'react-router-dom';

import './NowGrid.css';

/**
 * NowGrid — the selected project cards on the Home page.
 * Each card is a link that opens the matching project on the Work page.
 *
 * @param {object[]} items From `projects` in src/data/projects.js.
 */
export default function NowGrid({ items }) {
  return (
    <div className="now-grid">
      {items.map((item) => (
        <Link key={item.id} to={`/work/${item.id}`} className="now-grid__card">
          <small className="now-grid__tag">{item.homeLabel ?? item.short}</small>
          <h3 className="now-grid__title">{item.name}</h3>
          <p className="now-grid__text">{item.preview}</p>
        </Link>
      ))}
    </div>
  );
}
