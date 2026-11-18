import './LeadershipList.css';

/**
 * LeadershipList — the leadership and volunteering rows.
 *
 * @param {{ role: string, joiner: string, org: string, duration: string }[]} items
 *        From `leadership` in src/data/experience.js.
 *
 * Each row reads like: "Regional President at LEO Club International   3 yrs 4 mos"
 */
export default function LeadershipList({ items }) {
  return (
    <ul className="leadership-list">
      {items.map((item) => (
        <li key={`${item.role}-${item.org}`} className="leadership-list__row">
          <span>
            <b className="leadership-list__role">{item.role}</b>{' '}
            <span className="leadership-list__org">
              {item.joiner} {item.org}
            </span>
          </span>
          <span className="leadership-list__duration">{item.duration}</span>
        </li>
      ))}
    </ul>
  );
}
