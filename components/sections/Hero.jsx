"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Database,
  Play,
  Terminal,
  ShieldCheck,
  Code,
  CheckCircle,
} from "@phosphor-icons/react";

const flagshipSystems = [
  {
    id: "dar-emaar",
    name: "Dar Emaar Platform",
    category: "Full-Stack Enterprise CMS",
    pipeline: [
      { step: "Client Upload", spec: "15MB RAW Mobile Photo", status: "input" },
      { step: "Canvas Engine", spec: "Sub-500KB WebP Transform", status: "optimized" },
      { step: "RLS Auth Gate", spec: "26 Granular Policies", status: "secure" },
      { step: "PostgreSQL 17", spec: "Supabase me-central-1", status: "persisted" },
    ],
    metric: "< 450ms Compression",
    statusText: "PRODUCTION ONLINE",
    codeSample: `# FastAPI Ingestion & Dynamic Theming Engine
from fastapi import FastAPI, UploadFile, Depends
from supabase import create_client

app = FastAPI(title="Dar Emaar API", version="2.4.0")

@app.post("/api/v1/projects/publish")
async def publish_architectural_project(
    payload: ProjectSchema,
    auth_user = Depends(verify_jwt_rls)
):
    """Zero-trust write guarded by 26 PostgreSQL RLS policies"""
    result = await db.table("projects").insert(payload.dict()).execute()
    return {"status": "persisted", "id": result.data[0]["id"]}`,
  },
  {
    id: "converso-ai",
    name: "Converso Voice LMS",
    category: "Autonomous Agent SaaS",
    pipeline: [
      { step: "Audio Stream", spec: "Vapi AI WebRTC Input", status: "input" },
      { step: "FastAPI Agent Router", spec: "Intent & RAG Pipeline", status: "optimized" },
      { step: "Session History", spec: "Clerk + Stripe Billing Gate", status: "secure" },
      { step: "Real-time Synthesizer", spec: "Low-latency Voice Response", status: "persisted" },
    ],
    metric: "sub-120ms Voice Latency",
    statusText: "DEPLOYED / ACTIVE",
    codeSample: `# FastAPI Streaming Agent Pipeline
from fastapi import FastAPI, WebSocket
from langchain_core.messages import HumanMessage
from vapi_python import VapiClient

@app.websocket("/ws/agent/voice")
async def voice_agent_stream(websocket: WebSocket):
    await websocket.accept()
    async for audio_chunk in websocket.iter_bytes():
        # Fast intent classification & vector RAG lookup
        response_stream = await agent_executor.astream({"audio": audio_chunk})
        await websocket.send_bytes(response_stream)`,
  },
  {
    id: "rag-dashboard",
    name: "Customer Support RAG",
    category: "MLOps Telemetry Dashboard",
    pipeline: [
      { step: "Support Stream", spec: "Inbound User Query", status: "input" },
      { step: "Vector Indexer", spec: "Cosine Top-K Embeddings", status: "optimized" },
      { step: "RAGAS Evaluation", spec: "Faithfulness & Relevance Check", status: "secure" },
      { step: "Model Telemetry", spec: "Recharts Live Latency Feed", status: "persisted" },
    ],
    metric: "0.94 Faithfulness Score",
    statusText: "MLOPS RUNNING",
    codeSample: `# RAG Query Pipeline with RAGAS Guardrails
from fastapi import FastAPI
from langchain_community.vectorstores import Pinecone
from ragas.metrics import faithfulness

@app.post("/api/v1/rag/query")
async def evaluate_rag_inference(query: str):
    context = await vector_store.asimilarity_search(query, k=5)
    generation = await llm.ainvoke(prompt.format(context=context, query=query))
    score = await faithfulness.ascore({"response": generation, "context": context})
    return {"response": generation, "faithfulness": score}`,
  },
];

