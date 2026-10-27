"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  GithubLogo,
  Globe,
  Cpu,
  ShieldCheck,
  Lightning,
  Lock,
  CaretRight,
  X,
  Gauge,
  Sliders,
} from "@phosphor-icons/react";
import { projects } from "@/lib/data/projects";

const flagshipProject = projects[0]; // Dar Emaar

export default function Projects() {
  const [activeGalleryImg, setActiveGalleryImg] = useState(
    flagshipProject.gallery?.[0] || flagshipProject.image
  );
  const [selectedDrawerProject, setSelectedDrawerProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("ALL");

  const ledgerProjects = projects.slice(1);

  const filteredLedger =
    filterCategory === "ALL"
      ? ledgerProjects
      : ledgerProjects.filter((p) => p.category === filterCategory);

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
              <span className="text-[#8A909E]">CASE STUDIES & SYSTEMS LEDGER</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F5F7] tracking-tight">
              Production Systems & Architecture
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A909E] max-w-md">
            Architected and shipped for commercial clients and enterprise environments. Review flagship case study or inspect the systems ledger.
          </p>
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
            <div className="flex items-center gap-2 text-[#10B981] text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>LIVE IN PRODUCTION // JEDDAH, KSA</span>
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

                <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider block mb-3 font-semibold">
                  CORE ENGINEERING INNOVATIONS
                </span>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-[#090A0C] border border-[#232733]">
                    <div className="flex items-center gap-2 text-[#F4F5F7] font-semibold mb-1">
                      <Lightning size={14} className="text-[#F59E0B]" />
                      <span>Canvas Client-Side Image Compression</span>
                    </div>
                    <p className="text-[11px] text-[#8A909E] font-sans">
                      Overcame Vercel’s 4.5MB payload limit by designing an HTML5 Canvas pipeline that compresses 15MB mobile photos to sub-500KB WebP files directly in-browser before upload.
                    </p>
                  </div>

                  <div className="p-3 rounded bg-[#090A0C] border border-[#232733]">
                    <div className="flex items-center gap-2 text-[#F4F5F7] font-semibold mb-1">
                      <ShieldCheck size={14} className="text-[#10B981]" />
                      <span>26 Granular PostgreSQL RLS Policies</span>
                    </div>
                    <p className="text-[11px] text-[#8A909E] font-sans">
                      Zero-trust database architecture securing corporate client data, self-service password resets, and session management with Supabase GoTrue.
                    </p>
                  </div>

                  <div className="p-3 rounded bg-[#090A0C] border border-[#232733]">
                    <div className="flex items-center gap-2 text-[#F4F5F7] font-semibold mb-1">
                      <Sliders size={14} className="text-[#38BDF8]" />
                      <span>Live CSS Variables Theming Engine</span>
                    </div>
                    <p className="text-[11px] text-[#8A909E] font-sans">
                      Instant brand identity customization with real-time color pickers and typography scalers executed dynamically across the production DOM.
                    </p>
                  </div>
                </div>
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
                  {flagshipProject.liveUrl && (
                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-signal text-xs font-mono"
                    >
                      <span>VISIT PRODUCTION PLATFORM</span>
                      <ArrowUpRight size={13} weight="bold" />
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
                      <span>INSPECT SOURCE CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SYSTEMS LEDGER ────────────────────────────────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A909E] uppercase tracking-wider block">
                TECHNICAL SYSTEMS LEDGER
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F5F7]">
                Autonomous Agents, SaaS & Full-Stack Systems
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    filterCategory === cat
                      ? "bg-[#F59E0B] text-[#090A0C] font-semibold"
                      : "bg-[#0E1015] border border-[#232733] text-[#8A909E] hover:text-[#F4F5F7]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Ledger Table Structure */}
          <div className="border border-[#232733] rounded-lg overflow-hidden bg-[#0E1015]">
            <div className="hidden md:grid grid-cols-12 px-6 py-3 bg-[#14171E] border-b border-[#232733] font-mono text-[11px] text-[#525866] uppercase tracking-wider">
              <span className="col-span-1">ID</span>
              <span className="col-span-4">SYSTEM NAME & ARCHITECTURE</span>
              <span className="col-span-3">PRIMARY ENGINEERING INNOVATION</span>
              <span className="col-span-3">CORE TECH STACK</span>
              <span className="col-span-1 text-right">ACTION</span>
            </div>

            <div className="divide-y divide-[#232733]">
              {filteredLedger.map((proj, idx) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedDrawerProject(proj)}
                  className="p-5 md:px-6 md:py-4.5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center hover:bg-[#14171E]/70 transition-colors cursor-pointer group"
                >
                  {/* ID */}
                  <span className="hidden md:block col-span-1 font-mono text-xs text-[#525866] group-hover:text-[#F59E0B]">
                    0{idx + 2}
                  </span>

                  {/* Title & Category */}
                  <div className="col-span-1 md:col-span-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-sm text-[#F4F5F7] group-hover:text-[#F59E0B] transition-colors">
                        {proj.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#8A909E]">
                      <span className="px-1.5 py-0.5 rounded bg-[#090A0C] border border-[#232733] text-[10px] text-[#F59E0B]">
                        {proj.category}
                      </span>
                      <span>{proj.role || "Lead Engineer"}</span>
                    </div>
                  </div>

                  {/* Primary Innovation */}
                  <div className="col-span-1 md:col-span-3 text-xs text-[#D1D5DB] font-sans line-clamp-2 md:line-clamp-1">
                    {proj.features?.[0] || proj.description}
                  </div>

                  {/* Stack */}
                  <div className="col-span-1 md:col-span-3 flex flex-wrap gap-1 font-mono text-[10px] text-[#8A909E]">
                    {proj.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#090A0C] border border-[#232733]"
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

                  {/* Action */}
                  <div className="col-span-1 md:col-span-1 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#F59E0B] group-hover:translate-x-1 transition-transform">
                      <span>INSPECT</span>
                      <CaretRight size={13} weight="bold" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── SYSTEM SPECIFICATION DRAWER / MODAL ───────────────────────── */}
      {selectedDrawerProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E1015] border border-[#232733] rounded-lg shadow-2xl p-6 sm:p-8 font-sans">
            {/* Drawer Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#232733] mb-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-1">
                  <span>{"// SYSTEM SPECIFICATION"}</span>
                  <span className="text-[#525866]">/</span>
                  <span className="text-[#8A909E]">{selectedDrawerProject.category}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F4F5F7]">
                  {selectedDrawerProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDrawerProject(null)}
                aria-label="Close specification"
                className="p-1.5 text-[#8A909E] hover:text-[#F4F5F7] border border-[#232733] hover:border-[#8A909E] rounded bg-[#14171E] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Preview */}
            {selectedDrawerProject.image && (
              <div className="relative aspect-video w-full rounded border border-[#232733] overflow-hidden bg-[#050608] mb-6">
                <Image
                  src={selectedDrawerProject.image}
                  alt={selectedDrawerProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}

            {/* Architectural Overview */}
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs text-[#8A909E] uppercase tracking-wider block mb-2">
                  ARCHITECTURAL SUMMARY
                </span>
                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                  {selectedDrawerProject.longDescription || selectedDrawerProject.description}
                </p>
              </div>

              {/* Key Features & Innovations */}
              {selectedDrawerProject.features && (
                <div>
                  <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider block mb-2 font-semibold">
                    KEY TECHNICAL DELIVERABLES
                  </span>
                  <ul className="space-y-2 font-mono text-xs">
                    {selectedDrawerProject.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded bg-[#090A0C] border border-[#232733] text-[#D1D5DB]"
                      >
                        <span className="text-[#F59E0B] font-bold">0{i + 1}.</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <span className="font-mono text-xs text-[#8A909E] uppercase tracking-wider block mb-2">
                  DEPLOYED TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {selectedDrawerProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#14171E] border border-[#232733] text-[#8A909E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#232733] flex flex-wrap items-center gap-3">
                {selectedDrawerProject.liveUrl && (
                  <a
                    href={selectedDrawerProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-signal text-xs font-mono"
                  >
                    <span>LAUNCH PRODUCTION DEMO</span>
                    <ArrowUpRight size={13} weight="bold" />
                  </a>
                )}
                {selectedDrawerProject.githubUrl && (
                  <a
                    href={selectedDrawerProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-studio text-xs font-mono"
                  >
                    <GithubLogo size={14} />
                    <span>VIEW REPOSITORY</span>
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