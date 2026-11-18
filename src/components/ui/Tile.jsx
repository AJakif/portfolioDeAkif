import './Tile.css';

/**
 * Tile — a simple card with a title and some content.
 *
 * @param {string} title    The card heading.
 * @param {node}   children Anything you put between <Tile> and </Tile>.
 *
 * Example:
 *   <Tile title="Fail closed">
 *     <p>If a safety check breaks, nothing gets through.</p>
 *   </Tile>
 */
export default function Tile({ title, children }) {
  return (
    <div className="tile">
      <h3 className="tile__title">{title}</h3>
      {children}
    </div>
  );
}
