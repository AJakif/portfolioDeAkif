import { jobs, leadership, talks } from '../../data/experience.js';
import { getProjectById } from '../../data/projects.js';
import LeadershipList from '../../components/background/LeadershipList.jsx';
import Button from '../../components/ui/Button.jsx';
import SectionBlock from '../../components/ui/SectionBlock.jsx';
import TickList from '../../components/ui/TickList.jsx';
import Tile from '../../components/ui/Tile.jsx';
import Timeline from '../../components/ui/Timeline.jsx';
import './ExperiencePanel.css';

/**
 * ExperiencePanel — URL: /background/experience
 *
 * Top to bottom:
 *   Timeline       : every job, newest first, with its dates
 *   Talks          : presentations given
 *   LeadershipList : leadership and volunteering
 *
 * Content: src/data/experience.js
 */
export default function ExperiencePanel() {
  // Turn each job from the data file into the shape <Timeline> expects.
  const timelineItems = jobs.map((job) => {
    // `project` is undefined when the job has no projectId.
    const project = job.projectId ? getProjectById(job.projectId) : undefined;

    return {
      id: job.id,
      // Show the real dates when we have them; otherwise a simple label.
      when: job.period || (job.current ? 'Now' : 'Earlier'),
      current: job.current,
      title: job.org,
      // "Software Engineer, Dhaka" when a location is given, else just the title.
      subtitle: [job.title, job.location].filter(Boolean).join(', '),
      text: job.summary,
      content: (job.highlights || project) && (
        <>
          {job.highlights && <TickList items={job.highlights} />}
          {project && <Button to={`/work/${project.id}`}>Open the {project.name} project</Button>}
        </>
      ),
    };
  });

  return (
    <>
      <div className="experience-panel__timeline">
        <Timeline items={timelineItems} />
      </div>

      <SectionBlock title="Talks">
        <div className="experience-panel__talks">
          {talks.map((talk) => (
            <Tile key={talk.id} title={talk.title}>
              <p>
                {/* Put the date first when we have one: "Oct 2026, AI Adda ..." */}
                {[talk.when, talk.event].filter(Boolean).join(', ')}. {talk.text}
              </p>
            </Tile>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Leadership and volunteering">
        <LeadershipList items={leadership} />
      </SectionBlock>
    </>
  );
}
