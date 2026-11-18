import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * useReducedMotion — tells you if the visitor asked their device to
 * reduce animations (an accessibility setting).
 *
 * Returns true when animations should be turned off.
 * Every animated component in this project checks this hook.
 *
 * Usage:
 *   const reducedMotion = useReducedMotion();
 *   if (reducedMotion) { ...show a still version... }
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const onChange = () => setReduced(media.matches);

    // Update live if the visitor changes the setting while the site is open.
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
