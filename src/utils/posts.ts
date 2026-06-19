import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { join } from 'node:path';
import { hasContentFiles } from './content-files';

const linksContentDir = join(process.cwd(), 'src/content/links');

export async function getPublishedLinks(): Promise<CollectionEntry<'links'>[]> {
  if (!hasContentFiles(linksContentDir)) return [];

  return getCollection('links', ({ data }) => !data.draft);
}

export async function getAllPosts() {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const links = await getPublishedLinks();

  const all = [
    ...essays.map(e => ({ ...e, collection: 'essays' as const })),
    ...links.map(l => ({ ...l, collection: 'links' as const })),
  ];

  return all.sort((a, b) => {
    const aPinned = 'pinned' in a.data && a.data.pinned;
    const bPinned = 'pinned' in b.data && b.data.pinned;
    if (aPinned && !bPinned) return -1;
    if (!aPinned && bPinned) return 1;
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}

export async function getRecentPosts(count = 5) {
  const all = await getAllPosts();
  return all.slice(0, count);
}
