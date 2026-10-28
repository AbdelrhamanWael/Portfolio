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
  CheckCircle,
  GitBranch,
  ArrowUpRight,
  CaretRight,
  TerminalWindow,
  Cpu,
} from "@phosphor-icons/react";

const stackLayers = [
  {
    num: "01",
    id: "gen-ai",
    layer: "Generative AI & Agentic RAG Systems",
    shortName: "GEN AI & AGENTIC RAG",
    icon: Brain,
    accent: "#F59E0B",
    benchmark: "0.94+ Faithfulness // Sub-500ms Retrieval",
    description:
      "Enterprise autonomous agent architectures, dense vector retrieval indices, and strict model evaluation guardrails.",
    pipeline: [
      { step: "INGRESS", label: "User Prompt / Audio WebRTC" },
      { step: "ROUTING", label: "FastAPI / LangGraph Intent Routing" },
      { step: "RETRIEVAL", label: "Pinecone / pgvector Hybrid Search" },
      { step: "SYNTHESIS", label: "Gemini / LLM with RAGAS Guardrails" },
    ],
    technologies: [
      { name: "Python 3.12", role: "Primary Language", note: "Async runtime" },
      { name: "LangChain / LangGraph", role: "Agent Workflows", note: "Multi-step orchestration" },
      { name: "Google Agent Engine", role: "Multi-Agent Systems", note: "Enterprise ADK" },
      { name: "Pinecone / pgvector", role: "Vector Indices", note: "HNSW semantic indexing" },
      { name: "RAGAS & Gen AI SDK", role: "Evaluation & Guardrails", note: "Faithfulness & relevancy" },
      { name: "Vapi AI", role: "Voice Agent WebRTC", note: "Real-time speech IO" },
    ],
  },
  {
    num: "02",
    id: "backend-apis",
    layer: "High-Performance Backend & AI APIs",
    shortName: "BACKEND & AI APIS",
    icon: Code,
    accent: "#38BDF8",
    benchmark: "Sub-20ms Inference Routing // Async IO",
    description:
      "High-throughput FastAPI inference streaming backends and enterprise ASP.NET Core Clean Architecture engines.",
    pipeline: [
      { step: "GATEWAY", label: "Reverse Proxy & TLS Termination" },
      { step: "VALIDATION", label: "Pydantic & FluentValidation Schemas" },
      { step: "EXECUTION", label: "FastAPI Async IO / .NET Core CQRS" },
      { step: "STREAMING", label: "SSE / WebSockets Event Broadcast" },
    ],
    technologies: [
      { name: "FastAPI", role: "AI Serving & RAG Streaming", note: "Python ASGI server" },
      { name: "C# / ASP.NET Core", role: "Enterprise Business Logic", note: "Clean Architecture & CQRS" },
      { name: "RESTful APIs & WebSockets", role: "Real-time Transport", note: "Bi-directional channels" },
      { name: "Pydantic & Validation", role: "Strict Schema Ingestion", note: "Zero runtime type leaks" },
      { name: "JWT & OAuth2", role: "Session Authentication", note: "Stateless security" },
      { name: "SignalR", role: "Bi-directional Events", note: "Real-time notifications" },
    ],
  },
  {
    num: "03",
    id: "data-persistence",
    layer: "Data Architecture & Persistence",
    shortName: "DATA & PERSISTENCE",
    icon: Database,
    accent: "#10B981",
    benchmark: "26 RLS Policies // ACID Compliance",
    description:
      "Granular row-level security, relational data models, vector caching layers, and containerized deployment pipelines.",
    pipeline: [
      { step: "INGEST", label: "ACID Relational Operations" },
      { step: "SECURITY", label: "Row Level Security (RLS) Filtering" },
      { step: "CACHE", label: "Redis / AlloyDB In-Memory Caching" },
      { step: "DEPLOY", label: "Dockerized Gunicorn / Kestrel Containers" },
    ],
    technologies: [
      { name: "PostgreSQL 17", role: "Relational Persistence", note: "ACID compliance" },
      { name: "Supabase & GoTrue", role: "BaaS & Session Security", note: "26 Granular RLS policies" },
      { name: "SQL Server (T-SQL)", role: "Enterprise RDBMS", note: "Stored procedures & index tune" },
      { name: "AlloyDB / Redis", role: "In-Memory & Vector Cache", note: "Low-latency key-value" },
      { name: "Docker", role: "Containerized Workloads", note: "Multi-stage builds" },
      { name: "Google Cloud (GCP)", role: "Cloud Deployment", note: "Cloud Run & Pub/Sub" },
    ],
  },
  {
    num: "04",
    id: "edge-runtime",
    layer: "Edge, Runtime & Client Systems",
    shortName: "EDGE & CLIENT RUNTIME",
    icon: Browsers,
    accent: "#F4F5F7",
    benchmark: "100% SEO // Sub-500KB Canvas WebP",
    description:
      "Production Next.js 16 SSR platforms, client-side algorithm design, in-browser compression, and dynamic theming engines.",
    pipeline: [
      { step: "REQUEST", label: "Edge Middleware & Route Resolution" },
      { step: "SSR ENGINE", label: "React 19 Server Components" },
      { step: "BROWSER COMPRESS", label: "HTML5 Canvas WebP Pipeline" },
      { step: "HYDRATION", label: "Ultra-Fast Client Micro-Interactions" },
    ],
    technologies: [
      { name: "Next.js 16 (App Router)", role: "SSR & Edge Runtime", note: "Optimized server execution" },
      { name: "React 19", role: "Component Architecture", note: "Concurrent rendering" },
      { name: "TypeScript", role: "Type Safety", note: "End-to-end typing" },
      { name: "HTML5 Canvas API", role: "In-Browser Compression", note: "15MB → 400KB WebP" },
      { name: "Tailwind CSS v4", role: "Modern Design Tokens", note: "Swiss Modernism layout" },
      { name: "i18next (RTL/LTR)", role: "Bilingual Internationalization", note: "Arabic & English dynamic flow" },
    ],
  },
];

