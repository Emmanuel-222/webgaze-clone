import { useRef, useEffect } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    tagline: 'We listen before we act.',
    description: 'We get clear on your goals, your audience, and the context around the work — defining what success looks like before a single pixel moves.',
    tags: ['Kickoff Call', 'Goals', 'Research'],
  },
  {
    number: '02',
    title: 'Direction & Planning',
    tagline: 'We map the path forward.',
    description: 'With the picture in place, we set scope, priorities, and the practical steps to move — keeping everything aligned, realistic, and built for results.',
    tags: ['Scope', 'Sitemap', 'Timeline'],
  },
  {
    number: '03',
    title: 'Development & Refinement',
    tagline: 'We build and iterate.',
    description: 'Design, content, and systems are shaped through an iterative loop — focused on quality, consistency, and purpose at every stage.',
    tags: ['Design', 'Build', 'Feedback'],
  },
  {
    number: '04',
    title: 'Delivery & Implementation',
    tagline: 'We launch with confidence.',
    description: 'We bring it together, run final checks, and hand over a site that\'s complete and ready to perform — with support so nothing slips.',
    tags: ['QA', 'Launch', 'Handover'],
  },
]

function MobileProcessTimeline() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.29
      const span = rect.height * 0.94
      const p = Math.max(0, Math.min((start - rect.top) / span, 1))
      if (lineRef.current) {
        lineRef.current.style.height = `${p * 100}%`
      }
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#f4f4f6] pt-24 pb-20 lg:hidden">
      <div className="px-6">
        <span className="label-tag">How we work</span>
        <h2 className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] text-display-mob">
          A process built for clarity, not chaos.
        </h2>
        <p className="mt-4 max-w-[34ch] font-body text-[14px] leading-relaxed text-[#0a0a0a]/65">
          From the first conversation to final delivery, every step is intentional — keeping you informed, on time, and confident in the outcome.
        </p>
      </div>

      <div className="relative mt-12 px-6">
        <div className="absolute left-[34px] top-3 bottom-3 w-px bg-black/10"></div>
        <div ref={lineRef} className="absolute left-[34px] top-3 w-px bg-red-brand" style={{ height: '0%' }}></div>

        <ul className="space-y-10">
          {steps.map((step) => (
            <li key={step.number} className="relative flex gap-5 pl-2">
              <span className="relative z-10 grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-red-brand font-display text-[11px] font-bold text-white">
                {step.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[1.05rem] font-bold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
                  {step.title}
                </h3>
                <p className="mt-1 font-display text-[13px] font-medium text-red-brand">
                  {step.tagline}
                </p>
                <p className="mt-3 font-body text-[13px] leading-[1.55] text-[#0a0a0a]/65">
                  {step.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function DesktopProcess() {
  return (
    <section className="relative hidden bg-dark-surface overflow-hidden section-pad lg:block">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 40% at 85% 15%, rgba(224,27,36,0.08), transparent 70%)' }}></div>
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-[2px] bg-red-brand"></span>
              <span className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-red-brand">
                How We Work
              </span>
            </div>
            <h2 className="font-display font-bold text-display-md text-white leading-[1.1]">
              A process built for clarity, not chaos.
            </h2>
          </div>
          <p className="lg:pt-2 lg:self-end font-body text-base text-white/55 leading-relaxed max-w-md">
            From the first conversation to final delivery, every step is intentional — keeping you informed, on time, and confident in the outcome.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[1.375rem] left-0 right-0 h-px bg-white/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Number circle */}
                <div className="relative z-10 mb-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-dark-bg font-display font-bold text-sm tracking-[0.1em] text-red-brand">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-white leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="font-display text-sm font-medium text-red-brand/90 mb-4">
                  {step.tagline}
                </p>
                <p className="font-body text-sm text-white/55 leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-display font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-white/10 text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProcessSection() {
  return (
    <>
      <MobileProcessTimeline />
      <DesktopProcess />
    </>
  )
}