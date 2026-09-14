import { clientLogos } from '../../data/navigation'

export default function LogoMarquee() {
  return (
    <section className="relative z-10 -mt-10 overflow-hidden rounded-t-[2.25rem] md:-mt-16 md:rounded-t-[3rem] bg-white py-5 md:py-6">
      <div className="relative mx-auto flex max-w-[1400px] items-center px-4 md:px-10">
        <div className="relative z-20 flex shrink-0 items-center bg-white pr-5 md:pr-7">
          <span className="max-w-[150px] font-display text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-[#6b6b6b]">
            Trusted by organisations across Australia
          </span>
        </div>
        <div className="relative z-10 -ml-5 min-w-0 flex-1 md:-ml-7">
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[120px] md:w-[160px] z-10 bg-gradient-to-r from-white via-white/70 to-white/0"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-[120px] md:w-[160px] z-10 bg-gradient-to-l from-white via-white/70 to-white/0"></div>

            <div className="overflow-hidden">
              <div className="animate-marquee flex items-center" style={{ gap: '48px' }}>
                {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.image}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto max-w-[160px] select-none object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 flex-shrink-0"
                    loading="eager"
                    fetchPriority="auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
