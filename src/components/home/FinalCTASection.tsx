import React from "react";
import Button from "@/components/ui/Button";

const CTA_CONFIG = {
  consultationHref: "#contact",
  headline: "Let's Design the Right Solar System for Your Property.",
  supportingCopy:
    "Tell us about your property, energy requirements, and goals. We'll start by understanding the project before recommending a solution.",
  primaryCtaLabel: "Get a Consultation →",
};

export const FinalCTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#084734] text-[#CDEDB3] py-24 sm:py-32 lg:py-40 border-t border-[#CDEDB3]/20 overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16"
    >
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-6 sm:px-10">
        {/* Large Editorial Headline */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#CDEDB3] tracking-tight leading-[1.08] max-w-4xl mx-auto">
          {CTA_CONFIG.headline}
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-[#CDEDB3]/80 leading-relaxed font-normal max-w-2xl mx-auto">
          {CTA_CONFIG.supportingCopy}
        </p>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-center">
          <Button
            href={CTA_CONFIG.consultationHref}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-[#CEF17B] text-[#084734] hover:bg-[#CDEDB3] hover:text-[#084734] border-none px-8 py-4 text-base font-bold justify-center"
          >
            {CTA_CONFIG.primaryCtaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
