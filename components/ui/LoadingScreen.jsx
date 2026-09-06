"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "Abdelrhaman";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 600);
        }, 400);
      }
      setProgress(p);
    }, 80);
    return () => clearInterval(id);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "#06141B" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-20 orb1"
            style={{ background: "radial-gradient(circle, #253745, transparent 70%)" }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 orb2"
            style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} />

          {/* Name letters */}
          <div className="relative z-10 mb-8 flex items-end gap-0.5" style={{ perspective: "600px" }}>
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="loading-letter font-bold"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  background: "linear-gradient(135deg, #CCD0CF, #5BA4C4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1,
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Role text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-sm font-medium tracking-[0.3em] uppercase mb-10"
            style={{ color: "#9BA8AB" }}
          >
            Full Stack Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative w-64"
          >
            <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.1)" }}>
              <motion.div
                className="h-full"
                style={{
                  background: "linear-gradient(90deg, #5BA4C4, #253745)",
                  width: `${Math.min(progress, 100)}%`,
                  transition: "width 0.1s linear",
                  boxShadow: "0 0 10px rgba(91,164,196,0.7)",
                }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-xs font-mono" style={{ color: "#4A5C6A" }}>loading</span>
              <span className="text-xs font-mono" style={{ color: "#5BA4C4" }}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 0 ? "#5BA4C4" : i === 1 ? "#9BA8AB" : "#4A5C6A" }}
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}