import React from "react";
import Container from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "surface" | "subtle" | "dark";
  padding?: "none" | "compact" | "default" | "large";
  borderTop?: boolean;
  borderBottom?: boolean;
  containerSize?: "default" | "narrow" | "wide" | "full";
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  variant = "primary",
  padding = "default",
  borderTop = false,
  borderBottom = false,
  containerSize = "default",
  id,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-[var(--bg-primary)] text-[var(--text-primary)]",
    surface: "bg-[var(--bg-surface)] text-[var(--text-primary)]",
    subtle: "bg-[var(--bg-subtle)] text-[var(--text-primary)]",
    dark: "bg-[var(--bg-inverse)] text-[var(--text-inverse)]",
  };

  const paddingClasses = {
    none: "py-0",
    compact: "py-10 md:py-16",
    default: "py-16 md:py-24 lg:py-32",
    large: "py-24 md:py-32 lg:py-44",
  };

  const borderTopClass = borderTop
    ? variant === "dark"
      ? "border-t border-[var(--border-dark)]"
      : "border-t border-[var(--border-light)]"
    : "";

  const borderBottomClass = borderBottom
    ? variant === "dark"
      ? "border-b border-[var(--border-dark)]"
      : "border-b border-[var(--border-light)]"
    : "";

  return (
    <section
      id={id}
      className={`relative w-full ${variantClasses[variant]} ${paddingClasses[padding]} ${borderTopClass} ${borderBottomClass} ${className}`}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section;
