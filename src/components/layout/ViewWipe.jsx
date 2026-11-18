import { profile } from '../../data/profile.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';
import './ViewWipe.css';

/**
 * ViewWipe — the dark diagonal panel you see when changing pages.
 * It carries the name in Japanese katakana (`profile.kana` in
 * src/data/profile.js).
 *
 * The sequence (timings in ViewWipe.css and src/hooks/usePageWipe.js):
 *   1. the panel slides in from the left over the old page
 *   2. once it covers the screen, the new page is swapped in underneath
 *      (usePageWipe holds the old page until then)
 *   3. the katakana fades in, glitches once, then holds still to be read
 *   4. the katakana fades out and the panel slides away to the right
 *
 * `wipeCount` is used as the React `key`. A new key makes React create a
 * fresh element, which restarts the CSS animation.
 *
 * To change the look, edit ViewWipe.css.
 * To remove the effect entirely, delete <ViewWipe /> from App.jsx and
 * replace usePageWipe's displayLocation with the plain location.
 *
 * @param {number} wipeCount How many wipes have started (0 = none yet).
 */
export default function ViewWipe({ wipeCount }) {
  const reducedMotion = useReducedMotion();

  // Nothing to show before the first navigation, or when motion is reduced.
  if (wipeCount === 0 || reducedMotion) return null;

  return (
    // aria-hidden: the wipe is decoration, so screen readers skip it.
    <div key={wipeCount} className="view-wipe" aria-hidden="true">
      <span className="view-wipe__name">
        {/* Inner span: the glitch's own transforms would otherwise
            override the name's skew. See src/styles/glitch.css. */}
        <span className="glitch-kana" data-text={profile.kana}>
          {profile.kana}
        </span>
      </span>
    </div>
  );
}
