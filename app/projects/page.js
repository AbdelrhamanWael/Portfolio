"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GithubLogo,
  Globe,
  ArrowUpRight,
  ArrowLeft,
  Sliders,
  CheckCircle,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, filters, fetchProjectsFromSupabase } from "@/lib/data/projects";

const categoryAccents = {
  "AI & Agents": {
    badge: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
    dot: "bg-[#10B981]",
    glow: "hover:border-[#10B981]/50",
  },
  "Backend Systems": {
    badge: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    dot: "bg-[#38BDF8]",
    glow: "hover:border-[#38BDF8]/50",
  },
  "Full Stack": {
    badge: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30",
    dot: "bg-[#F59E0B]",
    glow: "hover:border-[#F59E0B]/50",
  },
  "Frontend UI": {
    badge: "text-[#A78BFA] bg-[#A78BFA]/10 border-[#A78BFA]/30",
    dot: "bg-[#A78BFA]",
    glow: "hover:border-[#A78BFA]/50",
  },
};

export default function ProjectsPage() {
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam && (filters.includes(catParam) || catParam === "ALL")) {
        return catParam === "ALL" ? "All" : catParam;
      }
    }
    return "All";
  });
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    fetchProjectsFromSupabase().then((data) => {
      if (data && data.length > 0) setProjectList(data);
    });
  }, []);

  const filtered =
    active === "All"
      ? projectList
      : projectList.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-24 bg-[#090A0C] text-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="pb-8 mb-12 border-b border-[#232733]">
            <Link
              href="/#dossier"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8A909E] hover:text-[#F4F5F7] transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              <span>RETURN TO MAIN PORTFOLIO</span>
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-2">
                  <span>{"// COMPLETE SYSTEMS ARCHIVE"}</span>
                  <span className="text-[#525866]">/</span>
                  <span className="text-[#8A909E]">{projectList.length} PRODUCTION REPOSITORIES</span>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F4F5F7] tracking-tight">
                  All Engineering Projects
                </h1>
              </div>
              <p className="font-mono text-xs text-[#8A909E] max-w-md">
                Browse through commercial freelance deliverables, AI agent architectures, backend APIs, and full-stack web platforms.
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
            {filters.map((f) => {
              const count =
                f === "All"
                  ? projectList.length
                  : projectList.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-3.5 py-1.5 rounded transition-all flex items-center gap-2 ${
                    active === f
                      ? "bg-[#F59E0B] text-[#090A0C] font-semibold"
                      : "bg-[#0E1015] border border-[#232733] text-[#8A909E] hover:text-[#F4F5F7] hover:border-[#8A909E]/30"
                  }`}
                >
                  <span>{f}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded ${
                      active === f
                        ? "bg-[#090A0C]/20 text-[#090A0C]"
                        : "bg-[#14171E] text-[#525866]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Project Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj, idx) => {
              const catStyle = categoryAccents[proj.category] || categoryAccents["Full Stack"];
              return (
                <div
                  key={proj.id}
                  className={`studio-surface rounded-lg border border-[#232733] ${catStyle.glow} transition-all duration-200 overflow-hidden flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    {/* Visual Screenshot Frame */}
                    <div className="relative aspect-[16/10] w-full bg-[#050608] border-b border-[#232733] overflow-hidden">
                      {/* Browser Mini Header */}
                      <div className="absolute top-0 left-0 right-0 z-20 bg-[#14171E]/90 backdrop-blur-sm px-3 py-1.5 border-b border-[#232733] flex items-center justify-between font-mono text-[10px]">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]/70 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/70 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-[#10B981]/70 inline-block" />
                        </div>
                        <span className="text-[#8A909E] text-[9px] uppercase tracking-wider truncate max-w-[150px]">
                          SYS-0{idx + 1} {"//"} {proj.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              className="text-[#8A909E] hover:text-[#10B981] transition-colors p-0.5"
                            >
                              <Globe size={12} />
                            </a>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Repository"
                              className="text-[#8A909E] hover:text-[#F4F5F7] transition-colors p-0.5"
                            >
                              <GithubLogo size={12} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Main Screenshot with Hover Zoom */}
                      <Link href={`/project/${proj.id}`} className="block w-full h-full pt-6">
                        <div className="relative w-full h-full">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent opacity-80" />
                        </div>
                      </Link>

                      {/* Category Badge */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[10px] uppercase font-semibold border ${catStyle.badge}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-3">
                      <div>
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#525866] mb-1">
                          <span>{proj.role || "Lead Engineer"}</span>
                          <span>{proj.duration || "Production"}</span>
                        </div>
                        <Link href={`/project/${proj.id}`}>
                          <h3 className="font-display font-bold text-base text-[#F4F5F7] group-hover:text-[#F59E0B] transition-colors leading-snug line-clamp-1">
                            {proj.title}
                          </h3>
                        </Link>
                      </div>

                      <p className="text-xs text-[#8A909E] font-sans line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Primary Innovation Highlight */}
                      {proj.features?.[0] && (
                        <div className="p-2 rounded bg-[#090A0C] border border-[#232733] font-mono text-[11px] text-[#D1D5DB] flex items-start gap-2">
                          <span className="text-[#F59E0B] font-bold">▸</span>
                          <span className="line-clamp-1 text-[11px]">{proj.features[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0 border-t border-[#232733]/60 mt-3 space-y-3">
                    <div className="flex flex-wrap gap-1 font-mono text-[10px] text-[#8A909E] pt-3">
                      {proj.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#14171E] border border-[#232733]"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[#525866]">
                          +{proj.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href={`/project/${proj.id}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#F59E0B] hover:text-[#FBBF24] font-semibold transition-colors group-hover:translate-x-0.5"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight size={13} weight="bold" />
                      </Link>

                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8A909E] hover:text-[#10B981] transition-colors"
                          >
                            Live ↗
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8A909E] hover:text-[#F4F5F7] transition-colors"
                          >
                            Code ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
