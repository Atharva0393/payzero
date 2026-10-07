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
    <main className="min-h-screen pt-28 pb-20 bg-[#CDEDB3] text-[#084734]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-[#084734]/15">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#084734] text-[#CEF17B] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B]"></span>
              THE PAYZERO METHODOLOGY
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#084734] leading-[1.08]">
              A Rigorous, 4-Stage Infrastructure Process.
            </h1>
            <p className="text-lg sm:text-xl text-[#084734]/85 leading-relaxed font-normal">
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
      <section className="py-16 border-t border-[#084734]/15">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#084734] text-[#CDEDB3] rounded-[var(--radius-lg)] p-8 sm:p-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#CEF17B] tracking-widest uppercase">
                ENGINEERING TRANSPARENCY
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#CDEDB3]">
                Zero Guesswork. Full Structural & Financial Clarity.
              </h2>
              <p className="text-sm text-[#CDEDB3]/80 leading-relaxed">
                Before any equipment is delivered to site, Payzero performs 3D LIDAR shading analysis, structural roof load stamps, electrical single-line diagrams, and utility tariff rate optimization.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs text-[#CDEDB3]/90 bg-[#053325] p-6 rounded-[var(--radius-md)] border border-[#CDEDB3]/20">
              <div className="flex justify-between border-b border-[#CDEDB3]/20 pb-2">
                <span>SITE AUDIT & SHADING</span>
                <span className="text-[#CEF17B]">STAGE 01</span>
              </div>
              <div className="flex justify-between border-b border-[#CDEDB3]/20 pb-2">
                <span>PE CANONICAL STAMP</span>
                <span className="text-[#CEF17B]">STAGE 02</span>
              </div>
              <div className="flex justify-between border-b border-[#CDEDB3]/20 pb-2">
                <span>AHJ PERMITTING & GRID</span>
                <span className="text-[#CEF17B]">STAGE 03</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>PTO ACTIVATION</span>
                <span className="text-[#CEF17B]">STAGE 04</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
