import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

const BUILT_ROUTES = ['/', '/projects']

const dropdownServices = [
  {
    title: 'Website Design & Development',
    desc: 'Custom, high-performance websites built to convert.',
    href: '/services/website-design',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></>,
  },
  {
    title: 'AI & Custom Business Systems',
    desc: 'Custom apps, automations, and AI-assisted tools.',
    href: '/services/systems-automation',
    icon: <><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"></path></>,
  },
  {
    title: 'Visual Branding',
    desc: 'Cohesive brand identities that make you unmistakable.',
    href: '/services/visual-branding',
    icon: <><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="19" cy="13" r="2"></circle><circle cx="6" cy="13" r="2"></circle><circle cx="10" cy="19" r="2"></circle><path d="M13.5 9C12 13 8 14 8 14M13.5 9C15 12 17.5 12 17.5 12M8 15c1 2 2 2.5 2 2.5M17.5 12c0 2-1.5 3.5-1.5 3.5"></path></>,
  },
  {
    title: 'Website Maintenance',
    desc: 'Keep your site secure, fast, and up to date.',
    href: '/services/maintenance',
    icon: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></>,
  },
  {
    title: 'Search Engine Optimisation',
    desc: 'Get found by the right people at the right time.',
    href: '/services/seo',
    icon: <><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path><path d="M11 8v6M8 11h6"></path></>,
  },
  {
    title: 'Consulting & Audit',
    desc: "Understand what's working and what needs to improve.",
    href: '/services/consulting',
    icon: <><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1 2-2h11"></path></>,
  },
]

