import { useEffect, useState } from 'react';

/** Format the current time as "HH:MM" (24-hour) in the given time zone. */
function formatTime(timeZone) {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());
  } catch (error) {
    // Very old browsers may not know the time zone. Show a placeholder.
    return '--:--';
  }
}

/**
 * useClock — a live clock for any time zone.
 *
 * @param {string} timeZone An IANA time zone name, e.g. 'Asia/Dhaka'.
 * @returns {string} The current time there, e.g. "07:55". Updates by itself.
 */
export default function useClock(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    setTime(formatTime(timeZone));

    // Checking every 20 seconds is enough for a clock that shows minutes.
    const interval = setInterval(() => setTime(formatTime(timeZone)), 20000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}
