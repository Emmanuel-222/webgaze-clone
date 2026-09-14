# WebGaze Clone — Design Spec

## Overview

Pixel-perfect React clone of https://webgaze.com.au/ — specifically the **Home** and **Projects** pages. Light mode only, desktop + mobile responsive, with actual images downloaded from the live site.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 (Vite) |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Animation | CSS transitions + Intersection Observer (no Framer Motion/GSAP) |
| Fonts | Google Fonts or self-hosted WOFF2 (match original: display + body pair) |
| Icons | Inline SVGs (no icon library) |

## Scope

- **Home page** — all 9 sections (nav, hero, marquee, services, projects parallax, process, testimonials/FAQ, CTA, footer)
- **Projects page** — hero banner, filterable project grid, CTA bar, footer
- **Navigation** — React Router between pages
- **Responsive** — mobile + desktop breakpoints matching original
- **Theme** — Light mode only (forced, no toggle)

## Design Tokens (from original site)

### Colors
```
brand-red: #E01B24
brand-red-dark: (darker variant for hover)
dark-bg: #0a0a0a
dark-surface: #101010
dark-elevated: #111
dark-muted: #9a9a92
dark-border: #292929
light-bg: #f4f4f1
light-muted: (lighter grays)
light-border: #cfcfca
text-primary: #fafafa (on dark), #4a4a4a (on light)
```

### Typography
- **Display font** — bold, used for headings, nav, buttons, labels
- **Body font** — regular weight, used for paragraphs, descriptions
- Fluid responsive headings: `clamp(2.55rem, 10.5vw, 3.7rem)`
- Label tags: `10px`, uppercase, `tracking-[0.24em]`

### Spacing
- Section padding: custom `section-pad` utility
- Container max-width: ~1320px (custom `container-wide`)

## Component Architecture

### Shared Components
1. **Navbar** — Fixed glassmorphism pill nav, mobile hamburger, logo, nav links, CTA button
2. **Footer** — 4-column grid, logo, services/company/contact columns, newsletter form, copyright
3. **CTABanner** — Dark bg, red accent line, heading, two CTA buttons
4. **ProjectCard** — 4:3 aspect ratio image, title, category tags, hover scale effect

### Home Page Components
5. **HeroSection** — SVG geometric background, animated heading, typewriter subtitle, CTAs, scroll indicator
6. **LogoMarquee** — Auto-scrolling infinite marquee of client logos with fade edges
7. **ServicesSection** — Sticky heading left, 6 stacking service cards right (scroll-driven)
8. **ProjectsParallax** — 3D perspective scroll parallax, two rows of project cards at different speeds
9. **ProcessSection** — 4-step timeline with connecting line, numbered circles
10. **TestimonialsFAQ** — Two-column: testimonial carousel + FAQ accordion

### Projects Page Components
11. **ProjectsHero** — Dark banner with background image, breadcrumb, heading
12. **ProjectsGrid** — Filter bar (All/Web Design/Branding/UI/UX) + 3-column responsive grid
13. **FilterBar** — Pill-style filter buttons with active state (red fill)

## Key Interactions

1. **Navbar scroll effect** — backdrop blur + opacity changes on scroll
2. **Mobile menu** — slide-in overlay triggered by hamburger
3. **Typewriter animation** — cycling text with cursor blink on hero
4. **Logo marquee** — CSS infinite scroll animation
5. **Service cards sticky stacking** — scroll-driven sticky positioning with progressive top/z-index
6. **Projects parallax** — scroll-driven 3D perspective transforms on two card rows
7. **Project card hover** — image scale 1.03x, text color transition
8. **Filter click** — animate cards in/out with opacity + translateY
9. **Testimonial carousel** — auto-advancing with progress bar
10. **FAQ accordion** — expand/collapse with smooth height transition
11. **Scroll-triggered fade-in** — Intersection Observer for section entrance animations

## Image Assets to Download

### Client Logos (5)
- Care Partners Australia
- AGCCI
- Salaka Dance Ensemble
- Viride Energy Africa
- Camden Tyre Recycle

### Project Covers (12)
- care-partners-australia-cover.jpg
- australian-ghanaian-chamber-of-commerce-cover.jpg
- winstamac-cover.webp
- sababa-global-cover.webp
- viride-energy-africa-cover.webp
- ben-ari-accounting-cover.jpg
- phytoscience-australia-cover.webp
- petra-care-services-cover.webp
- onboard-plumbing-cover.jpg
- janny-global-cover.webp
- downunder-radio-cover.jpg
- salaka-dance-ensemble-cover.webp

### Other
- WebGaze logo (white variant for header)
- Service header background image (projects page hero)
- Hero section SVG geometric background (will recreate as React SVG)

## File Structure

```
webgaze-clone/
├── public/
│   └── images/
│       ├── logos/
│       ├── projects/
│       └── hero-bg.jpg
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CTABanner.jsx
│   │   │   └── ProjectCard.jsx
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── LogoMarquee.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── ProjectsParallax.jsx
│   │       ├── ProcessSection.jsx
│   │       └── TestimonialsFAQ.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── hooks/
│   │   ├── useInView.jsx
│   │   └── useScrollProgress.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── services.js
│   │   └── testimonials.js
│   ├── styles/
│   │   └── index.css (Tailwind directives + custom CSS)
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
└── vite.config.js
```

## Verification

1. Run `npm run dev` — both pages load without errors
2. Home page: all 9 sections visible and correctly styled
3. Projects page: filter buttons work, cards animate
4. Navigation: clicking nav links routes between pages
5. Responsive: test at 375px (mobile), 768px (tablet), 1024px+ (desktop)
6. Visual comparison: side-by-side with original site for pixel accuracy
