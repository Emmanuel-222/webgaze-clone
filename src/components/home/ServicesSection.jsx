import { services } from '../../data/services.js'

export default function ServicesSection() {
  return (
    <section className="bg-light-bg border-t border-light-border py-20 md:py-28 lg:py-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#0f0f0f] leading-[1.1]">
              Everything You Need to Build a Strong Online Presence
            </h2>
            <p className="mt-6 font-body text-base text-light-muted leading-relaxed max-w-md">
              From strategy and design to optimisation and ongoing support, our services work together to help your business grow online — with clarity and confidence at every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/request-a-quote" className="btn-primary">Start a Project</a>
              <a href="/services" className="btn-outline-dark">All Services</a>
            </div>
          </div>

          <div className="relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="sticky mb-4"
                style={{ top: `${160 + index * 28}px`, zIndex: index + 1 }}
              >
                <div className="bg-white border border-light-border rounded-2xl p-8 group shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <h3 className="font-display font-bold text-xl text-[#0f0f0f] mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-[15px] text-light-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-display font-semibold tracking-[0.14em] uppercase px-3 py-1.5 rounded-full border border-light-border text-[#555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-light-border pt-5 flex items-center justify-between gap-4">
                    <a
                      href={`/services/${service.slug || service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}
                      className="inline-flex items-center gap-2 font-display font-semibold text-sm text-[#0f0f0f] border border-light-border rounded-full px-4 py-2 hover:border-red-brand hover:text-red-brand transition-all duration-200"
                    >
                      Learn more →
                    </a>
                    <a
                      href="/projects"
                      className="font-display font-bold text-sm text-[#0f0f0f] hover:text-red-brand transition-colors duration-200"
                    >
                      View Our Work →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
