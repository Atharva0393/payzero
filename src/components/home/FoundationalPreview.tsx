import React from "react";
import Badge from "@/components/ui/Badge";
import CourseDesignCard, { type CardData } from "@/components/ui/course-design-cards";

const PILLARS: CardData[] = [
  {
    id: 1,
    colorClass: "green",
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
    colorClass: "green",
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
    colorClass: "green",
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

      {/* 3-Column Pillar Cards in dark green gradient format */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar) => (
          <CourseDesignCard key={pillar.id} data={pillar} />
        ))}
      </div>
    </div>
  );
};

export default FoundationalPreview;
