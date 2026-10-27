"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Brain,
  Code,
  Database,
  Browsers,
  Star,
  MagnifyingGlassPlus,
  X,
  Lightning,
  ShieldCheck,
} from "@phosphor-icons/react";

const stackLayers = [
  {
    num: "01",
    layer: "Generative AI & Agentic RAG Systems",
    icon: Brain,
    accent: "#F59E0B",
    benchmark: "0.94+ Faithfulness // Sub-500ms Retrieval",
    description: "Multi-agent systems, semantic vector retrieval, and custom AI tooling.",
    technologies: [
      { name: "Python 3.12", role: "Primary Language" },
      { name: "LangChain / LangGraph", role: "Agent Workflows" },
      { name: "Google Agent Engine", role: "Multi-Agent Systems" },
      { name: "Pinecone / pgvector", role: "Vector Indices" },
      { name: "RAGAS & Gen AI SDK", role: "Evaluation & Guardrails" },
      { name: "Vapi AI", role: "Voice Agent WebRTC" },
    ],
  },
  {
    num: "02",
    layer: "High-Performance Backend & AI APIs",
    icon: Code,
    accent: "#38BDF8",
    benchmark: "Sub-20ms Inference Routing // Async IO",
    description: "FastAPI inference streaming pipelines and ASP.NET Core enterprise business engines.",
    technologies: [
      { name: "FastAPI", role: "AI Serving & RAG Streaming" },
      { name: "C# / ASP.NET Core", role: "Enterprise Business Logic" },
      { name: "RESTful APIs & WebSockets", role: "Real-time Transport" },
      { name: "Pydantic & Validation", role: "Strict Schema Ingestion" },
      { name: "JWT & OAuth2", role: "Session Authentication" },
      { name: "SignalR", role: "Bi-directional Events" },
    ],
  },
  {
    num: "03",
    layer: "Data Architecture & Persistence",
    icon: Database,
    accent: "#10B981",
    benchmark: "26 RLS Policies // ACID Compliance",
    description: "Relational modeling, row-level security, and containerized deployments.",
    technologies: [
      { name: "PostgreSQL 17", role: "Relational Persistence" },
      { name: "Supabase & GoTrue", role: "BaaS & Session Security" },
      { name: "SQL Server (T-SQL)", role: "Enterprise RDBMS" },
      { name: "AlloyDB / Redis", role: "In-Memory & Vector Cache" },
      { name: "Docker", role: "Containerized Workloads" },
      { name: "Google Cloud (GCP)", role: "Cloud Deployment" },
    ],
  },
  {
    num: "04",
    layer: "Edge, Runtime & Client Systems",
    icon: Browsers,
    accent: "#F4F5F7",
    benchmark: "100% SEO // Sub-500KB Canvas WebP",
    description: "Production web platforms, client-side algorithm design, and modern interfaces.",
    technologies: [
      { name: "Next.js 16 (App Router)", role: "SSR & Edge Runtime" },
      { name: "React 19", role: "Component Architecture" },
      { name: "TypeScript", role: "Type Safety" },
      { name: "HTML5 Canvas API", role: "In-Browser Compression" },
      { name: "Tailwind CSS v4", role: "Modern Design Tokens" },
      { name: "i18next (RTL/LTR)", role: "Bilingual Internationalization" },
    ],
  },
];

