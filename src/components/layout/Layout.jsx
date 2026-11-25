import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NetworkCanvas from '../home/NetworkCanvas.jsx';
import { sectionOf } from '../../hooks/usePageWipe.js';

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
  const section = sectionOf(pathname);
  const previousPath = useRef(pathname);
  const mainRef = useRef(null);

  // Note: inside <Routes location={displayLocation}> (App.jsx), this is the
  // location being SHOWN, so during a wipe it updates only once the panel
  // covers the screen, and the scroll jump below happens out of sight.

  useEffect(() => {
    const lastPath = previousPath.current;
    previousPath.current = pathname;
    const changedSection = sectionOf(lastPath) !== section;
    const changedProject = section === 'work' && lastPath !== pathname;

    if (changedSection || changedProject) {
      window.scrollTo(0, 0);
      mainRef.current.querySelector('h1')?.focus({ preventScroll: true });
    }
  }, [pathname, section]);

  return (
    <>
      {section !== 'home' && <NetworkCanvas variant="ambient" />}
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
