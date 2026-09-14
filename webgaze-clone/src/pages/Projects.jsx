import { useState, useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import CTABanner from '../components/shared/CTABanner'
import ProjectCard from '../components/shared/ProjectCard'
import { projects, filterCategories } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((p) => p.categories.includes(activeFilter))
      )
    }
  }, [activeFilter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />

      <section className="relative overflow-hidden min-h-[380px] flex flex-col justify-end bg-[#0a0a0a] pb-16 pt-36">
        <img
          alt=""
          aria-hidden="true"
          className="object-cover object-center absolute inset-0 h-full w-full"
          src="/images/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        <div className="container-wide relative z-10">
          <div className="max-w-[760px]">
            <div className="mb-5">
              <a
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-display font-medium transition-colors duration-200 group"
                aria-label="Go back"
                href="/"
              >
                <span className="transition-transform duration-200 group-hover:-translate-x-1 text-base leading-none">←</span>
              </a>
            </div>
            <h1 className="font-display font-bold text-white max-w-[18ch] text-[clamp(2.55rem,10.5vw,3.7rem)] leading-[1.02] tracking-[-0.035em]">
              Our Work
            </h1>
            <p className="mt-4 font-body text-white/55 text-base leading-relaxed max-w-[44ch]">
              Selected websites, brands, and digital systems built for businesses across Australia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-bg px-4 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col gap-5 border-b border-[#dcdcd6] pb-6 md:flex-row md:items-center md:justify-between">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#101010]">
              Selected Work
              <span className="ml-3 font-body text-[#a3a39b]">
                {filteredProjects.length} projects
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`cursor-pointer rounded-full border px-4 py-2 font-display text-xs font-bold transition-colors duration-200 ${
                    activeFilter === category
                      ? 'border-red-brand bg-red-brand text-white'
                      : 'border-[#cfcfca] bg-white text-[#4a4a4a] hover:border-red-brand hover:text-red-brand'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
