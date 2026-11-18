import './ProjectFlow.css';

/**
 * ProjectFlow — a row of numbered steps (for example Querio's four agents).
 *
 * @param {{ name: string, note?: string }[]} steps
 *        The steps, in order. `note` is optional small text under the name.
 *
 * The numbers are added automatically by CSS (see ProjectFlow.css),
 * so you never have to renumber when you add or remove a step.
 */
export default function ProjectFlow({ steps }) {
  return (
    <ol className="project-flow">
      {steps.map((step) => (
        <li key={step.name} className="project-flow__step">
          <b className="project-flow__name">{step.name}</b>
          {step.note && <span className="project-flow__note">{step.note}</span>}
        </li>
      ))}
    </ol>
  );
}
