export default function ProjectCard({ project }) {
  return (
    <article className="fade-in-up">
      <a className="group block focus-visible:outline-none" href={`/projects/${project.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#e9e9e6] transition group-focus-visible:ring-2 group-focus-visible:ring-red-brand">
          <img
            alt={`${project.name} project cover`}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 absolute inset-0 h-full w-full"
            src={project.image}
            loading="lazy"
          />
        </div>
        <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#111]">
          {project.name}
        </h3>
        <p className="mt-1 font-body text-sm leading-snug text-[#9a9a92]">
          {project.categories.join(' · ')}
        </p>
      </a>
    </article>
  )
}