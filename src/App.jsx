/**
 * App.jsx — the route table. It maps each URL to a page component.
 *
 * HOW TO ADD A NEW PAGE
 *   1. Create the page in src/pages/ (copy AboutPage.jsx as a starting point).
 *   2. Add a <Route> for it below.
 *   3. Add a menu entry in src/data/navigation.js.
 */
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';

import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import BackgroundPage from './pages/BackgroundPage.jsx';
import ExperiencePanel from './pages/background/ExperiencePanel.jsx';
import SkillsPanel from './pages/background/SkillsPanel.jsx';
import EducationPanel from './pages/background/EducationPanel.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <Routes>
      {/* Layout draws the header and footer around every page. */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* /work shows the first project, /work/querio shows a specific one. */}
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:projectId" element={<WorkPage />} />

        {/* Background has three sub-pages that share one header. */}
        <Route path="background" element={<BackgroundPage />}>
          <Route index element={<Navigate to="experience" replace />} />
          <Route path="experience" element={<ExperiencePanel />} />
          <Route path="skills" element={<SkillsPanel />} />
          <Route path="education" element={<EducationPanel />} />
        </Route>

        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Any unknown URL goes back to the home page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
