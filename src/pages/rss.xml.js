import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'The Email Markup Consortium Blog',
    description: 'News and updates from the Email Markup Consortium',
    site: context.site,
    customData: `<language>en-us</language>`,

    items: 
      blog
      .sort( (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() )
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
  });
}