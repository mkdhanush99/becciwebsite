import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://example.invalid',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
