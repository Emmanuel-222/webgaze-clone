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

export default function ProcessSection() {
  return (
    <section className="relative bg-dark-surface overflow-hidden section-pad">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10"></div>
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(45% 40% at 85% 15%, rgba(224,27,36,0.08), transparent 70%)' }}></div>
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,2.8rem)] text-white leading-[1.1]">
            A process built for clarity,<br className="hidden sm:block" /> not chaos.
          </h2>
          <p className="mt-6 font-body text-base text-white/55 leading-relaxed max-w-md">
            From the first conversation to final delivery, every step is intentional — keeping you informed, on time, and confident in the outcome.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connecting steps on mobile */}
          <div className="absolute top-0 bottom-0 left-[1.375rem] w-px bg-white/10 lg:hidden"></div>
          {/* Horizontal line on desktop */}
          <div className="hidden lg:block absolute top-[1.375rem] left-0 right-0 h-px bg-white/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-12 lg:pl-0">
                {/* Number circle */}
                <div className="relative z-10 mb-6 -ml-12 lg:ml-0">
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
