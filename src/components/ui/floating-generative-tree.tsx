"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import GenerativeTree from "@/components/ui/generative-tree";

export const FloatingGenerativeTree: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setHasScrolledPastHero(true);
      return;
    }

    const checkScroll = () => {
      // The homepage HeroSection has min-h-screen (100vh).
      // The tree appears only once the user scrolls down past the hero section.
      const heroThreshold = Math.max(350, window.innerHeight * 0.6);
      setHasScrolledPastHero(window.scrollY > heroThreshold);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [isHomePage]);

  const isVisible = !isHomePage || hasScrolledPastHero;

  return (
    <aside
      aria-label="Interactive Generative Tree"
      className={`fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 group select-none transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        Generously proportioned transparent viewport:
        Wide enough to ensure no branch, leaf dot, or mote touches the canvas edges.
      */}
      <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 transition-transform duration-300 ease-out transform group-hover:scale-[1.03]">
        <GenerativeTree
          speed={isHovered ? 1.5 : 0.9}
          size={1.0}
          particleAmount={isHovered ? 1.3 : 1.0}
          brightness={isHovered ? 1.2 : 1.0}
          saturation={isHovered ? 1.2 : 1.0}
          className="w-full h-full bg-transparent"
          style={{ background: "transparent" }}
        />
      </div>
    </aside>
  );
};

export default FloatingGenerativeTree;
