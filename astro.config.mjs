import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro'

export default defineConfig({
  integrations: 
  [
    react(), 

    sanity({
        projectId: '3v8sx1or',
        dataset: 'production',
        // Set useCdn to false if you're building statically.
        useCdn: false,
        // Optional: log server-side Sanity client requests.
        // Modes: 'dev' | 'build' | 'always'
        logClientRequests: 'dev',
    })]
});