import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown : {
      shikiConfig : {
          theme : "material-theme-ocean"
      },
  },

  integrations: []
});