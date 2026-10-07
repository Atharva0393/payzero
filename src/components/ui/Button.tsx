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
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#084734] disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[#CEF17B] text-[#084734] hover:bg-[#CDEDB3] hover:text-[#084734] active:scale-[0.99] shadow-xs font-bold border border-transparent",
    secondary:
      "bg-[#DDF3C7] text-[#084734] border border-[#084734]/30 hover:bg-[#084734] hover:text-[#CDEDB3] active:scale-[0.99]",
    outline:
      "bg-transparent text-[#084734] border border-[#084734]/40 hover:bg-[#084734] hover:text-[#CDEDB3] active:scale-[0.99]",
    ghost:
      "bg-transparent text-[#084734] hover:bg-[#C2E7A3] active:scale-[0.99]",
    dark:
      "bg-[#084734] text-[#CDEDB3] hover:bg-[#CEF17B] hover:text-[#084734] border border-transparent active:scale-[0.99]",
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
