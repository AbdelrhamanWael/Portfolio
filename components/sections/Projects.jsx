"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, ArrowRight } from "@phosphor-icons/react";
import { projects, filters } from "@/lib/data/projects";

const categoryColors = {
  "AI & Agents": { bg: "rgba(16,185,129,0.15)", text: "#34D399", border: "rgba(16,185,129,0.3)" },
  "Full Stack": { bg: "rgba(245,158,11,0.15)", text: "#FBBF24", border: "rgba(245,158,11,0.3)" },
  "Backend Systems": { bg: "rgba(74,92,106,0.3)", text: "#9BA8AB", border: "rgba(74,92,106,0.5)" },
  "Frontend UI": { bg: "rgba(91,164,196,0.2)", text: "#5BA4C4", border: "rgba(91,164,196,0.3)" }
};

export default function Projects() {
  // Get only 1 project per category (the newest one, which appears first)
  const filtered = [];
  const categories = [...new Set(projects.map(p => p.category))];
  categories.forEach(cat => {
    filtered.push(projects.find(p => p.category === cat));
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: "#06141B" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #253745, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-4 inline-flex">My Work</span>
          <h2 className="font-black mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#CCD0CF" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#9BA8AB" }}>
            A curated selection of projects showcasing my skills in building full-stack applications.
          </p>
        </motion.div>

        {/* Filter tabs removed for homepage */}

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="project-card rounded-2xl overflow-hidden group"
                style={{ background: "rgba(17,33,45,0.9)", border: "1px solid rgba(74,92,106,0.5)" }}
                whileHover={{ borderColor: "rgba(91,164,196,0.4)", boxShadow: "0 20px 60px rgba(91,164,196,0.12)", y: -6 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="project-card-overlay absolute inset-0 flex items-end justify-end p-3 gap-2"
                    style={{ background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.3) 100%)" }}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all duration-200"
                        style={{ background: "rgba(91,164,196,0.8)", backdropFilter: "blur(8px)" }}
                        onClick={e => e.stopPropagation()}>
                        <ArrowSquareOut size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all duration-200"
                        style={{ background: "rgba(37,55,69,0.8)", backdropFilter: "blur(8px)", border: "1px solid rgba(74,92,106,0.5)" }}
                        onClick={e => e.stopPropagation()}>
                        <GithubLogo size={18} />
                      </a>
                    )}
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: (categoryColors[project.category] || categoryColors["Frontend UI"]).bg,
                        color: (categoryColors[project.category] || categoryColors["Frontend UI"]).text,
                        border: `1px solid ${(categoryColors[project.category] || categoryColors["Frontend UI"]).border}`,
                      }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 leading-tight" style={{ color: "#CCD0CF" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#9BA8AB" }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <Link href={`/project/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
                    style={{ color: "#5BA4C4" }}>
                    View Details
                    <motion.span
                      className="inline-flex"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 relative group overflow-hidden"
            style={{ 
              background: "rgba(17,33,45,0.8)", 
              border: "1px solid rgba(91,164,196,0.5)",
              boxShadow: "0 10px 30px rgba(91,164,196,0.15)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BA4C4] to-[#7C3AED] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative z-10">View All Projects</span>
            <ArrowRight size={20} weight="bold" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}