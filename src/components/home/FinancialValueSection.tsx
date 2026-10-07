import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface EvaluationFactor {
  code: string;
  label: string;
  detail: string;
}

const EVALUATION_FACTORS: EvaluationFactor[] = [
  {
    code: "01",
    label: "Property & Orientation",
    detail: "Physical roof/ground geometry, shading analysis, and structural capacity.",
  },
  {
    code: "02",
    label: "Consumption Profile",
    detail: "Peak demand timing, daily energy load, and seasonal variation.",
  },
  {
    code: "03",
    label: "Utility Tariff Structure",
    detail: "Local utility rates, grid export policies, and demand charge penalties.",
  },
  {
    code: "04",
    label: "Capital Sizing & Financing",
    detail: "System size optimization, tax equity structure, and asset yield model.",
  },
];

const CONCEPTUAL_MODEL_STEPS = [
  {
    step: "INPUT 01",
    title: "MONTHLY CONSUMPTION",
    value: "PROJECT AUDIT REQUIRED",
    tag: "SITE DATA",
  },
  {
    step: "INPUT 02",
    title: "UTILITY TARIFF RATE",
    value: "REGIONAL RATE TARIFF",
    tag: "GRID DATA",
  },
  {
    step: "SPECS 03",
    title: "PROPOSED SYSTEM SIZING",
    value: "ENGINEERED PER PROPERTY",
    tag: "SYSTEM SPEC",
  },
  {
    step: "OUTPUT 04",
    title: "ESTIMATED CAPITAL PAYBACK",
    value: "CALCULATED POST-ASSESSMENT",
    tag: "FINAL MODEL",
  },
];

export const FinancialValueSection: React.FC = () => {
  return (
    <section className="relative bg-[#084734] text-[#CDEDB3] py-16 sm:py-24 lg:py-32 border-y border-[#CDEDB3]/20 overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16">
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 sm:px-10 lg:px-12">
        {/* Left Column: Editorial Headline, Explanation & Actions */}
        <div className="lg:col-span-6 space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#053325] border border-[#CEF17B]/30 text-[11px] font-mono tracking-widest text-[#CEF17B] uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B]"></span>
            THE ECONOMICS OF SOLAR
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#CDEDB3] tracking-tight leading-[1.12]">
            Energy Is a Long-Term Cost. Design It Accordingly.
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#CDEDB3]/80 leading-relaxed font-normal">
            The economics of a solar system depend on property architecture, energy consumption patterns, system sizing, utility tariffs, and long-term capital structure. Every project must be evaluated according to its unique financial parameters.
          </p>

          {/* Key Evaluation Factors */}
          <div className="pt-2 space-y-3.5 border-t border-[#CDEDB3]/20">
            {EVALUATION_FACTORS.map((factor) => (
              <div key={factor.code} className="flex items-start gap-3.5 text-xs text-[#CDEDB3]/80">
                <span className="font-mono text-[#CEF17B] font-semibold">{factor.code}</span>
                <div>
                  <span className="text-[#CDEDB3] font-medium">{factor.label}</span>
                  <span className="mx-1.5 text-[#CDEDB3]/50">—</span>
                  <span>{factor.detail}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="bg-[#CEF17B] text-[#084734] hover:bg-[#CDEDB3] border-none justify-center font-bold"
            >
              Request a Project Assessment
            </Button>

            <Link
              href="#engineering"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#CDEDB3] hover:text-[#CEF17B] transition-colors group"
            >
              <span>How It Works</span>
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

        {/* Right Column: Conceptual Financial Model Visualization */}
        <div className="lg:col-span-6 relative">
          <div className="bg-[#053325] border border-[#CDEDB3]/20 rounded-[var(--radius-lg)] p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Top Frame Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#CDEDB3]/20 font-mono text-[10px] tracking-widest text-[#CDEDB3]/70 uppercase">
              <span className="flex items-center gap-2 text-[#CDEDB3]">
                <span className="w-2 h-2 rounded-full bg-[#CEF17B] animate-pulse"></span>
                FINANCIAL EVALUATION MODEL
              </span>
              <span className="border border-[#CDEDB3]/30 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#084734] text-[#CEF17B]">
                CONCEPTUAL
              </span>
            </div>

            {/* Step-by-Step Conceptual Framework */}
            <div className="space-y-4">
              {CONCEPTUAL_MODEL_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-4 bg-[#084734] border border-[#CDEDB3]/15 rounded-[var(--radius-md)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-200 hover:border-[#CEF17B]/40"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#CDEDB3]/60 uppercase">
                      <span>{item.step}</span>
                      <span>•</span>
                      <span>{item.tag}</span>
                    </div>
                    <div className="font-heading text-xs font-bold text-[#CDEDB3] tracking-wide">
                      {item.title}
                    </div>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#CEF17B] bg-[#053325] px-3 py-1.5 rounded-[var(--radius-sm)] border border-[#CEF17B]/30 text-right">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Conceptual Value Flow Diagram */}
            <div className="pt-4 border-t border-[#CDEDB3]/20 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#CDEDB3]/60 uppercase">
                FINANCIAL VALUE FLOW
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-[10px]">
                <div className="p-2.5 bg-[#084734] border border-[#CDEDB3]/15 rounded-[var(--radius-sm)] text-[#CDEDB3]/80">
                  1. ENERGY COST
                </div>
                <div className="p-2.5 bg-[#084734] border border-[#CDEDB3]/15 rounded-[var(--radius-sm)] text-[#CDEDB3]/80">
                  2. SYSTEM SIZING
                </div>
                <div className="p-2.5 bg-[#084734] border border-[#CDEDB3]/15 rounded-[var(--radius-sm)] text-[#CDEDB3]/80">
                  3. YIELD AUDIT
                </div>
                <div className="p-2.5 bg-[#053325] border border-[#CEF17B]/40 rounded-[var(--radius-sm)] text-[#CEF17B] font-bold">
                  4. ASSET YIELD
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="pt-2 text-[10px] font-mono text-[#CDEDB3]/50 text-center">
              * FINANCIAL MODELS COMPUTED POST PHYSICAL & ELECTRICAL SITE AUDIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialValueSection;
