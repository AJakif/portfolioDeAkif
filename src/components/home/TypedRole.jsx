import useReducedMotion from '../../hooks/useReducedMotion.js';
import useTypedText from '../../hooks/useTypedText.js';
import './TypedRole.css';

/**
 * TypedRole — the line under the name that types out each role in turn.
 *
 * @param {string[]} roles The roles to cycle through (from src/data/profile.js).
 *
 * Accessibility: the animated text is hidden from screen readers
 * (they would read every half-typed word). Instead they get one clear
 * label listing all the roles.
 *
 * The typing speed lives in src/hooks/useTypedText.js.
 */
export default function TypedRole({ roles }) {
  const reducedMotion = useReducedMotion();
  const text = useTypedText(roles, !reducedMotion);

  return (
    <p className="typed-role" aria-label={roles.join(', ')}>
      <span className="typed-role__text" aria-hidden="true">
        {text}
      </span>
      {/* The blinking cursor. */}
      <i className="typed-role__caret" aria-hidden="true" />
    </p>
  );
}
