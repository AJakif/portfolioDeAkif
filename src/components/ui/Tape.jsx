import './Tape.css';

/**
 * Tape — the tilted apricot band with words scrolling across it.
 *
 * @param {string[]} items The words to show.
 *
 * How the endless scroll works: we render the list several times in a row
 * and slide the whole strip left by exactly one copy's width (see Tape.css).
 * When the animation restarts, the next copy is in the same place, so the
 * loop is invisible.
 *
 * It is decorative, so it is hidden from screen readers (aria-hidden).
 */

// How many times the list is repeated. Must match the percentage in Tape.css
// (4 copies -> slide by 25%). Four copies fill even very wide screens.
const COPIES = 4;

export default function Tape({ items }) {
  const repeated = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div className="tape" aria-hidden="true">
      <div className="tape__band">
        <div className="tape__track">
          {repeated.map((word, index) => (
            <span key={index} className="tape__word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
