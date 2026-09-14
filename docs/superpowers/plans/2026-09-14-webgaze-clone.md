# WebGaze Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect React clone of webgaze.com.au (Home + Projects pages) with Tailwind CSS, React Router, and CSS-based animations.

**Architecture:** Single-page React app with Vite, Tailwind CSS for styling, React Router for navigation. All animations via CSS transitions and Intersection Observer — no animation libraries. Images downloaded from the live site.

**Tech Stack:** React 18, Vite, Tailwind CSS v3, React Router v6

## Global Constraints

- Light mode only (no dark mode toggle)
- Desktop + mobile responsive (breakpoints: sm 640px, md 768px, lg 1024px)
- Brand red: `#E01B24`
- Dark backgrounds: `#0a0a0a`, `#101010`, `#0b0b0b`
- Light background: `#f4f4f1`
- Display font + body font pair (Google Fonts or self-hosted)
- No external animation libraries (Framer Motion, GSAP, etc.)
- All images downloaded to `public/images/`
- Inline SVGs for icons (no icon library)

---

## Task 1: Project Scaffolding

**Files:**
- Create: `webgaze-clone/package.json`
- Create: `webgaze-clone/vite.config.js`
- Create: `webgaze-clone/tailwind.config.js`
- Create: `webgaze-clone/postcss.config.js`
- Create: `webgaze-clone/index.html`
- Create: `webgaze-clone/src/main.jsx`
- Create: `webgaze-clone/src/App.jsx`
- Create: `webgaze-clone/src/index.css`

**Interfaces:**
- Produces: Working Vite + React + Tailwind dev server

- [ ] **Step 1: Initialize project**

```bash
cd D:\class-work
npm create vite@latest webgaze-clone -- --template react
cd webgaze-clone
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
```

- [ ] **Step 2: Configure Tailwind**

Replace `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-brand': '#E01B24',
        'red-dark': '#c4161e',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#101010',
        'dark-elevated': '#111',
        'dark-muted': '#9a9a92',
        'dark-border': '#292929',
        'light-bg': '#f4f4f1',
        'light-muted': '#b0b0a8',
        'light-border': '#cfcfca',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
      },
      maxWidth: {
        'wide': '1320px',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Configure CSS**

Replace `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-full bg-red-brand px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-dark;
  }
  .btn-outline {
    @apply inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10;
  }
  .btn-outline-dark {
    @apply inline-flex items-center justify-center gap-2 rounded-full border border-light-border bg-white px-6 py-3 text-sm font-semibold text-[#4a4a4a] transition-all duration-200 hover:border-red-brand hover:text-red-brand;
  }
  .label-tag {
    @apply inline-block rounded-full border border-red-brand/20 bg-red-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-red-brand;
  }
  .container-wide {
    @apply mx-auto w-full max-w-wide px-5 lg:px-8;
  }
  .section-pad {
    @apply py-16 md:py-24;
  }
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-body antialiased;
  }
}

/* Typewriter cursor blink */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-end infinite;
}

/* Infinite marquee */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 25s linear infinite;
}

