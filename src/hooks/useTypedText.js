import { useEffect, useState } from 'react';

// Speeds, in milliseconds. Change these to tune the animation.
const TYPE_MS = 46; // delay between typed characters
const ERASE_MS = 24; // delay between erased characters
const HOLD_MS = 2400; // how long a finished word stays on screen

/**
 * useTypedText — a typewriter effect that cycles through a list of words.
 *
 * It types a word, waits, erases it, then types the next one, forever.
 *
 * @param {string[]} words   The words to cycle through. IMPORTANT: pass a
 *                           stable array (defined outside the component, e.g.
 *                           from a data file), otherwise the animation
 *                           restarts on every render.
 * @param {boolean}  enabled Pass false to show only the first word, with no
 *                           animation (used for reduced-motion visitors).
 * @returns {string} The text to show right now.
 */
export default function useTypedText(words, enabled = true) {
  // Start with the full first word so the page never looks empty.
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (!enabled || words.length < 2) {
      setText(words[0]);
      return undefined;
    }

    let wordIndex = 0;
    let current = words[0];
    let timer;

    // Remove one character at a time. When empty, move on to the next word.
    function erase() {
      if (current.length === 0) {
        wordIndex = (wordIndex + 1) % words.length; // wrap back to the first word
        type(1);
        return;
      }
      current = current.slice(0, -1);
      setText(current);
      timer = setTimeout(erase, ERASE_MS);
    }

    // Show the first `count` characters of the current word.
    function type(count) {
      const word = words[wordIndex];
      current = word.slice(0, count);
      setText(current);

      if (count >= word.length) {
        timer = setTimeout(erase, HOLD_MS); // word finished: hold, then erase
        return;
      }
      timer = setTimeout(() => type(count + 1), TYPE_MS);
    }

    timer = setTimeout(erase, HOLD_MS);

    // Cleanup: stop the timer when the component leaves the page.
    return () => clearTimeout(timer);
  }, [words, enabled]);

  return text;
}
