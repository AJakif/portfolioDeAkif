import { useEffect, useRef, useState } from 'react';

import { profile } from '../../data/profile.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';
import './ViewWipe.css';

/**
 * ViewWipe — the apricot diagonal swipe you see when changing pages.
 * It carries the name in Japanese katakana (`profile.kana` in
 * src/data/profile.js), which rides along as the panel slides away.
 *
 * How it works:
 *   - Layout passes in the current `section` ("home", "work", ...).
 *   - When the section changes, we bump `playCount`.
 *   - `playCount` is used as the React `key` of the overlay. A new key makes
 *     React create a fresh element, which restarts the CSS animation.
 *
 * To change the look or speed, edit ViewWipe.css.
 * To remove the effect entirely, delete <ViewWipe /> from Layout.jsx.
 *
 * @param {string} section The current top-level section of the site.
 */
export default function ViewWipe({ section }) {
  const reducedMotion = useReducedMotion();
  const previousSection = useRef(section);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    // Only play when the section really changed (not on the first page load).
    if (previousSection.current !== section) {
      previousSection.current = section;
      setPlayCount((count) => count + 1);
    }
  }, [section]);

  // Nothing to show before the first navigation, or when motion is reduced.
  if (playCount === 0 || reducedMotion) return null;

  return (
    // aria-hidden: the wipe is decoration, so screen readers skip it.
    <div key={playCount} className="view-wipe" aria-hidden="true">
      <span className="view-wipe__name">{profile.kana}</span>
    </div>
  );
}
