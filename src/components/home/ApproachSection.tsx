import React from "react";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const PRINCIPLES = [
  {
    number: "01",
    label: "ENGINEERED",
    title: "Purpose-Built Design",
    description:
      "Systems are designed around the specific property, energy requirements, and long-term operational use case rather than off-the-shelf templates.",
  },
  {
    number: "02",
    label: "TRANSPARENT",
    title: "Clear Communication",
    description:
      "Transparent recommendations, clear scope definition, and straightforward guidance through every engineering phase.",
  },
  {
    number: "03",
    label: "BUILT TO LAST",
    title: "Long-Term Performance",
    description:
      "Uncompromising focus on quality components, structural integration, and sustained energy yield over decades.",
  },
];

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 border-b border-[var(--border-light)] relative">
      {/* Top Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left: Eyebrow + Large Headline */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="neutral">THE PAYZERO APPROACH</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Solar Energy Designed as Long-Term Infrastructure.
          </h2>
        </div>

        {/* Right: Concise Positioning Paragraph */}
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Every property requires a tailored energy strategy. We evaluate physical architecture, energy demand patterns, and operational goals to deliver purpose-built solar systems engineered for durability.
          </p>
        </div>
      </div>

      {/* Horizontal Principles Row with Thin Architectural Dividers */}
      <div className="border-t border-[var(--border-light)] pt-12 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {PRINCIPLES.map((item, index) => (
            <div
              key={item.number}
              className={`space-y-3 ${
                index !== PRINCIPLES.length - 1
                  ? "md:border-r md:border-[var(--border-light)] md:pr-8 lg:pr-12"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--text-muted)] tracking-widest">
                <span className="text-[var(--text-primary)]">{item.number}</span>
                <span>—</span>
                <span>{item.label}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Break: Expansive Architectural Installation Photo Area */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <ImagePlaceholder
          aspectRatio="21/9"
          label="PAYZERO // INTEGRATED ARCHITECTURAL SOLAR INSTALLATION"
          sublabel="High-resolution photography slot for Payzero commercial infrastructure installation"
          className="shadow-sm"
        />
      </div>
    </section>
  );
};

export default ApproachSection;
