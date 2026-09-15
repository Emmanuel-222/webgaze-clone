import { useRef, useEffect, useState } from 'react'
import { projects } from '../../data/projects.js'
import { useScrollProgress } from '../../hooks/useScrollProgress'

function RevealImage({ src, alt, className }) {
  const [revealed, setRevealed] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative h-full w-full overflow-hidden ${className || ''}`}>
      <img
        alt={alt}
        className={`object-cover object-center absolute h-full w-full inset-0 transition-all duration-[1200ms] ease-out group-hover/product:scale-[1.06] ${
          revealed
            ? 'blur-0 scale-100 opacity-100'
            : 'blur-[18px] scale-[1.08] opacity-40'
        }`}
        src={src}
        loading="lazy"
      />
    </div>
  )
}

export default function ProjectsParallax() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  const row1 = projects.slice(0, 6)
  const row2 = projects.slice(6, 12)

  const row1Translate = -progress * 300
  const row2Translate = progress * 300

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] antialiased h-[200vh] md:h-[220vh]"
      aria-labelledby="parallax-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-16 md:pt-20 pb-10 [perspective:1000px] [transform-style:preserve-3d]">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60% 40% at 50% 10%, rgba(224,27,36,0.10), transparent 70%), radial-gradient(40% 30% at 80% 60%, rgba(255,255,255,0.04), transparent 70%)' }}></div>
        <div className="container-wide relative w-full z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 id="parallax-heading" className="font-display font-bold text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.04] tracking-[-0.03em] text-white">
                Projects that<br/>speak for themselves.
              </h2>
              <p className="max-w-xl text-sm md:text-base mt-4 text-neutral-300">
                A selection of recent websites, brand systems, and digital experiences for clients across Australia and beyond.
              </p>
            </div>
            <a
              className="self-start md:self-auto inline-flex items-center gap-3 font-display font-bold text-sm tracking-[0.18em] uppercase text-white border border-white/15 px-7 py-4 rounded-full hover:border-red-brand hover:text-red-brand transition-colors duration-300 group flex-shrink-0"
              href="/projects"
            >
              See All Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center mt-8 md:mt-10">
          <div
            className="will-change-transform w-full"
            style={{
              opacity: Math.max(0.2, 1 - progress * 2),
              transform: `translateY(${-progress * 100}px) rotateX(${progress * 15}deg) rotateZ(${progress * 10}deg)`,
            }}
          >
            {/* Row 1 - scrolls left */}
            <div className="mb-3 md:mb-4 lg:mb-5">
              <div
                className="flex w-max"
                style={{ transform: `translateX(${row1Translate}px)` }}
              >
                {[...row1, ...row1, ...row1].map((project, i) => (
                  <div key={i} className="shrink-0 pr-3 md:pr-4 lg:pr-5">
                    <div className="group/product relative flex-shrink-0 w-[20.4rem] sm:w-[22.8rem] md:w-[26.4rem] lg:w-[30rem] aspect-[16/9]">
                      <a
                        aria-label={`View ${project.name}`}
                        className="block h-full w-full rounded-2xl overflow-hidden bg-[#111] ring-1 ring-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover/product:ring-red-brand/40 group-hover/product:shadow-[0_25px_60px_-20px_rgba(224,27,36,0.35)]"
                        href={`/projects/${project.slug}`}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <RevealImage
                            alt={project.name}
                            src={project.image}
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <h3 className="font-display font-semibold text-white text-xs md:text-sm leading-snug opacity-90 group-hover/product:opacity-100 transition-opacity duration-300">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - scrolls right */}
            <div>
              <div
                className="flex w-max"
                style={{ transform: `translateX(${row2Translate}px)` }}
              >
                {[...row2, ...row2, ...row2].map((project, i) => (
                  <div key={i} className="shrink-0 pr-3 md:pr-4 lg:pr-5">
                    <div className="group/product relative flex-shrink-0 w-[20.4rem] sm:w-[22.8rem] md:w-[26.4rem] lg:w-[30rem] aspect-[16/9]">
                      <a
                        aria-label={`View ${project.name}`}
                        className="block h-full w-full rounded-2xl overflow-hidden bg-[#111] ring-1 ring-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover/product:ring-red-brand/40 group-hover/product:shadow-[0_25px_60px_-20px_rgba(224,27,36,0.35)]"
                        href={`/projects/${project.slug}`}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <RevealImage
                            alt={project.name}
                            src={project.image}
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <h3 className="font-display font-semibold text-white text-xs md:text-sm leading-snug opacity-90 group-hover/product:opacity-100 transition-opacity duration-300">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
