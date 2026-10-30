import { getCollection, type CollectionEntry } from 'astro:content';
import type { Page } from './content';

export type Story = CollectionEntry<'stories'>;

export const STORIES_PATH = '/stories';

export function storyPath(story: Story): string {
  return `${STORIES_PATH}/${story.id}`;
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function displayDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Published stories, newest first. */
export async function allStories(): Promise<Story[]> {
  const rows = await getCollection('stories', (s) => !s.data.draft);
  return rows.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}

function basePage(partial: Partial<Page> & Pick<Page, 'path' | 'title' | 'description' | 'lede'>): Page {
  return {
    schema: 'Article',
    crumbs: [],
    facts: [],
    paragraphs: [],
    faqs: [],
    ...partial,
  } as Page;
}

export function storiesIndexPage(): Page {
  return basePage({
    path: STORIES_PATH,
    title: 'Thailand travel stories and updates',
    description:
      'Short, checked Thailand travel stories: festival dates, park seasons, entry rules, and what changed this week, with sources and practical next steps.',
    lede: 'Short, checked updates for planning a trip to Thailand. Newest first.',
    crumbs: [
      { name: 'Thailand', href: '/' },
      { name: 'Stories', href: STORIES_PATH },
    ],
    photo: undefined,
  });
}

export function storyPage(story: Story): Page {
  const d = story.data;
  return basePage({
    path: storyPath(story),
    title: d.title,
    description: d.description,
    lede: d.lede,
    photo: d.photo,
    photoCredit: d.photoCredit,
    published: isoDate(d.date),
    modified: d.updated ? isoDate(d.updated) : undefined,
    crumbs: [
      { name: 'Thailand', href: '/' },
      { name: 'Stories', href: STORIES_PATH },
      { name: d.title, href: storyPath(story) },
    ],
  });
}
