import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Weyabas Static Web',

  projectId: '3v8sx1or',
  dataset: 'production',
  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});