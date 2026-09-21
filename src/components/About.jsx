import { Code2, Laptop, Rocket } from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest
          text-cyan-400">
          Get To Know Me
        </p>

        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">
              Junior MERN Stack Developer
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              I am a passionate web developer focused on building
              responsive and interactive web applications.
              I work with React, JavaScript, Node.js, Express
              and MongoDB.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I enjoy learning new technologies, solving coding
              problems and creating useful projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-xl border border-cyan-500/30
                bg-[#10213a] p-4">
                <Code2 className="mb-2 text-cyan-400" />
                <p className="font-semibold">Web Development</p>
              </div>

              <div className="rounded-xl border border-cyan-500/30
                bg-[#10213a] p-4">
                <Laptop className="mb-2 text-cyan-400" />
                <p className="font-semibold">Responsive Design</p>
              </div>

              <div className="rounded-xl border border-cyan-500/30
                bg-[#10213a] p-4">
                <Rocket className="mb-2 text-cyan-400" />
                <p className="font-semibold">Project Building</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-900
            bg-[#0b1b32] p-7">
            <h3 className="mb-6 text-2xl font-semibold">
              My Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-cyan-500/20
                    bg-cyan-500/10 px-4 py-3 text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}