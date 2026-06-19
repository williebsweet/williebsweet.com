import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { join } from 'node:path';
import { hasContentFiles } from './utils/content-files';

const linksContentBase = './src/content/links';
const linksContentDir = join(process.cwd(), linksContentBase);

const essays = defineCollection({
  loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
    followsUp: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const links = defineCollection({
  loader: hasContentFiles(linksContentDir)
    ? glob({ base: linksContentBase, pattern: '**/*.{md,mdx}' })
    : () => [],
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    url: z.string().url(),
  }),
});

export const collections = { essays, links };
