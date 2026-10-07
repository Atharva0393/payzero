import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface SolutionItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  imageLabel: string;
  imageSublabel: string;
  imageAspect: "4/3" | "16/9" | "21/9";
}

const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "residential",
    number: "01",
    category: "RESIDENTIAL SOLAR",
    title: "Residential Solar Systems",
    description:
      "Architecturally integrated solar power systems designed for modern residences, private homes, and residential estates.",
    href: "#contact",
    imageLabel: "PAYZERO // RESIDENTIAL SOLAR ASSET",
    imageSublabel: "Modern private residential estate with integrated rooftop solar architecture",
    imageAspect: "4/3",
  },
  {
    id: "commercial",
    number: "02",
    category: "COMMERCIAL SOLAR",
    title: "Commercial & Industrial Solutions",
    description:
      "High-capacity rooftop and ground-mount solar infrastructure engineered for corporate facilities, commercial buildings, and high-consumption properties.",
    href: "#contact",
    imageLabel: "PAYZERO // COMMERCIAL SOLAR INFRASTRUCTURE",
    imageSublabel: "High-capacity commercial rooftop solar array installation",
    imageAspect: "4/3",
  },
  {
    id: "energy",
    number: "03",
    category: "ENERGY SOLUTIONS",
    title: "Storage & Microgrid Systems",
    description:
      "Comprehensive energy infrastructure covering industrial battery storage, load-balancing telemetry, microgrids, and long-term system planning.",
    href: "#contact",
    imageLabel: "PAYZERO // BESS & MICROGRID SYSTEM",
    imageSublabel: "Industrial battery energy storage and microgrid control infrastructure",
    imageAspect: "4/3",
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 lg:py-32 border-b border-[var(--border-light)] relative">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left: Eyebrow + Headline */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="neutral">WHAT WE DO</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Solar Systems Built Around the Property.
          </h2>
        </div>

        {/* Right: Supporting Description */}
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Every installation is planned around the physical architecture of the property, its energy consumption profile, available space, and specific operational goals.
          </p>
        </div>
      </div>

      {/* Editorial Solutions List (Vertical Stack) */}
      <div className="divide-y divide-[var(--border-light)] border-t border-b border-[var(--border-light)]">
        {SOLUTIONS_DATA.map((item) => (
          <article
            key={item.id}
            className="group py-12 sm:py-16 lg:py-20 transition-colors duration-300 hover:bg-[var(--bg-subtle)]/40 px-2 sm:px-4 rounded-[var(--radius-md)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Column 1: Number & Category Tag */}
              <div className="lg:col-span-2 space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-300 block">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase block">
                  {item.category}
                </span>
              </div>

              {/* Column 2: Title, Description & Action */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  {item.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-highlight)] transition-colors duration-200 focus:outline-none focus:underline"
                    aria-label={`Explore ${item.title}`}
                  >
                    <span>Explore Solution</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Column 3: Large Architectural Image Placeholder */}
              <div className="lg:col-span-5">
                <ImagePlaceholder
                  aspectRatio={item.imageAspect}
                  label={item.imageLabel}
                  sublabel={item.imageSublabel}
                  className="w-full shadow-xs"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
