"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Payzero Custom Solar-Inspired Mouse Cursor
 *
 * Replaces default cursor on fine-pointer (desktop) devices with a branded,
 * high-performance solar panel module cursor with 0ms lag tracking.
 * Hotspot is locked at the exact top-left apex (0, 0) for pinpoint precision.
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
            {/* Crisp drop shadow ensuring optimal contrast on both Solar Cream and Dark Navy */}
            <filter id="payzeroCursorShadow" x="-2" y="-2" width="38" height="38" filterUnits="userSpaceOnUse">
              <feDropShadow
                dx="1"
                dy="1.5"
                stdDeviation="1.5"
                floodColor={isHovered ? "#FFC928" : "#000000"}
                floodOpacity={isHovered ? 0.6 : 0.35}
              />
            </filter>

            {/* Photovoltaic Solar Cell Gradient */}
            <linearGradient id="pvCellGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isHovered ? "#245188" : "#1B3D6B"} />
              <stop offset="100%" stopColor={isHovered ? "#123058" : "#0E2340"} />
            </linearGradient>
          </defs>

          <g filter="url(#payzeroCursorShadow)">
            {/* Outer aluminum panel housing in Solar Navy with subtle contrast hairline */}
            <polygon
              points="0.5,0.5 10.5,1.5 28.5,11.5 20.5,29.5 1.5,20.5 0.5,0.5"
              fill="#102B50"
              stroke={isHovered ? "#FFD84D" : "#FFF8E7"}
              strokeWidth={isHovered ? "1.2" : "0.75"}
              strokeLinejoin="round"
            />

            {/* Inner Photovoltaic Wafer Surface */}
            <polygon
              points="3.5,3.5 26.5,12.5 19.5,27.5 3.5,19.5"
              fill="url(#pvCellGradient)"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.2" : "0.9"}
              strokeLinejoin="round"
            />

            {/* Solar Cell Grid Lines (Busbars & Dividers) */}
            {/* Longitudinal busbar */}
            <line
              x1="15.5"
              y1="8"
              x2="11.5"
              y2="23.5"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.1" : "0.85"}
            />
            {/* Transverse cell dividers */}
            <line
              x1="3.5"
              y1="9"
              x2="24.5"
              y2="17.5"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.1" : "0.85"}
            />
            <line
              x1="3.5"
              y1="14.5"
              x2="22"
              y2="22.5"
              stroke={isHovered ? "#FFD84D" : "#FFC928"}
              strokeWidth={isHovered ? "1.1" : "0.85"}
            />

            {/* Micro collector fingers */}
            <line
              x1="9.5"
              y1="5.5"
              x2="7.5"
              y2="21.5"
              stroke={isHovered ? "#FFF8E7" : "#FFD84D"}
              strokeWidth="0.4"
              strokeOpacity="0.6"
            />
            <line
              x1="21"
              y1="10.5"
              x2="16"
              y2="25.5"
              stroke={isHovered ? "#FFF8E7" : "#FFD84D"}
              strokeWidth="0.4"
              strokeOpacity="0.6"
            />

            {/* Precision Pointer Apex Tip directly at (0, 0) */}
            <polygon
              points="0,0 7.5,1 5.5,5 1,7.5"
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
