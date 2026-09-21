import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Ali Mobile Corner (AMC)",
    category: "E-Commerce",
    description:
      "Mobile phones, accessories and online store with product management.",
    image: "data:image/jpeg;base64,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",
    technologies: ["React", "Node.js", "MongoDB"],
    demo: "https://amc-client-gules.vercel.app/",
    github: "https://amc-client-gules.vercel.app/",
  },
  {
    title: "Airbnb Clone",
    category: "Booking",
    description:
      "Property listing and booking platform with a modern interface.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwXtQluELENb_0AlNCHzG1i5aZbxdCqeJm9bZzqu3Hg&s=10",
    technologies: ["React", "JavaScript", "Tailwind"],
    demo: "https://react-e-ochre.vercel.app",
    github: "https://github.com/myounaskhan-dev/react-e",
  },
  {
    title: "Amazon Clone",
    category: "E-Commerce",
    description:
      "Online shopping platform with cart, search and product details.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsoj_SjGwHb4dM5q8eVILm-9Zhb22kAP5eilwrzzVQIw&s=10",
    technologies: ["React", "JavaScript", "CSS"],
    demo: "https://amazone-clone-1ul4.vercel.app/",
    github: "https://github.com/myounaskhan-dev/amazone-clone",
  },
  {
    title: "My Portfolio",
    category: "Portfolio",
    description:
      "Modern portfolio website with responsive design and animations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6hdZ5SWbmJPrKhrqvdr-uUZP7i2pTH5rVnT1wiXfsg&s=10",
    technologies: ["React", "Tailwind", "Vite"],
    demo: "#",
    github: "https://github.com/myounaskhan-dev/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end
          justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase
              tracking-widest text-cyan-400">
              My Projects
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-2 text-cyan-300"
          >
            View All Projects <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2
          xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}