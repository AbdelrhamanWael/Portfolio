"use client";
import { motion } from "framer-motion";
import {
  Atom, Database, Palette, CodeSimple,
  GitBranch, Cloud, DevToLogo, Terminal,
  FileCode, SquaresFour, Flask, Globe,
} from "@phosphor-icons/react";

const skillGroups = [
  {
    category: "AI, ML & Data",
    color: "#5BA4C4",
    items: [
      { name: "Python", icon: Terminal },
      { name: "PyTorch", icon: Atom },
      { name: "Machine Learning", icon: CodeSimple },
      { name: "RAG Systems", icon: Database },
      { name: "Agentic AI", icon: Cloud },
      { name: "Web Scraping", icon: FileCode },
    ],
  },
  {
    category: "Full Stack Web",
    color: "#9BA8AB",
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
    color: "#4A5C6A",
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
    color: "#5BA4C4",
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
    <section id="skills" className="py-24 relative overflow-hidden"
      style={{ background: "#11212D" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #253745, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-4 inline-flex">Skills & Technologies</span>
          <h2 className="font-black mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#CCD0CF" }}>
            Tech Stack & <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#9BA8AB" }}>
            As a freelancer, I deliver end-to-end solutions using these modern technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(17,33,45,0.9)",
                border: `1px solid ${group.color}28`,
              }}
              whileHover={{ borderColor: `${group.color}55`, boxShadow: `0 20px 60px ${group.color}15` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full" style={{ background: group.color }} />
                <h3 className="font-bold text-xl" style={{ color: "#F8FAFC" }}>{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map(({ name, icon: Icon }, idx) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-default transition-all duration-200 group"
                    style={{
                      background: `${group.color}0f`,
                      border: `1px solid ${group.color}25`,
                    }}
                    whileHover={{
                      background: `${group.color}20`,
                      borderColor: `${group.color}60`,
                      scale: 1.05,
                      boxShadow: `0 0 12px ${group.color}30`,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={16} weight="duotone" style={{ color: group.color }} />
                    </motion.div>
                    <span className="text-sm font-medium" style={{ color: "#CCD0CF" }}>{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{ background: "rgba(91,164,196,0.08)", border: "1px solid rgba(91,164,196,0.2)" }}>
            <span className="w-2 h-2 rounded-full bg-[#5BA4C4] animate-pulse" />
            <span className="text-sm font-medium" style={{ color: "#9BA8AB" }}>
              Currently building: <span style={{ color: "#5BA4C4" }}>Agentic AI Systems & Scalable Cloud Solutions</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}