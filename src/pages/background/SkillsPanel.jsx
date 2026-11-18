import { skillGroups } from '../../data/skills.js';
import SkillCard from '../../components/background/SkillCard.jsx';
import './SkillsPanel.css';

/**
 * SkillsPanel — URL: /background/skills
 *
 * Shows one card per skill area.
 * Content: src/data/skills.js
 */
export default function SkillsPanel() {
  return (
    <div className="skills-panel">
      {skillGroups.map((group) => (
        <SkillCard key={group.title} group={group} />
      ))}
    </div>
  );
}
