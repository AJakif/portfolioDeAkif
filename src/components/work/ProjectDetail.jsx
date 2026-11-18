import Button from '../ui/Button.jsx';
import TagList from '../ui/TagList.jsx';
import TickList from '../ui/TickList.jsx';
import ProjectFlow from './ProjectFlow.jsx';
import './ProjectDetail.css';

/**
 * ProjectDetail — the big panel that shows one project.
 *
 * @param {object} project One project object from src/data/projects.js.
 *                         See the top of that file for every field.
 *
 * Sections, in order:
 *   kind + name -> quick facts -> the problem -> steps (optional)
 *   -> what I built -> key idea (optional) -> tech tags -> links (optional)
 *
 * Optional sections only render when the project has that field,
 * using the `condition && <element>` pattern.
 */
export default function ProjectDetail({ project }) {
  return (
    <article className="project-detail">
      <header>
        <p className="project-detail__kind">{project.kind}</p>
        <h2 className="project-detail__name">{project.name}</h2>
      </header>

      {/* Quick facts: where, role, status. */}
      <dl className="project-detail__meta">
        {project.meta.map((fact) => (
          <div key={fact.label} className="project-detail__meta-item">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section>
        <h3 className="project-detail__heading">The problem</h3>
        <p className="project-detail__prose">{project.problem}</p>
      </section>

      {project.flow && (
        <section>
          <h3 className="project-detail__heading">{project.flow.title}</h3>
          <ProjectFlow steps={project.flow.steps} />
        </section>
      )}

      <section>
        <h3 className="project-detail__heading">What I built</h3>
        <TickList items={project.built} />
      </section>

      {project.idea && <p className="project-detail__idea">{project.idea}</p>}

      <section>
        <h3 className="project-detail__heading">Built with</h3>
        <TagList items={project.stack} />
      </section>

      {project.links && (
        <div className="project-detail__links">
          {project.links.map((link) => (
            <Button key={link.url} href={link.url}>
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </article>
  );
}
