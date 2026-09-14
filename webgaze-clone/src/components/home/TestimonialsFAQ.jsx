import { useState, useEffect } from 'react'
import { testimonials, faqs } from '../../data/testimonials.js'

export default function TestimonialsFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Mobile version */}
      <div className="lg:hidden">
        <div className="container-wide">
          <div className="flex flex-col">
            <div className="mb-5">
              <span className="label-tag">Testimonials</span>
            </div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2rem,5vw,2.8rem)] text-[#0f0f0f]">
              What clients think.
            </h2>
            <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-light-muted">
              Real outcomes for real businesses — built with strategy, clarity, and craft.
            </p>
            <div className="relative mt-9 flex-1 overflow-hidden">
              <div className="flex h-full min-h-[380px] w-full flex-col justify-between rounded-2xl p-8 md:p-10 bg-[#0f0f0f] text-white" style={{ boxShadow: '8px 12px 48px rgba(0,0,0,0.55), 2px 2px 0px rgba(255,255,255,0.04) inset' }}>
                <div className="flex justify-center mb-5 md:mb-10">
                  <div className="inline-flex h-11 md:h-16 items-center justify-center rounded-lg md:rounded-xl bg-white px-3.5 md:px-5">
                    <img src={testimonials[activeTestimonial].logo} alt={testimonials[activeTestimonial].company} className="h-6 md:h-9 w-auto max-w-[110px] md:max-w-[150px] object-contain" />
                  </div>
                </div>
                <blockquote className="font-body text-[0.95rem] md:text-2xl leading-[1.55] md:leading-[1.6] italic flex-1 text-white/85">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 md:mt-10 md:pt-7 border-t border-white/10">
                  <p className="font-display font-bold text-sm md:text-base text-white">{testimonials[activeTestimonial].company}</p>
                  <p className="font-body text-xs md:text-sm mt-0.5 md:mt-1 text-white/50">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-[#ddd]"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-[#0f0f0f] rounded-full transition-all duration-300"
                      style={{ width: i === activeTestimonial ? '100%' : '0%' }}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-16">
            <div className="mb-5">
              <span className="label-tag">FAQ</span>
            </div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2rem,5vw,2.8rem)] text-[#0f0f0f]">
              Questions, Answered.
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

      {/* Desktop version */}
      <section className="hidden lg:block section-pad bg-light-bg border-t border-light-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-stretch">
            <div className="flex h-full flex-col">
              <div className="mb-5">
                <span className="label-tag">Testimonials</span>
              </div>
              <h2 className="mt-5 font-display font-bold text-[clamp(2rem,5vw,2.8rem)] text-[#0f0f0f]">
                What clients think.
              </h2>
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-light-muted">
                Real outcomes for real businesses — built with strategy, clarity, and craft.
              </p>
              <div className="relative mt-9 flex-1 overflow-hidden">
                <div className="flex h-full min-h-[380px] w-full flex-col justify-between rounded-2xl p-8 md:p-10 bg-[#0f0f0f] text-white" style={{ boxShadow: '8px 12px 48px rgba(0,0,0,0.55), 2px 2px 0px rgba(255,255,255,0.04) inset' }}>
                  <div className="flex justify-center mb-5 md:mb-10">
                    <div className="inline-flex h-11 md:h-16 items-center justify-center rounded-lg md:rounded-xl bg-white px-3.5 md:px-5">
                      <img src={testimonials[activeTestimonial].logo} alt={testimonials[activeTestimonial].company} className="h-6 md:h-9 w-auto max-w-[110px] md:max-w-[150px] object-contain" />
                    </div>
                  </div>
                  <blockquote className="font-body text-[0.95rem] md:text-2xl leading-[1.55] md:leading-[1.6] italic flex-1 text-white/85">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 pt-4 md:mt-10 md:pt-7 border-t border-white/10">
                    <p className="font-display font-bold text-sm md:text-base text-white">{testimonials[activeTestimonial].company}</p>
                    <p className="font-body text-xs md:text-sm mt-0.5 md:mt-1 text-white/50">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-[#ddd]"
                      aria-label={`Go to testimonial ${i + 1}`}
                    >
                      <div
                        className="absolute inset-y-0 left-0 bg-[#0f0f0f] rounded-full transition-all duration-300"
                        style={{ width: i === activeTestimonial ? '100%' : '0%' }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div className="mb-5">
                <span className="label-tag">FAQ</span>
              </div>
              <h2 className="mt-5 font-display font-bold text-[clamp(2rem,5vw,2.8rem)] text-[#0f0f0f]">
                Questions, Answered.
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
    </>
  )
}
