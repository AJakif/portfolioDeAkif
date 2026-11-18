import './MoreList.css';

/**
 * MoreList — the short "More of me" notes at the bottom of the About page.
 *
 * @param {{ title: string, text: string }[]} items
 *        From `more` in src/data/about.js.
 */
export default function MoreList({ items }) {
  return (
    <dl className="more-list">
      {items.map((item) => (
        <div key={item.title}>
          <dt className="more-list__title">{item.title}</dt>
          <dd className="more-list__text">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
