import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-900/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap
        items-center justify-between gap-5">

        <a href="#home" className="text-2xl font-bold">
          <span className="gradient-text">M</span>MYK
        </a>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Myounas Khan. All rights reserved.
        </p>

        <div className="flex gap-5">
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
        </div>
      </div>
    </footer>
  );
}