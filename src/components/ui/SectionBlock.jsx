import './SectionBlock.css';

/**
 * SectionBlock — a titled section inside a page
 * (for example "Rules I build by" on the About page).
 *
 * @param {string} title    The section heading.
 * @param {string} intro    (optional) One line under the heading.
 * @param {node}   children The section content.
 */
export default function SectionBlock({ title, intro, children }) {
  return (
    <section className="section-block">
      <h2 className="section-block__title">{title}</h2>
      {intro && <p className="section-block__intro">{intro}</p>}
      <div className="section-block__body">{children}</div>
    </section>
  );
}
