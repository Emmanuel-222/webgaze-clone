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
