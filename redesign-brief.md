# kieronodonoghue.com redesign brief

Drafted 13 Nov 2026 with Kieron. This is the plan to hand to Claude Code for the redesign. `CLAUDE.md` has been updated to match it (13 Nov 2026).

## 1. Goal

A personal home base where Kieron puts himself out there. It is not aimed at recruiters and is not a CV.

The story changes from "this is where I work" to **"this is what I'm building"**. Kieron no longer works at Milleen Constructions, so the current-employer framing comes out everywhere. He is still a business analyst at heart, and that stays part of the identity.

## 2. Positioning (draft, Kieron to confirm wording)

> I'm Kieron O'Donoghue. I'm a business analyst who builds things: apps, tools and systems that solve practical problems. I run Riptide Digital, where I'm building PainTrail, a pain diary app. I also write fiction.

Rules from `CLAUDE.md` still apply: plain, grounded, first person, honest about skill level, no inflated titles.

## 3. Link with Riptide Digital

Both sites should be obviously connected, with Kieron's name on both.

- **On this site:** a Riptide Digital link in the header or footer, a Riptide Digital and apps section on the home page, and a mention on About. Person schema gets `founder` / `worksFor` pointing at a Riptide Digital `Organization` with url `https://riptidedigital.com.au`, and riptidedigital.com.au goes into `sameAs`.
- **On riptidedigital.com.au** (separate repo and thread): "Built by Kieron O'Donoghue" with a link back, and the Organization schema's `founder` pointing at this site.
- The two sites don't need to share a palette. The business site is light (sea-mist, ocean navy, teal) and this one stays dark. They are tied together by the name, the cross-links and perhaps a small shared Riptide mark.
- Until the business site is live, show Riptide Digital as "coming soon" or hide the link with a flag in `src/consts.ts`.

## 4. Structure

Proposed nav, five items:

| Nav item | What it holds | Replaces |
|---|---|---|
| Home | Intro, what I'm building, recent writing, books | Home |
| Building | Apps and projects (PainTrail, Riptide Digital, this site, past projects) | Projects, most of Work |
| Writing | Articles and shorter notes (ideas become a tag or category) | Writing, Ideas |
| Books | Unchanged content, refreshed design | Books |
| About | Story, background (BA, study, past work in general terms), interests, links | About, Work, Links |

- Keep `/links/` as a page without a nav entry, since it's handy as a "link in bio".
- Add redirects for any URL that goes away, for example `/work/` to `/about/` and `/ideas/*` to `/writing/*`. With Cloudflare Pages that's a `public/_redirects` file.
- Keep a "Now" line, but drive it from one dated entry in `src/consts.ts` so it's easy to keep current (the current one still says May 2026).

## 5. Home page

1. **Hero:** full name as the H1, the one-line positioning, two actions (what I'm building, Riptide Digital).
2. **Now building:** PainTrail and Riptide Digital cards with an honest status (in development, coming to Android). MindTrail stays out until it's announced.
3. **Recent writing:** 2 or 3 items.
4. **Books:** a slim strip with the series covers.
5. **Footer:** socials, email, Riptide Digital link.

Shorter than today's 8-section stack. Fewer boxed cards, more space.

## 6. Visual direction

- **Keep:** dark, high contrast, green on black.
- **Refine:** a near-black base rather than navy slate, one sharper green accent (a slight neon) used sparingly for emphasis rather than everywhere, stronger and more distinctive type, better spacing and rhythm, fewer borders and boxes.
- **Motion:** keep one signature effect, either the current data-rain background or the cinematic hero on the `staging` branch, but quieter, and always off under `prefers-reduced-motion`. Add subtle scroll reveals and page transitions only if they earn their place.
- **Detail is up to Claude Code:** use one design skill (taste or impeccable) to lead. Before writing code, have it propose tokens, type and two home-page directions, then pick one.
- **Accessibility:** contrast must still pass WCAG AA. Neon green on black is fine for text, but check muted greys and small text.

## 7. Don't touch

- `/stat` (`public/stat/index.html`) and `supabase/`: Sara's study app. The redesign must not change or restyle it. Check it still loads after the redesign.
- Book content and images.
- SEO basics: Person and WebSite schema, canonical URLs, sitemap, OG tags, full name in titles.

## 8. Order of work for Claude Code

0. **Housekeeping (before starting):**
   - Local `staging` has 4 commits not pushed to GitHub. Push them first.
   - ~~Rename the folder to `kieronodonoghue.com`.~~ Done.
   - `git status` shows 9 files as modified, but they are only line-ending changes. Add a `.gitattributes` with `* text=auto eol=lf` to stop that, or discard them with `git checkout -- .`.
   - Create a `redesign` branch off `staging`.
1. ~~**Update `CLAUDE.md`** to match this brief.~~ Done 13 Nov 2026 (it is gitignored, so it stays local).
2. **Design direction** with the design skill: tokens, type, two home concepts. Pick one.
3. **Foundations:** `global.css` tokens, layout, header, footer.
4. **Home page.**
5. **Section pages:** Building (merging Projects and Work), Writing (merging Ideas), Books, About (merging Links).
6. **Content pass:** rewrite About and project copy for the new story. Add PainTrail and Riptide Digital entries.
7. **Checks:** `npm run build`, mobile widths, keyboard navigation, reduced motion, contrast, redirects, `/stat` still working.
8. **Preview** on the staging deploy, then merge to `main`.

## 9. Open questions for Kieron

1. What exact wording for the title: "business analyst", "Business Analytics graduate", or both? Are you still studying the Bachelor of Commerce?
2. How much should the site say about PainTrail before launch? A name and one line, or a proper project page?
3. Should the STAT app appear as a project, or stay private?
4. Should Ideas fold into Writing as proposed, or go away entirely?
5. Should Facebook stay a prominent link, or move to the footer only?

## Starter prompt for Claude Code

> Read `redesign-brief.md` and `CLAUDE.md`. We're redesigning the site per the brief, starting at step 2: create a `redesign` branch off `staging`, then use the design skill to propose design directions before writing any page code. Don't touch `public/stat/` or `supabase/`.
