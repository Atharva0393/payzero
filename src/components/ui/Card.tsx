import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "surface" | "subtle" | "outline" | "dark";
  padding?: "none" | "compact" | "default" | "spacious";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "surface",
  padding = "default",
  hoverEffect = true,
  ...props
}) => {
  const variantStyles = {
    surface: "bg-[var(--bg-surface)] border border-[var(--border-light)] text-[var(--text-primary)]",
    subtle: "bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)]",
    outline: "bg-transparent border border-[var(--border-light)] text-[var(--text-primary)]",
    dark: "bg-[var(--bg-subtle)] border border-[var(--border-light)] text-[var(--text-primary)]",
  };

  const paddingStyles = {
    none: "p-0",
    compact: "p-4 sm:p-6",
    default: "p-6 sm:p-8 lg:p-10",
    spacious: "p-8 sm:p-12 lg:p-14",
  };

  const hoverStyle = hoverEffect
    ? "transition-all duration-300 hover:border-[var(--text-primary)]/40 hover:shadow-sm"
    : "";

  return (
    <div
      className={`rounded-[var(--radius-lg)] relative overflow-hidden ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
