import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services offered. Editable via the CMS.
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Past events shown in the Portfolio gallery. Editable via the CMS.
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    date: z.string().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Editable long-form page bodies (About, etc.). Editable via the CMS.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { services, portfolio, pages };
