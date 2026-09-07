"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, ArrowRight, Star } from "@phosphor-icons/react";
import { projects } from "@/lib/data/projects";

const categoryColors = {
  "AI & Agents":      { bg: "rgba(34,197,94,0.1)",   text: "#22c55e", border: "rgba(34,197,94,0.25)",  glow: "rgba(34,197,94,0.15)" },
  "Full Stack":       { bg: "rgba(245,158,11,0.1)",   text: "#f59e0b", border: "rgba(245,158,11,0.25)", glow: "rgba(245,158,11,0.15)" },
  "Backend Systems":  { bg: "rgba(129,140,248,0.1)",  text: "#818cf8", border: "rgba(129,140,248,0.25)",glow: "rgba(129,140,248,0.15)" },
  "Frontend UI":      { bg: "rgba(56,189,248,0.1)",   text: "#38bdf8", border: "rgba(56,189,248,0.25)", glow: "rgba(56,189,248,0.15)" },
};

export default function Projects() {
  // Get only 1 project per category (newest = first in array)
  const filtered = [];
  const seen = new Set();
  for (const p of projects) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      filtered.push(p);
    }
  }

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: "#020408" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb1 absolute top-1/2 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)" }} />
        <div className="orb2 absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-5 inline-flex">My Work</span>
          <h2 className="font-black mt-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#e8eef4", letterSpacing: "-0.02em" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base leading-relaxed"
            style={{ color: "#8a9bb0" }}>
            One standout project from each category — showcasing my breadth across AI, full-stack, backend, and frontend.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const colors = categoryColors[project.category] || categoryColors["Frontend UI"];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="project-card group flex flex-col rounded-2xl overflow-hidden relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(14,28,43,0.9) 0%, rgba(8,15,24,0.95) 100%)",
                    border: "1px solid rgba(56,189,248,0.1)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  whileHover={{
                    borderColor: colors.border,
                    boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 60px ${colors.glow}`,
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(8,15,24,0.95) 0%, rgba(8,15,24,0.2) 60%, transparent 100%)" }} />

                    {/* Quick action buttons */}
                    <div className="project-card-overlay absolute inset-0 flex items-end justify-end p-3 gap-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                          style={{ background: "rgba(56,189,248,0.85)", backdropFilter: "blur(8px)" }}
                          whileHover={{ scale: 1.1 }}
                          onClick={e => e.stopPropagation()}
                        >
                          <ArrowSquareOut size={17} weight="bold" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                          style={{ background: "rgba(14,28,43,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(56,189,248,0.2)" }}
                          whileHover={{ scale: 1.1 }}
                          onClick={e => e.stopPropagation()}
                        >
                          <GithubLogo size={17} />
                        </motion.a>
                      )}
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-base mb-2 leading-snug line-clamp-2"
                      style={{ color: "#e8eef4", letterSpacing: "-0.01em" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
                      style={{ color: "#8a9bb0" }}>
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="tech-badge text-xs">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-badge text-xs">+{project.tech.length - 3}</span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3"
                      style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}>
                      <Link
                        href={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                        style={{ color: colors.text }}
                      >
                        View Details
                        <motion.span
                          className="inline-flex"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight size={15} weight="bold" />
                        </motion.span>
                      </Link>

                      {project.featured && (
                        <Star size={14} weight="fill" style={{ color: "#f59e0b" }} />
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 relative group overflow-hidden"
            style={{
              background: "rgba(14,28,43,0.8)",
              border: "1px solid rgba(56,189,248,0.3)",
              color: "#e8eef4",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Hover gradient */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))" }}
            />
            <span className="relative z-10">View All Projects</span>
            <ArrowRight
              size={20}
              weight="bold"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}