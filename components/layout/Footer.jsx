"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";
import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUp } from "@phosphor-icons/react";

const socials = [
  { icon: GithubLogo, href: "https://github.com/AbdelrhamanWael", label: "GitHub" },
  { icon: LinkedinLogo, href: "https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366", label: "LinkedIn" },
  { icon: EnvelopeSimple, href: "mailto:abdelrhamanwael8@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 overflow-hidden"
      style={{ background: "#11212D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #5BA4C4 30%, #9BA8AB 70%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col sm:items-start items-center">
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-xs mt-2" style={{ color: "#475569" }}>
              © {new Date().getFullYear()} Abdelrhaman Wael. All rights reserved.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#9BA8AB" }}
                whileHover={{ background: "rgba(91,164,196,0.15)", borderColor: "rgba(91,164,196,0.4)", color: "#5BA4C4", scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} weight="regular" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
            style={{ background: "rgba(91,164,196,0.1)", border: "1px solid rgba(91,164,196,0.2)", color: "#5BA4C4" }}
            whileHover={{ background: "rgba(91,164,196,0.2)", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            Top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "#334155" }}>
            Built with Next.js · Tailwind CSS · Framer Motion · Phosphor Icons
          </p>
        </div>
      </div>
    </footer>
  );
}