import { literal, StaticValue } from 'lit/static-html.js';

export const HEADLINE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type HeadlineTags = (typeof HEADLINE_TAGS)[number];

export const validHeadlineTags: HeadlineTags[] = [...HEADLINE_TAGS];

export const headlineTagMap: Record<HeadlineTags, StaticValue> = HEADLINE_TAGS.reduce(
  (acc, tag) => {
    acc[tag] = literal`${tag}`;
    return acc;
  },
  {} as Record<HeadlineTags, StaticValue>
);
