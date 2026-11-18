import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ViewWipe from './ViewWipe.jsx';

/**
 * Layout — the frame around every page.
 *
 * It renders the header, the current page, and the footer.
 * <Outlet /> is where React Router puts the page for the current URL
 * (see the route table in src/App.jsx).
 */
export default function Layout() {
  const { pathname } = useLocation();

  // The first part of the URL: "/work/querio" -> "work", "/" -> "home".
  const section = pathname.split('/')[1] || 'home';

  // Jump back to the top when the visitor moves to a different section.
  // Switching tabs inside Background keeps the scroll position, because
  // the section ("background") stays the same.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <>
      <ViewWipe section={section} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
