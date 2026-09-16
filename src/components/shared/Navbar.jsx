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
        const bgColor = window.getComputedStyle(currentSection).backgroundColor
        const isLight = isLightColor(bgColor)
        setIsDarkSection(!isLight)
      }
    }
    const isLightColor = (color) => {
      if (!color || color === 'rgba(0, 0, 0, 0)') return false
      const rgb = color.match(/\d+/g)
      if (!rgb) return false
      const [r, g, b] = rgb.map(Number)
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
      return luminance > 0.5
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
          isDarkSection ? 'bg-[#111111]/95' : 'bg-white/95'
        } ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => {
            if (!isBuilt(link.href)) {
              return (
                <span key={link.label} className={`text-2xl font-semibold transition-colors duration-300 cursor-default select-none ${isDarkSection ? 'text-white/30' : 'text-[#0a0a0a]/30'}`}>
                  {link.label}
                </span>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-2xl font-semibold transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-red-brand' : isDarkSection ? 'text-white/70 hover:text-white' : 'text-[#0a0a0a]/70 hover:text-[#0a0a0a]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link to="/request-a-quote" className="btn-primary mt-4">
            Request a Proposal
          </Link>
        </div>
      </div>
    </header>
  )
}
