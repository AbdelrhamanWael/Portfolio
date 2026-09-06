"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, filters } from "@/lib/data/projects";

const categoryColors = {
  "AI & Agents": { bg: "rgba(16,185,129,0.15)", text: "#34D399", border: "rgba(16,185,129,0.3)" },
  "Full Stack": { bg: "rgba(245,158,11,0.15)", text: "#FBBF24", border: "rgba(245,158,11,0.3)" },
  "Backend Systems": { bg: "rgba(74,92,106,0.3)", text: "#9BA8AB", border: "rgba(74,92,106,0.5)" },
  "Frontend UI": { bg: "rgba(91,164,196,0.2)", text: "#5BA4C4", border: "rgba(91,164,196,0.3)" }
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "#06141B" }}>
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-10"
            style={{ background: "radial-gradient(ellipse at top, #5BA4C4, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-colors hover:text-white" style={{ color: "#9BA8AB" }}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="font-black mt-2" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#F8FAFC", lineHeight: 1.1 }}>
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4C4] to-[#7C3AED]">Projects</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg" style={{ color: "#9BA8AB" }}>
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
                  color: active === f ? "#F8FAFC" : "#9BA8AB",
                  background: active === f ? "transparent" : "rgba(17,33,45,0.6)",
                  border: active === f ? "1px solid rgba(91,164,196,0.8)" : "1px solid rgba(255,255,255,0.05)",
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(91,164,196,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{f}</span>
                {active === f && (
                  <motion.div layoutId="projectsFilterActive"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(91,164,196,0.4), rgba(124,58,237,0.4))",
                      boxShadow: "0 0 20px rgba(91,164,196,0.3)"
                    }} 
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="project-card rounded-3xl overflow-hidden group flex flex-col h-full"
                  style={{ 
                    background: "rgba(17,33,45,0.6)", 
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.05)" 
                  }}
                  whileHover={{ 
                    borderColor: "rgba(91,164,196,0.4)", 
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(91,164,196,0.1) inset", 
                    y: -8 
                  }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end justify-end p-4 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(6,20,27,0.9) 0%, rgba(6,20,27,0.1) 100%)" }}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                          style={{ background: "rgba(91,164,196,0.8)", backdropFilter: "blur(8px)" }}
                          onClick={e => e.stopPropagation()}>
                          <ArrowSquareOut size={20} weight="bold" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
                          onClick={e => e.stopPropagation()}>
                          <GithubLogo size={20} weight="bold" />
                        </a>
                      )}
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        style={{
                          background: (categoryColors[project.category] || categoryColors["Frontend UI"]).bg,
                          color: (categoryColors[project.category] || categoryColors["Frontend UI"]).text,
                          border: `1px solid ${(categoryColors[project.category] || categoryColors["Frontend UI"]).border}`,
                          backdropFilter: "blur(8px)"
                        }}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl mb-3 leading-tight text-white group-hover:text-[#5BA4C4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-grow" style={{ color: "#9BA8AB" }}>
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-xs font-semibold px-2 py-1 rounded-md"
                          style={{ background: "rgba(255,255,255,0.05)", color: "#CCD0CF", border: "1px solid rgba(255,255,255,0.05)" }}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-md"
                          style={{ background: "rgba(255,255,255,0.02)", color: "#9BA8AB", border: "1px dashed rgba(255,255,255,0.1)" }}>
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <Link href={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/link"
                      style={{ color: "#5BA4C4" }}>
                      View Details
                      <motion.span
                        className="inline-flex"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight size={18} weight="bold" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
