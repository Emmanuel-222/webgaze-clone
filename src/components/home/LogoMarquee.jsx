import { clientLogos } from '../../data/navigation'

const duplicated = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]

export default function LogoMarquee() {
  return (
    <>
      {/* Mobile */}
      <section className="relative z-10 -mt-10 overflow-hidden rounded-t-[2.25rem] bg-white pb-5 pt-6 lg:hidden">
        <p className="mx-auto mb-5 max-w-[240px] px-4 text-center font-display text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#8a8a8a]">
          Trusted by organisations across Australia
        </p>
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex items-center" style={{ gap: '36px' }}>
            {duplicated.map((logo, i) => (
              <img
                key={i}
                src={logo.image}
                alt={logo.name}
                className="h-8 w-auto max-w-[128px] select-none object-contain opacity-90 flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="relative z-10 -mt-10 hidden overflow-hidden rounded-t-[2.25rem] bg-white py-5 md:-mt-16 md:rounded-t-[3rem] md:py-6 lg:block">
        <div className="relative mx-auto flex max-w-[1400px] items-center px-4 md:px-10">
          <div className="relative z-20 flex shrink-0 items-center bg-white pr-5 md:pr-7">
            <span className="max-w-[150px] font-display text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-[#6b6b6b]">
              Trusted by organisations across Australia
            </span>
          </div>
          <div className="relative z-10 -ml-5 min-w-0 flex-1 md:-ml-7">
            <div className="relative w-full overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/70 to-white/0 md:w-40"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/70 to-white/0 md:w-28"></div>

              <div className="overflow-hidden">
                <div className="animate-marquee flex items-center" style={{ gap: '48px' }}>
                  {duplicated.map((logo, i) => (
                    <img
                      key={i}
                      src={logo.image}
                      alt={logo.name}
                      className="h-8 md:h-10 w-auto max-w-[160px] select-none object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 flex-shrink-0"
                      loading="eager"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}