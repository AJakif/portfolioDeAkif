import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { profile } from '../../data/profile.js';
import useCopyToClipboard from '../../hooks/useCopyToClipboard.js';
import Button from './Button.jsx';

/**
 * CopyEmailButton — copies the email address from src/data/profile.js.
 *
 * After a successful copy the label changes to "Copied" for a moment.
 * If the browser blocks clipboard access, we send the visitor to the
 * Contact page, where the address is written out and can be selected.
 * If they are already on the Contact page, the label says so instead.
 *
 * Props (all optional, passed on to Button):
 *   variant : 'ghost' (default) | 'hot' | 'default'
 *   size    : 'sm' (default) | 'md'
 */
// How long the "couldn't copy" message stays, in milliseconds.
const FAILED_MS = 3000;

export default function CopyEmailButton({ variant = 'ghost', size = 'sm' }) {
  const [copied, copy] = useCopyToClipboard();
  const [failed, setFailed] = useState(false);
  const failTimer = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Clear the timer if the button leaves the page mid-countdown.
  useEffect(() => () => clearTimeout(failTimer.current), []);

  async function handleClick() {
    const success = await copy(profile.email);
    if (success) return;

    if (pathname === '/contact') {
      // The address is already on screen; tell the visitor to select it.
      setFailed(true);
      clearTimeout(failTimer.current);
      failTimer.current = setTimeout(() => setFailed(false), FAILED_MS);
    } else {
      navigate('/contact');
    }
  }

  let label = 'Copy email';
  if (copied) label = 'Copied';
  else if (failed) label = "Couldn't copy, select it above";

  return (
    <Button variant={variant} size={size} onClick={handleClick} aria-live="polite">
      {label}
    </Button>
  );
}
