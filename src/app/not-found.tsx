import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Container size="default">
        <div className="max-w-xl mx-auto text-center space-y-8 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-[24px] p-8 sm:p-14 shadow-md">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--bg-soft-white)] border border-[var(--border-light)] text-[11px] font-mono tracking-widest text-[#102B50] uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
            PAYZERO · 404
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
              This page isn&apos;t connected.
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              The page you&apos;re looking for may have moved or no longer exists.
            </p>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm sm:text-base font-semibold text-white bg-[#102B50] hover:bg-[#0B1F3A] rounded-full shadow-md transition-all duration-200"
            >
              <span>Return Home</span>
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
