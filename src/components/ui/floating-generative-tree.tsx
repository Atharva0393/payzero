"use client";

import React, { useState } from "react";
import GenerativeTree from "@/components/ui/generative-tree";

export const FloatingGenerativeTree: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Interactive Generative Tree"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 group pointer-events-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 10-15% enlarged transparent viewport: Only the tree and floating particles are visible */}
      <div className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-48 md:h-60 transition-transform duration-300 ease-out transform group-hover:scale-[1.08]">
        <GenerativeTree
          speed={isHovered ? 1.6 : 0.9}
          size={1.15}
          particleAmount={isHovered ? 1.4 : 1.0}
          brightness={isHovered ? 1.25 : 1.0}
          saturation={isHovered ? 1.25 : 1.0}
          className="w-full h-full bg-transparent"
          style={{ background: "transparent" }}
        />
      </div>
    </aside>
  );
};

export default FloatingGenerativeTree;
