import { profile } from '../../data/profile.js';
import BrandIcon from '../ui/BrandIcon.jsx';
import Button from '../ui/Button.jsx';
import CopyEmailButton from '../ui/CopyEmailButton.jsx';
import './ChannelList.css';

/**
 * ChannelList — the ways to get in touch: email first, then each social link.
 *
 * @param {string} subject The email subject line to pre-fill. It comes from
 *                         the topic the visitor picked on the Contact page.
 *
 * The email address and the social links come from src/data/profile.js.
 * To add a channel (for example X or a blog), add it to `profile.links`.
 */
export default function ChannelList({ subject }) {
  // A mailto: link opens the visitor's mail app with the fields filled in.
  // encodeURIComponent makes spaces and symbols safe inside a URL.
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

  // mailto: needs a mail app. Many people only use Gmail in the browser,
  // so we also offer Gmail's compose window with the same fields filled in.
  const gmail =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}`;

  return (
    <ul className="channel-list">
      {/* Email row: address plus three actions. */}
      <li className="channel-list__item">
        <div className="channel-list__row">
          <div>
            <small className="channel-list__label">Email</small>
            <span className="channel-list__value">{profile.email}</span>
          </div>
          <div className="channel-list__actions">
            <CopyEmailButton variant="hot" size="sm" />
            <Button href={mailto} size="sm">
              Write the email
            </Button>
            <Button href={gmail} size="sm" variant="ghost">
              Open in Gmail
            </Button>
          </div>
        </div>
      </li>

      {/* One row per social link: logo and name. The whole row is clickable. */}
      {profile.links.map((link) => (
        <li key={link.url} className="channel-list__item">
          <a
            className="channel-list__row channel-list__row--link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}: ${link.display} (opens in a new tab)`}
          >
            <span className="channel-list__brand">
              <BrandIcon name={link.icon} />
              <span className="channel-list__value">{link.label}</span>
            </span>
            <span className="channel-list__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
