import {
  Folder,
  Code2,
  Heart,
  ArrowRight,
  Mail,
} from "lucide-react";


import { FaGithub, FaLinkedin } from "react-icons/fa";
const stats = [
  { icon: Folder, number: "4+", label: "Projects" },
  { icon: Code2, number: "6+", label: "Technologies" },
  { icon: Heart, number: "100%", label: "Passion" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-7xl
        items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-2"
    >
      <div>
        <p className="mb-4 text-2xl text-slate-300">
          Hello, I'm 👋
        </p>

        <h1 className="text-5xl font-extrabold leading-tight
          sm:text-6xl lg:text-7xl">
          Myounas <span className="gradient-text">Khan</span>
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300">
          Junior <span className="text-cyan-400">MERN</span> Stack Developer
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
          I build modern, responsive and user-friendly web
          applications using React, Node.js, Express.js and
          MongoDB. I love turning ideas into real and useful products.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-3 rounded-full
              bg-gradient-tor from-cyan-500 to-indigo-500
              px-7 py-4 font-semibold text-white transition
              hover:scale-105"
          >
            View My Projects <ArrowRight size={20} />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-3 rounded-full
              border border-cyan-500 px-7 py-4
              hover:bg-cyan-500/10"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          <a
            href="https://github.com/myounaskhan-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub  className="text-slate-400 hover:text-cyan-300" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-slate-400 hover:text-cyan-300" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, number, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="text-cyan-400" size={27} />
              <div>
                <p className="text-2xl font-bold">{number}</p>
                <p className="text-sm text-slate-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute inset-8 rounded-full
          bg-cyan-500/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl
          border border-cyan-500/40 bg-gradient-tobr
          from-cyan-500/20 to-indigo-600/20 p-3 glow">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQET2hLowAn-XQ/profile-displayphoto-scale_400_400/B4DaBmV_lnHsAg-/0/1788423438172?e=1791417600&v=beta&t=5HiCjqMenZwIiuozgyHarAGFySjEURgdMEnb81EMdBY"
            alt="Myounas Khan"
            className="h[420px] w-full rounded-2xl
              object-cover object-top"
          />
        </div>

        <div className="absolute -left-5 top-12 rounded-xl
          border border-cyan-500/40 bg-[#0b1b32] p-4
          text-cyan-300 shadow-xl">
          React.js
        </div>

        <div className="absolute -right-3 bottom-12 rounded-xl
          border border-indigo-400/40 bg-[#0b1b32] p-4
          text-indigo-300 shadow-xl">
          Node.js
        </div>
      </div>
    </section>
  );
}