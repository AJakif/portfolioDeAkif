import { Link } from 'react-router-dom';

import { kanaGloss, profile } from '../../data/profile.js';
import Dock from './Dock.jsx';
import CopyEmailButton from '../ui/CopyEmailButton.jsx';
import Tooltip from '../ui/Tooltip.jsx';
import './Header.css';

/**
 * Header — the bar that stays at the top of every page.
 *
 * Left   : the name (links to Home) and the katakana, which opens a
 *          tooltip explaining what it says and how to pronounce it
 * Middle : the main menu (Dock)
 * Right  : a "Copy email" shortcut (hidden on phones to save space)
 *
 * The name, katakana and tooltip text come from src/data/profile.js.
 */
export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <div className="header__brand">
          {/* .glitch + data-text: see src/styles/glitch.css */}
          <Link className="header__brand-name glitch" to="/" data-text={profile.shortName}>
            {profile.shortName}
          </Link>

          {/* The header is at the top of the screen, so the card opens BELOW
              the word, and lines up with its left edge so it stays on screen. */}
          <Tooltip {...kanaGloss} placement="below" align="start">
            <span className="header__brand-kana">{profile.kana}</span>
          </Tooltip>
        </div>

        <Dock />

        <div className="header__copy">
          <CopyEmailButton />
        </div>
      </div>
    </header>
  );
}
