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

export const collections = { writing, projects, ideas };
