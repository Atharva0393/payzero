import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import HowItWorks from "@/components/ui/how-it-works";
import type { Step } from "@/components/ui/how-it-works";

const PROCESS_STEPS: Step[] = [
  {
    title: "Assess",
    description:
      "Understand the property architecture, energy consumption profile, available installation area, and project goals.",
    colors: {
      bg: "bg-[#084734]",
      text: "text-[#CEF17B]",
      title: "text-[#CEF17B]",
      description: "text-[#CDEDB3]",
      border: "border-[#084734]",
      pin: "text-[#084734]",
    },
  },
  {
    title: "Design",
    description:
      "Develop a purpose-built solar system tailored around the property's physical characteristics and power requirements.",
    colors: {
      bg: "bg-[#CEF17B]",
      text: "text-[#084734]",
      title: "text-[#084734]",
      description: "text-[#084734]/80",
      border: "border-[#CEF17B]",
      pin: "text-[#084734]",
    },
  },
  {
    title: "Install",
    description:
      "Coordinate the physical installation and electrical integration with meticulous attention to execution quality.",
    colors: {
      bg: "bg-[#084734]",
      text: "text-[#CEF17B]",
      title: "text-[#CEF17B]",
      description: "text-[#CDEDB3]",
      border: "border-[#084734]",
      pin: "text-[#084734]",
    },
  },
  {
    title: "Activate",
    description:
      "Commission the solar infrastructure, verify system telemetry, and transition the property into live energy generation.",
    colors: {
      bg: "bg-[#CEF17B]",
      text: "text-[#084734]",
      title: "text-[#084734]",
      description: "text-[#084734]/80",
      border: "border-[#CEF17B]",
      pin: "text-[#084734]",
    },
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 border-b border-[var(--border-light)] relative">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
        {/* Left: Eyebrow + Headline */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="neutral">THE PROCESS</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            From Assessment to Energy Generation.
          </h2>
        </div>

        {/* Right: Supporting Copy */}
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Every project starts with understanding the property and energy requirements, followed by system design, execution, and commissioning. We handle the complexity — you understand every step.
          </p>
        </div>
      </div>

      {/* Pinned Card How-It-Works Layout */}
      <HowItWorks features={PROCESS_STEPS} />

      {/* Simple Text CTA */}
      <div className="mt-12 sm:mt-16 text-left">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] hover:text-[var(--accent-highlight)] transition-colors duration-200 group focus:outline-none focus:underline"
        >
          <span>Start With a Consultation</span>
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
    </section>
  );
};

export default ProcessSection;
