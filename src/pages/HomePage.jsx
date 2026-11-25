import { facts, homeTape } from '../data/profile.js';
import { projects } from '../data/projects.js';
import Hero from '../components/home/Hero.jsx';
import FactGrid from '../components/home/FactGrid.jsx';
import NowGrid from '../components/home/NowGrid.jsx';
import SectionBlock from '../components/ui/SectionBlock.jsx';
import Tape from '../components/ui/Tape.jsx';
import './HomePage.css';

/**
 * HomePage — URL: /
 *
 * Shows the intro, scrolling strip, career highlights and selected projects.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="wrap home-page__content">
        <Tape items={homeTape} />
        <SectionBlock title="A few highlights">
          <FactGrid facts={facts} />
        </SectionBlock>
        <SectionBlock title="Selected work">
          <NowGrid items={projects} />
        </SectionBlock>
      </div>
    </>
  );
}
