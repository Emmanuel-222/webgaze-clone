import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { projects } from '../../data/projects.js'

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

function MobileProjectsCarousel() {
  const scrollRef = useRef(null)
  const cardElsRef = useRef([])
  const wrapElsRef = useRef([])
  const currentRef = useRef(0)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(null)
  const [current, setCurrent] = useState(0)

  const total = projects.length

  const updateLayout = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const containerRect = container.getBoundingClientRect()
    const center = containerRect.left + container.clientWidth / 2
    let nearestIndex = 0
    let nearestDist = Infinity
    cardElsRef.current.forEach((card, i) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const dist = Math.abs(cardCenter - center)
      if (dist < nearestDist) {
        nearestDist = dist
        nearestIndex = i
      }
      const t = Math.min(dist / (container.clientWidth * 0.85), 1)
      card.style.transform = `scale(${1 - 0.08 * t})`
      card.style.opacity = String(1 - 0.5 * t)
    })
    currentRef.current = nearestIndex
    setCurrent(nearestIndex)
  }, [])

  const goTo = useCallback((index, behavior = 'smooth') => {
    const container = scrollRef.current
    const wrap = wrapElsRef.current[index]
    if (!container || !wrap) return
    const cr = container.getBoundingClientRect()
    const wr = wrap.getBoundingClientRect()
    const pad = parseFloat(getComputedStyle(container).paddingLeft) || 0
    container.scrollBy({ left: wr.left - cr.left - pad, behavior })
  }, [])

  const pauseAuto = useCallback(() => {
    pausedRef.current = true
    clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, 6000)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    updateLayout()
    container.addEventListener('scroll', updateLayout, { passive: true })
    window.addEventListener('resize', updateLayout)
    return () => {
      container.removeEventListener('scroll', updateLayout)
      window.removeEventListener('resize', updateLayout)
    }
  }, [updateLayout])

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return
      if (document.hidden) return
      goTo((currentRef.current + 1) % total)
    }, 3000)
    return () => clearInterval(id)
  }, [goTo, total])

  const handleManual = (index) => {
    pauseAuto()
    currentRef.current = index
    goTo(index)
  }

  const progress = ((current + 1) / total) * 100

  return (
    <section aria-labelledby="mobile-portfolio-heading" className="relative overflow-hidden bg-dark-bg py-16 lg:hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70" style={{ background: 'radial-gradient(70% 40% at 50% 0%, rgba(224, 27, 36, 0.12), transparent 70%)' }}></div>

      <div className="container-wide relative">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-red-brand">Selected work</p>
        <h2 id="mobile-portfolio-heading" className="mt-3 font-display text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-white">
          Projects that<br />speak for themselves.
        </h2>
        <p className="mt-3 max-w-sm text-sm text-neutral-300">
          A selection of recent websites, brand systems, and digital experiences for clients across Australia and beyond.
        </p>
      </div>

      <div className="relative mt-8">
        <div
          ref={scrollRef}
          onPointerDown={pauseAuto}
          onTouchStart={pauseAuto}
          onWheel={pauseAuto}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-pl-6 pl-6 pr-[16vw] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              ref={(el) => { wrapElsRef.current[i] = el }}
              className="w-[80vw] shrink-0 snap-start py-5"
            >
              <div
                ref={(el) => { cardElsRef.current[i] = el }}
                className="relative origin-center rounded-[1.75rem] bg-[#0f0f0f] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-[transform,opacity] duration-500 ease-out will-change-transform"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-t-[1.75rem]">
                  <img
                    alt={project.name}
                    className="object-cover object-top absolute h-full w-full"
                    src={project.image}
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
                  <span className="absolute left-4 top-4 font-display text-5xl font-bold leading-none text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="px-5 pb-6 pt-1">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-red-brand">
                    {project.categories.join(' · ')}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white">{project.name}</h3>
                  <a
                    aria-label={`View ${project.name}`}
                    href={`/projects/${project.slug}`}
                    className="group mt-4 inline-flex items-center gap-1.5 font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
                  >
                    View project
                    <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-wide mt-6 flex items-center gap-4">
        <span className="font-display text-sm font-bold tabular-nums text-white">
          {String(current + 1).padStart(2, '0')}
          <span className="text-neutral-500"> / {String(total).padStart(2, '0')}</span>
        </span>
        <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 rounded-full bg-red-brand transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => handleManual(current - 1)}
            disabled={current === 0}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition active:scale-95 disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => handleManual(current + 1)}
            disabled={current === total - 1}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition active:scale-95 disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <div className="container-wide mt-8">
        <a
          href="/projects"
          className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-red-brand hover:text-red-brand"
        >
          See All Projects
          <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </section>
  )
}

function DesktopParallax() {
  const sectionRef = useRef(null)

  const row1 = projects.slice(0, 6)
  const row2 = projects.slice(6, 12)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const springConfig = { stiffness: 90, damping: 28, mass: 1 }

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-100, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.2, 1]),
    springConfig
  )

  return (
    <section
      ref={sectionRef}
      className="relative bg-dark-bg antialiased h-[200vh] md:h-[220vh] hidden lg:block"
      aria-labelledby="parallax-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col [perspective:1000px] [transform-style:preserve-3d] pt-16 md:pt-20 pb-10">
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
          <motion.div
            className="will-change-transform w-full"
            style={{ rotateX, rotateZ, translateY, opacity }}
          >
            <div className="mb-3 md:mb-4 lg:mb-5">
              <motion.div
                className="flex w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
              >
                {[...row1, ...row1].map((project, i) => (
                  <div key={`r1-${i}`} className="shrink-0 pr-3 md:pr-4 lg:pr-5">
                    <motion.div
                      className="group/product relative flex-shrink-0 w-[20.4rem] sm:w-[22.8rem] md:w-[26.4rem] lg:w-[30rem] aspect-[16/9]"
                      whileHover={{ y: -12 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    >
                      <a
                        aria-label={`View ${project.name}`}
                        className="block h-full w-full rounded-2xl overflow-hidden bg-[#111] ring-1 ring-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover/product:ring-red-brand/40 group-hover/product:shadow-[0_25px_60px_-20px_rgba(224,27,36,0.35)]"
                        href={`/projects/${project.slug}`}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <RevealImage alt={project.name} src={project.image} />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <h3 className="font-display font-semibold text-white text-xs md:text-sm leading-snug opacity-90 group-hover/product:opacity-100 transition-opacity duration-300">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div
                className="flex w-max"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 57.6, ease: 'linear', repeat: Infinity }}
              >
                {[...row2, ...row2].map((project, i) => (
                  <div key={`r2-${i}`} className="shrink-0 pr-3 md:pr-4 lg:pr-5">
                    <motion.div
                      className="group/product relative flex-shrink-0 w-[20.4rem] sm:w-[22.8rem] md:w-[26.4rem] lg:w-[30rem] aspect-[16/9]"
                      whileHover={{ y: -12 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    >
                      <a
                        aria-label={`View ${project.name}`}
                        className="block h-full w-full rounded-2xl overflow-hidden bg-[#111] ring-1 ring-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover/product:ring-red-brand/40 group-hover/product:shadow-[0_25px_60px_-20px_rgba(224,27,36,0.35)]"
                        href={`/projects/${project.slug}`}
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <RevealImage alt={project.name} src={project.image} />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <h3 className="font-display font-semibold text-white text-xs md:text-sm leading-snug opacity-90 group-hover/product:opacity-100 transition-opacity duration-300">
                              {project.name}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ProjectsParallax() {
  return (
    <>
      <MobileProjectsCarousel />
      <DesktopParallax />
    </>
  )
}