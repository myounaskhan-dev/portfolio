import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-cyan-900
          bg-[#0b1b32] p-8 text-center sm:p-14">

          <p className="font-bold uppercase tracking-widest
            text-cyan-400">
            Contact Me
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's Work <span className="gradient-text">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7
            text-slate-400">
            Looking for a Junior React or MERN Stack Developer?
            Feel free to contact me about job opportunities,
            internships or projects.
          </p>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="mx-auto mt-8 inline-flex items-center
              gap-3 rounded-full bg-gradient-tor
              from-cyan-500 to-indigo-500 px-7 py-4
              font-semibold"
          >
            <Mail size={18} /> Email Me
          </a>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/myounaskhan-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-slate-400 hover:text-cyan-300" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-slate-400 hover:text-cyan-300" />
            </a>

            <a href="mailto:YOUR_EMAIL@gmail.com"
              aria-label="Send email">
              <Send className="text-slate-400 hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}