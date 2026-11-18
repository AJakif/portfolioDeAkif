import { Outlet } from 'react-router-dom';

import { backgroundNav } from '../data/navigation.js';
import SegmentedNav from '../components/background/SegmentedNav.jsx';
import ViewHeader from '../components/ui/ViewHeader.jsx';

/**
 * BackgroundPage — URL: /background/...
 *
 * This page is a shell shared by three sub-pages:
 *   /background/experience -> src/pages/background/ExperiencePanel.jsx
 *   /background/skills     -> src/pages/background/SkillsPanel.jsx
 *   /background/education  -> src/pages/background/EducationPanel.jsx
 *
 * It draws the title and the tab switch. <Outlet /> is where React Router
 * renders whichever sub-page matches the URL (see the nested routes in
 * src/App.jsx).
 *
 * TO ADD A FOURTH TAB (for example "Certifications"):
 *   1. Create src/pages/background/CertificationsPanel.jsx
 *   2. Add a nested <Route path="certifications" ...> in src/App.jsx
 *   3. Add it to `backgroundNav` in src/data/navigation.js
 */
export default function BackgroundPage() {
  return (
    <div className="wrap">
      <ViewHeader title="Background">
        <SegmentedNav items={backgroundNav} />
      </ViewHeader>

      <Outlet />
    </div>
  );
}
