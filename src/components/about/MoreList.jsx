import './MoreList.css';

/**
 * MoreList — the "More about me" cards at the bottom of the About page.
 * Laid out as a small bento grid: the first card is wide.
 *
 * @param {{ kana?: string, title: string, text: string }[]} items
 *        From `more` in src/data/about.js.
 */
export default function MoreList({ items }) {
  return (
    <ul className="more-list">
      {items.map((item) => (
        <li key={item.title} className="more-list__item">
          {item.kana && <span className="more-list__kana" lang="ja" aria-hidden="true">{item.kana}</span>}
          <h3 className="more-list__title">{item.title}</h3>
          <p className="more-list__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
