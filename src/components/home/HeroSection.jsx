import { useTypewriter } from "../../hooks/useTypewriter";

const HERO_PHRASES = ["deliver results.", "build trust.", "drive growth."];

function HeroGridSvg({ className }) {
  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Static grid lines */}
      <line x1="200" y1="0" x2="200" y2="800" stroke="#ffffff" strokeWidth="0.5" />
      <line x1="400" y1="0" x2="400" y2="800" stroke="#ffffff" strokeWidth="0.5" />
      <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="0.5" />
      <line x1="0" y1="400" x2="800" y2="400" stroke="#ffffff" strokeWidth="0.5" />
      <line x1="0" y1="600" x2="800" y2="600" stroke="#ffffff" strokeWidth="0.5" />

      {/* Static circles */}
      <g style={{ transformOrigin: "400px 400px" }}>
        <circle cx="400" cy="400" r="380" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.5" />
        <circle cx="400" cy="400" r="280" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.4" strokeDasharray="2 8" />
      </g>
      <circle cx="200" cy="200" r="160" fill="none" stroke="#ffffff" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#ffffff" strokeWidth="0.4" />

      {/* Static quarter-circles */}
      <path d="M 200 200 L 400 200 A 200 200 0 0 1 200 400 Z" fill="#E01B24" opacity="0.55" />
      <path d="M 0 400 L 200 400 A 200 200 0 0 0 0 600 Z" fill="#ffffff" opacity="0.16" />

      {/* Animated upper arcs (y=400, sweep clockwise top-to-right) */}
      <path className="ring-arc" d="M 170 400 A 30 30 0 0 1 230 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="95" strokeDashoffset="95"
        style={{ "--path-len": 95, animation: "stroke-draw 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s forwards" }} />
      <path className="ring-arc" d="M 145 400 A 55 55 0 0 1 255 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="173" strokeDashoffset="173"
        style={{ "--path-len": 173, animation: "stroke-draw 0.85s cubic-bezier(0.4,0,0.2,1) 0.18s forwards" }} />
      <path className="ring-arc" d="M 120 400 A 80 80 0 0 1 280 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="251" strokeDashoffset="251"
        style={{ "--path-len": 251, animation: "stroke-draw 0.9s cubic-bezier(0.4,0,0.2,1) 0.26s forwards" }} />
      <path className="ring-arc" d="M 95 400 A 105 105 0 0 1 305 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="330" strokeDashoffset="330"
        style={{ "--path-len": 330, animation: "stroke-draw 0.95s cubic-bezier(0.4,0,0.2,1) 0.34s forwards" }} />
      <path className="ring-arc" d="M 70 400 A 130 130 0 0 1 330 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="408" strokeDashoffset="408"
        style={{ "--path-len": 408, animation: "stroke-draw 1s cubic-bezier(0.4,0,0.2,1) 0.42s forwards" }} />
      <path className="ring-arc" d="M 45 400 A 155 155 0 0 1 355 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="487" strokeDashoffset="487"
        style={{ "--path-len": 487, animation: "stroke-draw 1.05s cubic-bezier(0.4,0,0.2,1) 0.5s forwards" }} />
      <path className="ring-arc" d="M 20 400 A 180 180 0 0 1 380 400" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="565" strokeDashoffset="565"
        style={{ "--path-len": 565, animation: "stroke-draw 1.1s cubic-bezier(0.4,0,0.2,1) 0.58s forwards" }} />

      {/* Animated lower arcs (y=600, sweep counterclockwise bottom-to-right) */}
      <path className="ring-arc" d="M 170 600 A 30 30 0 0 0 230 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="95" strokeDashoffset="95"
        style={{ "--path-len": 95, animation: "stroke-draw 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s forwards" }} />
      <path className="ring-arc" d="M 145 600 A 55 55 0 0 0 255 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="173" strokeDashoffset="173"
        style={{ "--path-len": 173, animation: "stroke-draw 0.85s cubic-bezier(0.4,0,0.2,1) 0.18s forwards" }} />
      <path className="ring-arc" d="M 120 600 A 80 80 0 0 0 280 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="251" strokeDashoffset="251"
        style={{ "--path-len": 251, animation: "stroke-draw 0.9s cubic-bezier(0.4,0,0.2,1) 0.26s forwards" }} />
      <path className="ring-arc" d="M 95 600 A 105 105 0 0 0 305 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="330" strokeDashoffset="330"
        style={{ "--path-len": 330, animation: "stroke-draw 0.95s cubic-bezier(0.4,0,0.2,1) 0.34s forwards" }} />
      <path className="ring-arc" d="M 70 600 A 130 130 0 0 0 330 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="408" strokeDashoffset="408"
        style={{ "--path-len": 408, animation: "stroke-draw 1s cubic-bezier(0.4,0,0.2,1) 0.42s forwards" }} />
      <path className="ring-arc" d="M 45 600 A 155 155 0 0 0 355 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="487" strokeDashoffset="487"
        style={{ "--path-len": 487, animation: "stroke-draw 1.05s cubic-bezier(0.4,0,0.2,1) 0.5s forwards" }} />
      <path className="ring-arc" d="M 20 600 A 180 180 0 0 0 380 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="565" strokeDashoffset="565"
        style={{ "--path-len": 565, animation: "stroke-draw 1.1s cubic-bezier(0.4,0,0.2,1) 0.58s forwards" }} />
      <path className="ring-arc" d="M -5 600 A 205 205 0 0 0 405 600" fill="none" stroke="#ffffff" strokeWidth="1.2"
        strokeDasharray="644" strokeDashoffset="644"
        style={{ "--path-len": 644, animation: "stroke-draw 1.15s cubic-bezier(0.4,0,0.2,1) 0.66s forwards" }} />
    </svg>
  );
}

