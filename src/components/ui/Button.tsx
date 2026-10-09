import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102B50] disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[#102B50] text-white hover:bg-[#0B1F3A] hover:text-white active:scale-[0.99] shadow-xs font-semibold border border-transparent",
    secondary:
      "bg-[#FFFFFF] text-[#102B50] border border-[#E8D8A5] hover:bg-[#FFF0B8] hover:border-[#FFC928] active:scale-[0.99]",
    outline:
      "bg-transparent text-[#102B50] border border-[#102B50]/30 hover:bg-[#102B50] hover:text-white active:scale-[0.99]",
    ghost:
      "bg-transparent text-[#102B50] hover:bg-[#FFF0B8]/60 active:scale-[0.99]",
    dark:
      "bg-[#FFC928] text-[#102B50] hover:bg-[#FFD84D] hover:text-[#102B50] font-bold border border-transparent active:scale-[0.99]",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 tracking-wide font-medium rounded-[var(--radius-sm)] gap-1.5",
    md: "text-sm px-5 py-2.5 tracking-tight font-semibold rounded-[var(--radius-md)] gap-2",
    lg: "text-base px-7 py-3.5 tracking-tight font-semibold rounded-[var(--radius-md)] gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
