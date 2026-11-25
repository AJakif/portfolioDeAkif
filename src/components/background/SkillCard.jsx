import { Link } from 'react-router-dom';
import { getProjectById } from '../../data/projects.js';
import TagList from '../ui/TagList.jsx';
import './SkillCard.css';

/**
 * SkillCard — a skill area with project examples on Experience > Skills.
 *
 * @param {{ title: string, items: string[], projectIds: string[] }} group
 *        One object from `skillGroups` in src/data/skills.js.
 */
export default function SkillCard({ group }) {
  const projects = group.projectIds.map(getProjectById).filter(Boolean);

  return (
    <div className="skill-card">
      <h2 className="skill-card__title">{group.title}</h2>
      <TagList items={group.items} />
      {projects.length > 0 && (
        <div className="skill-card__used">
          <b>See it in</b>
          <ul>
            {projects.map((project) => (
              <li key={project.id}><Link to={`/work/${project.id}`}>{project.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
