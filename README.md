# WebGaze Clone

A pixel-perfect clone of [webgaze.com.au](https://webgaze.com.au/) — a strategic web design, branding, and SEO studio.

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** for animations
- **React Router v6** for routing

## Features

- Adaptive navbar with sliding red pill indicator
- Services mega menu with hover delay
- Hero section with staggered entrance animations
- Typewriter effect on tagline
- Scroll-driven 3D reveal carousel (Framer Motion)
- Infinite autoplay marquee rows
- Blur-to-clear image reveal on scroll
- Responsive design (mobile + desktop)
- Light/dark section-aware navbar

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── LogoMarquee.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── ProjectsParallax.jsx
│   │   ├── ServicesSection.jsx
│   │   └── TestimonialsFAQ.jsx
│   └── shared/
│       ├── CTABanner.jsx
│       ├── Footer.jsx
│       ├── Navbar.jsx
│       └── ProjectCard.jsx
├── data/
│   ├── navigation.js
│   ├── projects.js
│   ├── services.js
│   └── testimonials.js
├── hooks/
│   ├── useScrollProgress.jsx
│   └── useTypewriter.jsx
├── pages/
│   ├── Home.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## License

This is a clone for educational purposes. Original design by [WebGaze](https://webgaze.com.au/).
