/**
 * main.jsx — the entry point. This is the first file that runs.
 *
 * It does three things:
 *   1. Loads the global styles (design tokens first, then base styles).
 *   2. Wraps the app in a router so we can have several pages.
 *   3. Renders <App /> into the #root div from index.html.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './styles/tokens.css'; // colors, fonts, spacing (must come first)
import './styles/global.css'; // base styles shared by every page
import './styles/glitch.css'; // shared text animation for the name and lettering

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      HashRouter keeps the current page after a "#" in the URL
      (for example  mysite.com/#/work/querio ).
      We use it because it works on every static host with zero server setup.
      If your host supports URL rewrites, you can swap this for BrowserRouter
      to get clean URLs without the "#".
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
