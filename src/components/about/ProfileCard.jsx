import { kanaInitialGloss, profile } from '../../data/profile.js';
import Tooltip from '../ui/Tooltip.jsx';
import './ProfileCard.css';

/**
 * ProfileCard — the gradient-bordered "character sheet" on the About page.
 *
 * @param {{ label: string, value: string }[]} rows
 *        From `profileRows` in src/data/about.js.
 *
 * The name, title, avatar character and its tooltip text come from
 * src/data/profile.js. Hovering the avatar explains the Japanese character.
 *
 * WANT A PHOTO INSTEAD OF THE KATAKANA AVATAR?
 *   1. Put the image in the /public folder, e.g. /public/akif.jpg
 *   2. Replace the whole <Tooltip>...</Tooltip> block below with:
 *        <img className="profile-card__avatar" src="./akif.jpg" alt={profile.name} />
 *   3. In ProfileCard.css add `object-fit: cover;` to .profile-card__avatar
 */
export default function ProfileCard({ rows }) {
  return (
    <aside className="profile-card" aria-label="Profile card">
      {/* The outer element is the gradient border; this inner one is the card. */}
      <div className="profile-card__inner">
        <div className="profile-card__top">
          {/* plain: no dotted underline, because the trigger is a shape. */}
          <Tooltip {...kanaInitialGloss} align="start" plain>
            <span className="profile-card__avatar">{profile.kanaInitial}</span>
          </Tooltip>
          <div>
            <h3 className="profile-card__name">{profile.name}</h3>
            <p className="profile-card__role">{profile.title}</p>
          </div>
        </div>

        <dl className="profile-card__rows">
          {rows.map((row) => (
            <div key={row.label} className="profile-card__row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
