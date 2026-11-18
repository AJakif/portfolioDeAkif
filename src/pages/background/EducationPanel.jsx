import { research, schools } from '../../data/education.js';
import { getProjectById } from '../../data/projects.js';
import Button from '../../components/ui/Button.jsx';
import SectionBlock from '../../components/ui/SectionBlock.jsx';
import TickList from '../../components/ui/TickList.jsx';
import Tile from '../../components/ui/Tile.jsx';
import Timeline from '../../components/ui/Timeline.jsx';
import './EducationPanel.css';

/**
 * EducationPanel — URL: /background/education
 *
 * Top to bottom:
 *   Timeline : every school, newest first, with its years
 *   Research : small research cards
 *
 * Content: src/data/education.js
 */
export default function EducationPanel() {
  // Turn each school from the data file into the shape <Timeline> expects.
  const timelineItems = schools.map((school) => ({
    id: school.id,
    when: school.period, // '' means "no dates yet"; Timeline then skips the line
    current: school.current,
    title: school.name,
    subtitle: school.subject,
    text: school.summary,
    content: school.highlights && <TickList items={school.highlights} />,
  }));

  return (
    <>
      <div className="education-panel__timeline">
        <Timeline items={timelineItems} />
      </div>

      <SectionBlock title="Research">
        <div className="education-panel__research">
          {research.map((item) => {
            // Some research cards link to a project; most don't.
            const project = item.projectId ? getProjectById(item.projectId) : undefined;

            return (
              <Tile key={item.title} title={item.title}>
                <p>{item.text}</p>
                {project && (
                  <Button to={`/work/${project.id}`} size="sm">
                    Open the {project.name} project
                  </Button>
                )}
              </Tile>
            );
          })}
        </div>
      </SectionBlock>
    </>
  );
}
