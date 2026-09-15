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
    window.scrollTo(0, 0)
  }, [])

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
    <div className="min-h-screen bg-[#f4f4f1]">
      <Navbar />

      <section className="relative overflow-hidden min-h-[420px] flex flex-col items-center justify-center bg-[#111111] pb-14 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        <div className="container-wide relative z-10 text-center">
          <h1 className="font-display font-bold text-white text-[clamp(2.55rem,10.5vw,4.2rem)] leading-[1.02] tracking-[-0.035em]">
            Our Work
          </h1>
          <p className="mt-5 font-body text-white/50 text-base md:text-lg leading-relaxed max-w-[50ch] mx-auto">
            Selected websites, brands, and digital systems built for businesses across Australia.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f1] px-5 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col gap-5 border-b border-[#dcdcd6] pb-6 md:flex-row md:items-center md:justify-between">
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
