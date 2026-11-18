import './Quote.css';

/**
 * Quote — a recommendation in someone else's words, shown as a card.
 *
 * @param {object} quote One object from src/data/recommendations.js:
 *   text     : what the person wrote (their real words, with their permission)
 *   name     : who said it
 *   role     : their job title and company
 *   initials : one or two letters shown in the small square (e.g. "MA")
 *
 * IMPORTANT: only ever show real quotes. Never ship made-up or placeholder text.
 */
export default function Quote({ quote }) {
  return (
    <figure className="quote">
      <blockquote className="quote__text">{quote.text}</blockquote>
      <figcaption className="quote__who">
        <span className="quote__avatar" aria-hidden="true">
          {quote.initials}
        </span>
        <span>
          <b className="quote__name">{quote.name}</b>
          <span className="quote__role">{quote.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
