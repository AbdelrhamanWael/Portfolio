import React from 'react';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 md:gap-3 ${className} group`}>
      {/* Logo Mark (Tech Ring + AW) */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-[rgba(91,164,196,0.4)] bg-[#06141B] shadow-[0_0_15px_rgba(91,164,196,0.15)] group-hover:shadow-[0_0_20px_rgba(91,164,196,0.3)] transition-all duration-300">
        {/* Outer decorative ring */}
        <div className="absolute -inset-1 rounded-full border border-[rgba(91,164,196,0.1)]" />
        {/* Inner rotating dashed ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-[rgba(91,164,196,0.3)] animate-[spin_30s_linear_infinite]" />
        
        {/* AW Monogram */}
        <span className="font-black text-lg md:text-xl tracking-tighter relative z-10 flex drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          <span className="text-[#F8FAFC]">A</span>
          <span className="text-[#5BA4C4] -ml-1 md:-ml-1.5">W</span>
        </span>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className="text-[13px] md:text-[15px] font-black tracking-widest text-[#F8FAFC] leading-none uppercase">
          Abdelrhaman Wael
        </span>
        <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-[#5BA4C4] mt-1.5 uppercase opacity-90">
          Developer <span className="mx-1 md:mx-1.5 text-white/40">•</span> AI Engineer
        </span>
      </div>
    </div>
  );
}
