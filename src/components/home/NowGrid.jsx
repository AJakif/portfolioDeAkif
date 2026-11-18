import { Link } from 'react-router-dom';

import './NowGrid.css';

/**
 * NowGrid — the "What I'm on right now" cards on the Home page.
 * Each card is a link that opens the matching project on the Work page.
 *
 * @param {{ projectId: string, tag: string, title: string, text: string }[]} items
 *        From `now` in src/data/profile.js.
 */
export default function NowGrid({ items }) {
  return (
    <div className="now-grid">
      {items.map((item) => (
        <Link key={item.projectId} to={`/work/${item.projectId}`} className="now-grid__card">
          <small className="now-grid__tag">{item.tag}</small>
          <h3 className="now-grid__title">{item.title}</h3>
          <p className="now-grid__text">{item.text}</p>
        </Link>
      ))}
    </div>
  );
}