/* Scroll fade-in */
.fade-in-up {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Red line animation */
@keyframes line-grow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
.animate-line-grow {
  animation: line-grow 1.2s ease-out forwards;
  transform-origin: left;
}
```

- [ ] **Step 4: Configure entry files**

Replace `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebGaze Clone</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Replace `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

Replace `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
```

- [ ] **Step 5: Create placeholder pages**

Create `src/pages/Home.jsx`:

```jsx
export default function Home() {
  return <div className="min-h-screen">Home Page - Coming Soon</div>
}
```

Create `src/pages/Projects.jsx`:

```jsx
export default function Projects() {
  return <div className="min-h-screen">Projects Page - Coming Soon</div>
}
```

- [ ] **Step 6: Verify dev server runs**

```bash
npm run dev
```

Expected: Server starts, pages load at localhost:5173

---

## Task 2: Download Image Assets

**Files:**
- Create: `public/images/logos/` (5 logo files)
- Create: `public/images/projects/` (12 project cover images)
- Create: `public/images/hero-bg.jpg`

**Interfaces:**
- Produces: All image assets ready for component use

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p public/images/logos
mkdir -p public/images/projects
```

- [ ] **Step 2: Download client logos**

Use `curl` or `wget` to download each logo from the live site. The logos are served via Next.js Image component — extract the actual image URLs from the HTML source.

```bash
# Download from webgaze.com.au - exact URLs will be identified during implementation
# Care Partners Australia, AGCCI, Salaka Dance Ensemble, Viride Energy Africa, Camden Tyre Recycle
```

- [ ] **Step 3: Download project cover images**

```bash
# Download all 12 project covers at appropriate resolution (800-1200px wide)
# care-partners-australia-cover.jpg, australian-ghanaian-chamber-of-commerce-cover.jpg,
# winstamac-cover.webp, sababa-global-cover.webp, viride-energy-africa-cover.webp,
# ben-ari-accounting-cover.jpg, phytoscience-australia-cover.webp, petra-care-services-cover.webp,
# onboard-plumbing-cover.jpg, janny-global-cover.webp, downunder-radio-cover.jpg,
# salaka-dance-ensemble-cover.webp
```

- [ ] **Step 4: Download hero background**

```bash
# Download service-header-bg.jpg from the projects page hero
```

- [ ] **Step 5: Verify all images exist**

```bash
ls public/images/logos/
ls public/images/projects/
```

Expected: All files present

---

## Task 3: Custom Hooks

**Files:**
- Create: `src/hooks/useInView.jsx`
- Create: `src/hooks/useTypewriter.jsx`
- Create: `src/hooks/useScrollProgress.jsx`

**Interfaces:**
- Produces: `useInView(ref, options)` — returns boolean when element is visible
- Produces: `useTypewriter(words, typingSpeed, deletingSpeed, pause)` — returns current word
- Produces: `useScrollProgress(ref)` — returns 0-1 scroll progress within element

- [ ] **Step 1: Create useInView hook**

Create `src/hooks/useInView.jsx`:

```jsx
import { useState, useEffect } from 'react'

export function useInView(ref, options = {}) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.rootMargin])

  return isInView
}
```

- [ ] **Step 2: Create useTypewriter hook**

Create `src/hooks/useTypewriter.jsx`:

```jsx
import { useState, useEffect } from 'react'

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1))
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
```

- [ ] **Step 3: Create useScrollProgress hook**

Create `src/hooks/useScrollProgress.jsx`:

```jsx
import { useState, useEffect } from 'react'

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      const scrolled = windowHeight - rect.top
      const total = windowHeight + elementHeight
      setProgress(Math.min(Math.max(scrolled / total, 0), 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}
```

---

## Task 4: Data Files

**Files:**
- Create: `src/data/projects.js`
- Create: `src/data/services.js`
- Create: `src/data/testimonials.js`
- Create: `src/data/navigation.js`

**Interfaces:**
- Produces: `projects` array with `{ id, name, slug, categories, image, description }`
- Produces: `services` array with `{ id, title, tags, description }`
- Produces: `testimonials` array with `{ id, quote, author, company }`
- Produces: `navLinks` array with `{ label, href }`

- [ ] **Step 1: Create projects data**

Create `src/data/projects.js`:

```js
export const projects = [
  {
    id: 1,
    name: 'Care Partners Australia',
    slug: 'care-partners-australia',
    categories: ['Web Design', 'Branding', 'UI/UX'],
    image: '/images/projects/care-partners-australia-cover.jpg',
  },
  {
    id: 2,
    name: 'Australian Ghanaian Chamber of Commerce',
    slug: 'australian-ghanaian-chamber-of-commerce',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/australian-ghanaian-chamber-of-commerce-cover.jpg',
  },
  {
    id: 3,
    name: 'WINSTAMAC',
    slug: 'winstamac',
    categories: ['Web Design', 'UI/UX'],
    image: '/images/projects/winstamac-cover.webp',
  },
  {
    id: 4,
    name: 'Sababa Global Trade & Logistics',
    slug: 'sababa-global',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/sababa-global-cover.webp',
  },
  {
    id: 5,
    name: 'Viride Energy Africa',
    slug: 'viride-energy-africa',
    categories: ['Web Design', 'Development'],
    image: '/images/projects/viride-energy-africa-cover.webp',
  },
  {
    id: 6,
    name: 'Ben Ari Accounting',
    slug: 'ben-ari-accounting',
    categories: ['Web Design', 'Product Design'],
    image: '/images/projects/ben-ari-accounting-cover.jpg',
  },
  {
    id: 7,
    name: 'PhytoScience Australia',
    slug: 'phytoscience-australia',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/phytoscience-australia-cover.webp',
  },
  {
    id: 8,
    name: 'Petra Care Services',
    slug: 'petra-care-services',
    categories: ['Web Design', 'UI/UX'],
    image: '/images/projects/petra-care-services-cover.webp',
  },
  {
    id: 9,
    name: 'Onboard Plumbing',
    slug: 'onboard-plumbing',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/onboard-plumbing-cover.jpg',
  },
  {
    id: 10,
    name: 'Janny Global',
    slug: 'janny-global',
    categories: ['Web Design', 'Mobile UI'],
    image: '/images/projects/janny-global-cover.webp',
  },
  {
    id: 11,
    name: 'DownUnder Radio',
    slug: 'downunder-radio',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/downunder-radio-cover.jpg',
  },
  {
    id: 12,
    name: 'Salaka Dance Ensemble',
    slug: 'salaka-dance-ensemble',
    categories: ['Web Design', 'Branding'],
    image: '/images/projects/salaka-dance-ensemble-cover.webp',
  },
]

export const filterCategories = ['All', 'Web Design', 'Branding', 'UI/UX']
```

- [ ] **Step 2: Create services data**

Create `src/data/services.js`:

```js
export const services = [
  {
    id: 1,
    title: 'Web Design & Development',
    tags: ['REACT.JS', 'E-COMMERCE', 'WORDPRESS'],
    description: 'Custom-built websites that are fast, responsive, and designed to convert visitors into customers.',
  },
  {
    id: 2,
    title: 'AI & Custom Business Systems',
    tags: ['AI TOOLS', 'AUTOMATION', 'CUSTOM APPS'],
    description: 'Intelligent solutions that automate workflows and streamline your business operations.',
  },
  {
    id: 3,
    title: 'Visual Branding',
    tags: ['GRAPHIC DESIGN', 'LOGO DESIGN', 'BRAND GUIDE'],
    description: 'Cohesive visual identities that communicate your brand story and values.',
  },
  {
    id: 4,
    title: 'Website Maintenance',
    tags: ['SECURITY', 'UPDATES', 'BACKUPS'],
    description: 'Ongoing support to keep your website secure, updated, and performing at its best.',
  },
  {
    id: 5,
    title: 'Search Engine Optimisation',
    tags: ['ON-PAGE SEO', 'KEYWORD RESEARCH', 'ANALYTICS'],
    description: 'Data-driven strategies to improve your visibility and rank higher on search engines.',
  },
  {
    id: 6,
    title: 'Consulting & Audit',
    tags: ['SEO AUDIT', 'SECURITY AUDIT', 'UI/UX AUDIT'],
    description: 'Expert analysis and actionable recommendations to optimise your digital presence.',
  },
]
```

- [ ] **Step 3: Create testimonials data**

Create `src/data/testimonials.js`:

```js
export const testimonials = [
  {
    id: 1,
    quote: 'WebGaze completely transformed how we show up online. The new website is not only beautiful but actually drives results. Our enquiries have increased significantly since launch.',
    author: 'Sarah Mitchell',
    company: 'Care Partners Australia',
  },
  {
    id: 2,
    quote: 'Professional, responsive, and genuinely invested in our success. WebGaze delivered a website that exceeded our expectations.',
    author: 'James Okonkwo',
    company: 'Australian Ghanaian Chamber of Commerce',
  },
  {
    id: 3,
    quote: 'The team at WebGaze understood our vision from day one. They built us a platform that truly represents our brand.',
    author: 'David Chen',
    company: 'Viride Energy Africa',
  },
]

export const faqs = [
  {
    id: 1,
    question: 'What does WebGaze actually do?',
    answer: 'We design and build high-performance websites, AI-assisted custom systems, and practical digital tools for growing businesses. Our services span web design, branding, SEO, and consulting.',
  },
  {
    id: 2,
    question: 'How much does a website cost?',
    answer: 'Every project is unique. We provide custom quotes based on your specific requirements, goals, and scope. Contact us for a free consultation and estimate.',
  },
  {
    id: 3,
    question: 'How long does it take to build a website?',
    answer: 'Most projects are completed within 4-8 weeks, depending on complexity and scope. We work efficiently without cutting corners.',
  },
  {
    id: 4,
    question: 'Can you redesign or improve an existing website?',
    answer: 'Absolutely. We regularly audit and redesign existing websites to improve performance, design, and conversions.',
  },
  {
    id: 5,
    question: 'Do you offer ongoing support?',
    answer: 'Yes. We offer maintenance packages to keep your website secure, updated, and performing at its best.',
  },
]
```

- [ ] **Step 4: Create navigation data**

Create `src/data/navigation.js`:

```js
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const clientLogos = [
  { name: 'Care Partners Australia', image: '/images/logos/care-partners.png' },
  { name: 'AGCCI', image: '/images/logos/agcci.png' },
  { name: 'Salaka Dance Ensemble', image: '/images/logos/salaka.png' },
  { name: 'Viride Energy Africa', image: '/images/logos/viride.png' },
  { name: 'Camden Tyre Recycle', image: '/images/logos/camden-tyre.png' },
]

export const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'X', url: '#' },
]
```

---

## Task 5: Navbar Component

**Files:**
- Create: `src/components/shared/Navbar.jsx`

**Interfaces:**
- Consumes: `navLinks` from `src/data/navigation.js`
- Produces: Fixed glassmorphism navigation bar with mobile hamburger menu

- [ ] **Step 1: Create Navbar component**

Create `src/components/shared/Navbar.jsx`:

```jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="fixed inset-x-0 top-5 z-[100] px-5 lg:px-8">
      <nav
        className={`mx-auto flex max-w-wide items-center justify-between rounded-full px-5 py-3 transition-all duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[720px] lg:justify-center lg:gap-1 ${
          scrolled
            ? 'bg-[#101010]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
            : 'bg-[#101010]/55 backdrop-blur-xl'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 lg:absolute lg:left-5">
          <span className="text-lg font-bold text-white font-display">WebGaze</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? 'bg-red-brand text-white shadow-[0_10px_24px_rgba(224,27,36,0.22)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-red-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,27,36,0.22)] transition-all duration-200 hover:bg-red-dark lg:absolute lg:right-5 lg:block"
        >
          Request a Proposal
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex flex-col gap-1.5 lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-0 z-[99] bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-2xl font-semibold transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-red-brand'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4">
            Request a Proposal
          </Link>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verify navbar renders**

Run dev server, check navbar appears fixed at top with glassmorphism effect. Check mobile hamburger opens/closes menu.

---

## Task 6: Footer Component

**Files:**
- Create: `src/components/shared/Footer.jsx`

**Interfaces:**
- Consumes: `navLinks`, `socialLinks` from `src/data/navigation.js`
- Produces: Site-wide footer with 4-column grid

- [ ] **Step 1: Create Footer component**

Create `src/components/shared/Footer.jsx`:

```jsx
import { Link } from 'react-router-dom'
import { navLinks, socialLinks } from '../../data/navigation'

const serviceLinks = [
  { label: 'Website Design & Development', href: '/services/website-design' },
  { label: 'AI & Custom Business Systems', href: '/services/systems-automation' },
  { label: 'Website Maintenance', href: '/services/maintenance' },
  { label: 'Search Engine Optimisation', href: '/services/seo' },
  { label: 'Visual Branding', href: '/services/visual-branding' },
  { label: 'Consulting & Audit', href: '/services/consulting' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa]">
      <div className="container-wide section-pad">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-xl font-bold font-display">WebGaze</Link>
            <p className="text-sm leading-relaxed text-white/60">
              Building high-performance websites, AI-assisted custom systems, and practical digital tools for growing businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-200 hover:border-white/30 hover:text-white"
                  aria-label={social.name}
                >
                  <span className="text-xs">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0422169233" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">
                  0422 169 233
                </a>
              </li>
              <li>
                <a href="mailto:hello@webgaze.com.au" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">
                  hello@webgaze.com.au
                </a>
              </li>
            </ul>
            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-red-brand focus:outline-none"
              />
              <button type="submit" className="btn-primary px-5 py-2.5 text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; 2026 WebGaze PTY LTD. All rights reserved. ABN 53 694 048 158
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 transition-colors duration-200 hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-xs text-white/40 transition-colors duration-200 hover:text-white">
              Privacy &amp; Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify footer renders**

Check footer appears at bottom of both pages with correct 4-column layout on desktop, stacked on mobile.

---

## Task 7: ProjectCard & CTABanner Components

**Files:**
- Create: `src/components/shared/ProjectCard.jsx`
- Create: `src/components/shared/CTABanner.jsx`

**Interfaces:**
- Consumes: `project` object with `{ name, categories, image }`
- Produces: Reusable project card with hover effects
- Produces: Reusable CTA banner section

- [ ] **Step 1: Create ProjectCard component**

Create `src/components/shared/ProjectCard.jsx`:

```jsx
export default function ProjectCard({ project }) {
  return (
    <article className="fade-in-up group">
      <a href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#1a1a1a]">
          {project.name}
        </h3>
        <p className="mt-1 font-body text-sm leading-snug text-[#6a6a6a]">
          {project.categories.join(' . ')}
        </p>
      </a>
    </article>
  )
}
```

- [ ] **Step 2: Create CTABanner component**

Create `src/components/shared/CTABanner.jsx`:

```jsx
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-24">
      {/* Red accent line */}
      <div className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
        <div className="animate-line-grow h-full w-full bg-red-brand" />
      </div>

      {/* Red glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-brand/20 blur-[120px]" />

      <div className="container-wide relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold text-white md:text-[2rem]">
          Let's build something that earns its keep.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary">
            Request a Proposal
          </Link>
          <Link to="/contact" className="btn-outline">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify components render**

Import and use in Home page temporarily to verify styling.

---

## Task 8: Hero Section

**Files:**
- Create: `src/components/home/HeroSection.jsx`

**Interfaces:**
- Consumes: `useTypewriter` hook
- Produces: Full-viewport hero with SVG background, animated heading, typewriter subtitle

- [ ] **Step 1: Create HeroSection component**

Create `src/components/home/HeroSection.jsx`:

```jsx
import { useTypewriter } from '../../hooks/useTypewriter'

export default function HeroSection() {
  const typedText = useTypewriter(
    ['Designed to deliver results.', 'Built to perform.', 'Crafted with purpose.'],
    80,
    40,
    2000
  )

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a]">
      {/* SVG Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute h-full w-full opacity-[0.07]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          <line x1="0" y1="200" x2="1200" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="white" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="white" strokeWidth="0.5" />
          {/* Arcs */}
          <circle cx="900" cy="400" r="300" stroke="white" strokeWidth="0.5" />
          <circle cx="900" cy="400" r="200" stroke="white" strokeWidth="0.5" />
          {/* Red quadrant */}
          <path
            d="M900 100 A300 300 0 0 1 1200 400 L900 400 Z"
            fill="#E01B24"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.55rem,10.5vw,3.7rem)] font-bold leading-[1.1] text-white font-display">
            We build modern brands and digital experiences
          </h1>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[clamp(1.2rem,4vw,1.6rem)] font-medium text-white/70 font-display">
              {typedText}
            </span>
            <span className="animate-blink inline-block h-[1.2em] w-[3px] bg-red-brand" />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50">
            Web design, branding, and digital strategy for businesses that want to stand out and grow.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="btn-primary">
              Start a Project
            </a>
            <a href="/projects" className="btn-outline">
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
          <div className="h-10 w-[1px] bg-white/20">
            <div className="animate-bounce h-3 w-full bg-red-brand" />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify hero renders**

