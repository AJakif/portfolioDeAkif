import { useState } from 'react';

import { contact, contactTape, topics } from '../data/contact.js';
import ChannelList from '../components/contact/ChannelList.jsx';
import LocalClock from '../components/contact/LocalClock.jsx';
import TopicPicker from '../components/contact/TopicPicker.jsx';
import Tape from '../components/ui/Tape.jsx';
import './ContactPage.css';

/**
 * ContactPage — URL: /contact
 *
 * Left  : big heading, a short line, and a live clock
 * Right : topic buttons, then the contact rows (email, LinkedIn, GitHub)
 *
 * HOW THE TOPIC BUTTONS WORK
 *   This page remembers which topic is selected (`selectedTopic`).
 *   - TopicPicker shows the buttons and reports clicks.
 *   - ChannelList receives the topic's subject line and puts it into
 *     the "Write the email" link.
 *   Keeping the state here, in the shared parent, is how two sibling
 *   components stay in sync in React ("lifting state up").
 *
 * Text and topics: src/data/contact.js
 * Email and links: src/data/profile.js
 */
export default function ContactPage() {
  // The first topic is selected when the page opens.
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="wrap">
      <div className="contact-page">
        <div className="contact-page__left">
          <h1 className="contact-page__heading">{contact.heading}</h1>
          <p className="contact-page__intro">{contact.intro}</p>
          <LocalClock timeZone={contact.timeZone} label={contact.timeZoneLabel} />
        </div>

        <div className="contact-page__right">
          <h2 className="contact-page__question">What's it about?</h2>
          <TopicPicker topics={topics} selected={selectedTopic} onSelect={setSelectedTopic} />

          <p className="contact-page__subject">
            Your email will open with the subject <b>{selectedTopic.subject}</b>
          </p>

          <ChannelList subject={selectedTopic.subject} />
        </div>
      </div>

      <div className="contact-page__tape">
        <Tape items={contactTape} />
      </div>
    </div>
  );
}
