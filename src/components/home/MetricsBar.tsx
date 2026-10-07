import React from "react";

const METRICS = [
  {
    value: "99.98%",
    label: "Grid Synchronization Uptime",
    detail: "Sub-millisecond microgrid failover switch",
  },
  {
    value: "< 4.8 YRS",
    label: "Capital Payback Window",
    detail: "Accelerated depreciation & ITC tax optimized",
  },
  {
    value: "450+ MW",
    label: "Under Active Management",
    detail: "Commercial rooftops & ground arrays",
  },
  {
    value: "25-YEAR",
    label: "Linear Output Warranty",
    detail: "Guaranteed 88% generation retention",
  },
];

export const MetricsBar: React.FC = () => {
  return (
    <div className="my-12 sm:my-16 rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-light)] p-8 sm:p-10 lg:p-12 shadow-[0_4px_20px_rgba(8,71,52,0.04)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-[var(--border-light)] items-center">
        {METRICS.map((metric, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-2.5 px-2 sm:px-4 lg:px-6 xl:px-8"
          >
            <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none">
              {metric.value}
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
              {metric.label}
            </div>
            <div className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed max-w-[240px]">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsBar;
