import React from "react";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface TestimonialData {
  quote: string;
  clientName: string;
  clientRole: string;
  propertyType: string;
  imageLabel: string;
  imageSublabel: string;
}

const TESTIMONIAL_DATA: TestimonialData = {
  quote: "“Verified customer testimonial will appear here once approved.”",
  clientName: "[ CUSTOMER NAME — PENDING ]",
  clientRole: "[ PROPERTY OWNER / EXECUTIVE ]",
  propertyType: "[ PROPERTY / BUSINESS TYPE — PENDING ]",
  imageLabel: "PAYZERO // VERIFIED COMPLETED INSTALLATION",
  imageSublabel:
    "Authentic architectural photography of a completed solar installation for verified client asset",
};

const BRAND_TRUST_PRINCIPLES = [
  "QUALITY",
  "ENGINEERING",
  "TRANSPARENCY",
  "LONG-TERM VALUE",
];

export const TestimonialSection: React.FC = () => {
  return (
    <section id="perspective" className="py-16 sm:py-24 lg:py-32 border-b border-[var(--border-light)] bg-[var(--bg-surface)] relative">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left: Eyebrow + Headline */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="neutral">CLIENT PERSPECTIVE</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Confidence Matters as Much as Performance.
          </h2>
        </div>

        {/* Right: Supporting Copy */}
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Major energy investments require clarity, communication, and confidence throughout every stage of the project.
          </p>
        </div>
      </div>

      {/* Main Testimonial Split Composition */}
      <div className="border-t border-[var(--border-light)] pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Semantic Blockquote & Metadata */}
          <div className="lg:col-span-7 space-y-8">
            <blockquote className="space-y-6">
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-relaxed tracking-tight italic">
                {TESTIMONIAL_DATA.quote}
              </p>
              <cite className="block not-italic space-y-1 pt-6 border-t border-[var(--border-light)]/70">
                <div className="font-mono text-sm font-bold text-[var(--text-primary)] tracking-wider uppercase">
                  {TESTIMONIAL_DATA.clientName}
                </div>
                <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
                  {TESTIMONIAL_DATA.propertyType}
                </div>
              </cite>
            </blockquote>
          </div>

          {/* Right Column: Authentic Installation Photo Slot */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              aspectRatio="4/3"
              label={TESTIMONIAL_DATA.imageLabel}
              sublabel={TESTIMONIAL_DATA.imageSublabel}
              className="w-full shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Secondary Trust Principles Strip */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-[var(--border-light)]">
        <div className="flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
          {BRAND_TRUST_PRINCIPLES.map((principle, idx) => (
            <React.Fragment key={principle}>
              <span className="flex items-center gap-2 text-[var(--text-secondary)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-highlight)] opacity-75"></span>
                {principle}
              </span>
              {idx !== BRAND_TRUST_PRINCIPLES.length - 1 && (
                <span className="hidden md:inline text-[var(--border-light)]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
