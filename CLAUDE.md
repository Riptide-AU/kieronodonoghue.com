# CLAUDE.md

## Project

This is the source code for **kieronodonoghue.com**, the personal website and digital home of **Kieron O'Donoghue**.

The site is not primarily a job-application portfolio. It is a personal website, writing hub, project archive, and long-term online identity for Kieron O'Donoghue.

## Primary Purpose

Create the definitive online representation of **Kieron O'Donoghue**.

The site should:
- Present Kieron clearly, professionally, and authentically.
- Support long-term personal brand management.
- Associate the name "Kieron O'Donoghue" with useful, current, self-authored content.
- Link clearly to Kieron's main social profiles.
- Provide a place for writing, projects, ideas, learning notes, and personal interests.

## Positioning

Kieron O'Donoghue is a Corporate Services Analyst with Milleen Constructions, a Business Analytics graduate, and a Bachelor of Commerce (Accounting) student.

He is interested in:
- Business analytics
- Construction and corporate services
- Accounting and commercial systems
- Process improvement
- Automation
- Python
- SQL
- JavaScript
- CSS
- Web application development
- AI
- Writing
- Game design
- Boats, motorcycles, and practical DIY projects

The site should present Kieron as a practical, curious, analytical person who builds systems, writes about ideas, and learns in public.

## Tone and Style

The writing style should be:
- Clear
- Direct
- Grounded
- Professional but human
- Slightly creative and personal
- Free of inflated claims
- Free of generic corporate buzzwords

Avoid language like:
- "Visionary"
- "Thought leader"
- "Passionate innovator"
- "Data ninja"
- "Rockstar developer"
- "World-class"

Prefer language like:
- "I build practical systems."
- "I write about what I'm learning."
- "I use analytics, accounting, and technology to understand and improve business processes."
- "This site is a home for my work, ideas, notes, and projects."

## Site Concept

The site should feel like a polished personal knowledge hub.

It should combine:
- Personal website
- Digital garden
- Project archive
- Writing hub
- Professional profile

It should not feel like:
- A résumé template
- A generic SaaS landing page
- A fake startup
- A pure developer portfolio
- A flashy agency site

## Proposed Site Structure

Use this general information architecture:

- Home
- About
- Work
- Projects
- Writing
- Ideas
- Links

### Home

Purpose: introduce Kieron O'Donoghue clearly and make the site feel current.

Include:
- Full name: Kieron O'Donoghue
- Short positioning statement
- Current status
- Featured writing
- Featured projects
- Links to LinkedIn and Facebook
- Internal links to About, Work, Projects, Writing, and Ideas

Suggested homepage positioning:

"Kieron O'Donoghue is a Corporate Services Analyst, Business Analytics graduate, and Bachelor of Commerce (Accounting) student based in Australia. He writes about business, technology, systems, analytics, AI, and the projects he is building."

### About

Purpose: tell Kieron's story without turning it into a CV.

Include:
- Who Kieron is
- What he is currently doing
- What he is studying
- What he is learning
- What he is interested in
- Why this website exists

Avoid oversharing private family details.

### Work

Purpose: describe Kieron's professional work at a high level.

Include:
- Current role: Corporate Services Analyst at Milleen Constructions
- Business systems
- Reporting
- Process improvement
- Construction industry context
- Analytics/accounting/operations intersection

Do not include confidential internal details about Milleen Constructions or any work web app.

### Projects

Purpose: document projects and case studies.

Project examples:
- Payroll automation using Excel VBA
- HRIS onboarding analysis
- Saint Ann's school location analysis
- Personal website build
- Web application development learning journey
- Future analytics, AI, or coding projects

Project pages should use a consistent format:
- Overview
- Context
- Problem
- Approach
- Tools
- Outcome or current status
- What I learned

Do not exaggerate outcomes. Use careful wording where exact results are not public or verifiable.

### Writing

Purpose: publish articles, notes, reflections, and updates.

