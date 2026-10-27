"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const diagnosticLogs = [
  "BOOT // INITIALIZING AI AGENT RUNTIME",
  "INDEX // MOUNTING VECTOR RAG PIPELINE",
  "BACKEND // FASTAPI & .NET GATEWAY READY",
  "SYS // 200 OK — INTERFACE MOUNTED",
];

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Session Intelligence: Check if already booted in this session
    const hasBooted = typeof window !== "undefined" && sessionStorage.getItem("aw_boot_complete");
    if (hasBooted) {
      const t = setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 0);
      return () => clearTimeout(t);
    }

    const duration = 850; // Total duration in ms
    const interval = 25; // Update rate in ms
    const totalTicks = duration / interval;
    const step = 100 / totalTicks;

    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setLogIndex(diagnosticLogs.length - 1);

        try {
          sessionStorage.setItem("aw_boot_complete", "true");
        } catch {}

        setTimeout(() => {
          setShow(false);
          onComplete?.();
        }, 120);
      } else {
        setProgress(Math.floor(current));
        const idx = Math.min(
          diagnosticLogs.length - 1,
          Math.floor((current / 100) * diagnosticLogs.length)
        );
        setLogIndex(idx);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="architectural-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#090A0C] border-b border-[#F59E0B]/50 flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-6">
            {/* Dynamic Vector Reticle AW Emblem */}
            <div className="relative w-24 h-24 rounded-xl bg-[#0E1015] border border-[#232733] flex items-center justify-center p-2 shadow-2xl corner-marked">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Outer Reticle Rings */}
                <circle cx="50" cy="50" r="42" stroke="#232733" strokeWidth="1.2" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#F59E0B"
                  strokeWidth="0.8"
                  strokeDasharray="2 6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <circle cx="50" cy="50" r="34" stroke="#232733" strokeWidth="1" />

                {/* Cardinal Tick Marks */}
                <line x1="50" y1="5" x2="50" y2="12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="50" y1="88" x2="50" y2="95" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="5" y1="50" x2="12" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="88" y1="50" x2="95" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

                {/* Center Axis Line */}
                <line x1="50" y1="24" x2="50" y2="76" stroke="#232733" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Letter A (Left - Drawn with dynamic pathLength) */}
                <motion.path
                  d="M 33 72 L 42 30 L 49.5 52"
                  stroke="#F4F5F7"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.line
                  x1="35.5"
                  y1="62"
                  x2="47"
                  y2="62"
                  stroke="#F4F5F7"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <circle cx="42" cy="29" r="2.4" fill="#F4F5F7" />

                {/* Letter W (Right - Drawn with dynamic pathLength) */}
                <motion.path
                  d="M 51.5 30 L 55.5 72 L 60.5 46 L 65 72 L 69 30"
                  stroke="#F59E0B"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
                />
                <circle cx="51.5" cy="29" r="2.4" fill="#F59E0B" />
                <circle cx="69" cy="29" r="2.4" fill="#F59E0B" />

                {/* Center Reticle Origin Dot */}
                <circle cx="50" cy="50" r="1.8" fill="#F59E0B" />
              </svg>
            </div>

            {/* Wordmark */}
            <div className="space-y-1">
              <div className="font-display font-bold text-lg text-[#F4F5F7] tracking-tight">
                Abdelrhaman Wael
              </div>
              <div className="font-mono text-xs text-[#8A909E] tracking-wider uppercase">
                AI Systems & Full-Stack Engineer
              </div>
            </div>

            {/* Precision Hairline Progress Bar & Percentage */}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-[#8A909E]">
                <span className="text-[#F59E0B] font-semibold">{diagnosticLogs[logIndex]}</span>
                <span className="tabular-data text-[#F4F5F7]">{progress}%</span>
              </div>

              <div className="w-full h-1 bg-[#14171E] rounded-full overflow-hidden border border-[#232733]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FF7A00]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* System Status Footnote */}
            <div className="font-mono text-[10px] text-[#525866] pt-1 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>CAIRO (UTC+2) // ME-CENTRAL-1 READY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}