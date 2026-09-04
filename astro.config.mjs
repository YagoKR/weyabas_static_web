import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://weyaluseries.net',
  output: 'server',
  adapter: cloudflare(),
  integrations: [react(), partytown(), sitemap()],
});