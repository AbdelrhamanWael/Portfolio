"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, ArrowRight, ArrowLeft, Star } from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, filters, fetchProjectsFromSupabase } from "@/lib/data/projects";

const categoryColors = {
  "AI & Agents":      { bg: "rgba(34,197,94,0.1)",   text: "#22c55e", border: "rgba(34,197,94,0.25)",  glow: "rgba(34,197,94,0.15)" },
  "Full Stack":       { bg: "rgba(245,158,11,0.1)",   text: "#f59e0b", border: "rgba(245,158,11,0.25)", glow: "rgba(245,158,11,0.15)" },
  "Backend Systems":  { bg: "rgba(129,140,248,0.1)",  text: "#818cf8", border: "rgba(129,140,248,0.25)",glow: "rgba(129,140,248,0.15)" },
  "Frontend UI":      { bg: "rgba(56,189,248,0.1)",   text: "#38bdf8", border: "rgba(56,189,248,0.25)", glow: "rgba(56,189,248,0.15)" },
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    fetchProjectsFromSupabase().then((data) => {
      if (data && data.length > 0) setProjectList(data);
    });
  }, []);

  const filtered = active === "All" ? projectList : projectList.filter((p) => p.category === active);


  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "#020408" }}>
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-15"
            style={{ background: "radial-gradient(ellipse at top, rgba(56,189,248,0.5), transparent 70%)" }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-colors" style={{ color: "#8a9bb0" }}>
              <ArrowLeft size={16} />
              <span className="hover:text-white transition-colors">Back to Home</span>
            </Link>
            <h1 className="font-black mt-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#e8eef4", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: "#8a9bb0" }}>
              Browse through my complete portfolio of freelance projects, AI applications, and full-stack systems.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                className="relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm"
                style={{
                  color: active === f ? "#020408" : "#8a9bb0",
                  background: active === f ? "transparent" : "rgba(14,28,43,0.6)",
                  border: active === f ? "1px solid transparent" : "1px solid rgba(56,189,248,0.15)",
                }}
                whileHover={{ scale: 1.05, borderColor: active === f ? "transparent" : "rgba(56,189,248,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{f}</span>
                {active === f && (
                  <motion.div layoutId="projectsFilterActive"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{ 
                      background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                      boxShadow: "0 0 20px rgba(56,189,248,0.4)"
                    }} 
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const colors = categoryColors[project.category] || categoryColors["Frontend UI"];
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="project-card rounded-3xl overflow-hidden group flex flex-col h-full relative"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(14,28,43,0.8) 0%, rgba(8,15,24,0.95) 100%)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(56,189,248,0.12)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                    }}
                    whileHover={{ 
                      borderColor: colors.border, 
                      boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 60px ${colors.glow}`, 
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Gradient overlay to blend image bottom into card */}
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(8,15,24,0.95) 0%, rgba(8,15,24,0.1) 70%, transparent 100%)" }} />
                      
                      <div className="project-card-overlay absolute inset-0 flex items-end justify-end p-4 gap-3">
                        {project.liveUrl && (
                          <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                            style={{ background: "rgba(56,189,248,0.85)", backdropFilter: "blur(8px)" }}
                            whileHover={{ scale: 1.15 }}
                            onClick={e => e.stopPropagation()}>
                            <ArrowSquareOut size={20} weight="bold" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            aria-label={`View GitHub repository for ${project.title}`}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                            style={{ background: "rgba(14,28,43,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(56,189,248,0.25)" }}
                            whileHover={{ scale: 1.15 }}
                            onClick={e => e.stopPropagation()}>
                            <GithubLogo size={20} weight="bold" />
                          </motion.a>
                        )}
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg"
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
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-bold text-xl mb-3 leading-tight transition-colors"
                        style={{ color: "#e8eef4", letterSpacing: "-0.01em" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-grow" style={{ color: "#8a9bb0" }}>
                        {project.description}
                      </p>
  
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="tech-badge">{t}</span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="tech-badge">+{project.tech.length - 4}</span>
                        )}
                      </div>
  
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4"
                        style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}>
                        <Link href={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/link"
                          style={{ color: colors.text }}>
                          View Details
                          <motion.span
                            className="inline-flex"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight size={18} weight="bold" />
                          </motion.span>
                        </Link>

                        {project.featured && (
                          <Star size={16} weight="fill" style={{ color: "#f59e0b" }} />
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