Writing categories may include:
- Business
- Analytics
- Accounting
- Construction
- Technology
- AI
- Learning notes
- Web development
- Personal projects

Writing can include polished articles and shorter notes.

### Ideas

Purpose: hold developing thoughts, experiments, and personal concepts.

Possible areas:
- AI and game design
- MMO/game systems
- Business ideas
- Automation concepts
- Personal experiments
- Notes on tools and workflows

Ideas do not need to be finished essays.

### Links

Purpose: help people and search engines connect Kieron's online presence.

Include:
- LinkedIn
- Facebook
- GitHub if available
- Email/contact option

## SEO and Brand Management

This site has an important personal search and reputation-management role.

Use the full name **Kieron O'Donoghue** naturally throughout:
- Homepage title
- Homepage H1
- About page
- Footer
- Metadata
- Author fields for writing
- Project pages where appropriate

Do not keyword-stuff. The writing must remain natural.

Every page should have:
- Unique title
- Meta description
- Canonical URL where appropriate
- Open Graph metadata
- Sensible heading structure

Use schema.org structured data where appropriate:
- Person schema for Kieron O'Donoghue
- WebSite schema
- Article schema for writing posts

## Visual Direction

Design should feel:
- Professional
- Polished
- Calm
- Slightly creative
- Personal
- Trustworthy
- Analytical

Suggested visual language:
- Dark navy, charcoal, or deep slate base
- Off-white content areas
- Muted blue/green accent
- Subtle grid or data-inspired pattern
- Strong typography
- Spacious layout
- Clean cards
- Minimal animations
- Mobile-first responsive design

Avoid:
- Overly bright gradients
- Generic startup visuals
- Excessive animation
- Fake dashboard clutter
- Visual noise

## Technical Stack

Use:
- Astro
- TypeScript
- Tailwind CSS
- Markdown or MDX for writing and project content
- Static generation
- No backend unless specifically required later

Hosting target:
- GitHub repository
- Cloudflare Pages
- Domain: kieronodonoghue.com

## Development Principles

Prioritise:
- Simplicity
- Maintainability
- Fast load times
- Accessibility
- Clean file structure
- Reusable components
- Content-first design
- Easy future editing

Avoid:
- Unnecessary frameworks
- Premature backend
- Over-engineering
- Complex state management
- Heavy animation libraries unless genuinely useful

## Accessibility

The site must:
- Use semantic HTML
- Maintain good colour contrast
- Support keyboard navigation
- Use descriptive link text
- Include alt text for meaningful images
- Avoid relying on colour alone
- Have logical heading levels

## Content Rules

When writing content:
- Use first person where appropriate.
- Be honest about skill level.
- Avoid pretending to be more senior than Kieron is.
- Avoid exposing confidential work details.
- Do not include private personal details unless explicitly requested.
- Keep the tone confident but not inflated.

## Public Work App Reference

Kieron is developing skills in Python, CSS, JavaScript, and SQL while building a web app for work.

This may be referenced publicly only in general terms.

Do not describe:
- Internal architecture
- Internal business logic
- Company data
- Screenshots
- Proprietary workflows
- Unreleased features

Acceptable wording:
"I am currently developing my Python, SQL, JavaScript, and CSS skills through practical web application work and personal projects."

## Initial Build Goal

Build the first version of the website with:

- Home page
- About page
- Work page
- Projects index
- Writing index
- Ideas index
- Links/contact page
- Shared layout
- Header navigation
- Footer
- SEO metadata component
- Reusable content card components
- Markdown/MDX content support

The first version does not need to be perfect. It should establish the structure and visual direction clearly.

## Commit Discipline

Use meaningful commits.

Examples:
- `Initial Astro setup`
- `Add site layout and navigation`
- `Add homepage content`
- `Add writing content collection`
- `Add project pages`
- `Improve SEO metadata`

Before making large changes, explain the planned approach.