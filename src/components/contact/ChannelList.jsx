import { profile } from '../../data/profile.js';
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

  return (
    <ul className="channel-list">
      {/* Email row: address plus two actions. */}
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
          </div>
        </div>
      </li>

      {/* One row per social link. The whole row is clickable. */}
      {profile.links.map((link) => (
        <li key={link.url} className="channel-list__item">
          <a
            className="channel-list__row channel-list__row--link"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <small className="channel-list__label">{link.label}</small>
              <span className="channel-list__value">{link.display}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
