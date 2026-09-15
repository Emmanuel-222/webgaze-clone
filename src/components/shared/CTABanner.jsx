import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-10 md:py-14">
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
  )
}