Check full-viewport hero with SVG background, typewriter animation cycling through words, and scroll indicator.

---

## Task 9: Logo Marquee Section

**Files:**
- Create: `src/components/home/LogoMarquee.jsx`

**Interfaces:**
- Consumes: `clientLogos` from `src/data/navigation.js`
- Produces: Auto-scrolling infinite marquee of client logos

- [ ] **Step 1: Create LogoMarquee component**

Create `src/components/home/LogoMarquee.jsx`:

```jsx
import { clientLogos } from '../../data/navigation'

export default function LogoMarquee() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[2.25rem] bg-[#f4f4f1] pb-12 pt-16">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="label-tag">Trusted by organisations across Australia</span>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f4f4f1] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f4f4f1] to-transparent" />

          {/* Marquee */}
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-[#4a4a4a]">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify marquee animates**

Check logos scroll infinitely from right to left with fade edges.

---

## Task 10: Services Section

**Files:**
- Create: `src/components/home/ServicesSection.jsx`

**Interfaces:**
- Consumes: `services` from `src/data/services.js`
- Produces: Two-column layout with sticky heading and stacking service cards

- [ ] **Step 1: Create ServicesSection component**

Create `src/components/home/ServicesSection.jsx`:

```jsx
import { services } from '../../data/services.js'

