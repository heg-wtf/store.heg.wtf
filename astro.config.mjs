// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://store.heg.wtf',
  output: 'static',
  build: { format: 'directory' },
});
