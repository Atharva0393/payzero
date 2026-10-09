import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import HeroSection from "@/components/home/HeroSection";
import ApproachSection from "@/components/home/ApproachSection";
import FoundationalPreview from "@/components/home/FoundationalPreview";
import FinancialValueSection from "@/components/home/FinancialValueSection";
import SolarSavingsCalculator from "@/components/home/SolarSavingsCalculator";
import MetricsBar from "@/components/home/MetricsBar";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Dedicated Homepage Hero */}
      <HeroSection />

      <Container size="default">
        {/* 2. Core Thesis & Approach */}
        <ApproachSection />

        {/* 3. System Architecture Foundation (3-card format) */}
        <FoundationalPreview />

        {/* 4. Financial Value Architecture */}
        <FinancialValueSection />

        {/* 5. Navigation Hub to Dedicated Subpages */}
        <section className="py-16 sm:py-24 border-t border-[var(--border-light)]">
          <div className="max-w-3xl space-y-4 mb-12">
            <Badge variant="outline">EXPLORE PAYZERO</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Dedicated System Hubs.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              Explore our purpose-built system configurations, 4-stage engineering methodology, and active project portfolio on their dedicated pages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/solutions"
              className="group p-8 rounded-[20px] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#EAA900] uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                    01 // SYSTEMS
                  </span>
                  <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF8E7] text-[#102B50] text-[10px]">
                    SOLAR
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                  Clean Energy Solutions
                </h3>
                <p className="text-sm text-[#536171] leading-relaxed font-normal">
                  Utility-scale ground mounts, commercial rooftops, microgrids, and industrial BESS battery storage systems.
                </p>
              </div>
              <div className="relative z-10 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#102B50] group-hover:text-[#EAA900] group-hover:translate-x-1 transition-all">
                <span>View Solutions</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/how-it-works"
              className="group p-8 rounded-[20px] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#EAA900] uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                    02 // METHODOLOGY
                  </span>
                  <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF8E7] text-[#102B50] text-[10px]">
                    PROCESS
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                  How It Works
                </h3>
                <p className="text-sm text-[#536171] leading-relaxed font-normal">
                  Explore our 4-stage engineering lifecycle: Site Assessment, System Design, Installation, and Grid Activation.
                </p>
              </div>
              <div className="relative z-10 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#102B50] group-hover:text-[#EAA900] group-hover:translate-x-1 transition-all">
                <span>Explore Process</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/projects"
              className="group p-8 rounded-[20px] bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] hover:border-[#FFC928] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#EAA900] uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                    03 // PORTFOLIO
                  </span>
                  <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF8E7] text-[#102B50] text-[10px]">
                    ASSETS
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                  Featured Projects
                </h3>
                <p className="text-sm text-[#536171] leading-relaxed font-normal">
                  Review our deployed commercial solar assets, power output telemetry, and documented payback yields.
                </p>
              </div>
              <div className="relative z-10 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#102B50] group-hover:text-[#EAA900] group-hover:translate-x-1 transition-all">
                <span>See Projects</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 6. Solar Savings and EMI Calculator */}
        <SolarSavingsCalculator />

        {/* 7. Metrics Bar */}
        <MetricsBar />

        {/* 8. Final Consultation CTA */}
        <FinalCTASection />
      </Container>
    </div>
  );
}
