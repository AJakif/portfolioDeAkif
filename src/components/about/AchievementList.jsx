import './AchievementList.css';

/**
 * AchievementList — the milestone cards on the About page.
 *
 * @param {{ badge: string, title: string, text: string }[]} items
 *        From `achievements` in src/data/about.js.
 *        `badge` is the 1 to 3 characters shown in the small square.
 */
export default function AchievementList({ items }) {
  return (
    <ul className="achievement-list">
      {items.map((item) => (
        <li key={item.title} className="achievement-list__item">
          <span className="achievement-list__badge" aria-hidden="true">
            {item.badge}
          </span>
          <div>
            <b className="achievement-list__title">{item.title}</b>
            <span className="achievement-list__text">{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
