import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border
      border-cyan-900/70 bg-[#0b1b32] transition
      hover:-translate-y-2 hover:border-cyan-400/60">

      <div className="relative h-48 overflow-hidden bg-[#10213a]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition
            duration-500 hover:scale-105"
        />

        <span className="absolute bottom-3 left-3 rounded-full
          bg-indigo-600 px-4 py-2 text-sm font-semibold">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="mt-2 min-h-14 leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-cyan-500/10
                px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between
          border-t border-cyan-900/60 pt-4">

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-cyan-200
              hover:text-cyan-400"
          >
            Live Demo <ExternalLink size={16} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300
              hover:text-cyan-300"
          >
            <FaGithub size={17} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
