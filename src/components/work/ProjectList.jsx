import { Link } from 'react-router-dom';
import './ProjectList.css';

/**
 * ProjectList — the linked cards on the Work overview.
 * Names, labels, and summaries come from src/data/projects.js.
 */
export default function ProjectList({ projects }) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id}>
          <Link to={`/work/${project.id}`} className="project-list__card">
            <small className="project-list__label">{project.short}</small>
            <b className="project-list__name">{project.name}</b>
            <p className="project-list__preview">{project.preview}</p>
            <span className="project-list__arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
