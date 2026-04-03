import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://williebsweet.com',
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
    },
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
