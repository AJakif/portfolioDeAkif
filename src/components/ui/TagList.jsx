import './TagList.css';

/**
 * TagList — a row of small rounded labels (used for technologies and skills).
 *
 * @param {string[]} items The labels to show.
 *
 * Example: <TagList items={['React', 'FastAPI']} />
 */
export default function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item} className="tag-list__tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
