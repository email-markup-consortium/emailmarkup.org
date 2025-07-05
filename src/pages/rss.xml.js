import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();


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
        link: `/en/blog/${post.id}/`,
        description: post.data.description,
        content: sanitizeHtml(parser.render(post.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
      })),
  });
}