# LaverageAI Website

Marketing site for LaverageAI — an AI implementation consultancy helping small businesses and
non-technical teams adopt AI with confidence.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme` configuration, no `tailwind.config.js`)
- Framer Motion for scroll reveals and the accordion/menu transitions
- Lucide for iconography
- Inter via `next/font/google`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Structure

```
app/            layout, page, globals.css, icon.svg, robots.ts, sitemap.ts
components/
  animations/   Reveal (scroll fade-up), Parallax (scroll-linked drift)
  layout/       Navbar, Footer
  sections/     Hero, Industries, Services, Process, Statement, Workshops, FAQ, Contact
  ui/           Logo, Button, SectionHeading
hooks/          useScrolled
lib/            site.ts (brand + SEO constants), content.ts (all page copy)
types/          shared content types
```

All page copy lives in `lib/content.ts` and all brand/SEO constants in `lib/site.ts`, so text and
metadata can be edited without touching component code.

## Design tokens

The palette is defined once in the `@theme` block of `app/globals.css` and consumed through
Tailwind utilities (`bg-ink`, `bg-card`, `border-line`, `text-muted`, `text-faint`).

| Token           | Value                      |
| --------------- | -------------------------- |
| `ink`           | `#000000`                  |
| `surface`       | `#0E0E0E`                  |
| `card`          | `#111111`                  |
| `line`          | `rgba(255,255,255,0.08)`   |
| `fg`            | `#FFFFFF`                  |
| `muted`         | `rgba(255,255,255,0.65)`   |

Section rhythm is controlled by `--spacing-section` / `--spacing-section-sm`, used as
`py-section-sm sm:py-section`.

## Motion

`Reveal` and `Parallax` both call Framer Motion's `useReducedMotion` and render static markup when
the visitor prefers reduced motion. `globals.css` also carries a `prefers-reduced-motion` block that
neutralises the CSS keyframe animations (hero grid drift, glow breathe, industries marquee).

## Contact form

The form composes a `mailto:` link to the address in `lib/site.ts`, so the site deploys with no
backend. For real lead capture, replace the `handleSubmit` body in
`components/sections/ContactForm.tsx` with a server action or a POST to your CRM/form endpoint.

## Before going live

- Update `email` and `linkedin` in `lib/site.ts` — these are placeholders.
- Add an Open Graph image at `app/opengraph-image.png` (1200×630); metadata is already wired up.
