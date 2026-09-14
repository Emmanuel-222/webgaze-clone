import { clientLogos } from '../../data/navigation'

export default function LogoMarquee() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[2.25rem] bg-[#f4f4f1] pb-12 pt-16">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="label-tag">Trusted by organisations across Australia</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f4f4f1] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f4f4f1] to-transparent" />

          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-[#4a4a4a]">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
