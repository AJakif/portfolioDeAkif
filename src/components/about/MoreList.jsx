import './MoreList.css';

/**
 * MoreList — the "More of me" cards at the bottom of the About page.
 * Laid out as a small bento grid: the first card is wide.
 *
 * @param {{ kana?: string, title: string, text: string }[]} items
 *        From `more` in src/data/about.js.
 */
export default function MoreList({ items }) {
  return (
    <ul className="more-list">
      {items.map((item, i) => (
        <li key={item.title} className="more-list__item">
          <div className="more-list__meta" aria-hidden="true">
            <span className="more-list__index">{String(i + 1).padStart(2, '0')}</span>
            {item.kana && <span className="more-list__kana">{item.kana}</span>}
          </div>
          <h3 className="more-list__title">{item.title}</h3>
          <p className="more-list__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
