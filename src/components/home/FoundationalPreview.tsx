import React from "react";
import Badge from "@/components/ui/Badge";

export interface PillarData {
  id: number;
  title: string;
  description: string;
  progressPercent: string;
  progressValue: string;
  statusLabel: string;
  countdownText: string;
}

const PILLARS: PillarData[] = [
  {
    id: 1,
    title: "Utility-Grade Infrastructure",
    description:
      "Tier-1 N-type solar cells integrated with industrial battery energy storage systems (BESS) designed for maximum energy density and severe thermal endurance.",
    progressPercent: "98%",
    progressValue: "98% Efficiency",
    statusLabel: "Engineering Spec",
    countdownText: "Grid Ready",
  },
  {
    id: 2,
    title: "Financial Yield Structuring",
    description:
      "Zero-upfront capital structures, tax equity optimization, and direct power purchase agreements engineered to provide immediate positive cash flow.",
    progressPercent: "100%",
    progressValue: "Zero Upfront Capex",
    statusLabel: "Capital Model",
    countdownText: "Optimized Yield",
  },
  {
    id: 3,
    title: "Automated Telemetry & O&M",
    description:
      "Continuous inverter-level monitoring, predictive degradation analytics, and 24/7 rapid dispatch field support across all regional assets.",
    progressPercent: "99.9%",
    progressValue: "99.9% Telemetry",
    statusLabel: "Operations & Fleet",
    countdownText: "24/7 Monitoring",
  },
];

export const FoundationalPreview: React.FC = () => {
  return (
    <div className="py-20 md:py-28 space-y-16">
      {/* Section Header */}
      <div className="max-w-3xl space-y-4">
        <Badge variant="outline">SYSTEM ARCHITECTURE FOUNDATION</Badge>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Engineered for Durability. Structured for Capital Efficiency.
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          Payzero combines high-voltage electrical engineering with structured energy finance to deliver turnkey, grid-resilient power plants.
        </p>
      </div>

      {/* 3-Column Pillar Cards in warm yellow box format */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="group relative p-7 sm:p-8 rounded-[20px] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between space-y-6 overflow-hidden"
          >
            {/* Subtle background technical grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            {/* Card Content */}
            <div className="relative z-10 space-y-3">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50] tracking-tight group-hover:text-[#0B1F3A] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#536171] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            {/* Progress and Footer */}
            <div className="relative z-10 space-y-5 pt-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="uppercase tracking-wider text-[#536171] font-semibold text-[11px]">
                    PROGRESS
                  </span>
                  <span className="font-bold text-[#102B50] text-xs">
                    {pillar.progressValue}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E8D8A5]/60 border border-[#E8D8A5] overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#EAA900] to-[#FFC928] transition-all duration-700 shadow-xs"
                    style={{ width: pillar.progressPercent }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D8A5] flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#536171] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAA900]" />
                  <span>{pillar.statusLabel}</span>
                </div>
                <span className="border border-[#E8D8A5] px-3 py-1 rounded-full bg-[#FFF8E7] text-[10px] sm:text-[11px] font-bold text-[#102B50] tracking-wide shadow-2xs">
                  {pillar.countdownText}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundationalPreview;