const milestones = [
  {
    role: "Freelance AI Systems & Full-Stack Engineer",
    entity: "Mostaql, Upwork & Direct Commercial Clients",
    period: "2023 – Present",
    status: "CURRENTLY ACTIVE",
    type: "Commercial Practice",
    accent: "#F59E0B",
    highlights: [
      "Successfully architected and deployed 10+ production web applications and custom systems.",
      "Engineered the complete corporate platform and bespoke Headless CMS for Dar Emaar Al-Gharbia (KSA).",
      "Built production RAG pipelines and FastAPI backends for real-time customer intelligence and voice agents.",
      "Maintained 100% 5-star ratings across communication, code quality, and on-time delivery on Mostaql.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    entity: "Cloud 11",
    period: "2024 – 2025",
    status: "COMPLETED",
    type: "Enterprise AI Internship",
    accent: "#38BDF8",
    highlights: [
      "Engineered multi-agent AI systems utilizing Google Agent Engine, ADK, and Gen AI SDK.",
      "Connected LangChain with client apps and built RAG-based systems utilizing AlloyDB vector indexes.",
      "Secured enterprise AI workloads using Google Model Armor and established event-driven Pub/Sub architectures.",
    ],
  },
  {
    role: "Full Stack .NET Web Developer",
    entity: "Digital Egypt Pioneers Program (MCIT)",
    period: "Nov 2024 – May 2025",
    status: "PROFESSIONAL TRACK",
    type: "Enterprise Certification",
    accent: "#10B981",
    highlights: [
      "Comprehensive training in enterprise ASP.NET Core, Entity Framework Core, SQL Server, and React architecture.",
      "Developed robust tiered enterprise architectures adhering to SOLID principles, CQRS patterns, and Clean Architecture.",
    ],
  },
  {
    role: "B.Sc. in Computer Science",
    entity: "Egyptian Chinese University (ECU)",
    period: "Expected 2026",
    status: "DEGREE CANDIDATE",
    type: "Academic Foundation",
    accent: "#A78BFA",
    highlights: [
      "Concentrations in Algorithms, Distributed Systems, Operating Systems, Machine Learning, and Database Architecture.",
    ],
  },
];

const clientFeedbackScreenshots = [
  { id: 1, src: "/images/testimonials/feedback-1.png", client: "Mostaql Client (KSA)", project: "Full-Stack Web App", rating: "5.0 ★" },
  { id: 2, src: "/images/testimonials/feedback-2.png", client: "Commercial Client", project: "CMS & Backend System", rating: "5.0 ★" },
  { id: 3, src: "/images/testimonials/feedback-3.png", client: "Mostaql Client", project: "AI Integration & UI", rating: "5.0 ★" },
  { id: 4, src: "/images/testimonials/feedback-4.png", client: "Enterprise Client", project: "Custom System Design", rating: "5.0 ★" },
  { id: 5, src: "/images/testimonials/feedback-5.png", client: "Freelance Client", project: "Web Development", rating: "5.0 ★" },
];

export default function ArchitectureTrackRecord() {
  const [selectedProofImg, setSelectedProofImg] = useState(null);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [viewMode, setViewMode] = useState("CONSOLE"); // "CONSOLE" or "ALL"

  const activeLayer = stackLayers[activeLayerIndex];
  const ActiveIcon = activeLayer.icon;

  return (
    <section id="architecture" className="py-24 bg-[#090A0C] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Movement Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-14 border-b border-[#232733]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-2">
              <span>{"// 03. ARCHITECTURE & PROVEN TRACK RECORD"}</span>
              <span className="text-[#525866]">/</span>
              <span className="text-[#8A909E]">SYSTEMS BLUEPRINT & CAREER LEDGER</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F5F7] tracking-tight">
              Systems Topology & Verified Deliverables
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A909E] max-w-md">
            Architectural competencies across Generative AI, FastAPI, .NET Core, and Next.js, backed by commercial freelance ratings and enterprise milestones.
          </p>
        </div>

        {/* ─── PART A: INTERACTIVE 4-LAYER SYSTEMS TOPOLOGY CONSOLE ──────── */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold block">
                01 // INTERACTIVE 4-LAYER SYSTEMS STACK TOPOLOGY
              </span>
              <span className="font-mono text-[11px] text-[#525866]">
                SELECT A LAYER TO INSPECT ARCHITECTURAL PIPELINE & METRICS
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded bg-[#0E1015] border border-[#232733] font-mono text-xs">
              <button
                onClick={() => setViewMode("CONSOLE")}
                className={`px-3 py-1 rounded transition-colors ${
                  viewMode === "CONSOLE"
                    ? "bg-[#14171E] text-[#F59E0B] border border-[#F59E0B]/30 font-semibold"
                    : "text-[#8A909E] hover:text-[#F4F5F7]"
                }`}
              >
                INTERACTIVE CONSOLE
              </button>
              <button
                onClick={() => setViewMode("ALL")}
                className={`px-3 py-1 rounded transition-colors ${
                  viewMode === "ALL"
                    ? "bg-[#14171E] text-[#F59E0B] border border-[#F59E0B]/30 font-semibold"
                    : "text-[#8A909E] hover:text-[#F4F5F7]"
                }`}
              >
                SHOW ALL 4 LAYERS
              </button>
            </div>
          </div>

          {/* Interactive Console View */}
          {viewMode === "CONSOLE" ? (
            <div className="studio-surface rounded-xl border border-[#232733] overflow-hidden">
              {/* Layer Navigation Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#232733] bg-[#14171E] font-mono text-xs divide-x divide-[#232733]">
                {stackLayers.map((l, idx) => {
                  const Icon = l.icon;
                  const isActive = activeLayerIndex === idx;
                  return (
                    <button
                      key={l.num}
                      onClick={() => setActiveLayerIndex(idx)}
                      className={`p-4 text-left transition-all flex items-center justify-between gap-3 relative ${
                        isActive
                          ? "bg-[#0E1015] text-[#F4F5F7]"
                          : "text-[#8A909E] hover:bg-[#0E1015]/50 hover:text-[#F4F5F7]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded bg-[#090A0C] border border-[#232733] flex items-center justify-center flex-shrink-0"
                          style={{ color: isActive ? l.accent : "#8A909E" }}
                        >
                          <Icon size={15} weight={isActive ? "bold" : "regular"} />
                        </div>
                        <div>
                          <div className="text-[10px] text-[#525866]">LAYER {l.num}</div>
                          <div className="font-semibold text-xs truncate">{l.shortName}</div>
                        </div>
                      </div>

                      {isActive && (
                        <div
                          className="absolute bottom-0 left-0 right-0 h-0.5"
                          style={{ backgroundColor: l.accent }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Blueprint Cockpit */}
              <div className="p-6 lg:p-8 space-y-8">
                {/* Header Information Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#232733]">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg bg-[#14171E] border border-[#232733] flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ color: activeLayer.accent }}
                    >
                      <ActiveIcon size={26} weight="bold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#525866] mb-1">
                        <span>LAYER 0{activeLayerIndex + 1} OF 04</span>
                        <span>•</span>
                        <span className="text-[#10B981]">SYSTEM BLUEPRINT READY</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-[#F4F5F7]">
                        {activeLayer.layer}
                      </h3>
                      <p className="text-sm text-[#8A909E] font-sans mt-1 max-w-2xl">
                        {activeLayer.description}
                      </p>
                    </div>
                  </div>

                  {/* Benchmark Telemetry Badge */}
                  <div className="font-mono text-xs p-3 rounded bg-[#090A0C] border border-[#232733] flex flex-col justify-center min-w-[240px]">
                    <span className="text-[#525866] text-[10px] uppercase">
                      BENCHMARK & PRODUCTION TARGET
                    </span>
                    <span
                      className="font-bold text-sm mt-0.5"
                      style={{ color: activeLayer.accent }}
                    >
                      {activeLayer.benchmark}
                    </span>
                  </div>
                </div>

                {/* Architectural Dataflow Connectivity Pipeline */}
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[11px] text-[#525866]">
                    <span>ARCHITECTURAL PIPELINE DATAFLOW</span>
                    <span>INGRESS → EGRESS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                    {activeLayer.pipeline.map((step, idx) => (
                      <div
                        key={step.step}
                        className="p-3.5 rounded bg-[#090A0C] border border-[#232733] relative flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between text-[10px] text-[#525866] mb-1.5">
                          <span>STAGE 0{idx + 1}</span>
                          <span className="text-[#F59E0B] font-semibold">{step.step}</span>
                        </div>
                        <div className="text-[#F4F5F7] font-semibold text-xs">{step.label}</div>
                        {idx < 3 && (
                          <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#525866]">
                            ▸
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Grid */}
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-[11px] text-[#525866]">
                    <span>DEPLOYED CORE TECHNOLOGIES & PACKAGES</span>
                    <span>{activeLayer.technologies.length} PRODUCTION MODULES</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeLayer.technologies.map((t) => (
                      <div
                        key={t.name}
                        className="p-3.5 rounded bg-[#14171E] border border-[#232733] hover:border-[#8A909E]/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between font-mono text-xs mb-1">
                            <span className="font-bold text-[#F4F5F7] text-sm">{t.name}</span>
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: activeLayer.accent }}
                            />
                          </div>
                          <div className="font-mono text-xs text-[#F59E0B]">{t.role}</div>
                        </div>
                        <div className="font-mono text-[10px] text-[#8A909E] mt-3 pt-2 border-t border-[#232733]/60">
                          {t.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* All 4 Layers Grid View */
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
                            <div className="font-mono text-[10px] text-[#525866]">
                              LAYER {layer.num}
                            </div>
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
          )}
        </div>

        {/* ─── PART B: CONNECTED CAREER MILESTONES PIPELINE ──────────────── */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-wider font-semibold block">
                02 // ENGINEERING CAREER & VERIFIED MILESTONES
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F4F5F7]">
                Chronological Career Ledger & Credentials
              </h3>
            </div>
            <span className="font-mono text-xs text-[#525866]">CHRONOLOGICAL LOG</span>
          </div>

          {/* Connected Pipeline Layout */}
          <div className="relative pl-6 sm:pl-8 border-l border-[#232733] space-y-8 ml-2 sm:ml-4">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node Dot on Timeline */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full border-2 bg-[#090A0C] transition-all group-hover:scale-125"
                  style={{
                    borderColor: item.accent,
                    boxShadow: `0 0 10px ${item.accent}40`,
                  }}
                />

                <div className="studio-surface rounded-lg p-6 sm:p-7 border border-[#232733] hover:border-[#8A909E]/40 transition-colors grid md:grid-cols-12 gap-6 items-start">
                  {/* Meta column (4 cols) */}
                  <div className="md:col-span-4 space-y-1.5 font-mono">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          color: item.accent,
                          backgroundColor: `${item.accent}15`,
                          borderColor: `${item.accent}30`,
                        }}
                      >
                        {item.type}
                      </span>
                      <span className="text-[10px] text-[#525866]">•</span>
                      <span className="text-[10px] text-[#10B981] font-semibold">{item.status}</span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-[#F4F5F7] pt-1">
                      {item.role}
                    </h4>
                    <div className="text-sm font-semibold text-[#F59E0B]">{item.entity}</div>
                    <div className="text-xs text-[#8A909E]">{item.period}</div>
                  </div>

                  {/* Highlights column (8 cols) */}
                  <div className="md:col-span-8">
                    <ul className="space-y-2.5 font-sans text-xs text-[#D1D5DB] leading-relaxed">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#F59E0B] font-mono font-bold mt-0.5">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PART C: VERIFIED COMMERCIAL RATINGS & PROOFS ───────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clientFeedbackScreenshots.map((fb) => (
              <div
                key={fb.id}
                onClick={() => setSelectedProofImg(fb.src)}
                className="studio-surface rounded-lg p-3 border border-[#232733] hover:border-[#F59E0B]/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full rounded overflow-hidden bg-[#050608] mb-3 border border-[#232733]">
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

                <div className="space-y-1 font-mono text-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#F4F5F7] font-semibold truncate">{fb.client}</span>
                    <span className="text-[#F59E0B] font-bold">{fb.rating}</span>
                  </div>
                  <div className="text-[#525866] truncate">{fb.project}</div>
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
            className="relative max-w-4xl w-full bg-[#0E1015] border border-[#232733] rounded-lg p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#8A909E]">
              <span className="text-[#F59E0B]">VERIFIED PLATFORM FEEDBACK INSPECTOR</span>
              <button
                onClick={() => setSelectedProofImg(null)}
                aria-label="Close review inspector"
                className="p-1 hover:text-[#F4F5F7] border border-[#232733] rounded bg-[#14171E] transition-colors"
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
