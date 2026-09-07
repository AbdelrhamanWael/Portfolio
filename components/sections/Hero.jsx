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
      setDeleting(false);
      setRoleIdx((p) => (p + 1) % roles.length);
      return;
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
                  alt="Abdelrhaman Wael" 
                  fill 
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