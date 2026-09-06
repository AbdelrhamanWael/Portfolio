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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "#06141B" }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb1 absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #253745 0%, transparent 70%)" }} />
        <div className="orb2 absolute bottom-1/4 right-1/6 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #5BA4C4 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #4A5C6A 30%, #5BA4C4 70%, transparent)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(91,164,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,164,196,0.07) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Text */}
          <motion.div variants={containerVars} initial="hidden" animate="visible" className="order-2 lg:order-1">
            <motion.div variants={itemVars} className="mb-6">
              <span className="section-tag">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Available for Freelance
              </span>
            </motion.div>

            <motion.p variants={itemVars} className="text-lg font-medium mb-2" style={{ color: "#9BA8AB" }}>
              Hi there, I&apos;m
            </motion.p>

            <motion.h1 variants={itemVars} className="font-black leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "#CCD0CF" }}>
              Abdelrhaman
              <br />
              <span className="gradient-text">Wael</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVars} className="flex items-center gap-2 mb-6 h-10">
              <span className="text-2xl font-bold" style={{ color: "#5BA4C4" }}>{displayed}</span>
              <motion.span className="w-0.5 h-7 rounded-sm"
                style={{ background: "#5BA4C4" }}
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
                className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
                style={{ background: "#5BA4C4", color: "#06141B" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(91,164,196,0.45)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
                style={{ color: "#CCD0CF", border: "1px solid #4A5C6A", background: "transparent" }}
                whileHover={{ scale: 1.05, borderColor: "#5BA4C4", color: "#5BA4C4", background: "rgba(91,164,196,0.08)" }}
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
                  style={{ background: "rgba(37,55,69,0.5)", border: "1px solid rgba(74,92,106,0.5)", color: "#9BA8AB" }}
                  whileHover={{ scale: 1.15, background: "rgba(91,164,196,0.15)", borderColor: "rgba(91,164,196,0.5)", color: "#5BA4C4" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} weight="regular" />
                </motion.a>
              ))}
              <span className="text-sm ml-2" style={{ color: "#4A5C6A" }}>— Connect with me</span>
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
                  priority 
                />
              </div>

              {/* Status Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-5 py-2.5 rounded-full shadow-2xl z-10"
                style={{ background: "#06141B", border: "1px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-sm font-bold tracking-wide" style={{ color: "#F8FAFC" }}>Available for hire</span>
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