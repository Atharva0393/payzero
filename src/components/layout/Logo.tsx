"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  /**
   * "navy" / "light" -> Dark Navy text for cream/light backgrounds
   * "white" / "dark" -> Pure White text for dark/navy backgrounds
   * "icon"           -> Sun & Solar Panel emblem only (no text)
   */
  variant?: "navy" | "white" | "light" | "dark" | "icon";
  /**
   * Preset sizing:
   * - sm: compact (height ~32px)
   * - md: standard navigation (height ~42px)
   * - lg: footer / hero / about (height ~52px)
   * - xl: prominent showcase (height ~64px)
   */
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  href?: string | null;
  showWordmarkText?: boolean;
  onClick?: () => void;
}

const DIMENSIONS = {
  full: {
    sm: { width: 44, height: 32 },
    md: { width: 58, height: 42 },
    lg: { width: 72, height: 52 },
    xl: { width: 88, height: 64 },
  },
  icon: {
    sm: { width: 44, height: 28 },
    md: { width: 58, height: 38 },
    lg: { width: 78, height: 50 },
    xl: { width: 98, height: 64 },
  },
};

export const Logo: React.FC<LogoProps> = ({
  variant = "navy",
  size = "md",
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
  href = "/",
  showWordmarkText = false,
  onClick,
}) => {
  const isWhite = variant === "white" || variant === "dark";
  const isIcon = variant === "icon";

  let src = "/logo/payzero-logo.png";
  if (isIcon) {
    src = "/logo/payzero-icon.png";
  } else if (isWhite) {
    src = "/logo/payzero-logo-white.png";
  }

  const dimCategory = isIcon ? DIMENSIONS.icon : DIMENSIONS.full;
  const presetDim = size !== "custom" ? dimCategory[size] : dimCategory.md;

  const finalWidth = width || presetDim.width;
  const finalHeight = height || presetDim.height;

  const content = (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <span className="relative flex items-center justify-center shrink-0">
        <Image
          src={src}
          alt="Payzero – Solar Energy Expert"
          width={finalWidth * 2} // 2x for Retina sharpness
          height={finalHeight * 2}
          quality={100}
          priority={priority}
          className={`h-auto max-h-full object-contain transition-opacity duration-200 ${imageClassName}`}
          style={{
            height: `${finalHeight}px`,
            width: "auto",
            maxWidth: "none",
          }}
        />
      </span>

      {showWordmarkText && (
        <span
          className={`font-heading tracking-widest text-lg sm:text-xl uppercase font-extrabold ${
            isWhite ? "text-[#FFF8E7]" : "text-[#102B50]"
          }`}
        >
          PAYZERO
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928] rounded-md transition-transform duration-200 hover:opacity-95"
        aria-label="Payzero – Solar Energy Expert"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
