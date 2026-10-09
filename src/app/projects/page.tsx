import React from "react";
import Container from "@/components/ui/Container";
import ProjectsSection from "@/components/home/ProjectsSection";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Clean Energy Projects Portfolio | Payzero",
  description:
    "Explore Payzero's deployed commercial solar arrays, industrial ground mounts, and microgrid installations.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#FFF8E7] text-[#102B50]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-[#E8D8A5]/40">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#102B50] text-[#FFC928] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]"></span>
              FEATURED PORTFOLIO
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102B50] leading-[1.08]">
              Deployed Infrastructure & Asset Yields.
            </h1>
            <p className="text-lg sm:text-xl text-[#536171] leading-relaxed font-normal">
              A selection of active solar installations engineered for commercial buildings, logistics facilities, and agricultural properties.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Projects Section */}
      <Container size="default">
        <ProjectsSection />
      </Container>
    </main>
  );
}
