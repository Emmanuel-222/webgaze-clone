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
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute h-full w-full opacity-[0.07]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="200" x2="1200" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="white" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="white" strokeWidth="0.5" />
          <circle cx="900" cy="400" r="300" stroke="white" strokeWidth="0.5" />
          <circle cx="900" cy="400" r="200" stroke="white" strokeWidth="0.5" />
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
