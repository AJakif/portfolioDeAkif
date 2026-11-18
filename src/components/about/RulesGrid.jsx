import Tile from '../ui/Tile.jsx';
import './RulesGrid.css';

/**
 * RulesGrid — the "Rules I build by" cards on the About page.
 *
 * @param {{ title: string, text: string }[]} rules
 *        From `rules` in src/data/about.js.
 */
export default function RulesGrid({ rules }) {
  return (
    <div className="rules-grid">
      {rules.map((rule) => (
        <Tile key={rule.title} title={rule.title}>
          <p>{rule.text}</p>
        </Tile>
      ))}
    </div>
  );
}