export default function ServicesSection() {
  return (
    <section className="bg-[#f4f4f1] section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Sticky Heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="label-tag">Services</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold leading-tight text-[#1a1a1a] font-display">
              Everything You Need to Build a Strong Online Presence
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#6a6a6a]">
              From strategy to execution, we deliver end-to-end digital solutions that help your business grow.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/contact" className="btn-primary">Start a Project</a>
              <a href="/services" className="btn-outline-dark">All Services</a>
            </div>
          </div>

          {/* Right: Stacking Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[#e5e5e0] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] font-display">
                  {service.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e5e5e0] bg-[#f4f4f1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#6a6a6a]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify services section**

Check sticky heading stays in view while scrolling through service cards on desktop.

---

## Task 11: Projects Parallax Section

**Files:**
- Create: `src/components/home/ProjectsParallax.jsx`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.js`
- Produces: Scroll-driven 3D parallax section with two rows of project cards

- [ ] **Step 1: Create ProjectsParallax component**

Create `src/components/home/ProjectsParallax.jsx`:

```jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ProjectsParallax() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  const row1 = projects.slice(0, 6)
  const row2 = projects.slice(6, 12)

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-[#0a0a0a] md:h-[220vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-wide w-full py-16">
          <div className="mb-12">
            <span className="label-tag">Projects</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-white font-display">
              Projects that speak for themselves.
            </h2>
          </div>

          {/* Row 1 - scrolls left */}
          <div
            className="mb-6 flex gap-6 transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(5deg) translateX(${-progress * 200}px)`,
            }}
          >
            {[...row1, ...row1].map((project, i) => (
              <div key={i} className="w-[300px] flex-shrink-0 md:w-[350px]">
                <div className="group overflow-hidden rounded-[10px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white font-display">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {project.categories.join(' . ')}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 - scrolls right */}
          <div
            className="flex gap-6 transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(-5deg) translateX(${progress * 200}px)`,
            }}
          >
            {[...row2, ...row2].map((project, i) => (
              <div key={i} className="w-[300px] flex-shrink-0 md:w-[350px]">
                <div className="group overflow-hidden rounded-[10px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white font-display">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {project.categories.join(' . ')}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-outline">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify parallax effect**

Scroll through the section and check cards move at different speeds with 3D perspective.

---

## Task 12: Process Section

**Files:**
- Create: `src/components/home/ProcessSection.jsx`

**Interfaces:**
- Produces: 4-step timeline with connecting line, numbered circles, headings, descriptions

- [ ] **Step 1: Create ProcessSection component**

Create `src/components/home/ProcessSection.jsx`:

```jsx
const steps = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    tagline: 'We listen before we act.',
    description: 'We take the time to understand your business, goals, and audience before making any recommendations.',
    tags: ['Research', 'Strategy', 'Analysis'],
  },
  {
    number: '02',
    title: 'Direction & Planning',
    tagline: 'We map the path forward.',
    description: 'We create a clear roadmap with defined milestones, timelines, and deliverables.',
    tags: ['Planning', 'Wireframes', 'Scope'],
  },
  {
    number: '03',
    title: 'Development & Refinement',
    tagline: 'We build and iterate.',
    description: 'We bring the design to life with clean, performant code and continuous feedback loops.',
    tags: ['Build', 'Test', 'Iterate'],
  },
  {
    number: '04',
    title: 'Delivery & Implementation',
    tagline: 'We launch with confidence.',
    description: 'We deploy your project, ensure everything works perfectly, and provide ongoing support.',
    tags: ['Launch', 'Support', 'Optimise'],
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] section-pad">
      <div className="container-wide">
        <div className="mb-16 text-center">
          <span className="label-tag">How We Work</span>
          <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-white font-display">
            A process built for clarity, not chaos.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[28px] hidden h-[1px] bg-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center lg:text-left">
                {/* Number circle */}
                <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#101010] text-lg font-bold text-red-brand font-display lg:mx-0">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-red-brand">
                  {step.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify process section**

Check 4 steps display correctly with connecting line on desktop, stacked on mobile.

---

## Task 13: Testimonials & FAQ Section

**Files:**
- Create: `src/components/home/TestimonialsFAQ.jsx`

**Interfaces:**
- Consumes: `testimonials`, `faqs` from `src/data/testimonials.js`
- Produces: Two-column layout with testimonial carousel and FAQ accordion

- [ ] **Step 1: Create TestimonialsFAQ component**

Create `src/components/home/TestimonialsFAQ.jsx`:

```jsx
import { useState, useEffect } from 'react'
import { testimonials, faqs } from '../../data/testimonials.js'

export default function TestimonialsFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#f4f4f1] section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Testimonials */}
          <div>
            <span className="label-tag">Testimonials</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#1a1a1a] font-display">
              What clients think.
            </h2>

            <div className="mt-10">
              <blockquote className="text-lg leading-relaxed text-[#4a4a4a]">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-[#1a1a1a]">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-sm text-[#6a6a6a]">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>

              {/* Progress dots */}
              <div className="mt-8 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? 'w-8 bg-red-brand'
                        : 'w-2 bg-[#d0d0c8]'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <span className="label-tag">FAQ</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#1a1a1a] font-display">
              Questions, Answered.
            </h2>

            <div className="mt-10 divide-y divide-[#e5e5e0]">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="font-medium text-[#1a1a1a]">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 text-lg text-[#6a6a6a] transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-[#6a6a6a]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="mailto:hello@webgaze.com.au" className="btn-outline-dark mt-8">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify testimonials and FAQ**

Check testimonial auto-advances, dots are clickable, FAQ accordion expands/collapses.

---

## Task 14: Assemble Home Page

**Files:**
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: All Home components (HeroSection, LogoMarquee, ServicesSection, ProjectsParallax, ProcessSection, TestimonialsFAQ, CTABanner, Footer, Navbar)
- Produces: Complete Home page with all sections in order

- [ ] **Step 1: Update Home page**

Replace `src/pages/Home.jsx`:

```jsx
import Navbar from '../components/shared/Navbar'
import HeroSection from '../components/home/HeroSection'
import LogoMarquee from '../components/home/LogoMarquee'
import ServicesSection from '../components/home/ServicesSection'
import ProjectsParallax from '../components/home/ProjectsParallax'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsFAQ from '../components/home/TestimonialsFAQ'
import CTABanner from '../components/shared/CTABanner'
import Footer from '../components/shared/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />
        <ProjectsParallax />
        <ProcessSection />
        <TestimonialsFAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Add scroll fade-in animation initialization**

Add to `src/index.css` or create a small script in `Home.jsx` to initialize Intersection Observer for `.fade-in-up` elements:

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])
```

- [ ] **Step 3: Verify complete Home page**

Run dev server and verify all 9 sections render correctly in order with proper styling and animations.

---

## Task 15: Projects Page

**Files:**
- Modify: `src/pages/Projects.jsx`

**Interfaces:**
- Consumes: `projects`, `filterCategories` from `src/data/projects.js`
- Consumes: Navbar, Footer, CTABanner, ProjectCard components
- Produces: Complete Projects page with hero, filterable grid, CTA, footer

- [ ] **Step 1: Create Projects page**

Replace `src/pages/Projects.jsx`:

```jsx
import { useState, useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import CTABanner from '../components/shared/CTABanner'
import ProjectCard from '../components/shared/ProjectCard'
import { projects, filterCategories } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((p) => p.categories.includes(activeFilter))
      )
    }
  }, [activeFilter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[380px] bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 to-[#0a0a0a]/90" />
        <div className="container-wide relative z-10 flex min-h-[380px] flex-col justify-end pb-12 pt-32">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
          >
            <span>&larr;</span> Go back
          </a>
          <h1 className="text-[clamp(2.55rem,10.5vw,3.7rem)] font-bold text-white font-display">
            Our Work
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/60">
            A selection of projects we've delivered for clients across Australia and beyond.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad">
        <div className="container-wide">
          {/* Filter Bar */}
          <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-[#e5e5e0] pb-6">
            <span className="mr-4 text-sm font-medium text-[#4a4a4a]">
              Selected Work
            </span>
            <span className="text-sm text-[#6a6a6a]">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
            <div className="ml-auto flex gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? 'border-red-brand bg-red-brand text-white'
                      : 'border-[#cfcfca] bg-white text-[#4a4a4a] hover:border-red-brand hover:text-red-brand'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Verify Projects page**

Check hero banner, filter buttons work (clicking filters shows correct projects), grid is 3-column on desktop, 2 on tablet, 1 on mobile.

---

## Task 16: Final Polish & Responsive Testing

**Files:**
- Verify: All components

**Interfaces:**
- Produces: Pixel-perfect clone matching original site

- [ ] **Step 1: Test all responsive breakpoints**

- 375px (mobile): Check hamburger menu, stacked layouts, full-width cards
- 768px (tablet): Check 2-column grids, adjusted spacing
- 1024px+ (desktop): Check full layout with all effects

- [ ] **Step 2: Test all interactions**

- Navbar scroll effect (backdrop blur changes)
- Mobile menu open/close
- Typewriter animation cycles
- Logo marquee scrolls
- Service cards sticky effect
- Projects parallax scroll
- Project card hover (image scale)
- Filter buttons (active state, project filtering)
- Testimonial auto-advance
- FAQ accordion expand/collapse
- CTA banner red line animation

- [ ] **Step 3: Visual comparison**

Compare each section side-by-side with the original site at webgaze.com.au. Note and fix any discrepancies in:
- Colors
- Typography
- Spacing
- Shadows
- Border radius
- Animation timing

- [ ] **Step 4: Commit final changes**

```bash
git add -A
git commit -m "feat: complete WebGaze clone - Home and Projects pages"
```

---

## Spec Coverage Check

| Spec Requirement | Task |
|-----------------|------|
| Project scaffolding (Vite + React + Tailwind) | Task 1 |
| Image assets downloaded | Task 2 |
| Custom hooks (useInView, useTypewriter, useScrollProgress) | Task 3 |
| Data files (projects, services, testimonials, navigation) | Task 4 |
| Navbar (glassmorphism, mobile hamburger) | Task 5 |
| Footer (4-column grid, newsletter form) | Task 6 |
| ProjectCard + CTABanner | Task 7 |
| Hero Section (SVG background, typewriter) | Task 8 |
| Logo Marquee | Task 9 |
| Services Section (sticky cards) | Task 10 |
| Projects Parallax (3D scroll) | Task 11 |
| Process Section (timeline) | Task 12 |
| Testimonials & FAQ | Task 13 |
| Home Page assembly | Task 14 |
| Projects Page (filtering grid) | Task 15 |
| Final polish & responsive testing | Task 16 |

All spec requirements covered. No placeholders found.
