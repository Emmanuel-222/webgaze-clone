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
    <header className="fixed inset-x-0 top-5 z-[100] overflow-visible">
      <div className="container-wide relative flex items-center justify-between">
        {/* Mobile nav background */}
        <div
          className={`pointer-events-none absolute -top-5 -inset-x-3 -bottom-2 rounded-b-2xl border border-t-0 backdrop-blur-xl transition-[transform,opacity,background-color,border-color,box-shadow] duration-300 ease-out lg:hidden ${
            scrolled
              ? 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
              : 'border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]'
          } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}
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
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-5 py-3 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 lg:flex border-white/15 bg-[#101010]/55 text-white shadow-[0_16px_44px_rgba(0,0,0,0.18)]">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div key={link.label} className="relative">
                  <button
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-controls="services-menu"
                    className="group relative flex h-8 items-center gap-1 overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand text-white/72 hover:text-white"
                  >
                    Services
                    <span className="relative z-10 text-[10px] mt-0.5 opacity-70">▼</span>
                  </button>
                </div>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.href}
                className="group relative flex h-8 items-center overflow-hidden rounded-full px-3 font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-brand"
              >
                {location.pathname === link.href && (
                  <span className="absolute inset-0 rounded-full bg-red-brand shadow-[0_10px_24px_rgba(224,27,36,0.22)]"></span>
                )}
                <span className={`relative z-10 transition-colors duration-200 group-hover:text-white ${location.pathname === link.href ? 'text-white' : 'text-white/72'}`}>
                  {link.label}
                </span>
              </Link>
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
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-[transform,opacity,color] duration-300 ease-out lg:hidden text-white translate-y-0 opacity-100"
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
          <Link to="/request-a-quote" className="btn-primary mt-4">
            Request a Proposal
          </Link>
        </div>
      </div>
    </header>
  )
}
