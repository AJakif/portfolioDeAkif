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
 * Email is available immediately. The optional topic fills in the subject
 * in both the email app and Gmail links.
 *
 * Text and topics: src/data/contact.js
 * Email and links: src/data/profile.js
 */
export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="wrap">
      <div className="contact-page">
        <div className="contact-page__intro-block">
          <h1 className="contact-page__heading" tabIndex={-1}>{contact.heading}</h1>
          <p className="contact-page__intro">{contact.intro}</p>
        </div>

        <div className="contact-page__channels">
          <ChannelList subject={selectedTopic?.subject}>
            <details className="contact-page__topics">
              <summary>Add a subject <span>(optional)</span></summary>
              <TopicPicker topics={topics} selected={selectedTopic} onSelect={setSelectedTopic} />
              <p className="contact-page__subject" role="status">
                {selectedTopic?.subject && <>Email subject <b>{selectedTopic.subject}</b></>}
              </p>
            </details>
          </ChannelList>
        </div>

        <div className="contact-page__clock">
          <LocalClock timeZone={contact.timeZone} label={contact.timeZoneLabel} />
        </div>
      </div>

      <div className="contact-page__tape">
        <Tape items={contactTape} />
      </div>
    </div>
  );
}
