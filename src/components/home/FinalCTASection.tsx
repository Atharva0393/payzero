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
      className="relative bg-[#FFF0B8] text-[#102B50] py-20 sm:py-28 lg:py-36 border border-[#E8D8A5] overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16 shadow-xs"
    >
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-6 sm:px-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF8E7] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
          {CTA_CONFIG.eyebrow}
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12] max-w-3xl mx-auto">
          {CTA_CONFIG.headline}
        </h2>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal max-w-2xl mx-auto">
          {CTA_CONFIG.supportingCopy}
        </p>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-center">
          <Button
            href={`tel:${CTA_CONFIG.phone}`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-[#102B50] text-white hover:bg-[#0B1F3A] hover:text-white border-none px-8 py-4 text-base font-bold justify-center shadow-md"
          >
            {CTA_CONFIG.primaryCtaLabel}
          </Button>
        </div>

        {/* Clean Direct Contact Info Strip */}
        <div className="pt-6 border-t border-[#E8D8A5] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#EAA900] uppercase tracking-wider font-bold">
              Contact:
            </span>
            <span className="font-semibold text-[#102B50]">{CTA_CONFIG.contactPerson}</span>
          </div>
          <span className="hidden sm:inline text-[#536171]/40">•</span>
          <a
            href={`tel:${CTA_CONFIG.phone}`}
            className="font-mono text-sm text-[#102B50] hover:text-[#EAA900] transition-colors duration-200"
          >
            {CTA_CONFIG.phone}
          </a>
          <span className="hidden sm:inline text-[#536171]/40">•</span>
          <a
            href={`mailto:${CTA_CONFIG.email}`}
            className="text-sm text-[#102B50] hover:text-[#EAA900] transition-colors duration-200"
          >
            {CTA_CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
