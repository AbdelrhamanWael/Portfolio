"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const roles = ["Freelance Software Engineer", "Cloud & AI Engineer", "Full Stack Developer", "AI Agent Developer", "Backend Engineer", "Generative AI Enthusiast"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed === current) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % roles.length);
      }, 50);
      return () => clearTimeout(t);
    }
    const speed = deleting ? 45 : 95;
    const t = setTimeout(() => {
      setDisplayed((p) => deleting ? current.slice(0, p.length - 1) : current.slice(0, p.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  // 3D tilt
  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const containerVars = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "#020408" }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb1 absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 65%)" }} />
        <div className="orb2 absolute bottom-1/4 right-1/6 w-[700px] h-[700px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 65%)" }} />
        <div className="orb3 absolute top-3/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-6"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 65%)" }} />
        {/* Top line accent */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 30%, rgba(129,140,248,0.5) 70%, transparent)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Text */}
          <motion.div variants={containerVars} initial="hidden" animate="visible" className="order-2 lg:order-1">
            <motion.div variants={itemVars} className="mb-6">
              <span className="section-tag">
                <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
                Available for Freelance
              </span>
            </motion.div>

            <motion.p variants={itemVars} className="text-lg font-medium mb-2" style={{ color: "#9BA8AB" }}>
              Hi there, I&apos;m
            </motion.p>

            <motion.h1 variants={itemVars} className="font-black leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#e8eef4", letterSpacing: "-0.02em" }}>
              Abdelrhaman
              <br />
              <span className="gradient-text">Wael</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVars} className="flex items-center gap-2 mb-6 h-10">
              <span className="text-2xl font-bold" style={{ color: "#38bdf8", textShadow: "0 0 20px rgba(56,189,248,0.4)" }}>{displayed}</span>
              <motion.span className="w-0.5 h-7 rounded-sm"
                style={{ background: "#38bdf8" }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }} />
            </motion.div>

            <motion.p variants={itemVars} className="text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "#9BA8AB" }}>
              Building intelligent AI agents, scalable cloud architectures, and modern full-stack web applications for clients worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVars} className="flex flex-wrap gap-4 mb-8">
              <motion.button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3.5 rounded-xl font-bold transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #38bdf8, #0ea5e9)", color: "#020408", boxShadow: "0 4px 20px rgba(56,189,248,0.3)" }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(56,189,248,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
                style={{ color: "#e8eef4", border: "1.5px solid rgba(56,189,248,0.3)", background: "transparent", backdropFilter: "blur(8px)" }}
                whileHover={{ scale: 1.05, borderColor: "#38bdf8", color: "#38bdf8", background: "rgba(56,189,248,0.08)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVars} className="flex items-center gap-4">
              {[
                { icon: GithubLogo, href: "https://github.com/AbdelrhamanWael", label: "GitHub" },
                { icon: LinkedinLogo, href: "https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366", label: "LinkedIn" },
                { icon: EnvelopeSimple, href: "mailto:abdelrhamanwael8@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(14,28,43,0.8)", border: "1px solid rgba(56,189,248,0.15)", color: "#8a9bb0" }}
                  whileHover={{ scale: 1.15, background: "rgba(56,189,248,0.1)", borderColor: "rgba(56,189,248,0.5)", color: "#38bdf8", boxShadow: "0 0 16px rgba(56,189,248,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} weight="regular" />
                </motion.a>
              ))}
              <span className="text-sm ml-2" style={{ color: "#1e3448" }}>— Connect with me</span>
            </motion.div>

            {/* ── Freelance Platforms ────────────────────────────────────── */}
            <motion.div variants={itemVars} className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4A5C6A" }}>
                Available on
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  {
                    label: "Upwork",
                    href: "https://www.upwork.com/freelancers/~018c6bd3657b16a0e7",
                    color: "#14a800",
                    glow: "rgba(20,168,0,0.25)",
                    borderActive: "rgba(20,168,0,0.5)",
                    icon: (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.001-2.439-5.449-5.439-5.449z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Fiverr",
                    href: "https://www.fiverr.com/s/qbDyk6X",
                    color: "#1dbf73",
                    glow: "rgba(29,191,115,0.25)",
                    borderActive: "rgba(29,191,115,0.5)",
                    icon: (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.009c-.266 0-.376.199-.376.421v4.579h-1.595v-5.001h-.77v-1.422h.77v-.133c0-1.133.596-1.8 1.8-1.8h1.18v1.421h-1.18c-.266 0-.376.2-.376.421v.089h1.556v1.425zm-4.283 4.745c0 1.134-.596 1.8-1.8 1.8h-1.181V16.01h1.181c.266 0 .376-.199.376-.421v-.047h-1.557v-1.421h1.557v-.089c0-1.133-.596-1.8-1.8-1.8H12.5v6.42h-1.594v-5.001h-.77v-1.422h.77v-.133c0-1.133.596-1.8 1.8-1.8h1.801c1.204 0 1.8.667 1.8 1.8v.133h.77v1.422h-.77v3.579c0 1.133-.596 1.8-1.8 1.8h-1.181v-1.421h1.181c.266 0 .376-.2.376-.421v-.379zm-6.826-4.745H9.89c-.266 0-.376.199-.376.421v4.579H7.919v-5.001h-.77v-1.422h.77v-.133c0-1.133.596-1.8 1.8-1.8h1.18v1.421h-1.18c-.266 0-.376.2-.376.421v.089h1.557v1.425zm-4.283.978v3.601H5.022v-3.601c0-.222-.11-.421-.376-.421H3.465v-1.421h1.181c1.204 0 1.8.667 1.8 1.8v.042h.014zM3.465 9.44a.995.995 0 1 1 0 1.99.995.995 0 0 1 0-1.99z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "خمسات",
                    href: "https://khamsat.com/user/abdelrhamanwael01016",
                    color: "#f97316",
                    glow: "rgba(249,115,22,0.25)",
                    borderActive: "rgba(249,115,22,0.5)",
                    icon: (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.5h-1.5v-5.25l-2.25 1.5-.75-1.125 3-2H12.75v6.875z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "مستقل",
                    href: "https://mostaql.com/u/abdelrhamanwael",
                    color: "#6366f1",
                    glow: "rgba(99,102,241,0.25)",
                    borderActive: "rgba(99,102,241,0.5)",
                    icon: (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    ),
                  },
                ].map(({ label, href, color, glow, borderActive, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hire me on ${label}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold relative overflow-hidden"
                    style={{
                      background: "rgba(14,28,43,0.85)",
                      border: `1px solid rgba(255,255,255,0.08)`,
                      color: "#8a9bb0",
                      backdropFilter: "blur(12px)",
                    }}
                    whileHover={{
                      scale: 1.06,
                      color: color,
                      borderColor: borderActive,
                      boxShadow: `0 0 20px ${glow}, 0 4px 16px rgba(0,0,0,0.4)`,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.94 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    {/* Shimmer sweep on hover */}
                    <motion.span
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(105deg, transparent 40%, ${color}18 50%, transparent 60%)`,
                        backgroundSize: "200% 100%",
                      }}
                      whileHover={{
                        backgroundPosition: ["200% 0", "-200% 0"],
                        transition: { duration: 0.6, ease: "linear" },
                      }}
                    />
                    <span style={{ color: "inherit", flexShrink: 0 }}>{icon}</span>
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: 3D Avatar Card */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer w-72 h-72 sm:w-80 sm:h-80 mx-auto"
              style={{
                transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: "transform 0.15s ease",
              }}
            >
              {/* Soft Cyan Glow Behind */}
              <div className="absolute -inset-10 rounded-full blur-3xl opacity-25"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.3), transparent 70%)" }} />
              
              {/* Iris shimmer ring */}
              <div className="absolute -inset-1 rounded-full opacity-30"
                style={{ background: "conic-gradient(from 0deg, #38bdf8, #818cf8, #38bdf8)", filter: "blur(8px)" }} />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(56,189,248,0.35)", boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(129,140,248,0.1)" }}>
                <Image 
                  src="/1748943023056.jpeg" 
                  alt="Abdelrhaman Wael - Freelance Software & AI Engineer" 
                  fill 
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority 
                />
              </div>

              {/* Status Badge */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-5 py-2.5 rounded-full shadow-2xl z-10"
                style={{ background: "rgba(2,4,8,0.95)", border: "1px solid rgba(56,189,248,0.2)", whiteSpace: "nowrap", backdropFilter: "blur(20px)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 10px #22c55e" }} />
                <span className="text-sm font-bold tracking-wide" style={{ color: "#e8eef4" }}>Available for hire</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#4A5C6A" }}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={20} style={{ color: "#5BA4C4" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}