import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://weyaluseries.net',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react(), partytown(), sitemap()],
});