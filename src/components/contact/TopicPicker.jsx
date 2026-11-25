import './TopicPicker.css';

/**
 * TopicPicker — optional email subjects on the Contact page.
 *
 * This is a "controlled" component: it does not remember the selection
 * itself. The parent (ContactPage) owns the state and passes it down.
 *
 * @param {{ label: string, subject: string }[]} topics   The choices.
 * @param {object|null} selected The current topic or null for no subject.
 * @param {function} onSelect  Called with a topic object when one is clicked.
 */
export default function TopicPicker({ topics, selected, onSelect }) {
  return (
    <div className="topic-picker" role="group" aria-label="Email subject">
      <button
        type="button"
        className="topic-picker__button"
        aria-pressed={selected === null}
        onClick={() => onSelect(null)}
      >
        No subject
      </button>
      {topics.map((topic) => (
        <button
          key={topic.label}
          type="button"
          className="topic-picker__button"
          // aria-pressed tells screen readers which one is on,
          // and TopicPicker.css uses it to style the selected button.
          aria-pressed={topic === selected}
          onClick={() => onSelect(topic)}
        >
          {topic.label}
        </button>
      ))}
    </div>
  );
}
