import React from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9" | "1/1" | "3/4" | "4/5" | "auto";
  label?: string;
  sublabel?: string;
  className?: string;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = "Payzero Solar Energy Infrastructure Asset",
  aspectRatio = "4/3",
  label = "PAYZERO ASSET // ARCHITECTURAL SOLAR INTEGRATION",
  sublabel = "High-resolution commercial solar photography frame slot",
  className = "",
  priority = false,
}) => {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "21/9": "aspect-[21/9]",
    "1/1": "aspect-[1/1]",
    "3/4": "aspect-[3/4]",
    "4/5": "aspect-[4/5]",
    auto: "h-full min-h-[340px]",
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded-[var(--radius-lg)] group shadow-xs transition-all duration-300 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {src ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle bottom metadata overlay strip */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-90">
              {label}
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-75 hidden sm:inline">
              LIVE ASSET
            </span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-grid-pattern flex flex-col justify-between p-6 sm:p-8 select-none">
          {/* Top metadata strip */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-highlight)] animate-pulse"></span>
              {label}
            </span>
            <span className="border border-[var(--border-light)] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] text-[var(--text-secondary)]">
              {aspectRatio}
            </span>
          </div>

          {/* Center architectural technical graphic */}
          <div className="my-auto text-center px-4 py-8">
            <div className="mx-auto w-14 h-14 mb-4 border border-[var(--border-light)] rounded-[var(--radius-md)] flex items-center justify-center bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-xs">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <p className="text-xs font-mono text-[var(--text-secondary)] tracking-tight font-medium max-w-sm mx-auto leading-relaxed">
              {sublabel}
            </p>
          </div>

          {/* Bottom engineering scale strip */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]/70 text-[10px] font-mono text-[var(--text-muted)]">
            <span>INFRASTRUCTURE SPECIFICATION</span>
            <span>PAYZERO MEDIA FRAME</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
