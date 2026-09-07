"use client";
import { motion } from "framer-motion";
import {
  Atom, Database, Palette, CodeSimple,
  GitBranch, Cloud, DevToLogo, Terminal,
  FileCode, SquaresFour, Flask, Globe,
  Brain, Robot, Cpu, Wrench,
} from "@phosphor-icons/react";

const skillGroups = [
  {
    category: "AI, ML & Data",
    color: "#38bdf8",
    icon: Brain,
    items: [
      { name: "Python", icon: Terminal },
      { name: "PyTorch", icon: Atom },
      { name: "Machine Learning", icon: Cpu },
      { name: "RAG Systems", icon: Database },
      { name: "Agentic AI", icon: Robot },
      { name: "Web Scraping", icon: FileCode },
    ],
  },
  {
    category: "Full Stack Web",
    color: "#818cf8",
    icon: Globe,
    items: [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "ASP.NET MVC", icon: DevToLogo },
      { name: "Node.js", icon: Terminal },
      { name: "FastAPI", icon: Flask },
    ],
  },
  {
    category: "Databases & APIs",
    color: "#34d399",
    icon: Database,
    items: [
      { name: "SQL Server", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Cloud },
      { name: "SignalR", icon: Globe },
      { name: "JWT Auth", icon: CodeSimple },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#f59e0b",
    icon: Wrench,
    items: [
      { name: "Docker", icon: SquaresFour },
      { name: "CI/CD", icon: GitBranch },
      { name: "Azure AI", icon: Cloud },
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Selenium", icon: FileCode },
      { name: "Automation", icon: Terminal },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: "#080f18" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb2 absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.08), transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent 65%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-5 inline-flex">Skills & Technologies</span>
          <h2 className="font-black mt-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#e8eef4", letterSpacing: "-0.02em" }}>
            Tech Stack & <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: "#8a9bb0" }}>
            As a freelancer, I deliver end-to-end solutions using these modern technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, rgba(14,28,43,0.9) 0%, rgba(8,15,24,0.95) 100%)",
                  border: `1px solid rgba(${hexToRgbStr(group.color)},0.15)`,
                }}
                whileHover={{
                  borderColor: `rgba(${hexToRgbStr(group.color)},0.4)`,
                  boxShadow: `0 20px 60px rgba(${hexToRgbStr(group.color)},0.12)`,
                  y: -4,
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[1px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.color}60, transparent)` }} />

                {/* Ambient background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${group.color}20, transparent 70%)` }} />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(${hexToRgbStr(group.color)},0.12)`, border: `1px solid rgba(${hexToRgbStr(group.color)},0.25)` }}>
                    <GroupIcon size={20} weight="duotone" style={{ color: group.color }} />
                  </div>
                  <h3 className="font-bold text-base leading-tight" style={{ color: "#e8eef4" }}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map(({ name, icon: Icon }, idx) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: gi * 0.08 + idx * 0.04 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-default transition-all duration-200"
                      style={{
                        background: `rgba(${hexToRgbStr(group.color)},0.07)`,
                        border: `1px solid rgba(${hexToRgbStr(group.color)},0.18)`,
                      }}
                      whileHover={{
                        background: `rgba(${hexToRgbStr(group.color)},0.18)`,
                        borderColor: `rgba(${hexToRgbStr(group.color)},0.45)`,
                        scale: 1.05,
                        boxShadow: `0 0 12px rgba(${hexToRgbStr(group.color)},0.2)`,
                      }}
                    >
                      <Icon size={13} weight="duotone" style={{ color: group.color }} />
                      <span className="text-xs font-medium" style={{ color: "#b0bdc9" }}>{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently building banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(56,189,248,0.06)",
              border: "1px solid rgba(56,189,248,0.18)",
              backdropFilter: "blur(12px)",
            }}>
            <span className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }} />
            <span className="text-sm font-medium" style={{ color: "#8a9bb0" }}>
              Currently building:{" "}
              <span style={{ color: "#38bdf8" }}>Agentic AI Systems & Scalable Cloud Solutions</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper: hex to "r,g,b" string for rgba()
function hexToRgbStr(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}