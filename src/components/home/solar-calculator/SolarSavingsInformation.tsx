"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const CALCULATOR_BENEFITS = [
  {
    title: "Estimate Solar Savings",
    description: "Understand potential monthly and yearly electricity bill reductions.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Size Your Solar System",
    description: "Explore an indicative system capacity based on your consumption.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Understand Installation Requirements",
    description: "See the approximate shadow-free roof area needed for your proposed system.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Plan Your Investment",
    description: "Review estimated installation costs and capital yield models.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Understand Environmental Benefits",
    description: "Explore estimated CO₂ emissions reductions and clean energy contribution.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a9 9 0 0 1 9 9c0 3.9-2.5 7.2-6 8.5V22h-6v-2.5C5.5 18.2 3 14.9 3 11a9 9 0 0 1 9-9z" />
        <path d="M9 10h6" />
        <path d="M12 7v6" />
      </svg>
    ),
  },
];

export interface SolarSavingsInformationProps {
  currentKw?: number;
  currentPin?: string;
}

export const SolarSavingsInformation: React.FC<SolarSavingsInformationProps> = ({
  currentKw = 2.5,
  currentPin = "431003",
}) => {
  return (
    <div className="pt-12 sm:pt-16 space-y-12 sm:space-y-16">
      {/* Editorial Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Educational Text & Benefits */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF8E7] border border-[#E8D8A5] text-[11px] font-mono tracking-widest text-[#102B50] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              TECHNICAL TRANSPARENCY
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B50] tracking-tight leading-[1.15]">
              Calculate Your Solar Savings with Payzero
            </h3>
            <p className="text-sm sm:text-base text-[#536171] leading-relaxed">
              Explore your potential savings from rooftop solar. Your estimated system size,
              electricity savings and installation requirements depend on your energy consumption,
              property architecture, and regional solar insolation.
            </p>
            <p className="text-sm text-[#536171] leading-relaxed">
              The calculator provides an initial baseline estimate. Because physical roof
              geometry, electrical service panels, and utility net-metering policies differ across
              properties, our engineers perform a 3D site audit before issuing a definitive turnkey
              proposal.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#102B50]">
              Why Use the Payzero Solar Calculator?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {CALCULATOR_BENEFITS.map((b, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-[16px] bg-[#FFFFFF] border border-[#E8D8A5] flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-[10px] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] flex items-center justify-center shrink-0 mt-0.5">
                    {b.icon}
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-heading text-xs font-bold text-[#102B50]">
                      {b.title}
                    </div>
                    <div className="text-[11px] text-[#536171] leading-relaxed">
                      {b.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Photography Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[24px] overflow-hidden border border-[#E8D8A5] shadow-lg bg-[#FFFFFF] aspect-[4/3] group">
            <Image
              src="/about/residential-solar-architecture.webp"
              alt="High-resolution photography slot for Payzero commercial infrastructure installation"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Metadata Overlay Strip */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#FFC928]">
                  ENGINEERED SOLAR ASSET
                </span>
                <div className="font-heading text-xs font-semibold text-white/95">
                  Architectural Rooftop Array
                </div>
              </div>
              <span className="border border-white/20 px-2 py-0.5 rounded-[var(--radius-sm)] bg-black/40 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white/90">
                25-YR SPEC
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Action Banner */}
      <div className="p-8 sm:p-10 rounded-[22px] bg-[#FFFFFF] border border-[#E8D8A5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl text-center md:text-left">
          <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50]">
            Get a Solar Recommendation for Your Property
          </h4>
          <p className="text-xs sm:text-sm text-[#536171] leading-relaxed">
            Share your requirements with our team to discuss precision system sizing, structural
            feasibility, and receive an accurate commercial proposal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <Button
            href={`tel:+916002370023`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-[#102B50] text-white hover:bg-[#0B1F3A] border-none font-bold justify-center shadow-md"
          >
            Call Solar Expert →
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto bg-[#FFF0B8] text-[#102B50] border-[#E8D8A5] hover:bg-[#FFE899] font-bold justify-center"
          >
            Book Free Site Audit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolarSavingsInformation;
