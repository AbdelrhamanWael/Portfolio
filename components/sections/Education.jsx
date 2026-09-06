"use client";
import { motion } from "framer-motion";
import { GraduationCap, Certificate, BookOpen, RocketLaunch, Sparkle } from "@phosphor-icons/react";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Egyptian Chinese University",
    location: "Cairo, Egypt",
    period: "2023 – 2027",
    description: "Pursuing a comprehensive Computer Science degree with focus on software engineering, web development, and modern programming paradigms.",
    achievements: [
      "Specializing in Full Stack Web Development & AI Engineering",
      "Active member of the Software Development Club",
      "Delivering production-ready freelance projects using React, .NET, and Agentic AI workflows",
    ],
  },
];

const certifications = [
  {
    name: "Full Stack .NET Web Development",
    issuer: "Digital Egypt Pioneers Program – MCIT",
    year: "2025",
  },
  {
    name: "Web Development Internship",
    issuer: "DevWave",
    year: "2024",
  },
  {
    name: "React Development",
    issuer: "Self-Learning & Projects",
    year: "2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden"
      style={{ background: "#06141B" }}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            style={{ background: "rgba(91,164,196,0.15)", color: "#5BA4C4", border: "1px solid rgba(91,164,196,0.3)" }}>
            <GraduationCap size={18} weight="bold" />
            Education & Certifications
          </span>
          <h2 className="font-black" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F8FAFC", lineHeight: 1.1 }}>
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4C4] to-[#7C3AED]">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Education Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-2xl mb-8 flex items-center gap-3 text-white">
              <BookOpen size={28} className="text-[#5BA4C4]" weight="duotone" />
              University Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="relative p-8 sm:p-10 rounded-3xl overflow-hidden group"
                style={{ 
                  background: "rgba(17,33,45,0.6)", 
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(91,164,196,0.15)"
                }}
                whileHover={{ 
                  borderColor: "rgba(91,164,196,0.5)", 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(91,164,196,0.1) inset",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow behind card content */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#5BA4C4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-black text-2xl text-white mb-2 leading-tight">{edu.degree}</h4>
                      <p className="font-semibold text-[#5BA4C4] text-lg">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-[#9BA8AB] font-medium bg-[#06141B]/50 px-4 py-2 rounded-xl border border-white/5">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#9BA8AB] text-lg leading-relaxed mb-8">{edu.description}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#4A5C6A]">Key Focus Areas</p>
                    <ul className="space-y-3">
                      {edu.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#CCD0CF]">
                          <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r from-[#5BA4C4] to-[#7C3AED]" />
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications & Focus Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-bold text-2xl mb-8 flex items-center gap-3 text-white">
                <Certificate size={28} className="text-[#7C3AED]" weight="duotone" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-5 p-5 rounded-2xl group cursor-default"
                    style={{ 
                      background: "rgba(17,33,45,0.4)", 
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(124,58,237,0.1)" 
                    }}
                    whileHover={{ 
                      x: 10, 
                      borderColor: "rgba(124,58,237,0.4)", 
                      background: "rgba(17,33,45,0.8)",
                      boxShadow: "0 10px 30px rgba(124,58,237,0.15)"
                    }}
                  >
                    <div className="p-3 rounded-xl flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ background: "rgba(124,58,237,0.15)", color: "#A855F7" }}>
                      <Certificate size={24} weight="duotone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-lg truncate mb-1">{cert.name}</h4>
                      <p className="text-sm text-[#9BA8AB]">{cert.issuer}</p>
                    </div>
                    <span className="text-sm px-4 py-1.5 rounded-full font-bold shadow-inner"
                      style={{ background: "rgba(0,0,0,0.3)", color: "#CCD0CF", border: "1px solid rgba(255,255,255,0.05)" }}>
                      {cert.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Premium "Current Focus" card */}
            <motion.div
              className="mt-auto relative p-8 rounded-3xl overflow-hidden group"
              style={{ 
                background: "linear-gradient(135deg, rgba(91,164,196,0.1) 0%, rgba(124,58,237,0.1) 100%)",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 40px rgba(124,58,237,0.1) inset"
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Animated sparkle */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 text-[#5BA4C4] opacity-50"
              >
                <Sparkle size={32} weight="fill" />
              </motion.div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#5BA4C4] to-[#7C3AED] shadow-lg shadow-[#7C3AED]/30">
                  <RocketLaunch size={20} className="text-white" weight="bold" />
                </div>
                <p className="font-black text-xl text-white tracking-wide">Current Focus</p>
              </div>
              
              <p className="text-lg leading-relaxed text-[#CCD0CF]">
                Pioneering solutions in <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4C4] to-[#A855F7] font-black">Agentic AI Workflows</strong>, <strong className="text-white">RAG Systems</strong>, and <strong className="text-white">Large Language Models (LLMs)</strong> to deliver next-gen freelance projects.
              </p>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}