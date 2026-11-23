import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://example.invalid',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react()],
});