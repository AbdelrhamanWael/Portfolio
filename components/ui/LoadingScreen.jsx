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
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 700);
        }, 500);
      }
      setProgress(p);
      setPhraseIdx(Math.floor((p / 100) * (loadingPhrases.length - 1)));
    }, 80);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#020408" }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
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
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <BrandLogo />
            </motion.div>

            {/* Name with staggered letters */}
            <motion.div
              className="flex items-end gap-0"
              style={{ perspective: "800px" }}
            >
              {"Abdelrhaman".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: i * 0.07 + 0.3,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="loading-letter font-black"
                  style={{
                    fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
                    background: i < 6
                      ? "linear-gradient(135deg, #e8eef4, #38bdf8)"
                      : "linear-gradient(135deg, #38bdf8, #818cf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="text-sm font-semibold tracking-[0.35em] uppercase"
              style={{ color: "#38bdf8" }}
            >
              Freelance Software Engineer
            </motion.p>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-72 flex flex-col gap-3"
            >
              {/* Progress bar track */}
              <div className="relative w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(56,189,248,0.1)" }}>
                {/* Glow trail */}
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                    width: `${Math.min(progress, 100)}%`,
                    transition: "width 0.15s linear",
                    boxShadow: "0 0 12px rgba(56,189,248,0.8), 0 0 24px rgba(56,189,248,0.4)",
                  }}
                />
                {/* Shimmer dot at leading edge */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    left: `calc(${Math.min(progress, 100)}% - 6px)`,
                    background: "#38bdf8",
                    boxShadow: "0 0 8px #38bdf8, 0 0 20px rgba(56,189,248,0.6)",
                    transition: "left 0.15s linear",
                  }}
                />
              </div>

              {/* Stats row */}
              <div className="flex justify-between items-center">
                <motion.span
                  key={phraseIdx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-mono"
                  style={{ color: "#8a9bb0" }}
                >
                  {loadingPhrases[phraseIdx]}
                </motion.span>
                <span className="text-xs font-mono font-bold tabular-nums"
                  style={{ color: "#38bdf8" }}>
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </div>
            </motion.div>

            {/* Pulse dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i === 1 ? "#38bdf8" : "#818cf8",
                    opacity: i === 1 ? 1 : 0.4,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: i === 1 ? [0.7, 1, 0.7] : [0.3, 0.6, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decoration */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "rgba(56,189,248,0.3)" }}>
              Portfolio v2.0
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}