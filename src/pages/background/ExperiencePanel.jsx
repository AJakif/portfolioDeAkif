import { Link } from 'react-router-dom';
import { jobs, leadership, memberships, talks } from '../../data/experience.js';
import { getProjectById } from '../../data/projects.js';
import LeadershipList from '../../components/background/LeadershipList.jsx';
import SectionBlock from '../../components/ui/SectionBlock.jsx';
import Timeline, { TimelineDetails } from '../../components/ui/Timeline.jsx';
import './ExperiencePanel.css';

export default function ExperiencePanel() {
  const timelineItems = jobs.map((job) => {
    const project = job.projectId ? getProjectById(job.projectId) : undefined;
    const hasHighlights = Boolean(job.highlights?.length);

    return {
      id: job.id,
      when: job.period || (job.current ? 'Now' : 'Earlier'),
      current: job.current,
      title: job.title,
      subtitle: [job.org, job.location].filter(Boolean).join(' · '),
      text: job.summary,
      content: (hasHighlights || project) && (
        <div className="timeline__actions">
          {hasHighlights && <TimelineDetails id={job.id} items={job.highlights} />}
          {project && <Link className="timeline__link" to={`/work/${project.id}`}>{project.name}</Link>}
        </div>
      ),
    };
  });

  return (
    <>
      <Timeline label="Work history" items={timelineItems} />

      <SectionBlock title="Speaking and community">
        <div className="experience-panel__talks">
          {talks.map((talk) => (
            <article key={talk.id} className="experience-panel__talk" aria-labelledby={`talk-${talk.id}`}>
              <div>
                <p className="experience-panel__talk-label">Talk</p>
                <h3 id={`talk-${talk.id}`}>{talk.title}</h3>
                {talk.event && <p className="experience-panel__talk-event">{talk.event}</p>}
              </div>
              <div className="experience-panel__talk-facts">
                {talk.when && <p>{talk.when}</p>}
                {talk.text && <p>{talk.text}</p>}
                {talk.host && <p>Hosted by {talk.host}</p>}
              </div>
            </article>
          ))}
        </div>
        <LeadershipList items={leadership} memberships={memberships} />
      </SectionBlock>
    </>
  );
}
