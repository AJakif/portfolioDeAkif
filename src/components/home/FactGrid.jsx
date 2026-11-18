import './FactGrid.css';

/**
 * FactGrid — the row of headline numbers on the Home page.
 *
 * @param {{ value: string, label: string }[]} facts
 *        From `facts` in src/data/profile.js.
 */
export default function FactGrid({ facts }) {
  return (
    <div className="fact-grid">
      {facts.map((fact) => (
        <div key={fact.value} className="fact-grid__card">
          <b className="fact-grid__value">{fact.value}</b>
          <span className="fact-grid__label">{fact.label}</span>
        </div>
      ))}
    </div>
  );
}
