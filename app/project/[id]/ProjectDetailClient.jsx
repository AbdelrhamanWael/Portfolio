"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
  Globe,
  CheckCircle,
  Clock,
  User,
  Cpu,
  Stack,
  Lock,
  X,
  MagnifyingGlassPlus,
  TerminalWindow,
  ShieldCheck,
} from "@phosphor-icons/react";
import { projects } from "@/lib/data/projects";

export default function ProjectDetailClient({ project }) {
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Split longDescription into structured paragraphs
  const paragraphs = Array.isArray(project.longDescription)
    ? project.longDescription
    : typeof project.longDescription === "string"
    ? project.longDescription.split(/\n\n+/).filter(Boolean)
    : [project.description];

  // Gallery items (exclude main image if repeated, or keep all)
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  // Find index for next/previous project navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F4F5F7] font-sans antialiased selection:bg-[#F59E0B] selection:text-[#090A0C] pb-28">
      {/* ─── TOP STATUS TELEMETRY BAR ────────────────────────────────────── */}
      <div className="border-b border-[#232733] bg-[#0E1015]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/#dossier"
            className="flex items-center gap-2 text-[#8A909E] hover:text-[#F4F5F7] transition-colors py-2"
          >
            <ArrowLeft size={14} weight="bold" />
            <span>RETURN TO DOSSIER</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 text-[#8A909E]">
            <span className="text-[#525866]">SYS-SPEC</span>
            <span className="text-[#525866]">/</span>
            <span className="text-[#F59E0B] font-semibold">{project.category}</span>
            <span className="text-[#525866]">/</span>
            <span className="text-[#F4F5F7] truncate max-w-xs">{project.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#10B981] text-[11px] font-semibold hidden sm:inline">
              VERIFIED ARCHITECTURE
            </span>
          </div>
        </div>
      </div>

      {/* ─── CASE STUDY HERO SECTION ───────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-12 border-b border-[#232733] bg-gradient-to-b from-[#0E1015]/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Movement Prefix */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#F59E0B] mb-3">
            <span>{"// CASE STUDY & ARCHITECTURAL SPECIFICATION"}</span>
            <span className="text-[#525866]">/</span>
            <span className="text-[#8A909E] uppercase tracking-wider">{project.category}</span>
          </div>

          {/* Project Title */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F4F5F7] tracking-tight leading-[1.1] mb-6 max-w-5xl">
            {project.title}
          </h1>

          {/* Subtitle / One-Liner */}
          <p className="text-base sm:text-lg text-[#8A909E] font-sans leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Engineering Telemetry Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs mb-10">
            <div className="p-4 rounded-lg bg-[#0E1015] border border-[#232733]">
              <div className="flex items-center gap-1.5 text-[#525866] text-[11px] mb-1">
                <User size={13} className="text-[#F59E0B]" />
                <span>ENGINEERING ROLE</span>
              </div>
              <div className="text-[#F4F5F7] font-semibold text-sm">
                {project.role || "Lead Full-Stack Developer"}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0E1015] border border-[#232733]">
              <div className="flex items-center gap-1.5 text-[#525866] text-[11px] mb-1">
                <Clock size={13} className="text-[#10B981]" />
                <span>TIMELINE / STATUS</span>
              </div>
              <div className="text-[#10B981] font-semibold text-sm">
                {project.duration || "Production Deployed"}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0E1015] border border-[#232733]">
              <div className="flex items-center gap-1.5 text-[#525866] text-[11px] mb-1">
                <Stack size={13} className="text-[#38BDF8]" />
                <span>ARCHITECTURE TIER</span>
              </div>
              <div className="text-[#38BDF8] font-semibold text-sm">{project.category}</div>
            </div>

            <div className="p-4 rounded-lg bg-[#0E1015] border border-[#232733]">
              <div className="flex items-center gap-1.5 text-[#525866] text-[11px] mb-1">
                <Cpu size={13} className="text-[#F59E0B]" />
                <span>PRIMARY ENGINE</span>
              </div>
              <div className="text-[#F4F5F7] font-semibold text-sm truncate">
                {project.tech[0] || "Full Stack Core"}
              </div>
            </div>
          </div>

          {/* ─── PRIMARY BROWSER SHOWCASE FRAME ────────────────────────── */}
          <div className="studio-browser-frame rounded-lg border border-[#232733] overflow-hidden bg-[#050608]">
            {/* Chrome Bar */}
            <div className="bg-[#14171E] px-4 py-2.5 border-b border-[#232733] flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
              </div>

              {/* URL Simulation */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#090A0C] border border-[#232733] text-[#8A909E] text-[10px] max-w-sm truncate">
                <Lock size={10} className="text-[#10B981]" />
                <span className="text-[#D1D5DB]">
                  {project.liveUrl || `https://systems.abdelrhaman.dev/${project.id}`}
                </span>
              </div>

              <button
                onClick={() => setActiveLightboxImg(project.image)}
                className="flex items-center gap-1 text-[10px] text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
              >
                <MagnifyingGlassPlus size={12} />
                <span className="hidden sm:inline">EXPAND VIEW</span>
              </button>
            </div>

            {/* Main Screenshot Container */}
            <div
              onClick={() => setActiveLightboxImg(project.image)}
              className="relative aspect-video w-full bg-[#050608] cursor-pointer group overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded bg-[#090A0C]/90 border border-[#F59E0B] font-mono text-xs text-[#F59E0B] flex items-center gap-1.5">
                  <MagnifyingGlassPlus size={14} />
                  <span>CLICK TO INSPECT FULL RESOLUTION</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARCHITECTURAL DEEP DIVE & SPECS ───────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7 cols): Architecture Context & Solutions */}
            <div className="lg:col-span-7 space-y-10">
              {/* Problem & Architectural Context */}
              <div className="studio-surface rounded-lg p-6 sm:p-8 border border-[#232733]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-wider mb-4 font-semibold">
                  <span>01 // ARCHITECTURAL CONTEXT & SYSTEM DESIGN</span>
                </div>
                <div className="space-y-4 text-sm sm:text-base text-[#D1D5DB] font-sans leading-relaxed">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Core Technical Highlights & Innovations */}
              {project.features && project.features.length > 0 && (
                <div className="studio-surface rounded-lg p-6 sm:p-8 border border-[#232733]">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-wider mb-5 font-semibold">
                    <span>02 // ENGINEERING HIGHLIGHTS & KEY SOLUTIONS</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded bg-[#090A0C] border border-[#232733] flex items-start gap-3"
                      >
                        <span className="text-[#F59E0B] font-bold mt-0.5">0{i + 1}</span>
                        <div className="text-[#D1D5DB] font-sans text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (5 cols): Tech Stack Specs & Deployments */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technology Stack Panel */}
              <div className="studio-surface rounded-lg p-6 border border-[#232733]">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#232733]">
                  <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold">
                    PRODUCTION STACK SPEC
                  </span>
                  <span className="font-mono text-[10px] text-[#525866]">
                    {project.tech.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {project.tech.map((t) => (
                    <div
                      key={t}
                      className="p-2.5 rounded bg-[#090A0C] border border-[#232733] flex items-center gap-2 text-[#D1D5DB]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span className="truncate">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment & Repository Details */}
              <div className="studio-surface rounded-lg p-6 border border-[#232733] space-y-4">
                <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold block pb-3 border-b border-[#232733]">
                  ACCESS & VERIFICATION LINKS
                </span>

                <div className="space-y-3 font-mono text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-signal w-full justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Globe size={14} />
                        <span>OPEN LIVE PRODUCTION DEPLOYMENT</span>
                      </span>
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost-studio w-full justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <GithubLogo size={14} />
                        <span>INSPECT SOURCE REPOSITORY</span>
                      </span>
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
                  )}

                  {!project.liveUrl && !project.githubUrl && (
                    <div className="p-3 rounded bg-[#090A0C] border border-[#232733] text-[#8A909E] text-xs font-sans">
                      Proprietary enterprise repository. Live demo available via private sandbox on request.
                    </div>
                  )}
                </div>
              </div>

              {/* Architectural Assurance Banner */}
              <div className="p-5 rounded-lg bg-[#14171E] border border-[#232733] flex items-start gap-3 font-mono text-xs">
                <ShieldCheck size={20} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#F4F5F7] font-semibold mb-1">
                    PRODUCTION-GRADE STANDARDS
                  </div>
                  <p className="text-[11px] text-[#8A909E] font-sans leading-relaxed">
                    Adheres to Clean Architecture, strict schema validation, type safety, and audited security controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── SYSTEM GALLERY SHOWCASE ─────────────────────────────────── */}
          {galleryImages.length > 1 && (
            <div className="mt-20 pt-12 border-t border-[#232733]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold block">
                    03 // SCREENSHOT ARCHIVE & INTERFACES
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#F4F5F7]">
                    System Views & Administrative Workflows
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#525866]">
                  {galleryImages.length} INTERFACE CAPTURES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {galleryImages.map((img, idx) => (
                  <div
                    key={img}
                    onClick={() => setActiveLightboxImg(img)}
                    className="studio-surface rounded-lg border border-[#232733] hover:border-[#F59E0B]/50 transition-all overflow-hidden group cursor-pointer"
                  >
                    <div className="relative aspect-video w-full bg-[#050608]">
                      <Image
                        src={img}
                        alt={`System view ${idx + 1}`}
                        fill
                        className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <MagnifyingGlassPlus size={24} className="text-[#F59E0B]" />
                      </div>
                    </div>
                    <div className="p-3 bg-[#0E1015] border-t border-[#232733] font-mono text-[11px] text-[#8A909E] flex items-center justify-between">
                      <span>VIEW 0{idx + 1}</span>
                      <span className="text-[#F59E0B] text-[10px]">CLICK TO ZOOM</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── PROJECT NAVIGATION FOOTER (PREV / NEXT) ────────────────── */}
          <div className="mt-20 pt-10 border-t border-[#232733] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <Link
              href={`/project/${prevProject.id}`}
              className="p-5 rounded-lg studio-surface border border-[#232733] hover:border-[#8A909E]/40 transition-colors flex items-center gap-4 group"
            >
              <div className="w-9 h-9 rounded bg-[#14171E] border border-[#232733] flex items-center justify-center text-[#8A909E] group-hover:text-[#F59E0B] transition-colors flex-shrink-0">
                <ArrowLeft size={16} />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] text-[#525866] uppercase">PREVIOUS SYSTEM</div>
                <div className="text-[#F4F5F7] font-display font-bold text-sm truncate group-hover:text-[#F59E0B] transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </Link>

            <Link
              href={`/project/${nextProject.id}`}
              className="p-5 rounded-lg studio-surface border border-[#232733] hover:border-[#8A909E]/40 transition-colors flex items-center justify-between gap-4 group text-right"
            >
              <div className="overflow-hidden w-full">
                <div className="text-[10px] text-[#525866] uppercase">NEXT SYSTEM</div>
                <div className="text-[#F4F5F7] font-display font-bold text-sm truncate group-hover:text-[#F59E0B] transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <div className="w-9 h-9 rounded bg-[#14171E] border border-[#232733] flex items-center justify-center text-[#8A909E] group-hover:text-[#F59E0B] transition-colors flex-shrink-0">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FLOATING STUDIO COMMAND BAR ───────────────────────────────── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-lg w-full px-4">
        <div className="p-2 rounded-xl bg-[#0E1015]/95 border border-[#232733] shadow-2xl backdrop-blur-xl flex items-center justify-between gap-2 font-mono text-xs">
          <Link
            href="/#dossier"
            className="px-3 py-2 rounded text-[#8A909E] hover:text-[#F4F5F7] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Dossier</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signal py-1.5 px-3 text-xs"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={12} weight="bold" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-studio py-1.5 px-3 text-xs"
              >
                <GithubLogo size={14} />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ─── FULLSCREEN LIGHTBOX INSPECTOR MODAL ───────────────────────── */}
      {activeLightboxImg && (
        <div
          onClick={() => setActiveLightboxImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full bg-[#0E1015] border border-[#232733] rounded-lg p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#8A909E]">
              <div className="flex items-center gap-2">
                <span className="text-[#F59E0B]">HIGH-RESOLUTION INSPECTION</span>
                <span className="text-[#525866]">/</span>
                <span className="text-[#F4F5F7]">{project.title}</span>
              </div>
              <button
                onClick={() => setActiveLightboxImg(null)}
                aria-label="Close image inspection"
                className="p-1 hover:text-[#F4F5F7] border border-[#232733] rounded bg-[#14171E] transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded overflow-hidden border border-[#232733] bg-[#050608]">
              <Image
                src={activeLightboxImg}
                alt="High-resolution architecture preview"
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}