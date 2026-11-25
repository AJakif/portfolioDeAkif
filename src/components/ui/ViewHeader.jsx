import './ViewHeader.css';

/**
 * ViewHeader — the main heading at the top of a page.
 *
 * @param {string} title    The page title.
 * @param {node}   children (optional) Anything to show under the title,
 *                          such as an intro paragraph or a tab menu.
 */
export default function ViewHeader({ title, children }) {
  return (
    <div className="view-header">
      <h1 className="view-header__title" tabIndex={-1}>{title}</h1>
      {children}
    </div>
  );
}
