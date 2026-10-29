import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** One markdown file per story in src/content/stories/. See STORIES.md. */
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string().min(20).max(90),
    seoTitle: z.string().min(30).max(60).optional(),
    description: z.string().min(70).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Festival', 'Season', 'Entry', 'Transport', 'Food', 'Nature', 'News']),
    lede: z.string().min(40).max(320),
    note: z.string().max(160).optional(),
    photo: z.string().regex(/^\/photos\/story-[a-z0-9-]+\.jpg$/),
    photoAlt: z.string().min(10),
    photoCredit: z.string().regex(/^Photo: .+ · (CC|Public domain)/),
    related: z.array(z.object({ label: z.string(), href: z.string().regex(/^\//) })).max(4).default([]),
    stayCity: z.string().optional(),
    tourQuery: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { stories };