function TypewriterTagline({ className }) {
  const typedText = useTypewriter(HERO_PHRASES, 80, 40, 2000);
  const longest = HERO_PHRASES.reduce((a, b) => (a.length >= b.length ? a : b), '');
  return (
    <p className={className}>
      Designed to{" "}
      <span className="relative inline-flex align-baseline whitespace-pre">
        <span aria-hidden="true" className="invisible font-bold">{longest}|</span>
        <span className="sr-only">{HERO_PHRASES.join(', ')}</span>
        <span aria-hidden="true" className="absolute left-0 top-0 text-left font-bold text-red-brand">
          {typedText}
          <span className="animate-blink font-normal">|</span>
        </span>
      </span>
    </p>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* Mobile hero */}
      <section className="relative flex min-h-[80svh] flex-col overflow-hidden bg-dark-bg text-[#fafafa] lg:hidden">
        <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-red-brand/[0.06] blur-[140px]"></div>

        <div className="container-wide relative z-10 flex flex-1 flex-col justify-center pb-10 pt-28">
          <h1 className="hero-stagger font-display font-semibold leading-[1.02] tracking-[-0.035em] text-white text-[clamp(2.55rem,10.5vw,3.7rem)]" style={{ animationDelay: "150ms" }}>
            We build modern brands &amp; digital experiences.
          </h1>

          <TypewriterTagline className="hero-stagger mt-5 font-display font-medium tracking-[-0.01em] text-white/55 text-[clamp(1.1rem,4.4vw,1.55rem)]" />

          <p className="hero-stagger mt-6 max-w-[34ch] font-body text-[0.92rem] leading-[1.55] text-white/45" style={{ animationDelay: "450ms" }}>
            Brands that hold their own.
            <br />
            Websites that pull their weight.
          </p>

          <div className="hero-stagger mt-8 flex items-center gap-5" style={{ animationDelay: "600ms" }}>
            <a
              href="/request-a-quote"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-red-brand pl-4 pr-3.5 font-display text-[0.82rem] font-semibold text-white shadow-[0_8px_24px_rgba(224,27,36,0.26)] transition-colors hover:bg-red-dark"
            >
              Start a project
              <span aria-hidden="true" className="text-sm leading-none">→</span>
            </a>
            <a
              href="/projects"
              className="group inline-flex items-center gap-1.5 font-display text-[0.82rem] font-medium text-white/60 transition-colors hover:text-white"
            >
              See our work
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Desktop hero */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark-bg text-[#fafafa] hidden lg:flex">
        <HeroGridSvg className="hero-svg absolute left-0 top-0 h-full w-auto max-w-[55%] pointer-events-none select-none" />

        <div className="hero-stagger absolute -bottom-40 -right-40 w-[720px] h-[720px] bg-red-brand/[0.06] blur-[160px] rounded-full pointer-events-none" style={{ animationDelay: "0ms" }} />

        <div className="container-wide w-full relative z-10 flex-1 flex flex-col justify-center items-end text-right pt-32 pb-12 overflow-hidden">
          <h1
            className="hero-stagger font-display font-bold leading-[1.05] tracking-[-0.04em] text-white text-[clamp(1.85rem,4.5vw,4.4rem)]"
            style={{ animationDelay: "150ms" }}
          >
            <span className="block">We build modern brands</span>
            <span className="block">and digital experiences</span>
          </h1>

          <TypewriterTagline className="hero-stagger mt-6 font-display font-semibold tracking-[-0.015em] text-white/70 text-[clamp(1.3rem,2.8vw,2.8rem)]" />

          <p className="hero-stagger mt-9 ml-auto max-w-xl text-left font-body text-base md:text-lg text-white/65 leading-relaxed" style={{ animationDelay: "450ms" }}>
            A strategic web design, branding, and SEO studio creating clear,
            practical work that helps Australian businesses grow.
          </p>

          <div className="hero-stagger mt-10 flex flex-col items-end sm:flex-row sm:justify-end gap-4" style={{ animationDelay: "600ms" }}>
            <a
              href="/request-a-quote"
              className="btn-primary justify-center"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-[#444] text-[#fafafa] font-display font-semibold px-7 py-3.5 text-sm tracking-wide uppercase rounded-full hover:border-red-brand hover:text-red-brand transition-all duration-300"
            >
              See Our Work
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex justify-center">
          <div className="flex flex-col items-center gap-1.5 text-white/40">
            <span className="font-display text-[0.6rem] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <span className="text-sm leading-none">↓</span>
          </div>
        </div>
      </section>
    </>
  );
}