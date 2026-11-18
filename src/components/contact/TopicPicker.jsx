import './TopicPicker.css';

/**
 * TopicPicker — the row of "What's it about?" buttons on the Contact page.
 *
 * This is a "controlled" component: it does not remember the selection
 * itself. The parent (ContactPage) owns the state and passes it down.
 *
 * @param {{ label: string, subject: string }[]} topics   The choices.
 * @param {object}   selected  The currently selected topic object.
 * @param {function} onSelect  Called with a topic object when one is clicked.
 */
export default function TopicPicker({ topics, selected, onSelect }) {
  return (
    <div className="topic-picker">
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
