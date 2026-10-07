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
      "bg-[#DDF3C7] text-[#084734] border-[#084734]/20",
    outline:
      "bg-transparent text-[#084734] border-[#084734]/30",
    dark:
      "bg-[#084734] text-[#CDEDB3] border-[#CDEDB3]/20",
    accent:
      "bg-[#084734] text-[#CEF17B] border-[#CEF17B]/40",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
};

export default Badge;
