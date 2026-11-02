import React from "react";
import Link from "next/link";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Site Survey",
    description: "Detailed site analysis for accurate solar planning.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Clipboard board */}
        <rect x="10" y="10" width="28" height="32" rx="4" strokeWidth="2.5" />
        {/* Clip on top */}
        <path d="M18 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" strokeWidth="2.5" strokeLinecap="round" />
        {/* Checkmark 1 */}
        <path d="M16 20l3 3 6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="20" x2="33" y2="20" strokeWidth="2.5" strokeLinecap="round" />
        {/* Checkmark 2 */}
        <path d="M16 29l3 3 6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="29" x2="33" y2="29" strokeWidth="2.5" strokeLinecap="round" />
        {/* Checklist line 3 */}
        <line x1="16" y1="36" x2="32" y2="36" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description: "Custom Solar System Design for Maximum Efficiency.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Monitor frame */}
        <rect x="6" y="8" width="36" height="25" rx="3" strokeWidth="2.5" />
        {/* Stand */}
        <path d="M24 33v8M17 41h14" strokeWidth="2.5" strokeLinecap="round" />
        {/* Solar grid on screen */}
        <path d="M12 15h11v11H12zM25 15h11v11H25z" strokeWidth="2" />
        {/* Stylus / pen tool overlay */}
        <path d="M33 13l4-4 2 2-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production",
    description: "Quality Components Built for Long-term Performance.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Industrial precision gear teeth */}
        <path
          d="M24 6v4M24 38v4M6 24h4M38 24h4M11.3 11.3l2.8 2.8M33.9 33.9l2.8 2.8M11.3 36.7l2.8-2.8M33.9 14.1l2.8-2.8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Central quality core */}
        <circle cx="24" cy="24" r="10" strokeWidth="2.5" />
        {/* Quality verified checkmark */}
        <path d="M19 24l3.5 3.5 6.5-6.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Installation",
    description: "Safe and Precise Solar System Installation.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Solar Panel Array */}
        <polygon points="8,26 40,26 35,12 13,12" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="24" y1="12" x2="24" y2="26" strokeWidth="2" />
        <line x1="10.5" y1="19" x2="37.5" y2="19" strokeWidth="2" />
        {/* Ground / Roof Mounting Brackets */}
        <path d="M14 26v12M34 26v12M8 38h32" strokeWidth="2.5" strokeLinecap="round" />
        {/* Technician hardhat symbol */}
        <path d="M21 34h6a3 3 0 0 0-6 0z" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Net Metering",
    description: "Complete Support for Grid Connection Approvals.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Round meter housing */}
        <circle cx="24" cy="24" r="16" strokeWidth="2.5" />
        {/* Meter dial / gauge scale */}
        <path d="M14 28a12 12 0 1 1 20 0" strokeWidth="2.5" strokeLinecap="round" />
        {/* Central lightning energy indicator */}
        <path d="M24 16l-3 7h5l-2 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Connection terminals at bottom */}
        <path d="M18 40v3M30 40v3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Subsidy",
    description: "Assistance with Government Solar Subsidy Process.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-8 h-8 sm:w-9 sm:h-9"
        stroke="currentColor"
        aria-hidden="true"
      >
        {/* Certificate / official document */}
        <rect x="11" y="8" width="26" height="32" rx="3" strokeWidth="2.5" />
        {/* Document content lines */}
        <line x1="17" y1="15" x2="31" y2="15" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="21" x2="27" y2="21" strokeWidth="2" strokeLinecap="round" />
        {/* Government ribbon / medal seal */}
        <circle cx="24" cy="30" r="6" strokeWidth="2.5" />
        <path d="M21 35l-2 5 5-2 5 2-2-5" strokeWidth="2" strokeLinejoin="round" />
        {/* Checkmark inside seal */}
        <path d="M22 30l1.5 1.5 3-3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 border-b border-[#E8D8A5]/60 relative">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-xs font-mono tracking-widest uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
          OUR APPROACH
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
          Our Work Process
        </h2>

        <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal max-w-2xl mx-auto">
          From your first consultation to a fully operational solar system, we manage every step with precision, transparency, and expert guidance.
        </p>
      </div>

      {/* Six Process Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-[24px] bg-white border border-[#E8D8A5]/80 hover:border-[#FFC928] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle Top Accent on Hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFC928] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon Container with Step Badge */}
            <div className="relative mb-6">
              <div className="flex items-center justify-center w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-[#102B50] text-[#FFC928] shadow-md group-hover:scale-105 group-hover:bg-[#0B1F3A] transition-all duration-300">
                {step.icon}
              </div>
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#FFC928] text-[#102B50] font-mono font-bold text-xs shadow-md border-2 border-white">
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50] tracking-tight group-hover:text-[#EAA900] transition-colors duration-200">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-[#536171] leading-relaxed max-w-xs font-normal">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Action / Next Step Link */}
      <div className="mt-12 sm:mt-16 text-center">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#102B50] text-white hover:bg-[#0B1F3A] text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
        >
          <span>Schedule a Free Site Survey</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
};

export default ProcessSection;
