"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft, GithubLogo, ArrowSquareOut,
  CheckCircle, Clock, User,
  Images, X, RocketLaunch, Code
} from "@phosphor-icons/react";

export default function ProjectDetailClient({ project }) {
  const [activeImage, setActiveImage] = useState(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the hero image
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const desc = Array.isArray(project.longDescription)
    ? project.longDescription
    : typeof project.longDescription === "string"
      ? project.longDescription.split(/\n\n+/).filter(Boolean)
      : [project.longDescription];

  const galleryImages = project.gallery?.filter(img => img !== project.image) || [];

  return (
    <div style={{ background: "#050505", minHeight: "100vh", color: "#F8FAFC" }}>
      {/* Header & Main Image Showcase */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Blurred Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div style={{ opacity }} className="w-full h-full">
            <Image src={project.image} alt="bg" fill className="object-cover blur-[100px] opacity-30 scale-110" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>

        {/* Navigation */}
        <div className="absolute top-6 left-6 z-40">
          <Link href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-flex px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg"
              style={{ background: "rgba(91,164,196,0.15)", color: "#5BA4C4", border: "1px solid rgba(91,164,196,0.3)" }}>
              {project.category}
            </span>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight text-white drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed drop-shadow-md">
              {project.description}
            </p>
          </motion.div>

          {/* Featured Image Container */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-6xl mx-auto"
            style={{ y }}
          >
            <div className="relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/10 group">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                priority
              />
              {/* Subtle inner glow */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-[2rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        
        {/* Project Meta Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 py-8 border-y border-white/10"
        >
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Role</p>
            <p className="flex items-center gap-2 font-medium text-slate-200">
              <User size={16} weight="duotone" className="text-purple-400" /> {project.role}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Timeline</p>
            <p className="flex items-center gap-2 font-medium text-slate-200">
              <Clock size={16} weight="duotone" className="text-cyan-400" /> {project.duration}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: About */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code size={28} className="text-purple-500" weight="duotone" /> 
                About The Project
              </h2>
              <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
                {desc.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Features */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <RocketLaunch size={28} className="text-cyan-500" weight="duotone" />
                Key Features
              </h3>
              <ul className="space-y-6">
                {project.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <CheckCircle size={14} className="text-purple-400" weight="bold" />
                    </div>
                    <span className="text-slate-300 leading-snug">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Gallery */}
        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Images size={28} className="text-cyan-500" weight="duotone" />
              Project Gallery
            </h2>
            <div className="columns-1 sm:columns-2 gap-6 space-y-6">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveImage(img)}
                >
                  <Image 
                    src={img} 
                    alt={`Gallery image ${i + 1}`} 
                    width={800} 
                    height={600} 
                    className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Glassmorphic Floating Action Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2 rounded-full"
        style={{ 
          background: "rgba(15, 15, 20, 0.7)", 
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
        }}
      >
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            <ArrowSquareOut size={18} weight="bold" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <GithubLogo size={18} weight="bold" />
            Source Code
          </a>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            style={{ background: "rgba(5,5,5,0.95)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              aria-label="Close image"
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full flex items-center justify-center z-50 bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setActiveImage(null)}>
              <X size={24} />
            </button>
            <motion.img
              src={activeImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}