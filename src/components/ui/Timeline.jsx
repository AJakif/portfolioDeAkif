import './Timeline.css';

/**
 * Timeline — events in order, on a vertical rail with diamond markers.
 * Used for work experience and for education.
 *
 * @param {object[]} items The events, in the order they should appear
 *                         (newest first on this site). Each item:
 *   id       : (required) a unique string
 *   title    : (required) the main line, e.g. the company or school
 *   when     : (optional) the dates, e.g. "Jan 2024 – Present"
 *   subtitle : (optional) the second line, e.g. the job title or degree
 *   text     : (optional) a short paragraph
 *   current  : (optional) true = filled diamond, for something still going on
 *   content  : (optional) any extra React elements to show under the text,
 *              such as a bullet list or a button
 *
 * Example:
 *   <Timeline items={[
 *     { id: 'a', when: '2024 – Present', title: 'Inument', subtitle: 'Engineer', current: true },
 *     { id: 'b', when: '2021 – 2024', title: 'Echologyx', subtitle: 'Engineer' },
 *   ]} />
 *
 * It renders an ordered list (<ol>) because the order carries meaning.
 */
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className={item.current ? 'timeline__item timeline__item--current' : 'timeline__item'}>
          {item.when && <span className="timeline__when">{item.when}</span>}
          <h3 className="timeline__title">{item.title}</h3>
          {item.subtitle && <p className="timeline__subtitle">{item.subtitle}</p>}
          {item.text && <p className="timeline__text">{item.text}</p>}
          {item.content && <div className="timeline__content">{item.content}</div>}
        </li>
      ))}
    </ol>
  );
}
