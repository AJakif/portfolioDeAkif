import { useId } from 'react';

import './Tooltip.css';

/**
 * Tooltip — a small glossary card that explains a word.
 *
 * It is used for the Japanese lettering on the site: hover (or focus, or tap)
 * the word and a card shows the word, how to say it, and what it means.
 *
 * Example:
 *   <Tooltip word="アキフ" say="a-ki-fu" soundsLike="ah-kee-foo"
 *            meaning="My name, Akif, written in katakana." label="Akif in Japanese">
 *     アキフ
 *   </Tooltip>
 *
 * Props:
 *   word       : the word shown large at the top of the card
 *   say        : how to pronounce it, written out ("a-ki-fu")
 *   soundsLike : (optional) a plain-English sound ("ah-kee-foo")
 *   meaning    : one or two sentences on what it means
 *   label      : what a screen reader should call the trigger
 *   placement  : 'above' (default) or 'below' the trigger.
 *                Use 'below' near the top of the page, where a card
 *                above the word would be cut off.
 *   align      : 'center' (default) or 'start'. 'start' lines the card up
 *                with the left edge of the trigger; use it near the left
 *                edge of the screen.
 *   plain      : true = no dotted underline (for a trigger that is a shape,
 *                such as the avatar, instead of text)
 *   children   : the trigger itself (the word people hover)
 *
 * HOW IT OPENS: with CSS only (see Tooltip.css). The trigger is a real
 * <button>, so it also works with the keyboard (Tab) and on touch screens (tap).
 *
 * The text for the site's tooltips lives in src/data/profile.js.
 */
export default function Tooltip({
  word,
  say,
  soundsLike,
  meaning,
  label,
  placement = 'above',
  align = 'center',
  plain = false,
  children,
}) {
  // useId gives every tooltip a unique id, so the trigger can point at
  // its own card with aria-describedby (that is how screen readers link them).
  const id = useId();

  const classes = ['tooltip', placement === 'below' && 'tooltip--below', align === 'start' && 'tooltip--start']
    .filter(Boolean)
    .join(' ');

  // Pressing Escape closes the card by taking focus off the trigger.
  function handleKeyDown(event) {
    if (event.key === 'Escape') event.currentTarget.blur();
  }

  return (
    <span className={classes}>
      <button
        type="button"
        className={plain ? 'tooltip__trigger tooltip__trigger--plain' : 'tooltip__trigger'}
        aria-label={label}
        aria-describedby={id}
        onKeyDown={handleKeyDown}
      >
        {children}
      </button>

      <span className="tooltip__bubble" role="tooltip" id={id}>
        <span className="tooltip__word" lang="ja">{word}</span>
        <span className="tooltip__say">
          {say} {soundsLike && <span>sounds like {soundsLike}</span>}
        </span>
        <span className="tooltip__meaning">{meaning}</span>
      </span>
    </span>
  );
}
