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
        <Link to="/" className="relative z-10 lg:absolute lg:left-5">
          <span className="text-lg font-bold text-white font-display">WebGaze</span>
        </Link>

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

        <Link
          to="/contact"
          className="hidden rounded-full bg-red-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(224,27,36,0.22)] transition-all duration-200 hover:bg-red-dark lg:absolute lg:right-5 lg:block"
        >
          Request a Proposal
        </Link>

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