export default function Hero() {
  const [selectedSystemIdx, setSelectedSystemIdx] = useState(0);
  const [consoleView, setConsoleView] = useState("pipeline"); // "pipeline" | "code"
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const currentSystem = flagshipSystems[selectedSystemIdx];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    const steps = [0, 1, 2, 3];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setActiveStep(-1);
          }, 1200);
        }
      }, (idx + 1) * 450);
    });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="systems"
      className="relative min-h-screen pt-28 pb-20 flex items-center blueprint-grid ambient-spotlight border-b border-[#232733]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Top Movement Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#8A909E] mb-8 pb-3 border-b border-[#232733]/60">
          <span className="text-[#F59E0B] font-semibold">{"// 01. SYSTEMS WORKBENCH"}</span>
          <span className="text-[#525866]">/</span>
          <span>AI SYSTEMS & FULL-STACK ARCHITECTURE</span>
          <span className="hidden sm:inline-block text-[#525866]">/</span>
          <span className="hidden sm:inline-block text-[#8A909E]">CAIRO, EGYPT</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Profile Card + Authority Thesis (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Integrated Technical Profile Card */}
            <div className="studio-surface rounded-lg p-4 border border-[#232733] mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative w-16 h-16 rounded border border-[#F59E0B]/40 overflow-hidden shrink-0 bg-[#14171E]">
                <Image
                  src="/1748943023056.jpeg"
                  alt="Abdelrhaman Wael"
                  fill
                  className="object-cover"
                  sizes="64px"
                  priority
                />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#F59E0B]" />
              </div>

              <div className="font-mono text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#F4F5F7] font-bold text-sm">Abdelrhaman Wael</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[#10B981] text-[11px]">ACTIVE FOR CONTRACTS</span>
                </div>
                <div className="text-[11px] text-[#8A909E]">
                  AI Systems & Full-Stack Engineer <span className="text-[#525866]">•</span> CS @ ECU
                </div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {["FastAPI", ".NET Core", "Agentic RAG", "Next.js 16"].map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-[#090A0C] border border-[#232733] text-[10px] text-[#F59E0B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Authoritative Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#F4F5F7] tracking-tight leading-[1.12] mb-6">
              Engineering autonomous AI agents, high-performance backends, and full-stack software.
            </h1>

            {/* Clear, Non-cliché Technical Narrative */}
            <p className="text-base sm:text-lg text-[#8A909E] leading-relaxed mb-8 max-w-2xl font-sans">
              I am an independent <span className="text-[#F4F5F7] font-semibold">AI Systems & Full-Stack Engineer</span>. I specialize in developing intelligent multi-agent workflows, custom vector RAG pipelines, and high-performance backends using <span className="text-[#F59E0B] font-mono">FastAPI</span> and <span className="text-[#F59E0B] font-mono">ASP.NET Core</span>, unified with modern Next.js client architectures.
            </p>

            {/* Direct Action Triggers */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollTo("dossier")}
                className="btn-signal flex items-center gap-2"
              >
                <span>EXPLORE ENGINEERING DOSSIER</span>
                <ArrowDown size={14} weight="bold" />
              </button>

              <button
                onClick={() => scrollTo("channel")}
                className="btn-ghost-studio flex items-center gap-2"
              >
                <span>INITIATE CONTRACT BRIEF</span>
                <ArrowUpRight size={14} weight="bold" />
              </button>
            </div>

            {/* Verified Freelance & Code Profiles */}
            <div className="pt-6 border-t border-[#232733]">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-[#525866] mb-3">
                VERIFIED PLATFORMS & CHANNELS
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  {
                    name: "Upwork",
                    href: "https://www.upwork.com/freelancers/~018c6bd3657b16a0e7",
                    label: "Upwork Profile",
                    accent: "#14A800",
                    badge: "Verified",
                  },
                  {
                    name: "Khamsat",
                    href: "https://khamsat.com/user/abdelrhamanwael01016",
                    label: "Khamsat Profile",
                    accent: "#FF6B35",
                    badge: "5.0 ★ Rated",
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/AbdelrhamanWael",
                    label: "GitHub Repositories",
                    accent: "#F4F5F7",
                    badge: "Source Code",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366",
                    label: "LinkedIn Network",
                    accent: "#0A66C2",
                    badge: "Professional",
                  },
                ].map((plat) => (
                  <a
                    key={plat.name}
                    href={plat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#0E1015] hover:bg-[#14171E] border border-[#232733] hover:border-[#8A909E]/40 rounded transition-colors text-xs font-mono text-[#F4F5F7]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: plat.accent }}
                    />
                    <span>{plat.name}</span>
                    <span className="text-[10px] text-[#8A909E]">{plat.badge}</span>
                    <ArrowUpRight size={11} className="text-[#525866]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Systems Console (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="studio-surface rounded-lg overflow-hidden border border-[#232733] shadow-2xl corner-marked">
              {/* Console Chrome Header */}
              <div className="bg-[#14171E] px-4 py-3 border-b border-[#232733] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#F59E0B]" />
                  <span className="text-[#F4F5F7] font-semibold">SYSTEM TELEMETRY</span>
                </div>
                {/* View Switcher: Pipeline vs Code */}
                <div className="flex items-center gap-1 bg-[#090A0C] p-0.5 rounded border border-[#232733]">
                  <button
                    onClick={() => setConsoleView("pipeline")}
                    className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                      consoleView === "pipeline"
                        ? "bg-[#14171E] text-[#F59E0B] font-semibold"
                        : "text-[#8A909E] hover:text-[#F4F5F7]"
                    }`}
                  >
                    PIPELINE
                  </button>
                  <button
                    onClick={() => setConsoleView("code")}
                    className={`px-2 py-0.5 rounded text-[10px] transition-colors flex items-center gap-1 ${
                      consoleView === "code"
                        ? "bg-[#14171E] text-[#F59E0B] font-semibold"
                        : "text-[#8A909E] hover:text-[#F4F5F7]"
                    }`}
                  >
                    <Code size={11} />
                    <span>FASTAPI</span>
                  </button>
                </div>
              </div>

              {/* System Selector Switchboard */}
              <div className="p-3 bg-[#090A0C] border-b border-[#232733] grid grid-cols-3 gap-1.5 font-mono text-[11px]">
                {flagshipSystems.map((sys, idx) => (
                  <button
                    key={sys.id}
                    onClick={() => {
                      setSelectedSystemIdx(idx);
                      setActiveStep(-1);
                    }}
                    className={`p-2 rounded text-left transition-colors duration-150 ${
                      selectedSystemIdx === idx
                        ? "bg-[#14171E] text-[#F59E0B] border border-[#F59E0B]/30"
                        : "text-[#8A909E] hover:text-[#F4F5F7] hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="truncate font-semibold">{sys.name}</div>
                    <div className="text-[9px] text-[#525866] truncate">{sys.category}</div>
                  </button>
                ))}
              </div>

              {/* Console Body */}
              {consoleView === "pipeline" ? (
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8A909E]">ARCHITECTURE PIPELINE:</span>
                    <span className="text-[#F59E0B] font-semibold">{currentSystem.metric}</span>
                  </div>

                  {/* Pipeline Steps Execution Flow */}
                  <div className="space-y-2">
                    {currentSystem.pipeline.map((step, idx) => {
                      const isCurrent = activeStep === idx;
                      const isCompleted = activeStep > idx;

                      return (
                        <div
                          key={step.step}
                          className={`p-3 rounded border font-mono text-xs flex items-center justify-between transition-all duration-200 ${
                            isCurrent
                              ? "bg-[#F59E0B]/10 border-[#F59E0B] text-[#F4F5F7]"
                              : isCompleted
                              ? "bg-[#10B981]/5 border-[#10B981]/40 text-[#D1D5DB]"
                              : "bg-[#090A0C] border-[#232733] text-[#8A909E]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                                isCurrent
                                  ? "bg-[#F59E0B] text-[#090A0C]"
                                  : isCompleted
                                  ? "bg-[#10B981] text-[#090A0C]"
                                  : "bg-[#14171E] text-[#8A909E]"
                              }`}
                            >
                              {isCompleted ? "✓" : `0${idx + 1}`}
                            </span>
                            <div>
                              <div className="font-semibold text-[#F4F5F7]">{step.step}</div>
                              <div className="text-[10px] text-[#8A909E]">{step.spec}</div>
                            </div>
                          </div>

                          <span
                            className={`text-[10px] px-2 py-0.5 rounded uppercase font-semibold ${
                              isCurrent
                                ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                                : isCompleted
                                ? "bg-[#10B981]/20 text-[#10B981]"
                                : "bg-[#14171E] text-[#525866]"
                            }`}
                          >
                            {isCurrent ? "RUNNING" : isCompleted ? "VERIFIED" : "READY"}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Simulation Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSimulate}
                      disabled={isSimulating}
                      className="w-full py-2.5 px-4 rounded bg-[#14171E] hover:bg-[#1B1F28] border border-[#232733] hover:border-[#F59E0B]/50 text-xs font-mono text-[#F4F5F7] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Play size={12} weight="fill" className="text-[#F59E0B]" />
                      <span>
                        {isSimulating ? "EXECUTING PIPELINE TRACE..." : "SIMULATE PIPELINE EXECUTION"}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Code View: FastAPI Inference Server Implementation */
                <div className="p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-[#8A909E] pb-2 border-b border-[#232733]">
                    <span>TARGET: FASTAPI INFERENCE SERVER</span>
                    <span className="text-[#F59E0B]">PYTHON 3.12</span>
                  </div>
                  <pre className="p-3 bg-[#050608] border border-[#232733] rounded text-[11px] leading-relaxed text-[#D1D5DB] overflow-x-auto">
                    <code>{currentSystem.codeSample}</code>
                  </pre>
                  <div className="text-[10px] text-[#525866]">
                    Engineered for asynchronous concurrency with full RAG vector indexing support.
                  </div>
                </div>
              )}

              {/* Console Footer Telemetry Details */}
              <div className="px-5 py-3 bg-[#0A0C10] border-t border-[#232733] flex items-center justify-between font-mono text-[11px] text-[#525866]">
                <span>RUNTIME: FASTAPI + NEXT.JS 16</span>
                <span className="text-[#8A909E]">{currentSystem.statusText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}