import './TickList.css';

/**
 * TickList — a bullet list with apricot diamond markers.
 *
 * @param {string[]} items One string per bullet.
 *
 * Example: <TickList items={['Built X', 'Shipped Y']} />
 */
export default function TickList({ items }) {
  return (
    <ul className="tick-list">
      {items.map((item) => (
        <li key={item} className="tick-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