const milestones = [
  {
    role: "Freelance AI Systems & Full-Stack Engineer",
    entity: "Mostaql, Upwork & Direct Commercial Clients",
    period: "2023 – Present",
    type: "Commercial Practice",
    accent: "#F59E0B",
    highlights: [
      "Successfully architected and deployed 10+ production web applications and custom systems.",
      "Engineered the complete corporate platform and bespoke Headless CMS for Dar Emaar Al-Gharbia (KSA).",
      "Built production RAG pipelines and FastAPI backends for real-time customer intelligence.",
      "Maintained 100% 5-star ratings across communication, code quality, and on-time delivery.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    entity: "Cloud 11",
    period: "2024 – 2025",
    type: "Enterprise Internship",
    accent: "#38BDF8",
    highlights: [
      "Engineered multi-agent AI systems utilizing Google Agent Engine, ADK, and Gen AI SDK.",
      "Connected LangChain with client apps and built RAG-based systems utilizing AlloyDB.",
      "Secured enterprise AI workloads using Google Model Armor and established event-driven Pub/Sub architectures.",
    ],
  },
  {
    role: "Full Stack .NET Web Developer",
    entity: "Digital Egypt Pioneers Program (MCIT)",
    period: "Nov 2024 – May 2025",
    type: "Professional Certification",
    accent: "#10B981",
    highlights: [
      "Comprehensive training in enterprise ASP.NET Core, Entity Framework Core, SQL Server, and React architecture.",
      "Developed robust tiered enterprise architectures adhering to SOLID principles and Clean Architecture.",
    ],
  },
  {
    role: "B.Sc. in Computer Science",
    entity: "Egyptian Chinese University (ECU)",
    period: "Expected 2026",
    type: "Academic Foundation",
    accent: "#F4F5F7",
    highlights: [
      "Concentrations in Algorithms, Distributed Systems, Operating Systems, Machine Learning, and Database Architecture.",
    ],
  },
];

const clientFeedbackScreenshots = [
  { id: 1, src: "/images/testimonials/feedback-1.png", client: "Mostaql Client (KSA)", rating: "5.0 ★" },
  { id: 2, src: "/images/testimonials/feedback-2.png", client: "Commercial Client", rating: "5.0 ★" },
  { id: 3, src: "/images/testimonials/feedback-3.png", client: "Mostaql Client", rating: "5.0 ★" },
  { id: 4, src: "/images/testimonials/feedback-4.png", client: "Enterprise Client", rating: "5.0 ★" },
  { id: 5, src: "/images/testimonials/feedback-5.png", client: "Freelance Client", rating: "5.0 ★" },
];

export default function ArchitectureTrackRecord() {
  const [selectedProofImg, setSelectedProofImg] = useState(null);

  return (
    <section id="architecture" className="py-24 bg-[#090A0C] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Movement Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-14 border-b border-[#232733]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-2">
              <span>{"// 03. ARCHITECTURE & PROVEN TRACK RECORD"}</span>
              <span className="text-[#525866]">/</span>
              <span className="text-[#8A909E]">STACK TOPOLOGY & CAREER LEDGER</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F5F7] tracking-tight">
              Systems Topology & Verified Deliverables
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A909E] max-w-md">
            Architectural competencies across Generative AI, FastAPI, .NET Core, and Next.js, backed by commercial freelance ratings.
          </p>
        </div>

        {/* ─── PART A: 4-LAYER STACK TOPOLOGY ────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold">
              01 // 4-LAYER SYSTEMS STACK TOPOLOGY
            </span>
            <span className="font-mono text-[11px] text-[#525866]">SPEC: PRODUCTION CAPABILITIES</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {stackLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.num}
                  className="studio-surface rounded-lg p-6 border border-[#232733] hover:border-[#8A909E]/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Layer Header */}
                    <div className="flex items-start justify-between mb-3 pb-3 border-b border-[#232733]">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded bg-[#14171E] border border-[#232733] flex items-center justify-center"
                          style={{ color: layer.accent }}
                        >
                          <Icon size={18} weight="bold" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-[#525866]">LAYER {layer.num}</div>
                          <h3 className="font-display font-bold text-base text-[#F4F5F7]">
                            {layer.layer}
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20">
                        {layer.benchmark}
                      </span>
                    </div>

                    <p className="text-xs text-[#8A909E] mb-5 font-sans leading-relaxed">
                      {layer.description}
                    </p>

                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                      {layer.technologies.map((t) => (
                        <div
                          key={t.name}
                          className="p-2.5 rounded bg-[#090A0C] border border-[#232733] flex flex-col justify-center"
                        >
                          <span className="font-semibold text-[#F4F5F7] text-[11px] truncate">
                            {t.name}
                          </span>
                          <span className="text-[10px] text-[#525866] truncate">{t.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── PART B: CAREER MILESTONES & CREDENTIALS ──────────────────── */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold">
              02 // ENGINEERING CAREER & FORMAL MILESTONES
            </span>
            <span className="font-mono text-[11px] text-[#525866]">CHRONOLOGICAL LOG</span>
          </div>

          <div className="space-y-4">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="studio-surface rounded-lg p-6 border border-[#232733] grid md:grid-cols-12 gap-6 items-start"
              >
                {/* Meta column (4 cols) */}
                <div className="md:col-span-4 space-y-1 font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                    <span className="text-xs text-[#8A909E] uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#F4F5F7]">
                    {item.role}
                  </h4>
                  <div className="text-sm font-semibold text-[#F59E0B]">{item.entity}</div>
                  <div className="text-xs text-[#525866]">{item.period}</div>
                </div>

                {/* Highlights column (8 cols) */}
                <div className="md:col-span-8">
                  <ul className="space-y-2 font-sans text-xs text-[#D1D5DB] leading-relaxed">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#F59E0B] font-mono font-bold mt-0.5">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PART C: VERIFIED CLIENT PROOF & RATINGS ──────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold block">
                03 // VERIFIED COMMERCIAL CLIENT RATINGS
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F5F7]">
                Real Client Testimonials & Deliverables
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded border border-[#10B981]/30">
              <Star size={14} weight="fill" className="text-[#F59E0B]" />
              <span>100% 5.0 RATING ACROSS ALL DELIVERIES</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {clientFeedbackScreenshots.map((fb) => (
              <div
                key={fb.id}
                onClick={() => setSelectedProofImg(fb.src)}
                className="studio-surface rounded-lg p-2.5 border border-[#232733] hover:border-[#F59E0B]/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full rounded overflow-hidden bg-[#050608] mb-2 border border-[#232733]">
                  <Image
                    src={fb.src}
                    alt={`Verified client review ${fb.id}`}
                    fill
                    className="object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <MagnifyingGlassPlus size={20} className="text-[#F59E0B]" />
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#8A909E] truncate">{fb.client}</span>
                  <span className="text-[#F59E0B] font-semibold">{fb.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proof Zoom Modal */}
      {selectedProofImg && (
        <div
          onClick={() => setSelectedProofImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0E1015] border border-[#232733] rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#8A909E]">
              <span>VERIFIED PLATFORM FEEDBACK INSPECTOR</span>
              <button
                onClick={() => setSelectedProofImg(null)}
                aria-label="Close review inspector"
                className="p-1 hover:text-[#F4F5F7] border border-[#232733] rounded bg-[#14171E]"
              >
                <X size={16} />
              </button>
            </div>
            <div className="relative aspect-video w-full rounded overflow-hidden border border-[#232733] bg-[#050608]">
              <Image
                src={selectedProofImg}
                alt="Client feedback proof preview"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
