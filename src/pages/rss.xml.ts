import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: 'Primitive Thinking — Will Sweet',
    description: 'Essays and notes on applied AI, data infrastructure, and business strategy.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description ?? '',
      link: `/${post.collection}/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
