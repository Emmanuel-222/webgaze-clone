import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

const BUILT_ROUTES = ['/', '/projects']

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
          className="relative z-10"
          style={{ color: getTextColor(), transition: 'color 0.3s ease' }}
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
      className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand"
    >
      <span
        className="relative z-10"
        style={{ color: getTextColor(), transition: 'color 0.3s ease' }}
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
        className="group relative flex h-8 items-center gap-1 overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand cursor-pointer select-none"
      >
        <span
          className="relative z-10"
          style={{ color: getTextColor(), transition: 'color 0.3s ease' }}
        >
          Services
        </span>
        <svg className="relative z-10 w-3 h-3 mt-0.5" style={{ color: getChevronColor(), transition: 'all 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="services-menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] p-6 z-50"
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handlePanelLeave}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-red-brand mb-5">
            Our Services
          </span>
          <div className="flex flex-col gap-1">
            {[
              { title: 'Website Design & Development', desc: 'Custom, high-performance websites built to convert.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'AI & Custom Business Systems', desc: 'Custom apps, automations, and AI-assisted tools.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
              { title: 'Visual Branding', desc: 'Cohesive brand identities that make you unforgettable.', icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
              { title: 'Website Maintenance', desc: 'Keep your site secure, fast, and up to date.', icon: 'M11.42 15.17l-5.1-5.1m0 0L3.34 8.02a4.5 4.5 0 016.36-6.36l3.42 3.42m5.34 5.34l-3.42-3.42a4.5 4.5 0 01-6.36 0M16.5 12l-1.5 1.5' },
              { title: 'Search Engine Optimisation', desc: 'Get found by the right people at the right time.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
              { title: 'Consulting & Audit', desc: "Understand what's working and what needs to improve.", icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' },
            ].map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-4 rounded-xl p-3 transition-colors duration-300 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[#0a0a0a]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#0a0a0a]">{service.title}</p>
                  <p className="text-xs text-[#6b6b6b] mt-0.5">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true)
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
    const DARK_CLASSES = ['bg-[#111111]', 'bg-[#101010]', 'bg-[#0a0a0a]', 'bg-[#0f0f0f]', 'bg-dark-surface', 'bg-[#111]']
    const LIGHT_CLASSES = ['bg-[#f4f4f1]', 'bg-light-bg', 'bg-white']

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
    <header ref={navRef} className="fixed inset-x-0 top-5 z-[100] overflow-visible">
      <div className="container-wide relative flex items-center justify-between">
        {/* Mobile nav background */}
        <div
          className={`pointer-events-none absolute -top-5 -inset-x-3 -bottom-2 rounded-b-2xl border border-t-0 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ease-out lg:hidden ${
            isDarkSection
              ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
              : 'border-[#dcdcd6]/60 bg-white/80 text-[#0a0a0a] shadow-[0_16px_44px_rgba(0,0,0,0.08)]'
          } translate-y-0 opacity-100`}
        ></div>

        <Link
          to="/"
          className="relative z-10 flex h-10 shrink-0 items-center rounded-full transition-[transform,opacity] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
          className={`relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-[transform,opacity,color] duration-300 ease-out lg:hidden translate-y-0 opacity-100 ${
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

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-[99] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isDarkSection ? 'bg-[#111111]/98' : 'bg-[#111111]/98'
        } ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 z-[100] flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex h-full flex-col px-8 pt-24 pb-10 overflow-y-auto">
          {/* MENU label */}
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-red-brand mb-6">
            Menu
          </span>

          {/* Nav links with numbers */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const num = String(index + 1).padStart(2, '0')
              const isActive = location.pathname === link.href
              if (!isBuilt(link.href)) {
                return (
                  <div key={link.label} className="flex items-center gap-4 py-3 border-b border-white/10">
                    <span className="font-display text-xs text-white/30">{num}</span>
                    <span className="font-display text-[1.1rem] font-semibold text-white/30 cursor-default select-none">
                      {link.label}
                    </span>
                  </div>
                )
              }
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 py-3 border-b border-white/10"
                >
                  <span className={`font-display text-xs ${isActive ? 'text-red-brand' : 'text-white/40'}`}>{num}</span>
                  <span className={`font-display text-[1.1rem] font-semibold transition-colors duration-300 ${isActive ? 'text-red-brand' : 'text-white/80 hover:text-white'}`}>
                    {link.label}
                  </span>
                  {link.label === 'Services' && (
                    <svg className="ml-auto w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <Link to="/request-a-quote" onClick={() => setIsOpen(false)} className="mt-8 inline-flex items-center justify-center gap-2 bg-red-brand text-white font-display font-semibold text-sm px-7 py-4 rounded-full hover:bg-red-dark transition-colors duration-200">
            Request a Proposal <span>→</span>
          </Link>

          {/* Contact info */}
          <div className="mt-auto pt-8">
            <a href="mailto:hello@webgaze.com.au" className="block font-body text-sm text-white/70 hover:text-white transition-colors duration-200">
              hello@webgaze.com.au
            </a>
            <a href="tel:0422169233" className="block font-body text-sm text-white/70 hover:text-white transition-colors duration-200 mt-1">
              0422 169 233
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.linkedin.com/company/webgaze" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-red-brand hover:text-red-brand transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/webgaze.au" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-red-brand hover:text-red-brand transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://x.com/webgaze_au" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-red-brand hover:text-red-brand transition-colors duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
