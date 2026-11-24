import { Link } from 'react-router-dom';
import { research, schools } from '../../data/education.js';
import { getProjectById } from '../../data/projects.js';
import SectionBlock from '../../components/ui/SectionBlock.jsx';
import Timeline, { TimelineDetails } from '../../components/ui/Timeline.jsx';
import './EducationPanel.css';

export default function EducationPanel() {
  const timelineItems = schools.map((school) => ({
    id: school.id,
    when: school.period,
    current: school.current,
    featured: school.featured,
    title: school.subject,
    subtitle: school.name,
    content: (
      <>
        {(school.field || school.grade) && (
          <p className="education-panel__facts">
            {school.field && <span>{school.field}</span>}{' '}
            {school.grade && <span className="education-panel__grade">{school.grade}</span>}
          </p>
        )}
        {school.summary && <p className="education-panel__note">{school.summary}</p>}
        {school.highlights?.length > 0 && (
          <div className="timeline__actions">
            <TimelineDetails
              id={school.id}
              items={school.highlights}
              label="University highlights"
              hideLabel="Hide university highlights"
            />
          </div>
        )}
      </>
    ),
  }));

  return (
    <>
      <Timeline label="Education history" items={timelineItems} />

      <SectionBlock title="Research">
        <div className="timeline education-panel__research">
          {research.map((item) => {
            const project = item.projectId ? getProjectById(item.projectId) : undefined;

            return (
              <article className="timeline__item" key={item.projectId ?? item.title}>
                <div>
                  <h3>{project?.name ?? item.title}</h3>
                  {project && <p className="timeline__subtitle">{item.title}</p>}
                </div>
                <div>
                  <p className="timeline__text">{item.text}</p>
                  {project && (
                    <div className="timeline__actions">
                      <Link className="timeline__link" to={`/work/${project.id}`}>{project.name} overview</Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </SectionBlock>
    </>
  );
}
