import { useTypewriter } from '../../hooks/useTypewriter'

export default function HeroSection() {
  const typedText = useTypewriter(
    ['deliver results.', 'build trust.', 'drive growth.'],
    80,
    40,
    2000
  )

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a] text-[#fafafa]">
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 h-full w-auto max-w-[55%] opacity-[0.18] pointer-events-none select-none"
        aria-hidden="true"
      >
        <line x1="200" y1="0" x2="200" y2="800" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="400" y1="0" x2="400" y2="800" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="800" y2="400" stroke="#ffffff" strokeWidth="0.5" />
        <line x1="0" y1="600" x2="800" y2="600" stroke="#ffffff" strokeWidth="0.5" />
        <path d="M 170 400 A 30 30 0 0 1 230 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 145 400 A 55 55 0 0 1 255 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 120 400 A 80 80 0 0 1 280 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 95 400 A 105 105 0 0 1 305 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 70 400 A 130 130 0 0 1 330 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 45 400 A 155 155 0 0 1 355 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 20 400 A 180 180 0 0 1 380 400" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 170 600 A 30 30 0 0 0 230 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 145 600 A 55 55 0 0 0 255 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 120 600 A 80 80 0 0 0 280 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 95 600 A 105 105 0 0 0 305 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 70 600 A 130 130 0 0 0 330 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 45 600 A 155 155 0 0 0 355 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M 20 600 A 180 180 0 0 0 380 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M -5 600 A 205 205 0 0 0 405 600" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        <g style={{ transformOrigin: '400px 400px' }}>
          <circle cx="400" cy="400" r="380" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.5" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.4" strokeDasharray="2 8" />
        </g>
        <circle cx="200" cy="200" r="160" fill="none" stroke="#ffffff" strokeWidth="0.6" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#ffffff" strokeWidth="0.4" />
        <path d="M 200 200 L 400 200 A 200 200 0 0 1 200 400 Z" fill="#E01B24" opacity="0.55" />
        <path d="M 0 400 L 200 400 A 200 200 0 0 0 0 600 Z" fill="#ffffff" opacity="0.16" />
      </svg>

      <div className="absolute -bottom-40 -right-40 w-[720px] h-[720px] bg-red-brand/[0.06] blur-[160px] rounded-full pointer-events-none"></div>

      <div className="container-wide w-full relative z-10 flex-1 flex flex-col justify-center items-end text-right pt-32 pb-12">
        <h1 className="font-display font-bold leading-[1.05] tracking-[-0.04em] text-white text-[clamp(1.85rem,4.5vw,4.4rem)]">
          <span className="block">We build modern brands</span>
          <span className="block">and digital experiences</span>
        </h1>

        <p className="mt-6 font-display font-semibold tracking-[-0.015em] text-white/70 text-[clamp(1.3rem,2.8vw,2.8rem)]">
          Designed to{' '}
          <span className="relative inline-flex align-baseline whitespace-pre">
            <span className="invisible font-bold">{typedText}|</span>
            <span className="sr-only">deliver results, build trust, drive growth</span>
            <span className="absolute left-0 top-0 text-left font-bold text-red-brand">
              <span className="font-normal">|</span>
            </span>
            <span className="font-bold text-red-brand">{typedText}</span>
          </span>
        </p>

        <p className="mt-9 ml-auto max-w-xl text-left font-body text-base md:text-lg text-white/65 leading-relaxed">
          A strategic web design, branding, and SEO studio creating clear, practical work that helps Australian businesses grow.
        </p>

        <div className="mt-10 flex flex-col items-end sm:flex-row sm:justify-end gap-4">
          <a href="/contact" className="btn-primary justify-center">
            Start a Project
          </a>
          <a href="/projects" className="inline-flex items-center justify-center gap-2 border border-[#444] text-[#fafafa] font-display font-semibold px-7 py-3.5 text-sm tracking-wide uppercase rounded-full hover:border-red-brand hover:text-red-brand transition-all duration-300">
            See Our Work
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-1.5 text-white/40">
          <span className="font-display text-[0.6rem] uppercase tracking-[0.2em]">Scroll</span>
          <span className="text-sm leading-none animate-bounce">↓</span>
        </div>
      </div>
    </section>
  )
}
