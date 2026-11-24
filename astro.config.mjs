import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://example.invalid',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
