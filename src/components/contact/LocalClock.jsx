import useClock from '../../hooks/useClock.js';
import './LocalClock.css';

/**
 * LocalClock — a small live clock showing the site owner's local time,
 * so visitors know whether it's a good moment to expect a reply.
 *
 * @param {string} timeZone IANA time zone, e.g. 'Asia/Dhaka'.
 * @param {string} label    Text shown beside the time, e.g. 'Dhaka, UTC+6'.
 *
 * Both values come from `contact` in src/data/contact.js.
 */
export default function LocalClock({ timeZone, label }) {
  const time = useClock(timeZone);

  return (
    <div className="local-clock">
      <b className="local-clock__time">{time}</b>
      <span className="local-clock__label">
        my time right now
        <br />
        {label}
      </span>
    </div>
  );
}
