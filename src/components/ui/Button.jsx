import { Link } from 'react-router-dom';

import './Button.css';

/**
 * Button — one component for every button-looking thing on the site.
 *
 * It picks the right HTML element for you:
 *   <Button to="/work">          -> a link to another page of this site
 *   <Button href="https://...">  -> a link to another website (opens in a new tab)
 *   <Button href="mailto:...">   -> opens the visitor's mail app
 *   <Button onClick={fn}>        -> a real <button> that runs your function
 *
 * Props:
 *   variant : 'default' (outlined) | 'hot' (filled apricot) | 'ghost' (see-through)
 *   size    : 'md' (default) | 'sm'
 *   className : extra classes, if a parent needs to position the button
 */
export default function Button({
  to,
  href,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  // Build the class list, e.g. "btn btn--hot btn--sm".
  const classes = ['btn', variant !== 'default' && `btn--${variant}`, size === 'sm' && 'btn--sm', className]
    .filter(Boolean)
    .join(' ');

  // 1. Internal link (another page of this site).
  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  // 2. External link. Web links open in a new tab; mailto: links do not.
  if (href) {
    const isWebLink = /^https?:/.test(href);
    const newTabProps = isWebLink ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a className={classes} href={href} {...newTabProps} {...rest}>
        {children}
      </a>
    );
  }

  // 3. A plain button.
  return (
    <button className={classes} type="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
