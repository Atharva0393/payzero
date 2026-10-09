import React from "react";
import Button from "@/components/ui/Button";

const CTA_CONFIG = {
  eyebrow: "START WITH PAYZERO",
  headline: "Have a Property in Mind? Let's Discuss Your Solar Requirements.",
  supportingCopy:
    "Tell us about your property, energy requirements, and goals. We'll start by understanding the project before recommending an optimal solar solution.",
  primaryCtaLabel: "Get a Consultation →",
  contactPerson: "Vivek Rathod",
  phone: "9561087785",
  email: "pay0energy@gmail.com",
};

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#102B50] text-[#FFF8E7] py-20 sm:py-28 lg:py-36 border-t border-[#E8D8A5]/20 overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16"
    >
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-6 sm:px-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#0B1F3A] border border-[#FFC928]/30 text-[#FFC928] text-[11px] font-mono tracking-widest uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
          {CTA_CONFIG.eyebrow}
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF8E7] tracking-tight leading-[1.12] max-w-3xl mx-auto">
          {CTA_CONFIG.headline}
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-[#FFF8E7]/80 leading-relaxed font-normal max-w-2xl mx-auto">
          {CTA_CONFIG.supportingCopy}
        </p>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-center">
          <Button
            href={`tel:${CTA_CONFIG.phone}`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-[#FFC928] text-[#102B50] hover:bg-[#FFD84D] hover:text-[#102B50] border-none px-8 py-4 text-base font-bold justify-center"
          >
            {CTA_CONFIG.primaryCtaLabel}
          </Button>
        </div>

        {/* Clean Direct Contact Info Strip */}
        <div className="pt-6 border-t border-[#E8D8A5]/20 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#FFC928] uppercase tracking-wider font-semibold">
              Contact:
            </span>
            <span className="font-semibold text-[#FFF8E7]">{CTA_CONFIG.contactPerson}</span>
          </div>
          <span className="hidden sm:inline text-[#FFF8E7]/30">•</span>
          <a
            href={`tel:${CTA_CONFIG.phone}`}
            className="font-mono text-sm text-[#FFF8E7] hover:text-[#FFC928] transition-colors duration-200"
          >
            {CTA_CONFIG.phone}
          </a>
          <span className="hidden sm:inline text-[#FFF8E7]/30">•</span>
          <a
            href={`mailto:${CTA_CONFIG.email}`}
            className="text-sm text-[#FFF8E7] hover:text-[#FFC928] transition-colors duration-200"
          >
            {CTA_CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
