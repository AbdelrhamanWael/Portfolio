"use client";
import { useState } from "react";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  PaperPlaneTilt,
  CheckCircle,
  WarningCircle,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Terminal,
} from "@phosphor-icons/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "AI Agents & RAG Systems",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Required fields missing. Please complete all parameters.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.scope, // pass selected scope
          message: `[System Scope: ${form.scope}]\n\n${form.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Transmission failed.");
      }

      setStatus({
        type: "success",
        message: "Inquiry successfully dispatched. I will review and respond within 4 hours.",
      });
      setForm({ name: "", email: "", scope: "AI Agents & RAG Systems", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Failed to transmit message. Please contact via direct email.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="channel" className="py-24 bg-[#090A0C] border-b border-[#232733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Movement Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-14 border-b border-[#232733]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B] mb-2">
              <span>{"// 04. DIRECT CHANNEL"}</span>
              <span className="text-[#525866]">/</span>
              <span className="text-[#8A909E]">CONTRACTS & CONSULTATION</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F5F7] tracking-tight">
              Initiate Project Brief
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A909E] max-w-md">
            Direct communication channel for freelance engineering contracts, architectural reviews, and production systems development.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Coordinates & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Response Time SLA Card */}
            <div className="studio-surface rounded-lg p-6 border border-[#232733] corner-marked space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#232733]">
                <div className="flex items-center gap-2 text-[#F4F5F7] font-semibold">
                  <Clock size={16} className="text-[#F59E0B]" />
                  <span>RESPONSE GUARANTEE</span>
                </div>
                <span className="text-[#10B981] font-bold">&lt; 4 HOURS</span>
              </div>
              <p className="text-[#8A909E] font-sans text-xs leading-relaxed">
                Direct monitoring of client briefs across UTC+2. Detailed proposal estimates, architecture scope breakdowns, and technical timelines provided promptly.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[#525866] text-[11px]">
                <ShieldCheck size={14} className="text-[#F59E0B]" />
                <span>CONFIDENTIALITY ENSURED // NDA READY</span>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-2.5 font-mono text-xs">
              <span className="text-[#525866] text-[11px] uppercase tracking-wider block mb-1">
                VERIFIED DIRECT CHANNELS
              </span>

              <a
                href="mailto:abdelrhamanwael8@gmail.com"
                className="studio-surface p-4 rounded border border-[#232733] hover:border-[#F59E0B]/50 transition-colors flex items-center justify-between text-[#F4F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <EnvelopeSimple size={16} className="text-[#F59E0B]" />
                  <div>
                    <div className="text-[10px] text-[#525866]">PRIMARY EMAIL</div>
                    <div className="font-semibold text-xs group-hover:text-[#F59E0B] transition-colors">
                      abdelrhamanwael8@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#525866] group-hover:text-[#F59E0B]" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366"
                target="_blank"
                rel="noopener noreferrer"
                className="studio-surface p-4 rounded border border-[#232733] hover:border-[#0A66C2]/60 transition-colors flex items-center justify-between text-[#F4F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinLogo size={16} className="text-[#0A66C2]" />
                  <div>
                    <div className="text-[10px] text-[#525866]">LINKEDIN NETWORK</div>
                    <div className="font-semibold text-xs group-hover:text-[#F4F5F7] transition-colors">
                      Abdelrhaman Wael Mohammed
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#525866]" />
              </a>

              <a
                href="https://github.com/AbdelrhamanWael"
                target="_blank"
                rel="noopener noreferrer"
                className="studio-surface p-4 rounded border border-[#232733] hover:border-white/40 transition-colors flex items-center justify-between text-[#F4F5F7] group"
              >
                <div className="flex items-center gap-3">
                  <GithubLogo size={16} className="text-white" />
                  <div>
                    <div className="text-[10px] text-[#525866]">GITHUB PROFILE</div>
                    <div className="font-semibold text-xs group-hover:text-[#F4F5F7] transition-colors">
                      @AbdelrhamanWael
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#525866]" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal-Grade Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="studio-surface rounded-lg p-6 sm:p-8 border border-[#232733]">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#232733] font-mono text-xs">
                <Terminal size={14} className="text-[#F59E0B]" />
                <span className="text-[#F4F5F7] font-semibold">PROJECT SPECIFICATION FORM</span>
                <span className="text-[#525866]">|</span>
                <span className="text-[#8A909E]">TRANSMISSION PROTOCOL</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[#8A909E] mb-1.5 uppercase text-[10px] tracking-wider">
                      Client / Organization Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan / Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090A0C] border border-[#232733] focus:border-[#F59E0B] focus:outline-none text-[#F4F5F7] placeholder-[#525866] transition-colors"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[#8A909E] mb-1.5 uppercase text-[10px] tracking-wider">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@acme.com"
                      className="w-full px-3.5 py-2.5 rounded bg-[#090A0C] border border-[#232733] focus:border-[#F59E0B] focus:outline-none text-[#F4F5F7] placeholder-[#525866] transition-colors"
                    />
                  </div>
                </div>

                {/* System Scope */}
                <div>
                  <label className="block text-[#8A909E] mb-1.5 uppercase text-[10px] tracking-wider">
                    Project Architecture Scope
                  </label>
                  <select
                    name="scope"
                    value={form.scope}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded bg-[#090A0C] border border-[#232733] focus:border-[#F59E0B] focus:outline-none text-[#F4F5F7] transition-colors"
                  >
                    <option value="AI Agents & RAG Systems">AI Agents & RAG Systems</option>
                    <option value="Full-Stack Web Platform (Next.js / .NET)">
                      Full-Stack Web Platform (Next.js / .NET)
                    </option>
                    <option value="FastAPI Backend & AI Model Integration">
                      FastAPI Backend & AI Model Integration
                    </option>
                    <option value="Custom Headless CMS & Enterprise Architecture">
                      Custom Headless CMS & Enterprise Architecture
                    </option>
                    <option value="Other Technical Advisory / Consultation">
                      Other Technical Advisory / Consultation
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-[#8A909E] mb-1.5 uppercase text-[10px] tracking-wider">
                    Technical Requirements & Timeline *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the business problem, target deliverables, desired stack preferences, and target deployment schedule..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#090A0C] border border-[#232733] focus:border-[#F59E0B] focus:outline-none text-[#F4F5F7] placeholder-[#525866] transition-colors leading-relaxed"
                  />
                </div>

                {/* Status Feedback */}
                {status.message && (
                  <div
                    className={`p-3.5 rounded border text-xs flex items-center gap-2.5 ${
                      status.type === "success"
                        ? "bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <WarningCircle size={16} />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-signal py-3.5 text-xs font-mono flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <PaperPlaneTilt size={14} weight="bold" />
                  <span>
                    {sending ? "TRANSMITTING SPECIFICATION..." : "TRANSMIT INQUIRY BRIEF"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}