"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GithubLogo,
  Globe,
  Lock,
  CaretRight,
  X,
  Eye,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react";
import { projects } from "@/lib/data/projects";

const flagshipProject = projects[0]; // Dar Emaar

// The 4 Curated Category Champions to show under "ALL" on the homepage
const championIds = [
  "converso-ai-lms",       // Full Stack: AI Companion LMS SaaS with Vapi AI & Stripe
  "medichat-ai",           // AI & Agents: Medical RAG Chatbot with Gemini & LangChain
  "techmaster-ticketing",  // Backend Systems: Enterprise SaaS with CQRS & Clean Architecture
  "rag-chatbot-dashboard", // Frontend UI: Customer Support RAG MLOps Monitoring Dashboard
];

const categoryAccents = {
  "AI & Agents": {
    badge: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
    dot: "bg-[#10B981]",
    glow: "hover:border-[#10B981]/50",
    tag: "TOP AI SYSTEM",
  },
  "Backend Systems": {
    badge: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
    dot: "bg-[#38BDF8]",
    glow: "hover:border-[#38BDF8]/50",
    tag: "TOP BACKEND API",
  },
  "Full Stack": {
    badge: "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30",
    dot: "bg-[#F59E0B]",
    glow: "hover:border-[#F59E0B]/50",
    tag: "TOP FULL STACK SAAS",
  },
  "Frontend UI": {
    badge: "text-[#A78BFA] bg-[#A78BFA]/10 border-[#A78BFA]/30",
    dot: "bg-[#A78BFA]",
    glow: "hover:border-[#A78BFA]/50",
    tag: "TOP FRONTEND MLOPS",
  },
};

