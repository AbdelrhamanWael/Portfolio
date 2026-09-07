"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";

const loadingPhrases = [
  "Initializing portfolio...",
  "Crafting experiences...",
  "Loading projects...",
  "Almost there...",
];

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 25 + 15;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => {
          setShow(false);
          onComplete?.();
        }, 180);
      } else {
        setProgress(p);
        setPhraseIdx(Math.floor((p / 100) * (loadingPhrases.length - 1)));
      }
    }, 35);

    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="loading-screen"
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
          style={{ background: "#020408" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Ambient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="orb1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 65%)" }} />
            <div className="orb2 absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 65%)" }} />
            {/* Grid */}
            <div className="absolute inset-0 grid-pattern opacity-40" />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-1"
            >
              <BrandLogo />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex items-end gap-0"
            >
              <span
                className="loading-letter font-black"
                style={{
                  fontSize: "clamp(2.2rem, 7vw, 4rem)",
                  background: "linear-gradient(135deg, #e8eef4 0%, #38bdf8 60%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Abdelrhaman
              </span>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "#38bdf8" }}
            >
              Freelance Software Engineer
            </motion.p>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-72 flex flex-col gap-3"
            >
              {/* Progress bar track */}
              <div className="relative w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(56,189,248,0.1)" }}>
                {/* Glow trail (Composited via scaleX) */}
                <div
                  className="absolute top-0 left-0 h-full w-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                    transform: `scaleX(${Math.min(progress, 100) / 100})`,
                    transformOrigin: "left",
                    transition: "transform 0.1s ease-out",
                    boxShadow: "0 0 12px rgba(56,189,248,0.8)",
                  }}
                />
                {/* Leading dot (Composited via translateX) */}
                <div
                  className="absolute top-1/2 w-2.5 h-2.5 rounded-full"
                  style={{
                    left: 0,
                    transform: `translate(${Math.min(progress, 100) * 2.8}px, -50%)`,
                    background: "#38bdf8",
                    boxShadow: "0 0 8px #38bdf8",
                    transition: "transform 0.1s ease-out",
                  }}
                />
              </div>

              {/* Stats row */}
              <div className="flex justify-between items-center">
                <span
                  className="text-xs font-mono"
                  style={{ color: "#8a9bb0" }}
                >
                  {loadingPhrases[phraseIdx]}
                </span>
                <span className="text-xs font-mono font-bold tabular-nums"
                  style={{ color: "#38bdf8" }}>
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}