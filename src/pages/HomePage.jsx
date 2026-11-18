import { facts, homeTape, now } from '../data/profile.js';
import Hero from '../components/home/Hero.jsx';
import FactGrid from '../components/home/FactGrid.jsx';
import NowGrid from '../components/home/NowGrid.jsx';
import SectionBlock from '../components/ui/SectionBlock.jsx';
import Tape from '../components/ui/Tape.jsx';

/**
 * HomePage — URL: /
 *
 * Top to bottom:
 *   Hero      : name, typed role, intro, buttons, animated background
 *   Tape      : the scrolling apricot band
 *   FactGrid  : four headline numbers
 *   NowGrid   : "What I'm on right now" cards
 *
 * All of the text lives in src/data/profile.js.
 * To reorder the page, move the components below.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="wrap">
        <Tape items={homeTape} />
        <FactGrid facts={facts} />

        <SectionBlock title="What I'm on right now" intro="Pick one to open the full story.">
          <NowGrid items={now} />
        </SectionBlock>
      </div>
    </>
  );
}
