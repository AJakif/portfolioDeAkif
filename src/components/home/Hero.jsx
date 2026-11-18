import { hero, profile } from '../../data/profile.js';
import Button from '../ui/Button.jsx';
import NetworkCanvas from './NetworkCanvas.jsx';
import TypedRole from './TypedRole.jsx';
import './Hero.css';

/**
 * Hero — the big opening section of the Home page.
 *
 * Layers, from back to front:
 *   1. NetworkCanvas : the animated dots-and-lines background
 *   2. the vertical katakana lettering on the right
 *   3. the text: location chip, greeting, name, typed role, intro, buttons
 *
 * All text comes from `hero` and `profile` in src/data/profile.js.
 */
export default function Hero() {
  return (
    <section className="hero">
      <NetworkCanvas />

      {/* Decorative, so screen readers skip it. */}
      <div className="hero__kana" aria-hidden="true">
        {profile.kana}
      </div>

      <div className="wrap">
        <div className="hero__content">
          <span className="hero__chip">
            <i className="hero__chip-dot" />
            {profile.location}
          </span>

          <p className="hero__greeting">{hero.greeting}</p>
          {/* .glitch + data-text: see src/styles/glitch.css */}
          <h1 className="hero__name glitch" data-text={profile.name}>
            {profile.name}
          </h1>

          <TypedRole roles={hero.roles} />

          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            {hero.actions.map((action) => (
              <Button key={action.to} to={action.to} variant={action.variant}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
