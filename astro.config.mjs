// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/*
  Design previews for the redesign (src/pages/_preview/).
  Astro ignores folders that start with "_", so those pages are never built,
  deployed or added to the sitemap. This small integration makes them viewable
  in `npm run dev` only, at /_preview/a and /_preview/b.
  Delete this block (and the folder) once a direction is chosen.
*/
const designPreviews = {
  name: 'design-previews',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev') return;
      for (const page of ['a', 'b']) {
        injectRoute({
          pattern: `/_preview/${page}`,
          entrypoint: `./src/pages/_preview/${page}.astro`,
        });
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://kieronodonoghue.com',
  integrations: [mdx(), sitemap(), designPreviews],
  vite: {
    plugins: [tailwindcss()],
  },
});
