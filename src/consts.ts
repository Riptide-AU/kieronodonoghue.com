/**
 * Central site configuration for kieronodonoghue.com.
 * Single source of truth for identity, navigation and social links so
 * metadata, the footer and structured data stay in sync.
 */

export const SITE = {
  name: 'Kieron O’Donoghue',
  url: 'https://kieronodonoghue.com',
  /** Short positioning statement used in metadata and structured data. */
  description:
    'Kieron O’Donoghue is a Corporate Services Analyst, Business Analytics graduate, and Bachelor of Commerce (Accounting) student based in Australia. He writes about business, technology, systems, analytics, AI, and the projects he is building.',
  jobTitle: 'Corporate Services Analyst',
  locale: 'en_AU',
  lang: 'en',
} as const;

/**
 * Animated background ("living knowledge network").
 * Settings flag so the effect can be turned on/off and the variant chosen.
 * Variants: 'grid' (animated data grid), 'network' (drifting node graph),
 * 'streams' (abstract matrix-inspired information streams), 'vertical-streams'
 * (more active, layered vertical data rain).
 * The effect always yields to prefers-reduced-motion. For quick comparison
 * you can also override the variant per-page with
 * ?bg=grid|network|streams|vertical-streams.
 */
export const BACKGROUND = {
  enabled: true,
  variant: 'vertical-streams' as
    | 'grid'
    | 'network'
    | 'streams'
    | 'vertical-streams',
} as const;

/** Primary navigation. Order matters. */
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Work', href: '/work/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Ideas', href: '/ideas/' },
  { label: 'Books', href: '/books/' },
  { label: 'Links', href: '/links/' },
] as const;

export const CONTACT_EMAIL = 'kieron_o@outlook.com';

/** External profiles. `sameAs` feeds the Person structured data. */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/kierono1/',
  facebook: 'https://www.facebook.com/kieron.odonoghue.7',
} as const;

/** Links rendered in the footer and Links page, in display order. */
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'Facebook', href: SOCIAL.facebook },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}` },
] as const;
