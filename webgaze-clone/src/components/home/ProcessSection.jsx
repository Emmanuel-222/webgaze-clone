const steps = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    tagline: 'We listen before we act.',
    description: 'We take the time to understand your business, goals, and audience before making any recommendations.',
    tags: ['Research', 'Strategy', 'Analysis'],
  },
  {
    number: '02',
    title: 'Direction & Planning',
    tagline: 'We map the path forward.',
    description: 'We create a clear roadmap with defined milestones, timelines, and deliverables.',
    tags: ['Planning', 'Wireframes', 'Scope'],
  },
  {
    number: '03',
    title: 'Development & Refinement',
    tagline: 'We build and iterate.',
    description: 'We bring the design to life with clean, performant code and continuous feedback loops.',
    tags: ['Build', 'Test', 'Iterate'],
  },
  {
    number: '04',
    title: 'Delivery & Implementation',
    tagline: 'We launch with confidence.',
    description: 'We deploy your project, ensure everything works perfectly, and provide ongoing support.',
    tags: ['Launch', 'Support', 'Optimise'],
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] section-pad">
      <div className="container-wide">
        <div className="mb-16 text-center">
          <span className="label-tag">How We Work</span>
          <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-white font-display">
            A process built for clarity, not chaos.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[28px] hidden h-[1px] bg-white/10 lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#101010] text-lg font-bold text-red-brand font-display lg:mx-0">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-red-brand">
                  {step.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40"
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
