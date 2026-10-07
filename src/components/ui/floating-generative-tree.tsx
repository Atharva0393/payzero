"use client";

import React, { useState } from "react";
import GenerativeTree from "@/components/ui/generative-tree";

export const FloatingGenerativeTree: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3 py-2 rounded-full bg-[#084734] border border-[#CEF17B]/40 text-[#CDEDB3] text-xs font-mono shadow-[0_8px_24px_rgba(8,71,52,0.3)] hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Expand Generative Tree"
      >
        <span className="w-2 h-2 rounded-full bg-[#CEF17B] animate-pulse" />
        <span className="font-semibold tracking-wider text-[11px] uppercase">Tree</span>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-48 rounded-[20px] overflow-hidden border border-[#CEF17B]/30 hover:border-[#CEF17B] shadow-[0_8px_30px_rgba(8,71,52,0.35)] hover:shadow-[0_12px_40px_rgba(206,241,123,0.3)] transition-all duration-300 transform hover:scale-[1.04] bg-[#0a0a0a]">
        {/* Subtle Top Telemetry Status Header */}
        <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#CEF17B]/30 text-[9px] font-mono text-[#CDEDB3] tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B] animate-pulse" />
            <span>ECO TREE</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(true);
            }}
            className="pointer-events-auto w-5 h-5 rounded-full bg-black/60 hover:bg-[#084734] text-[#CDEDB3] hover:text-[#CEF17B] flex items-center justify-center text-[10px] border border-white/10 transition-colors"
            title="Minimize"
            aria-label="Minimize Tree"
          >
            ×
          </button>
        </div>

        {/* Generative Tree Canvas Container */}
        <div className="absolute inset-0 w-full h-full">
          <GenerativeTree
            speed={isHovered ? 1.6 : 0.9}
            size={1.1}
            particleAmount={isHovered ? 1.4 : 1.0}
            brightness={isHovered ? 1.2 : 1.0}
            saturation={isHovered ? 1.25 : 1.0}
            className="w-full h-full"
          />
        </div>

        {/* Subtle Bottom Ambient Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default FloatingGenerativeTree;
