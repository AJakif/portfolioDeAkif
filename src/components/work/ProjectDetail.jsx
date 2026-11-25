import Button from '../ui/Button.jsx';
import TagList from '../ui/TagList.jsx';
import TickList from '../ui/TickList.jsx';
import ProjectFlow from './ProjectFlow.jsx';
import './ProjectDetail.css';

/**
 * ProjectDetail — a project story with the summary and links up front.
 * The fields come from src/data/projects.js.
 */
export default function ProjectDetail({ project }) {
  return (
    <article className="project-detail">
      <header>
        <p className="project-detail__kind">{project.kind}</p>
        <h1 className="project-detail__name" tabIndex={-1}>{project.name}</h1>
      </header>

      <p className="project-detail__prose project-detail__summary">{project.summary}</p>

      {project.links && (
        <div className="project-detail__links">
          {project.links.map((link, index) => (
            <Button key={link.url} href={link.url} variant={index === 0 ? 'hot' : 'default'}>
              {link.label}
            </Button>
          ))}
        </div>
      )}

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
        <h2 className="project-detail__heading">{project.contextTitle ?? 'Why we built it'}</h2>
        <p className="project-detail__prose">{project.problem}</p>
      </section>

      {project.image && (
        <figure className="project-detail__figure">
          <img
            src={`${import.meta.env.BASE_URL}${project.image.file}`}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
          />
          <figcaption>{project.image.caption}</figcaption>
        </figure>
      )}

      {project.idea && <p className="project-detail__idea">{project.idea}</p>}

      {project.flow && (
        <section>
          <h2 className="project-detail__heading">{project.flow.title}</h2>
          <ProjectFlow steps={project.flow.steps} />
        </section>
      )}

      <section>
        <h2 className="project-detail__heading">{project.builtTitle ?? 'What I built'}</h2>
        <TickList items={project.built} />
      </section>

      <section>
        <h2 className="project-detail__heading">{project.stackTitle ?? 'Built with'}</h2>
        <TagList items={project.stack} />
      </section>
    </article>
  );
}
