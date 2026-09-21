import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Send,
  Moon,
} from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b
      border-cyan-900/50 bg-[#061326]/90 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center
        justify-between px-5 py-4">

        <a href="#home" className="text-3xl font-bold">
          <span className="gradient-text">M</span>MYK
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 text-slate-200
              hover:text-cyan-300"
          >
            <Download size={18} /> CV
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full
              bg-gradient-tor from-cyan-500 to-indigo-500
              px-6 py-3 font-semibold text-white"
          >
            <Send size={16} /> Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a href="/cv.pdf" download aria-label="Download CV">
            <Download className="text-cyan-300" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t
          border-cyan-900/50 bg-[#0b1b32] p-6 md:hidden">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-cyan-500 p-3 text-center
              font-semibold text-slate-950"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}