import { useState, useEffect } from 'react'
import { testimonials, faqs } from '../../data/testimonials.js'

function TestimonialLogo({ testimonial }) {
  if (testimonial.initial) {
    return (
      <span className="font-display text-lg md:text-2xl font-bold tracking-tight text-[#0f0f0f]">
        {testimonial.initial}
      </span>
    )
  }
  return (
    <img
      src={testimonial.logo}
      alt={testimonial.company}
      className="h-6 md:h-9 w-auto max-w-[110px] md:max-w-[150px] object-contain"
      loading="lazy"
    />
  )
}

function MobileTestimonials({ activeTestimonial, onSelect }) {
  const t = testimonials[activeTestimonial]
  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-24 pb-16">
      <div className="px-6">
        <span className="label-tag">Testimonials</span>
        <h2 className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] text-display-mob">
          What clients think.
        </h2>
      </div>

      <div className="relative mx-6 mt-10 min-h-[260px] overflow-hidden rounded-[26px] border border-black/8 bg-gradient-to-b from-[#0f0f12] to-[#050507] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
        <div>
          <span className="font-display text-5xl leading-none text-red-brand">&ldquo;</span>
          <p className="mt-3 font-display text-[1.05rem] leading-[1.45] tracking-[-0.012em] text-white/85">
            {t.quote}
          </p>
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-display text-sm font-semibold text-white">{t.company}</p>
            <p className="font-body text-[12px] text-white/45">{t.role}</p>
          </div>
        </div>
        <div className="absolute bottom-4 right-5 flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => onSelect(i)}
              className={`h-1 rounded-full transition-all ${i === activeTestimonial ? 'w-6 bg-white' : 'w-2 bg-white/25'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileFAQ() {
  const [openFaq, setOpenFaq] = useState(1)
  return (
    <section className="relative bg-[#f4f4f6] pt-24 pb-20">
      <div className="px-6">
        <span className="label-tag">FAQ</span>
        <h2 className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.035em] text-[#0a0a0a] text-display-mob">
          Questions, answered.
        </h2>
        <p className="mt-4 max-w-[34ch] font-body text-[14px] leading-relaxed text-[#0a0a0a]/65">
          Can&apos;t find the answer you&apos;re looking for? Reach out directly — we&apos;re happy to help.
        </p>
      </div>

      <ul className="mt-9 px-6">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id
          return (
            <li key={faq.id} className="border-t border-black/10 last:border-b last:border-black/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
              >
                <span className="font-display text-[15px] font-semibold leading-snug text-[#0a0a0a]">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-black/20 text-[#0a0a0a] transition-transform duration-300"
                  style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              >
                <p className="pb-5 pr-9 font-body text-[13.5px] leading-relaxed text-[#0a0a0a]/65">
                  {faq.answer}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-8 px-6">
        <a
          href="mailto:hello@webgaze.com.au"
          className="inline-flex h-12 items-center justify-center rounded-full border border-black/20 px-6 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[#0a0a0a]"
        >
          Email Us
        </a>
      </div>
    </section>
  )
}

function DesktopTestimonialsFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[activeTestimonial]

  return (
    <section className="hidden lg:block section-pad bg-light-bg border-t border-light-border">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-stretch">
          <div className="flex h-full flex-col">
            <span className="label-tag">Testimonials</span>
            <h2 className="mt-5 font-display font-bold text-display-lg text-[#0f0f0f]">
              What clients think.
            </h2>
            <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-light-muted">
              Real outcomes for real businesses — built with strategy, clarity, and craft.
            </p>
            <div className="relative mt-9 flex-1 overflow-hidden">
              <div
                className="flex h-full min-h-[380px] w-full flex-col justify-between rounded-2xl p-8 md:p-10 bg-[#f2f2f2] text-[#0f0f0f]"
                style={{ boxShadow: 'rgba(0,0,0,0.14) 8px 12px 48px, rgba(255,255,255,0.8) 2px 2px 0px inset' }}
              >
                <div className="flex justify-center mb-5 md:mb-10">
                  <div className="inline-flex h-11 md:h-16 items-center justify-center rounded-lg md:rounded-xl bg-white px-3.5 md:px-5">
                    <TestimonialLogo testimonial={t} />
                  </div>
                </div>
                <blockquote className="font-body text-[0.95rem] md:text-2xl leading-[1.55] md:leading-[1.6] italic flex-1 text-[#1a1a1a]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 md:mt-10 md:pt-7 border-t border-[#0f0f0f]/10">
                  <p className="font-display font-bold text-sm md:text-base text-[#0f0f0f]">{t.company}</p>
                  <p className="font-body text-xs md:text-sm mt-0.5 md:mt-1 text-[#777]">{t.role}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setActiveTestimonial(i)}
                    className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-[#ddd]"
                  >
                    <div className="absolute inset-0 bg-[#0f0f0f] rounded-full transition-opacity duration-300" style={{ opacity: i === activeTestimonial ? 1 : 0 }}></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <span className="label-tag">FAQ</span>
            <h2 className="mt-5 font-display font-bold text-display-lg text-[#0f0f0f]">
              Questions, answered.
            </h2>
            <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-light-muted">
              Can&apos;t find the answer you&apos;re looking for? Reach out directly — we&apos;re happy to help.
            </p>
            <div className="mt-9 flex-1 divide-y divide-light-border border-t border-light-border">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <span className="font-display font-semibold text-base md:text-lg text-[#0f0f0f] group-hover:text-red-brand transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-current flex items-center justify-center mt-0.5 text-base">
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-light-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a href="mailto:hello@webgaze.com.au" className="mt-8 inline-flex btn-primary self-start">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TestimonialsFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="lg:hidden">
        <MobileTestimonials activeTestimonial={activeTestimonial} onSelect={setActiveTestimonial} />
        <MobileFAQ />
      </div>
      <DesktopTestimonialsFAQ />
    </>
  )
}