export default function Projects() {
  const [activeGalleryImg, setActiveGalleryImg] = useState(
    flagshipProject.gallery?.[0] || flagshipProject.image
  );
  const [selectedDrawerProject, setSelectedDrawerProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("ALL");

  const secondaryProjects = projects.slice(1);

  // When 'ALL', show strictly the 4 Curated Category Champions
  // When a specific category is clicked, show that category's projects
  const displayedProjects =
    filterCategory === "ALL"
      ? championIds
          .map((id) => secondaryProjects.find((p) => p.id === id))
          .filter(Boolean)
      : secondaryProjects.filter((p) => p.category === filterCategory);

  const categories = ["ALL", "AI & Agents", "Backend Systems", "Full Stack", "Frontend UI"];

  return (
    <section id="dossier" className="py-24 bg-[#090A0C] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Movement Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#232733]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-2">
              <span>{"// 02. ENGINEERING DOSSIER"}</span>
              <span className="text-[#525866]">/</span>
              <span className="text-[#8A909E]">CASE STUDIES & CURATED CHAMPIONS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F5F7] tracking-tight">
              Production Systems & Case Studies
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-mono text-xs text-[#8A909E] max-w-md">
              Architected and shipped for commercial clients. Review flagship case study or inspect the curated category champions below.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#14171E] border border-[#232733] hover:border-[#F59E0B]/50 font-mono text-xs text-[#F4F5F7] whitespace-nowrap transition-colors"
            >
              <span>COMPLETE ARCHIVE ({projects.length})</span>
              <ArrowUpRight size={13} className="text-[#F59E0B]" />
            </Link>
          </div>
        </div>

        {/* ─── FLAGSHIP CASE STUDY: DAR EMAAR ───────────────────────────── */}
        <div className="mb-20 studio-surface rounded-lg border border-[#232733] overflow-hidden corner-marked">
          {/* Flagship Header Bar */}
          <div className="bg-[#14171E] px-6 py-4 border-b border-[#232733] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] font-bold rounded">
                FLAGSHIP 01
              </span>
              <span className="text-[#F4F5F7] font-semibold text-sm">
                Dar Emaar — Corporate Platform & Dynamic Headless CMS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[#10B981] text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>LIVE IN PRODUCTION // JEDDAH, KSA</span>
              </div>
              <Link
                href={`/project/${flagshipProject.id}`}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#F59E0B] hover:underline"
              >
                <span>FULL CASE STUDY</span>
                <ArrowUpRight size={12} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="p-6 lg:p-8 grid lg:grid-cols-12 gap-8 items-start">
            {/* Visual Showcase (7 cols) with Browser Frame Mockup */}
            <div className="lg:col-span-7 space-y-4">
              <div className="studio-browser-frame">
                {/* Browser Window Chrome Top Bar */}
                <div className="bg-[#14171E] px-3.5 py-2.5 border-b border-[#232733] flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
                  </div>
                  {/* SSL URL Bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#090A0C] border border-[#232733] text-[#8A909E] text-[10px]">
                    <Lock size={10} className="text-[#10B981]" />
                    <span className="text-[#D1D5DB]">https://www.daremmar.com/</span>
                  </div>
                  <span className="text-[#10B981] text-[10px] hidden sm:inline-block">200 OK</span>
                </div>

                {/* Screenshot Frame */}
                <div className="relative aspect-video w-full bg-[#050608]">
                  <Image
                    src={activeGalleryImg}
                    alt="Dar Emaar Corporate Platform Showcase"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </div>
              </div>

              {/* Gallery Switcher */}
              {flagshipProject.gallery && (
                <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-[10px]">
                  {flagshipProject.gallery.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setActiveGalleryImg(img)}
                      className={`relative aspect-video rounded border overflow-hidden transition-all ${
                        activeGalleryImg === img
                          ? "border-[#F59E0B] ring-1 ring-[#F59E0B]"
                          : "border-[#232733] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Gallery view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Production Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 font-mono text-center">
                <div className="p-2.5 rounded bg-[#090A0C] border border-[#232733]">
                  <div className="text-sm font-bold text-[#F59E0B]">15MB → 420KB</div>
                  <div className="text-[10px] text-[#8A909E]">Canvas Compression</div>
                </div>
                <div className="p-2.5 rounded bg-[#090A0C] border border-[#232733]">
                  <div className="text-sm font-bold text-[#10B981]">26 Policies</div>
                  <div className="text-[10px] text-[#8A909E]">PostgreSQL RLS</div>
                </div>
                <div className="p-2.5 rounded bg-[#090A0C] border border-[#232733]">
                  <div className="text-sm font-bold text-[#38BDF8]">me-central-1</div>
                  <div className="text-[10px] text-[#8A909E]">Supabase Cloud</div>
                </div>
                <div className="p-2.5 rounded bg-[#090A0C] border border-[#232733]">
                  <div className="text-sm font-bold text-[#F4F5F7]">100% SEO</div>
                  <div className="text-[10px] text-[#8A909E]">Next.js 16 Edge</div>
                </div>
              </div>
            </div>

            {/* Architecture Specs & Innovations (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A909E] uppercase tracking-wider block mb-2">
                  CLIENT & PROBLEM CONTEXT
                </span>
                <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6 font-sans">
                  Dar Emaar Al-Gharbia is a premier Saudi general contracting firm founded in 2009 in Jeddah. To replace an unmanageable legacy website, this full-stack platform and bespoke Headless CMS were engineered from scratch to grant complete non-technical control over branding, interactive service portfolios, and quotation requests.
                </p>

                <span className="font-mono text-xs text-[#8A909E] uppercase tracking-wider block mb-3">
                  PRIMARY ARCHITECTURAL HIGHLIGHTS
                </span>
                <ul className="space-y-3 font-mono text-xs text-[#F4F5F7]">
                  <li className="flex items-start gap-2.5 p-2 rounded bg-[#090A0C] border border-[#232733]">
                    <span className="text-[#F59E0B] font-bold mt-0.5">01</span>
                    <div>
                      <span className="text-[#F59E0B] font-semibold">Live CSS Variables Theming Engine</span>
                      <p className="text-[11px] text-[#8A909E] font-sans mt-0.5">
                        Real-time color pickers and typography scaling applied instantly across the entire application runtime.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 p-2 rounded bg-[#090A0C] border border-[#232733]">
                    <span className="text-[#F59E0B] font-bold mt-0.5">02</span>
                    <div>
                      <span className="text-[#10B981] font-semibold">Client-Side Canvas Image Compression</span>
                      <p className="text-[11px] text-[#8A909E] font-sans mt-0.5">
                        Converts 15MB+ raw mobile photo uploads into sub-500KB WebP files in browser memory, defeating Vercel payload limits.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 p-2 rounded bg-[#090A0C] border border-[#232733]">
                    <span className="text-[#F59E0B] font-bold mt-0.5">03</span>
                    <div>
                      <span className="text-[#38BDF8] font-semibold">26 PostgreSQL RLS Policies & GoTrue Auth</span>
                      <p className="text-[11px] text-[#8A909E] font-sans mt-0.5">
                        Granular table-level security ensuring zero unauthorized access to quotation data or CMS records.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tech Stack & Action Links */}
              <div className="pt-4 border-t border-[#232733] space-y-4">
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {flagshipProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#14171E] border border-[#232733] text-[#8A909E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/project/${flagshipProject.id}`}
                    className="btn-signal text-xs font-mono"
                  >
                    <span>DEEP DIVE CASE STUDY</span>
                    <ArrowUpRight size={13} weight="bold" />
                  </Link>

                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost-studio text-xs font-mono"
                    >
                      <Globe size={14} />
                      <span>VISIT LIVE PLATFORM</span>
                    </a>
                  )}

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost-studio text-xs font-mono"
                    >
                      <GithubLogo size={14} />
                      <span>SOURCE CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CURATED CATEGORY CHAMPIONS BENTO GRID ─────────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold">
                  {filterCategory === "ALL"
                    ? "CURATED CATEGORY CHAMPIONS"
                    : `${filterCategory.toUpperCase()} SYSTEMS`}
                </span>
                <span className="text-[#525866] font-mono text-xs">/</span>
                <span className="font-mono text-xs text-[#8A909E]">
                  {filterCategory === "ALL"
                    ? "TOP 4 PRODUCTION PICKS"
                    : `${displayedProjects.length} AVAILABLE`}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F5F7]">
                {filterCategory === "ALL"
                  ? "Top Champions: AI, Backend, Full Stack & Frontend"
                  : `${filterCategory} Repositories & Implementations`}
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {categories.map((cat) => {
                const countBadge =
                  cat === "ALL"
                    ? "4 TOP"
                    : secondaryProjects.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                      filterCategory === cat
                        ? "bg-[#F59E0B] text-[#090A0C] font-semibold shadow-sm"
                        : "bg-[#0E1015] border border-[#232733] text-[#8A909E] hover:text-[#F4F5F7] hover:border-[#8A909E]/30"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        filterCategory === cat
                          ? "bg-[#090A0C]/20 text-[#090A0C]"
                          : "bg-[#14171E] text-[#525866]"
                      }`}
                    >
                      {countBadge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Curated Bento Grid (2x2 on desktop when ALL, responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((proj, idx) => {
              const catStyle = categoryAccents[proj.category] || categoryAccents["Full Stack"];
              return (
                <div
                  key={proj.id}
                  className={`studio-surface rounded-lg border border-[#232733] ${catStyle.glow} transition-all duration-200 overflow-hidden flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    {/* Visual Screenshot Frame with Browser Chrome Bar */}
                    <div className="relative aspect-[16/10] w-full bg-[#050608] border-b border-[#232733] overflow-hidden">
                      {/* Browser Mini Header */}
                      <div className="absolute top-0 left-0 right-0 z-20 bg-[#14171E]/90 backdrop-blur-sm px-3 py-1.5 border-b border-[#232733] flex items-center justify-between font-mono text-[10px]">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]/70 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/70 inline-block" />
                          <span className="w-2 h-2 rounded-full bg-[#10B981]/70 inline-block" />
                        </div>
                        <span className="text-[#8A909E] text-[9px] uppercase tracking-wider truncate max-w-[180px]">
                          SYS-0{idx + 2} {"//"} {proj.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              className="text-[#8A909E] hover:text-[#10B981] transition-colors p-0.5"
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
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
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent opacity-80" />
                        </div>
                      </Link>

                      {/* Domain Champion Tag Badge */}
                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[10px] uppercase font-semibold border ${catStyle.badge}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                          {filterCategory === "ALL" && catStyle.tag ? catStyle.tag : proj.category}
                        </span>
                      </div>

                      {/* Quick Inspect Drawer Trigger */}
                      <button
                        onClick={() => setSelectedDrawerProject(proj)}
                        className="absolute bottom-3 right-3 z-10 px-2 py-1 rounded bg-[#090A0C]/90 border border-[#232733] hover:border-[#F59E0B] font-mono text-[10px] text-[#D1D5DB] flex items-center gap-1 backdrop-blur-sm transition-colors"
                        title="Quick Architecture Spec"
                      >
                        <Eye size={11} className="text-[#F59E0B]" />
                        <span>QUICK SPEC</span>
                      </button>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-3">
                      <div>
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#525866] mb-1">
                          <span>{proj.role || "Lead Engineer"}</span>
                          <span>{proj.duration || "Production"}</span>
                        </div>
                        <Link href={`/project/${proj.id}`}>
                          <h4 className="font-display font-bold text-base sm:text-lg text-[#F4F5F7] group-hover:text-[#F59E0B] transition-colors leading-snug line-clamp-1">
                            {proj.title}
                          </h4>
                        </Link>
                      </div>

                      <p className="text-xs text-[#8A909E] font-sans line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Primary Innovation Highlight */}
                      {proj.features?.[0] && (
                        <div className="p-2.5 rounded bg-[#090A0C] border border-[#232733] font-mono text-[11px] text-[#D1D5DB] flex items-start gap-2">
                          <span className="text-[#F59E0B] font-bold">▸</span>
                          <span className="line-clamp-1 text-[11px]">{proj.features[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Tech Stack & Action Links */}
                  <div className="p-5 pt-0 border-t border-[#232733]/60 mt-3 space-y-3">
                    <div className="flex flex-wrap gap-1 font-mono text-[10px] text-[#8A909E] pt-3">
                      {proj.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#14171E] border border-[#232733]"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 5 && (
                        <span className="px-1.5 py-0.5 text-[#525866]">
                          +{proj.tech.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href={`/project/${proj.id}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#F59E0B] hover:text-[#FBBF24] font-semibold transition-colors group-hover:translate-x-0.5"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowUpRight size={13} weight="bold" />
                      </Link>

                      <div className="flex items-center gap-2.5 font-mono text-[11px]">
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

          {/* ─── MASTER ARCHIVE DISCOVERY CALLOUT ────────────────────────── */}
          <div className="mt-12 p-6 rounded-lg studio-surface border border-[#232733] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 font-mono text-xs">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse mt-1 sm:mt-0 flex-shrink-0" />
              <div>
                <div className="text-[#F4F5F7] font-semibold text-sm">
                  {filterCategory === "ALL"
                    ? `LOOKING FOR MORE SYSTEMS? (${projects.length - 5} ADDITIONAL REPOSITORIES)`
                    : `VIEW ALL ${projects.length} PROJECTS ACROSS ALL DISCIPLINES`}
                </div>
                <div className="text-[#8A909E] text-[11px] font-sans mt-0.5">
                  Browse the complete engineering archive with live Swagger endpoints, GitHub repos, and architectural case studies.
                </div>
              </div>
            </div>

            <Link
              href={
                filterCategory === "ALL"
                  ? "/projects"
                  : `/projects?category=${encodeURIComponent(filterCategory)}`
              }
              className="btn-signal text-xs whitespace-nowrap flex items-center gap-2 py-2.5 px-4 flex-shrink-0"
            >
              <span>EXPLORE COMPLETE ARCHIVE ({projects.length})</span>
              <ArrowUpRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </div>

      {/* ─── SYSTEM SPECIFICATION QUICK INSPECTOR DRAWER ─────────────────── */}
      {selectedDrawerProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E1015] border border-[#232733] rounded-lg shadow-2xl p-6 sm:p-8 font-sans">
            {/* Drawer Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#232733]">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-1">
                  <span>SPECIFICATION INSPECTOR</span>
                  <span className="text-[#525866]">/</span>
                  <span className="text-[#8A909E]">{selectedDrawerProject.category}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F5F7]">
                  {selectedDrawerProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDrawerProject(null)}
                aria-label="Close specification inspector"
                className="p-1.5 rounded hover:text-[#F4F5F7] text-[#8A909E] border border-[#232733] bg-[#14171E] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Preview Image */}
            <div className="relative aspect-video w-full rounded border border-[#232733] overflow-hidden mb-6 bg-[#050608]">
              <Image
                src={selectedDrawerProject.image}
                alt={selectedDrawerProject.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
              <div className="p-3 rounded bg-[#090A0C] border border-[#232733]">
                <div className="text-[#525866] text-[10px]">ENGINEERING ROLE</div>
                <div className="text-[#F4F5F7] font-semibold mt-0.5">
                  {selectedDrawerProject.role || "Lead Full-Stack Developer"}
                </div>
              </div>
              <div className="p-3 rounded bg-[#090A0C] border border-[#232733]">
                <div className="text-[#525866] text-[10px]">TIMELINE / STATUS</div>
                <div className="text-[#10B981] font-semibold mt-0.5">
                  {selectedDrawerProject.duration || "Production Deployed"}
                </div>
              </div>
              <div className="p-3 rounded bg-[#090A0C] border border-[#232733] col-span-2 sm:col-span-1">
                <div className="text-[#525866] text-[10px]">CATEGORY TIER</div>
                <div className="text-[#F59E0B] font-semibold mt-0.5">
                  {selectedDrawerProject.category}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-mono text-xs text-[#8A909E] uppercase tracking-wider mb-2">
                SYSTEM SUMMARY & CONTEXT
              </h4>
              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                {selectedDrawerProject.description}
              </p>
            </div>

            {/* Key Innovations */}
            {selectedDrawerProject.features && selectedDrawerProject.features.length > 0 && (
              <div className="mb-6">
                <h4 className="font-mono text-xs text-[#8A909E] uppercase tracking-wider mb-3">
                  CORE TECHNICAL HIGHLIGHTS
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {selectedDrawerProject.features.map((f, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded bg-[#090A0C] border border-[#232733] flex items-start gap-2.5"
                    >
                      <CheckCircle size={14} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span className="text-[#D1D5DB] font-sans text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="font-mono text-xs text-[#8A909E] uppercase tracking-wider mb-2">
                PRODUCTION TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {selectedDrawerProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#090A0C] border border-[#232733] text-[#8A909E]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#232733] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <Link
                href={`/project/${selectedDrawerProject.id}`}
                onClick={() => setSelectedDrawerProject(null)}
                className="btn-signal text-xs font-mono"
              >
                <span>OPEN FULL CASE STUDY PAGE</span>
                <ArrowUpRight size={13} weight="bold" />
              </Link>

              <div className="flex items-center gap-3">
                {selectedDrawerProject.liveUrl && (
                  <a
                    href={selectedDrawerProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-studio text-xs"
                  >
                    <Globe size={14} />
                    <span>Live ↗</span>
                  </a>
                )}
                {selectedDrawerProject.githubUrl && (
                  <a
                    href={selectedDrawerProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-studio text-xs"
                  >
                    <GithubLogo size={14} />
                    <span>Source ↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}