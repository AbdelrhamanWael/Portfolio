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
      style={{ background: "#020408", borderTop: "1px solid rgba(56,189,248,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 30%, rgba(129,140,248,0.5) 70%, transparent)" }} />

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
                style={{ background: "rgba(14,28,43,0.8)", border: "1px solid rgba(56,189,248,0.1)", color: "#8a9bb0" }}
                whileHover={{ background: "rgba(56,189,248,0.12)", borderColor: "rgba(56,189,248,0.4)", color: "#38bdf8", scale: 1.1 }}
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
            style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#38bdf8" }}
            whileHover={{ background: "rgba(56,189,248,0.16)", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            Top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(56,189,248,0.25)" }}>
            Built with Next.js · Tailwind CSS · Framer Motion · Phosphor Icons
          </p>
        </div>
      </div>
    </footer>
  );
}