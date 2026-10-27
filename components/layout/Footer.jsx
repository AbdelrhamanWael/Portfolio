"use client";
import BrandLogo from "../ui/BrandLogo";
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  ArrowUp,
  ArrowUpRight,
} from "@phosphor-icons/react";

const links = [
  { name: "Upwork", href: "https://www.upwork.com/freelancers/~018c6bd3657b16a0e7" },
  { name: "Khamsat", href: "https://khamsat.com/user/abdelrhamanwael01016" },
  { name: "GitHub", href: "https://github.com/AbdelrhamanWael" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366" },
  { name: "Email", href: "mailto:abdelrhamanwael8@gmail.com" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#050608] border-t border-[#232733] py-14 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#232733]">
          {/* Brand & Studio Statement */}
          <div className="space-y-3">
            <BrandLogo />
            <p className="text-xs text-[#8A909E] font-sans max-w-sm">
              Independent AI Systems & Full-Stack Engineering Studio based in Cairo, Egypt. Specializing in autonomous agent pipelines, FastAPI, .NET Core, and modern web platforms.
            </p>
          </div>

          {/* Quick Platform Links */}
          <div className="flex flex-wrap items-center gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#0E1015] hover:bg-[#14171E] border border-[#232733] hover:border-[#F59E0B]/40 text-[#8A909E] hover:text-[#F4F5F7] transition-colors flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={11} className="text-[#525866]" />
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="px-3 py-2 rounded bg-[#0E1015] hover:bg-[#14171E] border border-[#232733] text-[#F59E0B] flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>TOP</span>
            <ArrowUp size={13} weight="bold" />
          </button>
        </div>

        {/* Bottom Technical Telemetry */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#525866]">
          <div>
            © {new Date().getFullYear()} Abdelrhaman Wael. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>NEXT.JS 16 // REACT 19</span>
            <span>•</span>
            <span>VERCEL EDGE</span>
            <span>•</span>
            <span className="text-[#10B981]">SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}