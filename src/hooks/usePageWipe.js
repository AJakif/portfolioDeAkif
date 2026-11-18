import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useReducedMotion from './useReducedMotion.js';

/*
 * Wipe timings in milliseconds. They MUST match the percentages in
 * src/components/layout/ViewWipe.css (total 1400ms):
 *   COVER = 350ms  -> 25% : panel has fully covered the screen
 *   LEAVE = 1000ms -> 71% : panel starts sliding away
 */
export const WIPE_COVER_MS = 350;
export const WIPE_LEAVE_MS = 1000;

// The first part of the URL: "/work/querio" -> "work", "/" -> "home".
export const sectionOf = (pathname) => pathname.split('/')[1] || 'home';

/**
 * usePageWipe — runs the "cover, swap, reveal" page change.
 *
 * When the visitor moves to a different section, the wipe panel slides
 * in over the OLD page. Only once the screen is fully covered do we swap
 * in the new page, so the change itself is never seen.
 *
 * Returns:
 *   displayLocation : the location to render (pass to <Routes location>).
 *                     It lags the real URL by WIPE_COVER_MS during a wipe.
 *   wipeCount       : goes up by one each time a wipe starts
 *                     (ViewWipe uses it to restart its animation).
 *
 * No wipe (instant swap) when:
 *   - the section stays the same (e.g. tabs inside Background)
 *   - the visitor prefers reduced motion
 */
export default function usePageWipe() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [wipeCount, setWipeCount] = useState(0);

  const shownSection = useRef(sectionOf(location.pathname)); // section shown, or about to be
  const wipeStartedAt = useRef(-Infinity);

  useEffect(() => {
    const nextSection = sectionOf(location.pathname);
    const elapsed = performance.now() - wipeStartedAt.current;
    const panelOnScreen = !reducedMotion && elapsed < WIPE_LEAVE_MS;

    let delay = 0;
    if (panelOnScreen) {
      // A wipe is already covering (or about to cover) the screen, e.g. a
      // second click mid-wipe: reuse it, just swap once it's covered.
      delay = Math.max(0, WIPE_COVER_MS - elapsed);
    } else if (!reducedMotion && nextSection !== shownSection.current) {
      // A new section: start a wipe and swap once it covers the screen.
      wipeStartedAt.current = performance.now();
      setWipeCount((count) => count + 1);
      delay = WIPE_COVER_MS;
    }

    shownSection.current = nextSection;

    if (delay === 0) {
      setDisplayLocation(location);
      return undefined;
    }
    const timer = setTimeout(() => setDisplayLocation(location), delay);
    return () => clearTimeout(timer);
  }, [location, reducedMotion]);

  return { displayLocation, wipeCount };
}
