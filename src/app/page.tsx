import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import HeroSection from "@/components/home/HeroSection";
import ApproachSection from "@/components/home/ApproachSection";
import FoundationalPreview from "@/components/home/FoundationalPreview";
import FinancialValueSection from "@/components/home/FinancialValueSection";
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

        {/* 3. System Architecture Foundation (3-card dark green gradient format) */}
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
              className="group p-8 rounded-[20px] bg-[#084734] text-[#CDEDB3] border border-[#CEF17B]/20 hover:border-[#CEF17B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(8,71,52,0.2)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#CEF17B] uppercase tracking-wider font-semibold">
                  01 // SYSTEMS
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F4FBE8] group-hover:text-[#CEF17B] transition-colors">
                  Clean Energy Solutions
                </h3>
                <p className="text-sm text-[#CDEDB3]/80 leading-relaxed font-normal">
                  Utility-scale ground mounts, commercial rooftops, microgrids, and industrial BESS battery storage systems.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#CEF17B] group-hover:underline">
                <span>View Solutions</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/how-it-works"
              className="group p-8 rounded-[20px] bg-[#084734] text-[#CDEDB3] border border-[#CEF17B]/20 hover:border-[#CEF17B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(8,71,52,0.2)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#CEF17B] uppercase tracking-wider font-semibold">
                  02 // METHODOLOGY
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F4FBE8] group-hover:text-[#CEF17B] transition-colors">
                  How It Works
                </h3>
                <p className="text-sm text-[#CDEDB3]/80 leading-relaxed font-normal">
                  Explore our 4-stage engineering lifecycle: Site Assessment, System Design, Installation, and Grid Activation.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#CEF17B] group-hover:underline">
                <span>Explore Process</span>
                <span>→</span>
              </div>
            </Link>

            <Link
              href="/projects"
              className="group p-8 rounded-[20px] bg-[#084734] text-[#CDEDB3] border border-[#CEF17B]/20 hover:border-[#CEF17B]/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(8,71,52,0.2)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#CEF17B] uppercase tracking-wider font-semibold">
                  03 // PORTFOLIO
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F4FBE8] group-hover:text-[#CEF17B] transition-colors">
                  Featured Projects
                </h3>
                <p className="text-sm text-[#CDEDB3]/80 leading-relaxed font-normal">
                  Review our deployed commercial solar assets, power output telemetry, and documented payback yields.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#CEF17B] group-hover:underline">
                <span>See Projects</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 6. Metrics Bar */}
        <MetricsBar />

        {/* 7. Final Consultation CTA */}
        <FinalCTASection />
      </Container>
    </div>
  );
}
