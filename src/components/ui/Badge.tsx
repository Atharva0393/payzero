import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "outline" | "dark" | "accent";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className = "",
}) => {
  const base =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase font-medium rounded-[var(--radius-sm)] border";

  const variants = {
    neutral:
      "bg-[#FFF0B8] text-[#102B50] border-[#E8D8A5]",
    outline:
      "bg-transparent text-[#102B50] border-[#102B50]/30",
    dark:
      "bg-[#102B50] text-[#FFF8E7] border-[#E8D8A5]/30",
    accent:
      "bg-[#102B50] text-[#FFC928] border-[#FFC928]/40",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
};

export default Badge;
