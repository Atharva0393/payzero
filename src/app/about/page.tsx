import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Pay Zero Energy Expert Private Limited | Solar EPC Solutions",
  description:
    "Corporate profile of Pay Zero Energy Expert Private Limited. End-to-end solar EPC solutions, engineering expertise, integrated procurement, construction, and asset lifecycle management across Maharashtra.",
};

const CAPABILITIES = [
  {
    number: "01",
    title: "Engineering",
    description:
      "Use advanced 3D modelling, structural analysis and precise electrical layout planning to improve spatial efficiency and energy generation.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Procurement",
    description:
      "Integrate internally manufactured, tier-quality solar PV modules alongside industry-certified components to support supply-chain resilience and lower capital expenditure.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Deploy certified engineering teams for safety-conscious civil works, electrical integration and utility grid interconnection.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Asset Lifecycle Management",
    description:
      "Support quality assurance testing, commissioning compliance and operational optimisation throughout the asset's lifetime.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M12 22v-4" />
        <path d="m19.07 19.07-2.83-2.83" />
        <path d="M22 12h-4" />
        <path d="m19.07 4.93-2.83 2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const STATISTICS = [
  {
    value: "27+",
    label: "Industrial & Utility Projects",
    detail: "Executed or currently under execution across Maharashtra.",
    tag: "INDUSTRIAL SCALE",
  },
  {
    value: "1.60 MW",
    label: "Cumulative Capacity",
    detail: "Reported aggregate cumulative capacity associated with industrial and utility projects.",
    tag: "REPORTED SCALE",
  },
  {
    value: "328 kW",
    label: "Decentralized Rooftop",
    detail: "Reported decentralized rooftop capacity delivered across residential and commercial markets.",
    tag: "ROOFTOP INFRASTRUCTURE",
  },
  {
    value: "82+",
    label: "Clients Served",
    detail: "Residential and commercial clients reported as served across Maharashtra.",
    tag: "COMMERCIAL & RESIDENTIAL",
  },
];

const OPERATING_PRINCIPLES = [
  {
    number: "01",
    title: "Integrated Project Responsibility",
    description:
      "A connected approach spanning engineering, procurement, construction and commissioning under a single accountable team.",
  },
  {
    number: "02",
    title: "Engineering-Led Planning",
    description:
      "Project design informed by structural analysis, electrical layout planning and spatial efficiency to maximize lifetime energy yield.",
  },
  {
    number: "03",
    title: "Quality and Safety Focus",
    description:
      "Rigorous attention to quality assurance testing, commissioning compliance and standards-conscious civil and electrical execution.",
  },
  {
    number: "04",
    title: "Long-Term Performance",
    description:
      "An unwavering emphasis on operational optimisation, reliable generation metrics and the multi-decade useful lifetime of solar assets.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-[#FFF8E7] text-[#102B50]">
      {/* ========================================================
          SECTION 1 — Editorial Hero
          ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-24 border-b border-[#E8D8A5]/60 relative overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                CORPORATE PROFILE · PAYZERO
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102B50] leading-[1.08]">
                Engineering a{" "}
                <span className="text-[#EAA900]">Brighter Energy Future</span>.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-[#536171] leading-relaxed font-normal max-w-2xl">
                Pay Zero Energy Expert Private Limited delivers end-to-end solar EPC solutions,
                combining engineering expertise, integrated procurement and professional execution to
                support reliable, high-performance solar installations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="#capabilities"
                  variant="primary"
                  size="lg"
                  className="bg-[#102B50] text-white hover:bg-[#0B1F3A] border-none font-bold justify-center shadow-md"
                >
                  Explore Our Capabilities →
                </Button>

                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="bg-[#FFF0B8] text-[#102B50] border-[#E8D8A5] hover:bg-[#FFE899] font-bold justify-center"
                >
                  Discuss Your Project
                </Button>
              </div>

              {/* Subtle Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#536171]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAA900]" />
                  <span>Maharashtra Footprint</span>
                </div>
                <span className="text-[#536171]/40">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAA900]" />
                  <span>Turnkey Solar EPC</span>
                </div>
                <span className="text-[#536171]/40">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAA900]" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Quality Installation Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[24px] overflow-hidden border border-[#E8D8A5] shadow-xl bg-[#FFF0B8] aspect-[4/3] group">
                <Image
                  src="/about/residential-solar-architecture.webp"
                  alt="Modern architectural private estate with integrated high-efficiency solar roof system"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Glassmorphic Metadata Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-mono text-[10px] tracking-widest uppercase text-[#FFC928]">
                      PAYZERO ASSET ARCHITECTURE
                    </div>
                    <div className="font-heading text-xs font-semibold text-white/95">
                      Integrated Rooftop Solar Installation
                    </div>
                  </div>
                  <span className="border border-white/20 px-2 py-0.5 rounded-[var(--radius-sm)] bg-black/40 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white/90">
                    4/3 SPEC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2 — Corporate Overview
          ======================================================== */}
      <section className="py-16 sm:py-24 lg:py-28 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                WHO WE ARE
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
                End-to-End Solar Expertise. Built for Long-Term Performance.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
                <p>
                  Pay Zero Energy Expert Private Limited is a comprehensive Solar EPC (Engineering,
                  Procurement, and Construction) solutions provider dedicated to deploying
                  world-class technology to design, install, and commission solar projects.
                </p>
                <p>
                  With over a decade of operational experience in executing high-performance solar
                  plants, the company delivers end-to-end clean energy installations focused on
                  efficiency, resource management and long-term cost-effectiveness.
                </p>
                <p>
                  The company leverages industry expertise and an integrated supply chain to manage
                  the project lifecycle, from initial concept through final grid commissioning.
                </p>
              </div>
            </div>

            {/* Right Column: Financial Strength Highlight & Landscape Visual */}
            <div className="lg:col-span-5 space-y-6">
              {/* Financial Highlight Card (Dated Source Claim) */}
              <div className="relative overflow-hidden bg-[#FFF0B8] border border-[#E8D8A5] rounded-[24px] p-8 shadow-xs">
                <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#536171] uppercase">
                    <span className="flex items-center gap-2 text-[#102B50] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                      FINANCIAL STRENGTH
                    </span>
                    <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF8E7] text-[#102B50] font-bold">
                      SOURCE CLAIM
                    </span>
                  </div>

                  <div>
                    <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[#102B50] tracking-tight">
                      ₹4 Crore
                    </div>
                    <div className="font-heading text-sm font-bold text-[#102B50] mt-1">
                      Reported Annual Turnover
                    </div>
                  </div>

                  <p className="text-xs text-[#536171] leading-relaxed font-normal border-t border-[#E8D8A5] pt-3">
                    Reported annual turnover: ₹4 Crore for the financial year referenced in the
                    corporate profile.
                  </p>
                </div>
              </div>

              {/* Supporting Landscape Installation Frame */}
              <div className="relative rounded-[20px] overflow-hidden border border-[#E8D8A5] aspect-[16/9] shadow-sm bg-[#FFF0B8] group">
                <Image
                  src="/about/sustainable-energy-landscape.webp"
                  alt="High-yield ground and landscape solar panel installation"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-black/60 backdrop-blur-xs text-white flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                  <span>PAYZERO // CLEAN ENERGY INFRASTRUCTURE</span>
                  <span className="text-[#FFC928]">GROUND ARRAY</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 3 — Capabilities and Turnkey EPC Solutions
          ======================================================== */}
      <section id="capabilities" className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              OUR CAPABILITIES
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              One Partner. Every Stage of Solar.
            </h2>

            <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
              Pay Zero Energy operates as a single point of responsibility, streamlining the
              transition to renewable energy through integrated engineering, procurement, construction
              and asset lifecycle capabilities.
            </p>
          </div>

          {/* 4 Capability Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="group relative bg-[#FFFFFF] border border-[#E8D8A5] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Glyph + Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] flex items-center justify-center group-hover:bg-[#FFC928] transition-colors">
                      {cap.icon}
                    </div>
                    <span className="font-mono text-sm font-bold text-[#EAA900]">
                      {cap.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#536171] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8D8A5]/60 flex items-center justify-between text-[11px] font-mono text-[#536171]">
                  <span>CAPABILITY // {cap.number}</span>
                  <span className="text-[#102B50] font-bold group-hover:text-[#EAA900] transition-colors">
                    TURNKEY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 4 — Track Record and Market Footprint
          ======================================================== */}
      <section id="track-record" className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative bg-[#FFF0B8]/30">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              OUR EXPERIENCE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              A Growing Footprint Across Maharashtra.
            </h2>

            <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
              Reported figures from the corporate profile as of July 31, 2026, reflecting industrial
              scale projects and decentralized rooftop installations.
            </p>
          </div>

          {/* 4 Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="relative bg-[#FFFFFF] border border-[#E8D8A5] rounded-[22px] p-7 sm:p-8 space-y-4 shadow-sm hover:border-[#FFC928] transition-all duration-300"
              >
                <div className="font-mono text-[10px] tracking-widest text-[#EAA900] uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  {stat.tag}
                </div>

                <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[#102B50] tracking-tight">
                  {stat.value}
                </div>

                <div className="font-heading text-base font-bold text-[#102B50]">
                  {stat.label}
                </div>

                <p className="text-xs sm:text-sm text-[#536171] leading-relaxed font-normal pt-2 border-t border-[#E8D8A5]/60">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Integrated Photographic Evidence Card */}
          <div className="relative rounded-[24px] overflow-hidden border border-[#E8D8A5] bg-[#FFF0B8] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-[340px]">
                <Image
                  src="/about/turnkey-epc-installations.webp"
                  alt="Industrial and rooftop solar installations spanning engineering and execution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <span className="font-mono text-xs text-[#EAA900] font-bold uppercase tracking-wider">
                  SOURCE FOOTPRINT RECORD
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#102B50]">
                  Regional & Utility-Scale Deployment
                </h3>
                <p className="text-sm text-[#536171] leading-relaxed">
                  Commanding an aggregate cumulative capacity of 1.60 MW across 27+ industrial and
                  utility-scale projects, alongside 328 kW of decentralized rooftop installations for
                  82+ clients.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#536171]/70 border-t border-[#E8D8A5]">
                  * Figures reported in corporate profile as of July 31, 2026.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 5 — Solar Installations and Visual Portfolio
          ======================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                SOLAR IN PRACTICE
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
                Designed Around Real Energy Needs.
              </h2>

              <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
                Deploying precision solar energy infrastructure across residential estates,
                commercial properties, and industrial ground systems.
              </p>
            </div>

            <Button
              href="/projects"
              variant="secondary"
              size="md"
              className="bg-[#FFFFFF] text-[#102B50] border-[#E8D8A5] hover:bg-[#FFF0B8] font-bold self-start md:self-auto"
            >
              Explore Our Projects →
            </Button>
          </div>

          {/* 3-Column Visual Grid with Authentic PDF Photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Asset 1: Residential Solar */}
            <div className="space-y-4 group">
              <div className="relative rounded-[20px] overflow-hidden border border-[#E8D8A5] aspect-[4/3] bg-[#FFF0B8] shadow-xs">
                <Image
                  src="/about/residential-solar-architecture.webp"
                  alt="Residential rooftop solar installation integrated with estate architecture"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[11px] text-[#EAA900] uppercase font-bold tracking-wider">
                  01 // RESIDENTIAL ROOFTOP
                </div>
                <h3 className="font-heading text-lg font-bold text-[#102B50]">
                  Architectural Residential Systems
                </h3>
                <p className="text-xs text-[#536171] leading-relaxed">
                  Tailored rooftop installations designed for modern homes and private estates.
                </p>
              </div>
            </div>

            {/* Asset 2: Turnkey EPC Execution */}
            <div className="space-y-4 group">
              <div className="relative rounded-[20px] overflow-hidden border border-[#E8D8A5] aspect-[4/3] bg-[#FFF0B8] shadow-xs">
                <Image
                  src="/about/turnkey-epc-installations.webp"
                  alt="Commercial and utility solar installation and grid connection"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[11px] text-[#EAA900] uppercase font-bold tracking-wider">
                  02 // INDUSTRIAL & UTILITY
                </div>
                <h3 className="font-heading text-lg font-bold text-[#102B50]">
                  Turnkey EPC Execution
                </h3>
                <p className="text-xs text-[#536171] leading-relaxed">
                  Safety-conscious civil works, commercial arrays, and utility grid interconnection.
                </p>
              </div>
            </div>

            {/* Asset 3: Sustainable Landscape Array */}
            <div className="space-y-4 group">
              <div className="relative rounded-[20px] overflow-hidden border border-[#E8D8A5] aspect-[4/3] bg-[#FFF0B8] shadow-xs">
                <Image
                  src="/about/sustainable-energy-landscape.webp"
                  alt="High-density ground-mounted solar panels in sustainable landscape"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[11px] text-[#EAA900] uppercase font-bold tracking-wider">
                  03 // SUSTAINABLE LANDSCAPE
                </div>
                <h3 className="font-heading text-lg font-bold text-[#102B50]">
                  Ground-Mounted Solar Arrays
                </h3>
                <p className="text-xs text-[#536171] leading-relaxed">
                  Large-format clean energy installations engineered for sustained multi-decade yield.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 6 — Strategic Vision and Mission
          ======================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          {/* Header */}
          <div className="max-w-2xl space-y-4 mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              OUR DIRECTION
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              Purpose-Driven Leadership in Clean Energy.
            </h2>
          </div>

          {/* Two Editorial Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel 1: Vision */}
            <div className="relative overflow-hidden bg-[#FFF0B8] border border-[#E8D8A5] rounded-[24px] p-8 sm:p-12 space-y-6 shadow-xs">
              <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#EAA900] uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
                  OUR VISION
                </div>

                <blockquote className="font-heading text-xl sm:text-2xl font-bold text-[#102B50] leading-snug">
                  &ldquo;To become one of the most valuable solar companies worldwide, consistently
                  delivering benchmark sustainable energy solutions that power global progress
                  responsibly.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-[#E8D8A5] font-mono text-[11px] text-[#536171]">
                  STRATEGIC VISION · PAY ZERO ENERGY EXPERT PRIVATE LIMITED
                </div>
              </div>
            </div>

            {/* Panel 2: Mission */}
            <div className="relative overflow-hidden bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-8 sm:p-12 space-y-6 shadow-sm">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#EAA900] uppercase font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
                  OUR MISSION
                </div>

                <blockquote className="font-heading text-xl sm:text-2xl font-bold text-[#102B50] leading-snug">
                  &ldquo;To deliver highly reliable, high-yield solar solutions through the
                  continuous adoption of world-class technology, operational innovation, and
                  client-centric engineering practices.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-[#E8D8A5] font-mono text-[11px] text-[#536171]">
                  OPERATIONAL MISSION · PAY ZERO ENERGY EXPERT PRIVATE LIMITED
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 7 — Why Payzero
          ======================================================== */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              WHY PAYZERO
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              Operating Principles Engineered for Reliability.
            </h2>

            <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
              Descriptions of the company&apos;s stated operating approach across project design,
              component selection, civil execution, and asset longevity.
            </p>
          </div>

          {/* 4 Themes Grid with Architectural Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {OPERATING_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="space-y-3.5 p-6 rounded-[18px] bg-[#FFFFFF] border border-[#E8D8A5] shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#EAA900]">
                  <span>{principle.number}</span>
                  <span className="text-[#536171]/40">—</span>
                  <span className="text-[#102B50]">PRINCIPLE</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#102B50]">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#536171] leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 8 — Company Details and Contact
          ======================================================== */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 border-b border-[#E8D8A5]/60 relative">
        <Container size="default">
          <div className="relative overflow-hidden bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] rounded-[24px] p-8 sm:p-12 lg:p-16 shadow-xs">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Context & Direct Action */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF8E7] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  CONNECT WITH PAYZERO
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
                  Let&apos;s Discuss Your Solar Requirements.
                </h2>

                <p className="text-base sm:text-lg text-[#536171] leading-relaxed">
                  Connect with our team to discuss your property, energy requirements and potential
                  solar installation.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    href="tel:+916002370023"
                    variant="primary"
                    size="lg"
                    className="bg-[#102B50] text-white hover:bg-[#0B1F3A] border-none font-bold justify-center shadow-md"
                  >
                    Call +91 60023 70023
                  </Button>

                  <Button
                    href="mailto:pay0energy@gmail.com"
                    variant="secondary"
                    size="lg"
                    className="bg-[#FFF8E7] text-[#102B50] border-[#E8D8A5] hover:bg-[#FFFFFF] font-bold justify-center"
                  >
                    Email pay0energy@gmail.com
                  </Button>
                </div>
              </div>

              {/* Right Column: Authoritative Corporate Profile Details */}
              <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E8D8A5] rounded-[20px] p-7 sm:p-8 space-y-5 shadow-sm">
                <div className="font-mono text-xs text-[#EAA900] uppercase font-bold tracking-wider pb-3 border-b border-[#E8D8A5] flex items-center justify-between">
                  <span>OFFICIAL CORPORATE CREDENTIALS</span>
                  <span className="text-[#102B50]">MAHARASHTRA, INDIA</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#536171] uppercase">
                      Legal Company Name
                    </div>
                    <div className="font-heading text-base font-bold text-[#102B50] mt-0.5">
                      Pay Zero Energy Expert Private Limited
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#536171] uppercase">
                      Department & Contact
                    </div>
                    <div className="font-semibold text-[#102B50] mt-0.5">
                      Business Development Department · Vivek Rathod
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#536171] uppercase">
                      Registered Office Address
                    </div>
                    <div className="text-[#102B50] leading-relaxed mt-0.5">
                      Shop No. 07, Shopping Complex, B Sector, in front of Raodev Hospital, CIDCO N-1,
                      Chhatrapati Sambhajinagar – 431003, Maharashtra, India.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8D8A5]">
                    <div>
                      <div className="text-[11px] font-mono tracking-wider text-[#536171] uppercase">
                        Telephone
                      </div>
                      <a
                        href="tel:+916002370023"
                        className="font-mono text-sm font-bold text-[#102B50] hover:text-[#EAA900] transition-colors mt-0.5 block"
                      >
                        +91 60023 70023
                      </a>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono tracking-wider text-[#536171] uppercase">
                        Official Email
                      </div>
                      <a
                        href="mailto:pay0energy@gmail.com"
                        className="text-sm font-semibold text-[#102B50] hover:text-[#EAA900] transition-colors mt-0.5 block break-all"
                      >
                        pay0energy@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E8D8A5] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#536171]">GSTIN:</span>
                    <span className="font-bold text-[#102B50]">27AAQCP1719G1Z7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 9 — Closing CTA
          ======================================================== */}
      <section className="py-16 sm:py-24 lg:py-28 relative">
        <Container size="default">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              Your Next Solar Project Starts with a Conversation.
            </h2>

            <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal max-w-2xl mx-auto">
              Share your requirements with Payzero and explore a solar solution designed around your
              property and energy needs.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="tel:+916002370023"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-[#102B50] text-white hover:bg-[#0B1F3A] border-none px-8 py-4 text-base font-bold justify-center shadow-md"
              >
                Get a Solar Consultation →
              </Button>

              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-[#FFFFFF] text-[#102B50] border-[#E8D8A5] hover:bg-[#FFF0B8] px-8 py-4 text-base font-bold justify-center"
              >
                Explore Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
