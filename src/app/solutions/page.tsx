import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SolutionsSection from "@/components/home/SolutionsSection";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Solar & Energy Storage Solutions | Payzero",
  description:
    "Explore Payzero's commercial solar, utility ground arrays, battery storage (BESS), and microgrid clean energy solutions.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#FFF8E7] text-[#102B50]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-[#E8D8A5]/40">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]"></span>
              PAYZERO INFRASTRUCTURE SOLUTIONS
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102B50] leading-[1.08]">
              Purpose-Built Clean Energy Architecture.
            </h1>
            <p className="text-lg sm:text-xl text-[#536171] leading-relaxed font-normal">
              From commercial rooftops to utility-scale ground mounts and battery storage, we design clean energy systems around your property&apos;s exact load profile.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <Container size="default">
        <SolutionsSection />
      </Container>

      {/* Detailed Technical Specs Summary */}
      <section className="py-20 border-t border-[#E8D8A5]/40">
        <Container size="default">
          <div className="relative overflow-hidden bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] rounded-[var(--radius-lg)] p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102B50]">
                Engineered for Long-Term Infrastructure Yield
              </h2>
              <p className="text-sm sm:text-base text-[#536171]">
                All Payzero installations feature Tier-1 N-type solar modules, high-efficiency string & central inverters, and utility-grade grid interconnection protection.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E8D8A5]">
              <div className="space-y-2">
                <div className="font-mono text-xs text-[#EAA900] tracking-wider uppercase font-bold">
                  01 // SOLAR MODULES
                </div>
                <div className="font-heading text-lg font-bold text-[#102B50]">
                  Tier-1 Bifacial N-Type Glass
                </div>
                <p className="text-xs text-[#536171]">
                  22.8% module efficiency with 30-year linear performance warranty.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-[#EAA900] tracking-wider uppercase font-bold">
                  02 // STORAGE & INVERTERS
                </div>
                <div className="font-heading text-lg font-bold text-[#102B50]">
                  Liquid-Cooled BESS & Inverters
                </div>
                <p className="text-xs text-[#536171]">
                  High-density lithium iron phosphate (LFP) with active thermal management.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-[#EAA900] tracking-wider uppercase font-bold">
                  03 // MONITORING
                </div>
                <div className="font-heading text-lg font-bold text-[#102B50]">
                  24/7 Utility Telemetry
                </div>
                <p className="text-xs text-[#536171]">
                  Real-time string-level analytics and automated grid export optimization.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4 flex items-center justify-between">
              <Button
                href="/#contact"
                variant="primary"
                size="lg"
                className="bg-[#102B50] text-white hover:bg-[#0B1F3A] border-none font-bold shadow-md"
              >
                Discuss Solutions for Your Property →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
