import React from "react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site";

export const metadata = {
  title: "Terms of Infrastructure | Payzero",
  description: "Terms and conditions of service for Pay Zero Energy Expert Private Limited.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="py-16 sm:py-20 border-b border-[var(--border-light)]">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-light)] text-[#102B50] text-[11px] font-mono tracking-widest uppercase font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
              LEGAL & COMPLIANCE
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#102B50]">
              Terms of Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              General engagement terms and conditions governing website use and project consultations with {SITE_CONFIG.legalName}.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="default">
          <div className="max-w-3xl bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-[24px] p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                Website Use & Informational Scope
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                The information provided on this website, including calculators and architectural descriptions, is for general informational and preliminary estimation purposes only. Actual project scope, engineering sizing, tariff savings, and equipment warranties are formalized exclusively through signed engineering contracts and physical site survey audits.
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--border-light)] pt-6">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                Project Proposals & Contracting
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                All solar EPC proposals, equipment procurement specifications, installation timelines, and commercial payment milestones are governed by project-specific agreements executed between the client and {SITE_CONFIG.legalName}.
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--border-light)] pt-6">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                Entity & Governing Law
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Services and proposals originate from {SITE_CONFIG.legalName} (GSTIN: {SITE_CONFIG.gstin}), registered in Chhatrapati Sambhajinagar, Maharashtra, India. Any legal proceedings are subject to the applicable jurisdiction of courts in Maharashtra.
              </p>
            </div>

            <div className="p-4 rounded-[14px] bg-[var(--bg-soft-white)] border border-[var(--border-light)] text-xs font-mono text-[var(--text-secondary)]">
              Note: These engagement principles represent general terms and remain subject to final contract terms executed for each installation project.
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
