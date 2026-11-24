import './Timeline.css';

/**
 * Timeline — work and education records in newest-first order.
 *
 * @param {object[]} items The events, in the order they should appear
 *                         (newest first on this site). Each item:
 *   id       : (required) a unique string
 *   title    : (required) the main line, e.g. the job title or degree
 *   when     : (optional) the dates, e.g. "Jan 2024 – Present"
 *   subtitle : (optional) the company or school
 *   current  : (optional) highlight an ongoing record
 *   featured : (optional) highlight a record that has ended
 *   text     : (optional) a short paragraph
 *   content  : (optional) facts, details, or project links
 */
export default function Timeline({ label, items }) {
  return (
    <ol className="timeline" role="list" aria-label={label}>
      {items.map((item) => (
        <li key={item.id} className={item.current || item.featured ? 'timeline__item timeline__item--featured' : 'timeline__item'}>
          <div>
            <h2 className="timeline__title" id={`timeline-${item.id}`}>{item.title}</h2>
            {item.subtitle && <p className="timeline__subtitle">{item.subtitle}</p>}
            {item.when && <p className="timeline__when">{item.when}</p>}
          </div>
          {(item.text || item.content) && (
            <div>
              {item.text && <p className="timeline__text">{item.text}</p>}
              {item.content}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export function TimelineDetails({ id, items, label = 'More details', hideLabel = 'Hide details' }) {
  return (
    <details className="timeline__details">
      <summary aria-describedby={`timeline-${id}`}>
        <span className="timeline__details-show">{label}</span>
        <span className="timeline__details-hide">{hideLabel}</span>
      </summary>
      <ul role="list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </details>
  );
}
