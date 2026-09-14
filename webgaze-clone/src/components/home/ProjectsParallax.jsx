import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ProjectsParallax() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  const row1 = projects.slice(0, 6)
  const row2 = projects.slice(6, 12)

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-[#0a0a0a] md:h-[220vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-wide w-full py-16">
          <div className="mb-12">
            <span className="label-tag">Projects</span>
            <h2 className="mt-6 text-[clamp(2rem,5vw,2.8rem)] font-bold text-white font-display">
              Projects that speak for themselves.
            </h2>
          </div>

          <div
            className="mb-6 flex gap-6 transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(5deg) translateX(${-progress * 200}px)`,
            }}
          >
            {[...row1, ...row1].map((project, i) => (
              <div key={i} className="w-[300px] flex-shrink-0 md:w-[350px]">
                <div className="group overflow-hidden rounded-[10px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white font-display">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {project.categories.join(' . ')}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex gap-6 transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(-5deg) translateX(${progress * 200}px)`,
            }}
          >
            {[...row2, ...row2].map((project, i) => (
              <div key={i} className="w-[300px] flex-shrink-0 md:w-[350px]">
                <div className="group overflow-hidden rounded-[10px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white font-display">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {project.categories.join(' . ')}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-outline">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
