import { services } from '../../data/services.js'

export default function ServicesSection() {
  return (
    <section className="bg-[#f4f4f1] section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="label-tag">Services</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold leading-tight text-[#1a1a1a] font-display">
              Everything You Need to Build a Strong Online Presence
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#6a6a6a]">
              From strategy to execution, we deliver end-to-end digital solutions that help your business grow.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/contact" className="btn-primary">Start a Project</a>
              <a href="/services" className="btn-outline-dark">All Services</a>
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[#e5e5e0] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] font-display">
                  {service.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e5e5e0] bg-[#f4f4f1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6a6a6a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#6a6a6a]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
