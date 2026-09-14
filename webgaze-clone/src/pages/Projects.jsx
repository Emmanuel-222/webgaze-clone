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

      <section className="relative min-h-[380px] bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 to-[#0a0a0a]/90" />
        <div className="container-wide relative z-10 flex min-h-[380px] flex-col justify-end pb-12 pt-32">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
          >
            <span>&larr;</span> Go back
          </a>
          <h1 className="text-[clamp(2.55rem,10.5vw,3.7rem)] font-bold text-white font-display">
            Our Work
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/60">
            A selection of projects we've delivered for clients across Australia and beyond.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-[#e5e5e0] pb-6">
            <span className="mr-4 text-sm font-medium text-[#4a4a4a]">
              Selected Work
            </span>
            <span className="text-sm text-[#6a6a6a]">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
            <div className="ml-auto flex gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
