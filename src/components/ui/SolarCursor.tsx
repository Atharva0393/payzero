"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Payzero Custom Solar-Inspired Mouse Cursor
 * Refined Miniature Solar Installation Design:
 * - Tilted Solar Navy photovoltaic panel with crisp gold/white grid lines.
 * - Golden-yellow sun rising behind the upper panel edge with delicate sun rays.
 * - Structural golden ground-mount support stand beneath the panel.
 * - Precision pointer apex at (0, 0) with a sunlight glint for pinpoint accuracy.
 * - Smooth 60/120fps hardware-accelerated tracking with zero React re-render lag during movement.
 */
export default function SolarCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTextTarget, setIsTextTarget] = useState(false);

  useEffect(() => {
    // Only activate for devices with a fine pointer (desktop mouse / trackpad)
    // and when user hasn't requested reduced motion that disables custom pointers
    if (typeof window === "undefined") return;

    const finePointerMedia = window.matchMedia("(pointer: fine)");
    if (!finePointerMedia.matches) return;

    setMounted(true);
    document.documentElement.classList.add("custom-cursor-active");

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;

    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
      }

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], label, select, summary, [data-interactive], [data-cursor-hover]'
      );
      setIsHovered(Boolean(interactive));

      const isText = target.closest(
        'input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"], input[type="number"], input[type="url"], textarea, [contenteditable="true"]'
      );
      setIsTextTarget(Boolean(isText));
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    const handleTouchStart = () => {
      // Immediate deactivation if user touches a touchscreen
      setIsVisible(false);
      document.documentElement.classList.remove("custom-cursor-active");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);
    window.addEventListener("touchstart", handleTouchStart, { passive: true, once: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none select-none z-[999999]"
      style={{
        opacity: isVisible && !isTextTarget ? 1 : 0,
        transition: "opacity 0.15s ease-out",
        willChange: "transform",
      }}
    >
      <div
        style={{
          transformOrigin: "0 0",
          transform: isHovered ? "scale(1.2)" : "scale(1)",
          transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            {/* Subtle soft shadow providing high contrast against cream, white and navy */}
            <filter id="solarInstallShadow" x="-2" y="-2" width="38" height="38" filterUnits="userSpaceOnUse">
              <feDropShadow
                dx="0.8"
                dy="1.2"
                stdDeviation={isHovered ? 1.6 : 1.1}
                floodColor={isHovered ? "#FFC928" : "#000000"}
                floodOpacity={isHovered ? 0.55 : 0.32}
              />
            </filter>

            {/* Radiant Sun Gradient */}
            <linearGradient id="sunDiskGradient" x1="18" y1="2" x2="23" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isHovered ? "#FFF080" : "#FFD84D"} />
              <stop offset="100%" stopColor={isHovered ? "#FFB300" : "#FFA000"} />
            </linearGradient>

            {/* Photovoltaic Solar Cell Gradient */}
            <linearGradient id="pvCellGradient" x1="3" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isHovered ? "#234E82" : "#193B68"} />
              <stop offset="100%" stopColor={isHovered ? "#112F56" : "#0D203B"} />
            </linearGradient>
          </defs>

          <g filter="url(#solarInstallShadow)">
            {/* 1. Delicate Sun Rays radiating behind the solar panel */}
            <g
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "0.9" : "0.75"}
              strokeLinecap="round"
            >
              <line x1="20" y1="2" x2="20" y2="0.6" />
              <line x1="23.5" y1="3.2" x2="24.8" y2="1.8" />
              <line x1="26.2" y1="6" x2="27.8" y2="5" />
              <line x1="16.5" y1="3.2" x2="15.2" y2="1.8" />
              <line x1="13.8" y1="6" x2="12.2" y2="5" />
            </g>

            {/* 2. Golden-Yellow Sun Disk positioned behind upper edge of panel */}
            <circle
              cx="20"
              cy="6.5"
              r="4.6"
              fill="url(#sunDiskGradient)"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "0.75" : "0.5"}
            />

            {/* 3. Structural Ground-Mount Support Stand beneath panel */}
            <line
              x1="11"
              y1="20"
              x2="9.5"
              y2="27"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.3" : "1.1"}
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="21.5"
              x2="16"
              y2="27"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.3" : "1.1"}
              strokeLinecap="round"
            />
            <line
              x1="7.5"
              y1="27"
              x2="18.5"
              y2="27"
              stroke={isHovered ? "#FFD84D" : "#102B50"}
              strokeWidth={isHovered ? "1.3" : "1.2"}
              strokeLinecap="round"
            />

            {/* 4. Dominant Tilted Solar Panel Module */}
            {/* Outer panel aluminum housing with hairline edge */}
            <polygon
              points="1,4 25,8 20,24 2,19"
              fill="#102B50"
              stroke={isHovered ? "#FFD84D" : "#FFF8E7"}
              strokeWidth={isHovered ? "1" : "0.75"}
              strokeLinejoin="round"
            />

            {/* Photovoltaic Cell Wafer Surface */}
            <polygon
              points="2.8,5.8 23.5,9.2 19,22.8 3.5,18"
              fill="url(#pvCellGradient)"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1" : "0.75"}
              strokeLinejoin="round"
            />

            {/* Clean Grid Dividers & Busbars (6 Cells) */}
            <line
              x1="13"
              y1="7.5"
              x2="11.2"
              y2="20.8"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "0.9" : "0.75"}
            />
            <line
              x1="3.2"
              y1="9.8"
              x2="22"
              y2="13.8"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "0.9" : "0.75"}
            />
            <line
              x1="3.4"
              y1="14"
              x2="20.5"
              y2="18.2"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "0.9" : "0.75"}
            />

            {/* Micro collector busbars */}
            <line
              x1="8"
              y1="6.8"
              x2="7.2"
              y2="19.2"
              stroke={isHovered ? "#FFF8E7" : "#FFD84D"}
              strokeWidth="0.3"
              strokeOpacity="0.65"
            />
            <line
              x1="18.2"
              y1="8.5"
              x2="15.5"
              y2="21.8"
              stroke={isHovered ? "#FFF8E7" : "#FFD84D"}
              strokeWidth="0.3"
              strokeOpacity="0.65"
            />

            {/* 5. Precision Pointer Apex directly at (0, 0) */}
            <polygon
              points="0,0 6,1 4,4 1,6"
              fill={isHovered ? "#FFD84D" : "#FFC928"}
              stroke="#102B50"
              strokeWidth="0.6"
            />
            {/* Sunlight glint at the pinpoint tip */}
            <circle cx="1" cy="1" r="0.75" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
  );
}
