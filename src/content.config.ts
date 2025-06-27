import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    pubDate: z.date(),
    author: reference('authors'),
  }),
});


const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
  }),
});


const supporters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/supporters' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    date: z.date(),
  }),
});



export const collections = { blog, authors, supporters };