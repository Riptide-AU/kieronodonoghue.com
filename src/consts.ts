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
    'Kieron O’Donoghue is a business analyst who builds things: apps, tools and systems that solve practical problems. He runs Riptide Digital, where he is building PainTrail, a pain diary app, and he writes fiction.',
  jobTitle: 'Business Analyst',
  locale: 'en_AU',
  lang: 'en',
} as const;

/**
 * The "Now" line on the home page. Update the date and text together
 * whenever what you are working on changes.
 */
export const NOW = {
  date: '2026-11-13',
  text: 'Building PainTrail and setting up Riptide Digital.',
} as const;

/**
 * Primary navigation. Order matters.
 */
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Building', href: '/building/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Books', href: '/books/' },
  { label: 'About', href: '/about/' },
] as const;

/**
 * Riptide Digital, Kieron's app business.
 * If `live` is set to false the site shows "coming soon" instead of a link.
 */
export const RIPTIDE = {
  name: 'Riptide Digital',
  url: 'https://riptidedigital.com.au',
  live: true,
} as const;

export const CONTACT_EMAIL = 'kieron_o@outlook.com';

/** External profiles. `sameAs` feeds the Person structured data. */
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/kierono1/',
  facebook: 'https://www.facebook.com/kieron.odonoghue.7',
  github: 'https://github.com/Riptide-AU',
  amazon: 'https://www.amazon.com/author/kieron_odonoghue',
  goodreads: 'https://www.goodreads.com/kieron_odonoghue',
} as const;

/** Links rendered in the footer and Links page, in display order.
 *  These also feed the Person schema `sameAs` (http entries only). */
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'Facebook', href: SOCIAL.facebook },
  { label: 'GitHub', href: SOCIAL.github },
  { label: 'Amazon', href: SOCIAL.amazon },
  { label: 'Goodreads', href: SOCIAL.goodreads },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}` },
] as const;