function NavItemLink({ link, isActive, isDarkSection, isBuilt, itemRef, onHover, onLeave, isHovered }) {
  const hasPill = isActive || isHovered

  const getTextColor = () => {
    if (hasPill) return '#ffffff'
    if (isDarkSection) return 'rgba(255,255,255,0.72)'
    return 'rgba(10,10,10,0.7)'
  }

  if (!isBuilt) {
    return (
      <span
        ref={itemRef}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold cursor-pointer select-none"
      >
        <span
          className="relative z-10 transition-colors duration-200 group-hover:text-white"
          style={{ color: getTextColor() }}
        >
          {link.label}
        </span>
      </span>
    )
  }

  return (
    <Link
      ref={itemRef}
      to={link.href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand"
    >
      <span
        className="relative z-10 transition-colors duration-200 group-hover:text-white"
        style={{ color: getTextColor() }}
      >
        {link.label}
      </span>
    </Link>
  )
}

function ServicesDropdown({ isDarkSection, itemRef, onHover, onLeave, isHovered }) {
  const [isOpen, setIsOpen] = useState(false)
  const closeTimerRef = useRef(null)

  const hasPill = isHovered || isOpen

  const getTextColor = () => {
    if (hasPill) return '#ffffff'
    if (isDarkSection) return 'rgba(255,255,255,0.72)'
    return 'rgba(10,10,10,0.7)'
  }

  const getChevronColor = () => {
    if (isDarkSection) return 'rgba(255,255,255,0.5)'
    return 'rgba(10,10,10,0.4)'
  }

  const handleMouseEnter = () => {
    clearTimeout(closeTimerRef.current)
    setIsOpen(true)
    onHover()
  }

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false)
      onLeave()
    }, 350)
  }

  const handlePanelEnter = () => {
    clearTimeout(closeTimerRef.current)
  }

  const handlePanelLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false)
      onLeave()
    }, 350)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handlePanelLeave}>
      <button
        ref={itemRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="services-menu"
        className="group relative flex h-8 items-center gap-1 overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand cursor-pointer select-none"
      >
        <span
          className="relative z-10 transition-colors duration-200 group-hover:text-white"
          style={{ color: getTextColor() }}
        >
          Services
        </span>
        <span
          className="relative z-10 text-xs mt-0.5 opacity-70"
          style={{ color: getChevronColor(), transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          id="services-menu"
          role="menu"
          className="absolute top-full left-1/2 z-[110] -translate-x-1/2 w-[520px] pt-4"
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
        >
          <div className="isolate rounded-2xl bg-light-bg border border-light-border shadow-[0_24px_70px_rgba(0,0,0,0.22)] overflow-hidden p-2">
            <div className="px-4 py-3 mb-1">
              <p className="font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-red-brand">
                Our Services
              </p>
            </div>
            <div className="grid grid-cols-1 gap-0.5">
              {dropdownServices.map((service) => (
                <a
                  key={service.title}
                  role="menuitem"
                  href={service.href}
                  className="flex items-start gap-4 px-4 py-3 rounded-xl group/item hover:bg-light-surface transition-colors duration-150 focus-visible:outline-none focus-visible:bg-light-surface"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-light-surface flex items-center justify-center text-[#555] group-hover/item:bg-red-brand/10 group-hover/item:text-red-brand transition-colors duration-150">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {service.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm text-[#0a0a0a] group-hover/item:text-red-brand transition-colors duration-150 leading-snug">
                      {service.title}
                    </p>
                    <p className="font-body text-xs text-light-muted mt-0.5 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <span className="flex-shrink-0 self-center text-xs text-[#bbb] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200 ml-auto">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileMenu({ isOpen, onClose }) {
  const [showServices, setShowServices] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShowServices(false)
  }, [location])

  useEffect(() => {
    if (!isOpen) {
      setShowServices(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[90] lg:hidden">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={onClose}></div>

      <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-[420px] flex-col overflow-hidden bg-[#0a0a0a] text-white shadow-[-20px_0_60px_rgba(0,0,0,0.4)]">
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 h-[360px] w-[360px] rounded-full bg-red-brand/20 blur-[110px]"></div>

        <div className="relative flex-1 overflow-hidden">
          {/* Main menu */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto px-6 pb-8 pt-20 transition-transform duration-300 ease-out"
            style={{ transform: showServices ? 'translateX(-100%)' : 'translateX(0)' }}
          >
            <p className="mb-4 font-display text-[10px] font-semibold uppercase tracking-[0.32em] text-red-brand">
              Menu
            </p>
            <nav className="flex flex-col">
              {navLinks.map((link, index) => {
                const num = String(index + 1).padStart(2, '0')
                const isActive = location.pathname === link.href
                if (link.label === 'Services') {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => setShowServices(true)}
                      className="group flex items-center justify-between gap-4 border-b border-white/10 py-3 text-left"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className={`font-display text-[10px] font-semibold tabular-nums tracking-widest ${isActive ? 'text-red-brand' : 'text-white/35'}`}>{num}</span>
                        <span className="font-display text-[1.375rem] font-semibold leading-none tracking-tight transition-colors duration-200 group-hover:text-red-brand text-white">
                          Services
                        </span>
                      </span>
                      <span className="font-display text-xl leading-none text-white/45 transition-colors group-hover:text-red-brand" aria-hidden="true">›</span>
                    </button>
                  )
                }
                if (!BUILT_ROUTES.includes(link.href)) {
                  return (
                    <span key={link.label} className="group flex items-baseline gap-3 border-b border-white/10 py-3 cursor-default select-none">
                      <span className={`font-display text-[10px] font-semibold tabular-nums tracking-widest ${isActive ? 'text-red-brand' : 'text-white/35'}`}>{num}</span>
                      <span className="font-display text-[1.375rem] font-semibold leading-none tracking-tight text-white/35">
                        {link.label}
                      </span>
                    </span>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-3 border-b border-white/10 py-3"
                  >
                    <span className={`font-display text-[10px] font-semibold tabular-nums tracking-widest ${isActive ? 'text-red-brand' : 'text-white/35'}`}>{num}</span>
                    <span className={`font-display text-[1.375rem] font-semibold leading-none tracking-tight transition-colors duration-200 group-hover:text-red-brand ${isActive ? 'text-red-brand' : 'text-white'}`}>
                      {link.label}
                    </span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-6">
              <a
                href="/request-a-quote"
                onClick={onClose}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-red-brand px-5 font-display text-sm font-semibold text-white shadow-[0_16px_40px_rgba(224,27,36,0.3)] transition-colors hover:bg-red-600"
              >
                Request a Proposal
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-4 pt-8">
              <div className="flex flex-col gap-1">
                <a href="mailto:hello@webgaze.com.au" className="font-display text-[13px] font-medium text-white/70 transition-colors hover:text-red-brand">
                  hello@webgaze.com.au
                </a>
                <a href="tel:0422169233" className="font-display text-[13px] font-medium text-white/70 transition-colors hover:text-red-brand">
                  0422 169 233
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/webgaze" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-red-brand hover:text-red-brand">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://www.instagram.com/webgaze.au" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-red-brand hover:text-red-brand">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://x.com/webgaze_au" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-red-brand hover:text-red-brand">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services submenu */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto bg-[#0a0a0a] px-6 pb-8 pt-20 transition-transform duration-300 ease-out"
            style={{ transform: showServices ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <button
              type="button"
              onClick={() => setShowServices(false)}
              className="mb-5 flex items-center gap-2 self-start font-display text-xs font-semibold text-white/65 transition-colors hover:text-red-brand"
            >
              <span aria-hidden="true" className="text-xl leading-none">‹</span>
              <span className="uppercase tracking-[0.28em] text-[10px]">Back</span>
            </button>
            <p className="mb-5 font-display text-[1.375rem] font-semibold leading-none tracking-tight text-white">
              Services
            </p>
            <div className="flex flex-col">
              {dropdownServices.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  onClick={onClose}
                  className="group/mob flex items-center gap-3 border-b border-white/10 py-3"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/65 transition-colors group-hover/mob:bg-red-brand/15 group-hover/mob:text-red-brand">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {service.icon}
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-sm font-semibold leading-snug text-white transition-colors group-hover/mob:text-red-brand">
                      {service.title}
                    </span>
                    <span className="font-display text-[11px] leading-snug text-white/55">
                      {service.desc}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const location = useLocation()
  const navRef = useRef(null)
  const navContainerRef = useRef(null)
  const itemRefs = useRef({})
  const closeTimerRef = useRef(null)

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const DARK_CLASSES = ['bg-[#0E0E11]', 'bg-[#111111]', 'bg-[#101010]', 'bg-[#0a0a0a]', 'bg-[#0f0f0f]', 'bg-dark-bg', 'bg-dark-surface', 'bg-[#111]']
    const LIGHT_CLASSES = ['bg-[#f4f4f1]', 'bg-light-bg', 'bg-white', 'bg-[#fafafa]', 'bg-[#f4f4f6]']

    const checkSection = () => {
      if (!navRef.current) return
      const navRect = navRef.current.getBoundingClientRect()
      const navCenterY = navRect.top + navRect.height / 2
      const sections = document.querySelectorAll('section')
      let currentSection = null
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) {
          currentSection = section
          break
        }
      }
      if (currentSection) {
        const classes = currentSection.className
        const isDark = DARK_CLASSES.some(c => classes.includes(c))
        const isLight = LIGHT_CLASSES.some(c => classes.includes(c))
        if (isDark) setIsDarkSection(true)
        else if (isLight) setIsDarkSection(false)
      }
    }
    checkSection()
    window.addEventListener('scroll', checkSection, { passive: true })
    return () => window.removeEventListener('scroll', checkSection)
  }, [])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const isBuilt = (href) => BUILT_ROUTES.includes(href)

  const getActiveIndex = useCallback(() => {
    return navLinks.findIndex((link) => location.pathname === link.href)
  }, [location.pathname])

  const updatePill = useCallback((index) => {
    if (!navContainerRef.current || !itemRefs.current[index]) return
    const containerRect = navContainerRef.current.getBoundingClientRect()
    const itemRect = itemRefs.current[index].getBoundingClientRect()
    setPillStyle({
      left: itemRect.left - containerRect.left,
      width: itemRect.width,
      opacity: 1,
    })
  }, [])

  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : getActiveIndex()
    if (targetIndex >= 0) {
      updatePill(targetIndex)
    }
  }, [hoveredIndex, getActiveIndex, updatePill])

  useEffect(() => {
    const handleResize = () => {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : getActiveIndex()
      if (targetIndex >= 0) updatePill(targetIndex)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [hoveredIndex, getActiveIndex, updatePill])

  const handleItemHover = (index) => {
    clearTimeout(closeTimerRef.current)
    setHoveredIndex(index)
  }

  const handleItemLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setHoveredIndex(null)
    }, 200)
  }

  return (
    <>
    <header ref={navRef} className="fixed inset-x-0 top-5 z-[100] overflow-visible">
      <div className="container-wide relative flex items-center justify-between">
        {/* Mobile nav background */}
        <div
          className={`pointer-events-none absolute -top-5 -inset-x-3 -bottom-2 rounded-b-2xl border border-t-0 backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform,opacity] duration-300 ease-out lg:hidden ${
            isDarkSection
              ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
              : 'border-[#dcdcd6]/60 bg-white/80 text-[#0a0a0a] shadow-[0_16px_44px_rgba(0,0,0,0.08)]'
          } ${isFooterVisible ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}
        ></div>

        <Link
          to="/"
          className={`relative z-10 flex h-10 shrink-0 items-center rounded-full transition-[transform,opacity] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
            isFooterVisible ? 'max-lg:-translate-y-[150%] max-lg:opacity-0' : 'max-lg:translate-y-0 max-lg:opacity-100'
          }`}
        >
          <img alt="WebGaze" className="h-8 sm:h-9 w-auto" src="/images/logo-white.png" />
        </Link>

        {/* Desktop nav */}
        <nav className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-5 py-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:flex ${
          isDarkSection
            ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
            : 'border-[#dcdcd6]/60 bg-white/80 text-[#0a0a0a] shadow-[0_16px_44px_rgba(0,0,0,0.08)]'
        }`}>
          <div ref={navContainerRef} className="relative flex items-center gap-1">
            {/* Sliding pill indicator */}
            <span
              className="absolute top-0 h-8 rounded-full bg-red-brand shadow-[0_10px_24px_rgba(224,27,36,0.22)] transition-all duration-300 ease-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />

            {navLinks.map((link, index) => {
              if (link.label === 'Services') {
                return (
                  <ServicesDropdown
                    key={link.label}
                    isDarkSection={isDarkSection}
                    itemRef={(el) => { itemRefs.current[index] = el }}
                    onHover={() => handleItemHover(index)}
                    onLeave={handleItemLeave}
                    isHovered={hoveredIndex === index}
                  />
                )
              }
              return (
                <NavItemLink
                  key={link.label}
                  link={link}
                  isActive={location.pathname === link.href}
                  isDarkSection={isDarkSection}
                  isBuilt={isBuilt(link.href)}
                  itemRef={(el) => { itemRefs.current[index] = el }}
                  onHover={() => handleItemHover(index)}
                  onLeave={handleItemLeave}
                  isHovered={hoveredIndex === index}
                />
              )
            })}
          </div>
        </nav>

        <Link
          to="/request-a-quote"
          className="hidden h-9 shrink-0 items-center rounded-full bg-red-brand px-4 font-display text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,27,36,0.22)] transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:flex"
        >
          Request a Proposal
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-[transform,opacity,color] duration-300 ease-out lg:hidden ${
            isFooterVisible ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'
          } ${
            isDarkSection ? 'text-white' : 'text-[#0a0a0a]'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
          <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
        </button>
      </div>
    </header>

    <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
  </>
  )
}