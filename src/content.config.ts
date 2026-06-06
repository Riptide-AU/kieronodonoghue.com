import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';
import type { SchemaContext } from 'astro:content';

/**
 * Content collections for kieronodonoghue.com.
 * Authoring format is Markdown/MDX under src/content/<collection>/.
 * Schemas are intentionally small but typed so content stays consistent
 * and SEO/structured-data fields are always present.
 */

/**
 * Optional hero/banner image shared by every collection.
 * Images live in src/assets/images/ and are referenced from frontmatter
 * by a relative path so Astro can optimise them (responsive, no layout shift).
 * Alt text is required whenever an image is set (enforced below).
 */
const imageFields = (image: SchemaContext['image']) => ({
  heroImage: image().optional(),
  heroImageAlt: z.string().min(1).optional(),
});

/** Refinement: a hero image must always carry useful alt text. */
const hasAltWhenImage = (data: { heroImage?: unknown; heroImageAlt?: string }) =>
  !data.heroImage ||
  (typeof data.heroImageAlt === 'string' && data.heroImageAlt.length > 0);

const altRefineOptions = {
  message: 'heroImageAlt is required when heroImage is set.',
  path: ['heroImageAlt'],
};

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        /** e.g. Business, Analytics, Technology, AI, Learning notes. */
        category: z.string().optional(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        ...imageFields(image),
      })
      .refine(hasAltWhenImage, altRefineOptions),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        /** Current state, e.g. "Completed", "Ongoing", "Archived". */
        status: z.string().default('Ongoing'),
        /** Primary date for ordering (start or completion). */
        date: z.coerce.date(),
        tools: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        ...imageFields(image),
      })
      .refine(hasAltWhenImage, altRefineOptions),
});

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ideas' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        /** Digital-garden maturity, e.g. "Seedling", "Growing", "Evergreen". */
        stage: z.string().default('Seedling'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        ...imageFields(image),
      })
      .refine(hasAltWhenImage, altRefineOptions),
});

/**
 * Published fiction by Kieron O'Donoghue. The slug comes from the filename
 * (entry.id), matching the other collections. The Markdown body is reserved
 * for a future excerpt — the marketing blurb lives in frontmatter so the
 * book pages and Book structured data stay in sync without rendering content.
 */
const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Series name, e.g. "Soul War Saga". */
      series: z.string().optional(),
      /** Position within the series (1 = book one). */
      bookNumber: z.number().int().positive().optional(),
      author: z.string().default('Kieron O’Donoghue'),
      /** Genre tags, e.g. ["Fantasy", "Epic Fantasy"]. */
      genre: z.array(z.string()).default([]),
      /** Marketing blurb (multi-paragraph, separated by blank lines). */
      blurb: z.string(),
      /** Optional sample excerpt (multi-paragraph, separated by blank lines).
       *  Stored verbatim so punctuation/dialogue is preserved exactly. */
      excerpt: z.string().optional(),
      /** Optional shorter meta description; falls back to the blurb. */
      description: z.string().optional(),
      /** Retailer purchase link (Amazon for now). */
      buyLink: z.string().url(),
      /** Front cover, used in the interactive book hero and cards. */
      coverImage: image(),
      coverImageAlt: z.string().min(1),
      /** Optional inside cover / title page, shown on the left page when the
       *  interactive book opens. Falls back to a printed paper page. */
      insideCoverImage: image().optional(),
      insideCoverImageAlt: z.string().min(1).optional(),
      /** Optional full wrap cover (front + spine + back); currently unused. */
      fullCoverImage: image().optional(),
      fullCoverImageAlt: z.string().min(1).optional(),
      publishedDate: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { writing, projects, ideas, books };
