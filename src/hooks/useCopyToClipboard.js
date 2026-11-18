import { useCallback, useEffect, useRef, useState } from 'react';

// How long the "Copied" state lasts, in milliseconds.
const RESET_MS = 1800;

/**
 * useCopyToClipboard — copy text and show a short "Copied" confirmation.
 *
 * Usage:
 *   const [copied, copy] = useCopyToClipboard();
 *   <button onClick={() => copy('hello')}>{copied ? 'Copied' : 'Copy'}</button>
 *
 * @returns {[boolean, (text: string) => Promise<boolean>]}
 *   copied : true for a moment after a successful copy
 *   copy   : call it with the text; resolves to true on success, false if
 *            the browser refused (some browsers block clipboard access)
 */
export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  // Clear the timer if the component leaves the page mid-countdown.
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), RESET_MS);
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  return [copied, copy];
}
