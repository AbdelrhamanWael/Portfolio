"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin, Briefcase, GraduationCap, Download,
  Lightning, Lightbulb, PaintBrush, Code, Star
} from "@phosphor-icons/react";

const features = [
  { icon: Lightning, title: "Fast & Optimized", desc: "High-performance apps with optimized code and best practices.", color: "#F59E0B" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex challenges into simple, elegant solutions.", color: "#5BA4C4" },
  { icon: PaintBrush, title: "Pixel Perfect", desc: "Obsessive attention to detail for flawless UI implementation.", color: "#9BA8AB" },
  { icon: Code, title: "Modern Stack", desc: "Leveraging the latest tools for scalable, maintainable applications.", color: "#4A5C6A" },
];

const info = [
  { icon: MapPin, text: "Cairo, Egypt" },
  { icon: Briefcase, text: "Freelance Software Engineer" },
  { icon: GraduationCap, text: "CS Student @ ECU" },
  { icon: Star, text: "Freelancer (10+ Projects)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: "#11212D" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #253745, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
              {/* Soft Cyan Glow Behind */}
              <div className="absolute -inset-10 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(91,164,196,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                <Image 
                  src="/1748943023056.jpeg" 
                  alt="Abdelrhaman Wael" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-5 py-2.5 rounded-full shadow-2xl z-10"
                style={{ background: "#06141B", border: "1px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-sm font-bold tracking-wide" style={{ color: "#F8FAFC" }}>Available for hire</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-tag mb-5 inline-flex">About Me</span>
            <h2 className="font-black mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#CCD0CF" }}>
              Passionate about building{" "}
              <span className="gradient-text">intelligent systems</span>
            </h2>

            <p className="text-lg leading-relaxed mb-4" style={{ color: "#9BA8AB" }}>
              I&apos;m <strong style={{ color: "#CCD0CF" }}>Abdelrhaman Wael</strong>, a passionate Cloud & AI Engineer
              pursuing my Computer Science degree at Egyptian Chinese University.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#9BA8AB" }}>
              As an <strong style={{ color: "#CCD0CF" }}>independent freelance developer</strong>, I deliver complete end-to-end solutions. Whether you need a robust web application with React, Next.js, and .NET MVC, a sophisticated AI Agent, a custom RAG system, or automated data extraction workflows, I have the expertise to turn your vision into a production-ready reality.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#9BA8AB" }}>
              When I&apos;m not coding, I explore generative AI models, experiment with new cloud infrastructures, and share knowledge with the developer community.
            </p>

            {/* Info grid */}
            <div className="flex flex-wrap gap-4 mb-8">
              {info.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm"
                  style={{ color: "#9BA8AB" }}>
                  <Icon size={18} style={{ color: "#5BA4C4" }} weight="duotone" />
                  {text}
                </div>
              ))}
            </div>

            <motion.a
              href="https://docs.google.com/document/d/1GHfujMGx0bQU9-wT63GutRliuKTTjNnL/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white"
              style={{ background: "#5BA4C4", color: "#06141B" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(91,164,196,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl card-hover"
              style={{ background: "rgba(17,33,45,0.8)", border: "1px solid rgba(74,92,106,0.3)" }}
              whileHover={{ borderColor: `${color}40` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 skill-icon-wrap"
                style={{ background: `${color}18`, color }}>
                <Icon size={24} weight="duotone" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#CCD0CF" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9BA8AB" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}