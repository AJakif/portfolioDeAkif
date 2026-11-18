import { achievements, more, profileRows, rules, story } from '../data/about.js';
import { recommendations } from '../data/recommendations.js';
import AchievementList from '../components/about/AchievementList.jsx';
import MoreList from '../components/about/MoreList.jsx';
import ProfileCard from '../components/about/ProfileCard.jsx';
import RulesGrid from '../components/about/RulesGrid.jsx';
import Story from '../components/about/Story.jsx';
import Quote from '../components/ui/Quote.jsx';
import SectionBlock from '../components/ui/SectionBlock.jsx';
import ViewHeader from '../components/ui/ViewHeader.jsx';
import './AboutPage.css';

/**
 * AboutPage — URL: /about
 *
 * Top to bottom:
 *   Story + ProfileCard : the personal intro, side by side
 *   RulesGrid           : "Rules I build by"
 *   AchievementList     : "Unlocked along the way"
 *   Quote cards         : "What people say" (hidden until
 *                         src/data/recommendations.js has entries)
 *   MoreList            : "More of me"
 *
 * All of the other text lives in src/data/about.js.
 */
export default function AboutPage() {
  return (
    <div className="wrap">
      <ViewHeader title="Who I am" />

      <div className="about-page__intro">
        <Story paragraphs={story} />
        <ProfileCard rows={profileRows} />
      </div>

      <SectionBlock title="Rules I build by">
        <RulesGrid rules={rules} />
      </SectionBlock>

      <SectionBlock title="Unlocked along the way">
        <AchievementList items={achievements} />
      </SectionBlock>

      {/* Only render this section when there is at least one real quote. */}
      {recommendations.length > 0 && (
        <SectionBlock title="What people say">
          <div className="about-page__quotes">
            {recommendations.map((quote) => (
              <Quote key={quote.id} quote={quote} />
            ))}
          </div>
        </SectionBlock>
      )}

      <SectionBlock title="More of me">
        <MoreList items={more} />
      </SectionBlock>
    </div>
  );
}
