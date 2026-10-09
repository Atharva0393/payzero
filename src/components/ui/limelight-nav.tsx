"use client";

import React, { useState, useRef, useLayoutEffect, cloneElement } from "react";
import Link from "next/link";

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export type NavItem = {
  id: string | number;
  icon?: React.ReactElement<{ className?: string }>;
  label?: string;
  href?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: "default-home", icon: <DefaultHomeIcon />, label: "Home" },
  { id: "default-explore", icon: <DefaultCompassIcon />, label: "Explore" },
  { id: "default-notifications", icon: <DefaultBellIcon />, label: "Notifications" },
];

export type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav: React.FC<LimelightNavProps> = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onTabChange,
  className = "",
  limelightClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultActiveIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  const activeIndex = controlledActiveIndex !== undefined ? controlledActiveIndex : internalActiveIndex;
  const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;

    if (targetIndex === null || targetIndex < 0 || targetIndex >= items.length) {
      if (limelight) {
        limelight.style.opacity = "0";
        limelight.style.visibility = "hidden";
      }
      return;
    }

    const targetItem = navItemRefs.current[targetIndex];

    if (limelight && targetItem) {
      const itemWidth = targetItem.offsetWidth;
      // Width stretches dynamically to cover the full word/label
      const limelightWidth = Math.max(itemWidth * 0.85, 40);
      const newLeft = targetItem.offsetLeft + (itemWidth - limelightWidth) / 2;

      limelight.style.width = `${limelightWidth}px`;
      limelight.style.left = `${newLeft}px`;
      limelight.style.opacity = "1";
      limelight.style.visibility = "visible";

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [targetIndex, isReady, items]);

  if (items.length === 0) {
    return null;
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setInternalActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative inline-flex items-center h-12 ${className}`}
    >
      {items.map(({ id, icon, label, href, onClick }, index) => {
        const isHighlighted = targetIndex === index;
        const itemContent = (
          <>
            {icon
              ? cloneElement(icon as React.ReactElement<{ className?: string }>, {
                  className: `w-5 h-5 transition-opacity duration-150 ease-in-out ${
                    isHighlighted ? "opacity-100" : "opacity-60"
                  } ${(icon.props as { className?: string })?.className || ""} ${iconClassName}`,
                })
              : null}
            {label ? (
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-150 ${
                  isHighlighted ? "font-bold opacity-100" : "opacity-75"
                }`}
              >
                {label}
              </span>
            ) : null}
          </>
        );

        return href ? (
          <Link
            key={id}
            href={href}
            ref={(el) => {
              navItemRefs.current[index] = el as HTMLAnchorElement | null;
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center gap-2 px-5 py-2 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
          >
            {itemContent}
          </Link>
        ) : (
          <a
            key={id}
            ref={(el) => {
              navItemRefs.current[index] = el;
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center gap-2 px-5 py-2 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
          >
            {itemContent}
          </a>
        );
      })}

      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 h-[4px] rounded-full transition-[left,width,opacity,visibility,background-color,box-shadow] duration-300 ease-in-out ${
          limelightClassName ? limelightClassName : "bg-[#FFC928] shadow-[0_50px_15px_#FFC928]"
        }`}
        style={{ left: "-999px", opacity: 0, visibility: "hidden" }}
      >
        <div
          className="absolute left-[-35%] top-[4px] w-[170%] h-14 [clip-path:polygon(0%_100%,20%_0,80%_0,100%_100%)] bg-gradient-to-b from-[#FFC928]/60 to-transparent pointer-events-none"
        />
      </div>
    </nav>
  );
};

export default LimelightNav;
