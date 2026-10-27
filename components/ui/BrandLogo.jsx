import React from "react";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className} group`}>
      {/* Precision AW Technical Reticle Logo Mark */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#0E1015] border border-[#232733] group-hover:border-[#F59E0B]/50 transition-all duration-200 overflow-hidden shrink-0 shadow-sm">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-0.5"
          aria-hidden="true"
        >
          {/* Outer Technical Reticle Ring */}
          <circle cx="50" cy="50" r="42" stroke="#232733" strokeWidth="1.2" />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="#F59E0B"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            opacity="0.6"
          />
          <circle cx="50" cy="50" r="34" stroke="#232733" strokeWidth="1" />

          {/* Cardinal Tick Marks */}
          <line x1="50" y1="5" x2="50" y2="12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="88" x2="50" y2="95" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="50" x2="12" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="88" y1="50" x2="95" y2="50" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

          {/* Diagonal Micro Ticks */}
          <line x1="22" y1="22" x2="26" y2="26" stroke="#232733" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="78" y1="22" x2="74" y2="26" stroke="#232733" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="22" y1="78" x2="26" y2="74" stroke="#232733" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="78" y1="78" x2="74" y2="74" stroke="#232733" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center Axis Line */}
          <line x1="50" y1="24" x2="50" y2="76" stroke="#232733" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Letter A (Left - Stark Crisp White) */}
          <line
            x1="33"
            y1="72"
            x2="42"
            y2="30"
            stroke="#F4F5F7"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="42"
            y1="30"
            x2="49.5"
            y2="52"
            stroke="#F4F5F7"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="35.5"
            y1="62"
            x2="47"
            y2="62"
            stroke="#F4F5F7"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="42" cy="29" r="2.4" fill="#F4F5F7" />

          {/* Letter W (Right - Cadmium Amber Signal) */}
          <line
            x1="51.5"
            y1="30"
            x2="55.5"
            y2="72"
            stroke="#F59E0B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="55.5"
            y1="72"
            x2="60.5"
            y2="46"
            stroke="#F59E0B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="60.5"
            y1="46"
            x2="65"
            y2="72"
            stroke="#F59E0B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="65"
            y1="72"
            x2="69"
            y2="30"
            stroke="#F59E0B"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="51.5" cy="29" r="2.4" fill="#F59E0B" />
          <circle cx="69" cy="29" r="2.4" fill="#F59E0B" />

          {/* Center Origin Reticle Dot */}
          <circle cx="50" cy="50" r="1.8" fill="#F59E0B" />
        </svg>

        {/* Corner micro-crosshair mark */}
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#F59E0B]/60" />
      </div>

      {/* Studio Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold tracking-tight text-[#F4F5F7]">
            Abdelrhaman Wael
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#8A909E] tracking-wider">
            / STUDIO
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#8A909E] tracking-wider">
          AI Systems & Full-Stack Engineer
        </span>
      </div>
    </div>
  );
}
