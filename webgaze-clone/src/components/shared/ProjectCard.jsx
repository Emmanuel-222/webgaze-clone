export default function ProjectCard({ project }) {
  return (
    <article className="fade-in-up group">
      <a href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#1a1a1a]">
          {project.name}
        </h3>
        <p className="mt-1 font-body text-sm leading-snug text-[#6a6a6a]">
          {project.categories.join(' . ')}
        </p>
      </a>
    </article>
  )
}
