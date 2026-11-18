import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite is the tool that runs the dev server (`npm run dev`)
// and bundles the site for production (`npm run build`).
export default defineConfig({
  plugins: [react()],

  // './' makes every asset path relative, so the built site works
  // from any folder on any static host (GitHub Pages, Netlify, Vercel...).
  base: './',
});
