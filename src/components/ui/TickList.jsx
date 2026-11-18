import { useId, useState } from 'react';

import './TickList.css';

/**
 * TickList — a bullet list with apricot diamond markers.
 *
 * @param {string[]} items One string per bullet.
 * @param {number}   [limit] Optional. Show only this many bullets at first,
 *                   with a "Read more" text link that reveals the rest.
 *                   Leave it out to always show every bullet.
 *
 * Examples:
 *   <TickList items={['Built X', 'Shipped Y']} />
 *   <TickList items={longList} limit={3} />
 */
export default function TickList({ items, limit }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  // Only collapse when there is something to hide.
  const collapsible = Boolean(limit) && items.length > limit;
  const visible = collapsible && !expanded ? items.slice(0, limit) : items;
  const hiddenCount = items.length - limit;

  return (
    <>
      <ul className="tick-list" id={listId}>
        {visible.map((item) => (
          <li key={item} className="tick-list__item">
            {item}
          </li>
        ))}
      </ul>

      {collapsible && (
        // A plain text link, not a <Button>: it should read as part of the text.
        <button
          type="button"
          className="tick-list__toggle"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? 'Show less' : `Read more (+${hiddenCount})`}
        </button>
      )}
    </>
  );
}
