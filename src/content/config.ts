import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
    tags: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectCollection,
};
