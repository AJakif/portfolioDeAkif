import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NetworkCanvas from '../home/NetworkCanvas.jsx';

/**
 * Layout — the frame around every page.
 *
 * It renders the header, the current page, and the footer.
 * Every page except Home also gets a calm animated background
 * (Home has its own, bolder one inside the hero).
 * <Outlet /> is where React Router puts the page for the current URL
 * (see the route table in src/App.jsx).
 */
export default function Layout() {
  const { pathname } = useLocation();

  // The first part of the URL: "/work/querio" -> "work", "/" -> "home".
  const section = pathname.split('/')[1] || 'home';

  // Note: inside <Routes location={displayLocation}> (App.jsx), this is the
  // location being SHOWN, so during a wipe it updates only once the panel
  // covers the screen, and the scroll jump below happens out of sight.

  // Jump back to the top when the visitor moves to a different section.
  // Switching tabs inside Background keeps the scroll position, because
  // the section ("background") stays the same.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  return (
    <>
      {section !== 'home' && <NetworkCanvas variant="ambient" />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
