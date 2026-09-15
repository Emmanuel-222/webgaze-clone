import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

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
    <footer className="bg-[#111111] text-[#fafafa] border-t border-dark-border">
      <div className="container-wide py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                alt="WebGaze"
                className="h-7 w-auto"
                src="/images/logo-white.png"
              />
            </Link>
            <p className="text-sm text-[#9a9a92] font-body leading-relaxed max-w-[320px]">
              Building high-performance websites, AI-assisted custom systems, and practical digital tools for growing businesses.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/webgaze"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-[#888] hover:border-red-brand hover:text-red-brand transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/webgaze.au"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-[#888] hover:border-red-brand hover:text-red-brand transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com/webgaze_au"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-[#888] hover:border-red-brand hover:text-red-brand transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-dark-muted mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#c0c0c0] hover:text-red-brand transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-dark-muted mb-4">Company</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-[#c0c0c0] hover:text-red-brand transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-xs font-semibold tracking-[0.18em] uppercase text-dark-muted mb-4">Get In Touch</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:0422169233" className="text-sm text-[#c0c0c0] hover:text-red-brand transition-colors duration-200">
                  0422 169 233
                </a>
              </li>
              <li>
                <a href="mailto:hello@webgaze.com.au" className="text-sm text-[#c0c0c0] hover:text-red-brand transition-colors duration-200">
                  hello@webgaze.com.au
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-display font-semibold tracking-[0.12em] uppercase text-dark-muted mb-3">Newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 bg-dark-surface border border-dark-border rounded-full px-4 py-2.5 text-sm text-[#fafafa] placeholder:text-dark-muted focus:outline-none focus:border-red-brand transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-red-brand rounded-full px-5 py-2.5 text-white text-xs font-display font-semibold hover:bg-red-dark transition-colors duration-200"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 divider">
          <p className="text-xs text-dark-muted">
            © 2026 WebGaze PTY LTD. All rights reserved. ABN 53 694 048 158
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-dark-muted hover:text-red-brand transition-colors duration-200">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-xs text-dark-muted hover:text-red-brand transition-colors duration-200">
              Privacy &amp; Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
