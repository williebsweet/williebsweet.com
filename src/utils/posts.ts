import { getCollection } from 'astro:content';

export async function getAllPosts() {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  let links: Awaited<ReturnType<typeof getCollection>>  = [];
  try {
    links = await getCollection('links', ({ data }) => !data.draft);
  } catch {
    // Collection may be empty — that's fine
  }

  const all = [
    ...essays.map(e => ({ ...e, collection: 'essays' as const })),
    ...links.map(l => ({ ...l, collection: 'links' as const })),
  ];

  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getRecentPosts(count = 5) {
  const all = await getAllPosts();
  return all.slice(0, count);
}
