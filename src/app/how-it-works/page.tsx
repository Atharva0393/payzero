import React from "react";
import Container from "@/components/ui/Container";
import ProcessSection from "@/components/home/ProcessSection";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "How It Works | Payzero Solar Infrastructure",
  description:
    "Discover Payzero's 4-step engineering methodology: Site Assessment, Structural Design, Turnkey Installation, and Grid Activation.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#FFF8E7] text-[#102B50]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-[#E8D8A5]/40">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF0B8] border border-[#E8D8A5] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]"></span>
              THE PAYZERO METHODOLOGY
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102B50] leading-[1.08]">
              A Rigorous, 4-Stage Infrastructure Process.
            </h1>
            <p className="text-lg sm:text-xl text-[#536171] leading-relaxed font-normal">
              We manage the entire project lifecycle—from initial architectural & load audit to utility interconnection and commercial asset commissioning.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Process Breakdown */}
      <Container size="default">
        <ProcessSection />
      </Container>

      {/* Detailed Technical Workflow */}
      <section className="py-16 border-t border-[#E8D8A5]/40">
        <Container size="default">
          <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#FFF0B8] text-[#102B50] border border-[#E8D8A5] rounded-[var(--radius-lg)] p-8 sm:p-12 shadow-xs">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs font-mono text-[#EAA900] tracking-widest uppercase font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                ENGINEERING TRANSPARENCY
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#102B50]">
                Zero Guesswork. Full Structural & Financial Clarity.
              </h2>
              <p className="text-sm text-[#536171] leading-relaxed">
                Before any equipment is delivered to site, Payzero performs 3D LIDAR shading analysis, structural roof load stamps, electrical single-line diagrams, and utility tariff rate optimization.
              </p>
            </div>

            <div className="relative z-10 space-y-4 font-mono text-xs text-[#102B50] bg-[#FFFFFF] p-6 rounded-[var(--radius-md)] border border-[#E8D8A5] shadow-sm">
              <div className="flex justify-between border-b border-[#E8D8A5] pb-2.5">
                <span className="text-[#536171]">SITE AUDIT & SHADING</span>
                <span className="text-[#EAA900] font-bold">STAGE 01</span>
              </div>
              <div className="flex justify-between border-b border-[#E8D8A5] pb-2.5">
                <span className="text-[#536171]">PE CANONICAL STAMP</span>
                <span className="text-[#EAA900] font-bold">STAGE 02</span>
              </div>
              <div className="flex justify-between border-b border-[#E8D8A5] pb-2.5">
                <span className="text-[#536171]">AHJ PERMITTING & GRID</span>
                <span className="text-[#EAA900] font-bold">STAGE 03</span>
              </div>
              <div className="flex justify-between pt-0.5 items-center">
                <span className="text-[#536171]">PTO ACTIVATION</span>
                <span className="text-[#102B50] font-extrabold bg-[#FFF0B8] px-2 py-0.5 rounded-[var(--radius-sm)] border border-[#E8D8A5]">
                  STAGE 04
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
