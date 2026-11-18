import { profile } from '../../data/profile.js';
import './Footer.css';

/**
 * Footer — the small line at the bottom of every page.
 * The year updates by itself.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const city = profile.location.split(',')[0]; // "Dhaka, Bangladesh" -> "Dhaka"

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          {profile.name}, {city}
        </span>
        <span>{year}</span>
      </div>
    </footer>
  );
}
