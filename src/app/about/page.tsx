import React from "react";
import Container from "@/components/ui/Container";
import TestimonialSection from "@/components/home/TestimonialSection";
import ApproachSection from "@/components/home/ApproachSection";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Payzero | Clean Energy Infrastructure Developer",
  description:
    "Learn about Payzero's thesis: designing, financing, and deploying long-term clean energy infrastructure.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#CDEDB3] text-[#084734]">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 border-b border-[#084734]/15">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#084734] text-[#CEF17B] text-[11px] font-mono tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B]"></span>
              ABOUT PAYZERO
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#084734] leading-[1.08]">
              Energy Infrastructure Built Around Asset Quality.
            </h1>
            <p className="text-lg sm:text-xl text-[#084734]/85 leading-relaxed font-normal">
              We believe solar power should be engineered with the same precision, durability, and financial rigor as institutional real estate.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Approach */}
      <Container size="default">
        <ApproachSection />
        <TestimonialSection />
      </Container>
    </main>
  );
}
