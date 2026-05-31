# Content images

Hero/banner and (future) gallery images for writing, projects, and ideas live here.

## Usage

Reference an image from a content file's frontmatter with a relative path. Astro
imports and optimises it (responsive `srcset`, modern formats, no layout shift):

```yaml
---
title: "Example project"
heroImage: ../../assets/images/example-hero.png
heroImageAlt: "Useful description of what the image shows"
---
```

- `heroImageAlt` is **required** whenever `heroImage` is set (enforced in `src/content.config.ts`).
- Pages render fine with no image — the hero simply omits the banner.
- Rendering goes through `src/components/FeatureImage.astro`, which handles
  responsive sizing and reserves space to avoid layout shift.

## Future galleries

Galleries can be added later by introducing a `gallery` array field in the schema
and reusing `FeatureImage` for each item — no restructuring required.
