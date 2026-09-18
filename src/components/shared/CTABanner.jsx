import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <>
      {/* Mobile */}
      <section className="relative flex min-h-[88svh] flex-col justify-center overflow-hidden bg-gradient-to-b from-black via-[#15050a] to-[#3a060c] px-6 pt-28 pb-16 lg:hidden">
        <div>
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-red-brand">
            No pressure. Just next steps.
          </p>
          <h2 className="mt-7 font-display font-bold leading-[1.02] tracking-[-0.04em] text-white text-[clamp(2.5rem,12vw,3.6rem)]">
            Let&apos;s build something that <span className="text-white/45">earns its keep</span>.
          </h2>
          <p className="mt-8 font-display font-medium text-[1.05rem] leading-snug text-white/55">
            Tell us where you are and where you&apos;re headed. <span className="text-white">We&apos;ll handle the strategy, design, and build.</span>
          </p>
        </div>
        <div className="mt-12 space-y-4">
          <Link
            to="/request-a-quote"
            className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-red-brand px-7 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition active:scale-[0.98]"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Request a Proposal <span className="text-base">→</span>
            </span>
          </Link>
          <a
            href="mailto:hello@webgaze.com.au"
            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/20 px-7 font-display text-sm font-bold uppercase tracking-[0.14em] text-white"
          >
            Email Us
          </a>
          <p className="pt-4 text-center font-body text-[11px] text-white/40">
            We typically respond within 1 business day.
          </p>
        </div>
      </section>

      {/* Desktop */}
      <section className="relative hidden overflow-hidden bg-[#0a0a0a] py-10 md:py-14 lg:block">
        <div className="pointer-events-none absolute right-[8%] top-1/2 h-56 w-[420px] -translate-y-1/2 rounded-full bg-red-brand opacity-[0.07] blur-[120px]"></div>
        <div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-red-brand" style={{ transform: 'scaleX(0)' }}></div>

        <div className="container-wide relative z-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-red-brand">
                No pressure. Just next steps.
              </p>
              <p className="mt-3 max-w-[24ch] font-display text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[2rem]">
                Let&apos;s build something that <span className="text-white/45">earns its keep</span>.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link to="/request-a-quote" className="btn-primary justify-center">
                Request a Proposal <span aria-hidden="true">→</span>
              </Link>
              <Link to="/book-a-discovery-session" className="btn-outline justify-center border-white/30 text-white hover:border-red-brand">
                Book Discovery Call <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}