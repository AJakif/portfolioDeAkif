import './LeadershipList.css';

export default function LeadershipList({ items, memberships }) {
  return (
    <section className="leadership" aria-labelledby="leadership-title">
      <h3 id="leadership-title" className="leadership__title">Leadership and volunteering</h3>
      <ul className="leadership-list" role="list">
        {items.map((item) => (
          <li key={`${item.role}-${item.org}`} className="leadership-list__row">
            <p className="leadership-list__role">{item.role}</p>
            <p className="leadership-list__org">
              {item.org}{' '}
              {item.note && <span className="leadership-list__note">{item.note}</span>}
            </p>
            {item.duration && <p className="leadership-list__duration">{item.duration}</p>}
          </li>
        ))}
      </ul>
      {memberships.length > 0 && (
        <div className="leadership__memberships">
          <h4>Memberships</h4>
          <ul role="list">
            {memberships.map(({ org, duration }) => (
              <li key={org}>{org}{' '}{duration && <span>{duration}</span>}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
