import React from "react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/site";

export const metadata = {
  title: "Privacy Standard | Payzero",
  description: "Information collection and privacy policy for Pay Zero Energy Expert Private Limited.",
};

export default function PrivacyPage() {
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
              Privacy Standard
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              {SITE_CONFIG.legalName} is committed to respecting the privacy of our clients, website visitors, and project partners.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="default">
          <div className="max-w-3xl bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-[24px] p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                When you contact us regarding a solar installation, project consultation, or property assessment, we may collect information including your name, contact phone number, email address, property location (PIN code and city), and energy consumption estimates.
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--border-light)] pt-6">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                How Information Is Used
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                The information collected is used solely to respond to project enquiries, perform preliminary solar feasibility assessments, provide consultation estimates, and coordinate site engineering surveys. We do not sell, rent, or trade your personal information.
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--border-light)] pt-6">
              <h2 className="font-heading text-2xl font-bold text-[#102B50]">
                Data Protection & Contact
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                For questions regarding our privacy practices or to request data correction, contact our compliance desk at{" "}
                <a href={SITE_CONFIG.emailHref} className="text-[#102B50] font-semibold underline">
                  {SITE_CONFIG.email}
                </a>{" "}
                or write to our registered office: {SITE_CONFIG.fullAddress}.
              </p>
            </div>

            <div className="p-4 rounded-[14px] bg-[var(--bg-soft-white)] border border-[var(--border-light)] text-xs font-mono text-[var(--text-secondary)]">
              Note: This interim privacy statement outlines current operating practices of {SITE_CONFIG.legalName} and remains subject to final corporate legal counsel ratification.
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
