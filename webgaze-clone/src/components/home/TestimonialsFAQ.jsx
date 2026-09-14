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
    <section className="bg-[#f4f4f1] section-pad">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <span className="label-tag">Testimonials</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#1a1a1a] font-display">
              What clients think.
            </h2>

            <div className="mt-10">
              <blockquote className="text-lg leading-relaxed text-[#4a4a4a]">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-[#1a1a1a]">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-sm text-[#6a6a6a]">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>

              <div className="mt-8 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? 'w-8 bg-red-brand'
                        : 'w-2 bg-[#d0d0c8]'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="label-tag">FAQ</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-[#1a1a1a] font-display">
              Questions, Answered.
            </h2>

            <div className="mt-10 divide-y divide-[#e5e5e0]">
              {faqs.map((faq) => (
                <div key={faq.id} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="font-medium text-[#1a1a1a]">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 text-lg text-[#6a6a6a] transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-[#6a6a6a]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="mailto:hello@webgaze.com.au" className="btn-outline-dark mt-8">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
