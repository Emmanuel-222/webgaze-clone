import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

const BUILT_ROUTES = ['/', '/projects']

function NavItemLink({ link, isActive, isDarkSection, isBuilt }) {
  if (!isBuilt) {
    return (
      <span
        className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 cursor-pointer select-none"
      >
        <span className={`relative z-10 transition-colors duration-200 group-hover:text-white ${
          isDarkSection ? 'text-white/72' : 'text-[#0a0a0a]/60'
        }`}>
          {link.label}
        </span>
      </span>
    )
  }

  return (
    <Link
      to={link.href}
      className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand"
    >
      {isActive && (
        <span className="absolute inset-0 rounded-full bg-red-brand shadow-[0_10px_24px_rgba(224,27,36,0.22)]"></span>
      )}
      <span className={`relative z-10 transition-colors duration-200 group-hover:text-white ${
        isActive ? 'text-white' : isDarkSection ? 'text-white/72' : 'text-[#0a0a0a]/60'
      }`}>
        {link.label}
      </span>
    </Link>
  )
}

function ServicesDropdown({ isDarkSection }) {
  return (
    <div className="relative">
      <button
        aria-haspopup="menu"
        aria-expanded="false"
        aria-controls="services-menu"
        className="group relative flex h-8 items-center gap-1 overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand cursor-pointer select-none"
      >
        <span className={`relative z-10 transition-colors duration-200 group-hover:text-white ${
          isDarkSection ? 'text-white/72' : 'text-[#0a0a0a]/60'
        }`}>
          Services
        </span>
        <svg className={`relative z-10 w-3 h-3 mt-0.5 transition-colors duration-200 group-hover:text-white ${
          isDarkSection ? 'text-white/50' : 'text-[#0a0a0a]/40'
        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true)
  const location = useLocation()
  const navRef = useRef(null)

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

  return (
    <header ref={navRef} className="fixed inset-x-0 top-5 z-[100] overflow-visible">
      <div className="container-wide relative flex items-center justify-between">
        {/* Mobile nav background */}
        <div
          className={`pointer-events-none absolute -top-5 -inset-x-3 -bottom-2 rounded-b-2xl border border-t-0 backdrop-blur-xl transition-[transform,opacity,background-color,border-color,box-shadow] duration-300 ease-out lg:hidden ${
            isDarkSection
              ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
              : 'border-[#dcdcd6]/60 bg-white/80 text-[#0a0a0a] shadow-[0_16px_44px_rgba(0,0,0,0.08)]'
          } translate-y-0 opacity-100`}
        ></div>

        <Link
          to="/"
          className="relative z-10 flex h-10 shrink-0 items-center rounded-full transition-[transform,opacity] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <img
            alt="WebGaze"
            className="h-8 sm:h-9 w-auto"
            src="/images/logo-white.png"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-5 py-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:flex ${
          isDarkSection
            ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
            : 'border-[#dcdcd6]/60 bg-white/80 text-[#0a0a0a] shadow-[0_16px_44px_rgba(0,0,0,0.08)]'
        }`}>
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return <ServicesDropdown key={link.label} isDarkSection={isDarkSection} />
            }
            return (
              <NavItemLink
                key={link.label}
                link={link}
                isActive={location.pathname === link.href}
                isDarkSection={isDarkSection}
                isBuilt={isBuilt(link.href)}
              />
            )
          })}
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
          isDarkSection ? 'bg-[#0a0a0a]/95' : 'bg-white/95'
        } ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => {
            if (!isBuilt(link.href)) {
              return (
                <span
                  key={link.label}
                  className={`text-2xl font-semibold transition-colors duration-200 cursor-default select-none ${
                    isDarkSection ? 'text-white/30' : 'text-[#0a0a0a]/30'
                  }`}
                >
                  {link.label}
                </span>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-2xl font-semibold transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-red-brand'
                    : isDarkSection
                      ? 'text-white/70 hover:text-white'
                      : 'text-[#0a0a0a]/70 hover:text-[#0a0a0a]'
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
