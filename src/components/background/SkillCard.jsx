import TagList from '../ui/TagList.jsx';
import './SkillCard.css';

/**
 * SkillCard — one skill area on Background > Skills.
 *
 * @param {{ title: string, items: string[], usedIn: string }} group
 *        One object from `skillGroups` in src/data/skills.js.
 */
export default function SkillCard({ group }) {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{group.title}</h3>
      <TagList items={group.items} />
      <p className="skill-card__used">
        <b>Used in</b> {group.usedIn}
      </p>
    </div>
  );
}
