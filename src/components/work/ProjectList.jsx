import { Link } from 'react-router-dom';

import './ProjectList.css';

/**
 * ProjectList — the list of project buttons on the Work page.
 *
 * Each item is a link to /work/<project id>. The Work page reads the id
 * from the URL and shows that project, so the browser's Back button and
 * shared links both work.
 *
 * @param {object[]} projects  All projects (from src/data/projects.js).
 * @param {string}   currentId The id of the project being shown, used to
 *                             highlight the selected item.
 */
export default function ProjectList({ projects, currentId }) {
  return (
    <nav className="project-list" aria-label="Projects">
      {projects.map((project) => {
        const isCurrent = project.id === currentId;
        return (
          <Link
            key={project.id}
            to={`/work/${project.id}`}
            className={isCurrent ? 'project-list__item project-list__item--current' : 'project-list__item'}
            // Tells screen readers which project is selected.
            aria-current={isCurrent ? 'true' : undefined}
          >
            <b className="project-list__name">{project.name}</b>
            <span className="project-list__short">{project.short}</span>
          </Link>
        );
      })}
    </nav>
  );
}
