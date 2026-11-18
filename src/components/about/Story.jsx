import './Story.css';

/**
 * Story — the "about me" paragraphs on the About page.
 *
 * @param {string[]} paragraphs One string per paragraph
 *        (from `story` in src/data/about.js).
 *
 * The first paragraph is styled larger by Story.css.
 */
export default function Story({ paragraphs }) {
  return (
    <div className="story">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
