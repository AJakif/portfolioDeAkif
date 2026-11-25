import { profile } from '../../data/profile.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';
import './ViewWipe.css';

/**
 * ViewWipe — a diagonal sweep with Akif's name in katakana.
 * A new wipeCount restarts the animation when a visitor changes sections.
 */
export default function ViewWipe({ wipeCount }) {
  const reducedMotion = useReducedMotion();

  if (wipeCount === 0 || reducedMotion) return null;

  return (
    <div key={wipeCount} className="view-wipe" aria-hidden="true">
      <div className="view-wipe__panel">
        <span className="view-wipe__name">
          <span className="glitch-kana" lang="ja" data-text={profile.kana}>
            {profile.kana}
          </span>
        </span>
      </div>
    </div>
  );
}
