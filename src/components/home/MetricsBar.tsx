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
    <div className="py-12 border-b border-[var(--border-light)] bg-[var(--bg-surface)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[var(--border-light)]">
        {METRICS.map((metric, i) => (
          <div
            key={i}
            className={`space-y-2 ${i !== 0 ? "lg:pl-8" : ""} ${
              i !== METRICS.length - 1 ? "lg:pr-8" : ""
            }`}
          >
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-mono">
              {metric.value}
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              {metric.label}
            </div>
            <div className="text-xs text-[var(--text-muted)] leading-relaxed">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsBar;
