import { useNavigate } from 'react-router-dom';

import { profile } from '../../data/profile.js';
import useCopyToClipboard from '../../hooks/useCopyToClipboard.js';
import Button from './Button.jsx';

/**
 * CopyEmailButton — copies the email address from src/data/profile.js.
 *
 * After a successful copy the label changes to "Copied" for a moment.
 * If the browser blocks clipboard access, we send the visitor to the
 * Contact page, where the address is written out and can be selected.
 *
 * Props (all optional, passed on to Button):
 *   variant : 'ghost' (default) | 'hot' | 'default'
 *   size    : 'sm' (default) | 'md'
 */
export default function CopyEmailButton({ variant = 'ghost', size = 'sm' }) {
  const [copied, copy] = useCopyToClipboard();
  const navigate = useNavigate();

  async function handleClick() {
    const success = await copy(profile.email);
    if (!success) navigate('/contact');
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      {copied ? 'Copied' : 'Copy email'}
    </Button>
  );
}
