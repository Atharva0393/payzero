"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#084734] text-[#CDEDB3] pt-20 pb-12 border-t border-[#CDEDB3]/20">
      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#CDEDB3]/20">
          {/* Brand & Thesis Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#CDEDB3]">
              <span className="w-7 h-7 bg-[#CEF17B] text-[#084734] font-mono text-xs flex items-center justify-center font-bold rounded-[var(--radius-sm)]">
                P
              </span>
              <span className="font-heading tracking-tighter text-xl uppercase font-extrabold text-[#CDEDB3]">
                PAYZERO<span className="text-[#CEF17B]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#CDEDB3]/80 leading-relaxed max-w-sm">
              Payzero designs, finances, and deploys high-yield clean energy architecture and utility-grade storage systems for institutional property owners and enterprise corporations.
            </p>
            <div className="pt-2 font-mono text-xs text-[#CDEDB3]/60 space-y-1">
              <p>HQ // SILICON VALLEY • NEW YORK • TOKYO</p>
              <p>LICENSED ENERGY INFRASTRUCTURE DEVELOPER</p>
            </div>
          </div>

          {/* Infrastructure Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#CEF17B] uppercase font-semibold">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CDEDB3]/80">
              <li>
                <Link href="/solutions" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Commercial Rooftops
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Utility Ground Arrays
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#CEF17B] transition-colors duration-200">
                  BESS Storage Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Microgrid Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#CEF17B] transition-colors duration-200">
                  HVAC & Load Balancing
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial & Engineering */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#CEF17B] uppercase font-semibold">
              Capital & Yield
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CDEDB3]/80">
              <li>
                <Link href="/#financial-model" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Capital Yield Model
                </Link>
              </li>
              <li>
                <Link href="/#financial-model" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Power Purchase (PPA)
                </Link>
              </li>
              <li>
                <Link href="/#financial-model" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Tax Credit Structuring
                </Link>
              </li>
              <li>
                <Link href="/#financial-model" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Grid Export Tariffs
                </Link>
              </li>
              <li>
                <Link href="/#financial-model" className="hover:text-[#CEF17B] transition-colors duration-200">
                  Performance Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Executive Briefing Signup */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#CEF17B] uppercase font-semibold">
              Executive Briefing
            </h4>
            <p className="text-xs text-[#CDEDB3]/80 leading-relaxed">
              Quarterly intelligence on commercial energy markets, grid regulations, and infrastructure tax policy.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="corporate@domain.com"
                className="w-full px-3.5 py-2 text-xs bg-[#053325] border border-[#CDEDB3]/30 rounded-[var(--radius-sm)] text-[#CDEDB3] placeholder-[#CDEDB3]/50 focus:outline-none focus:border-[#CEF17B] transition-colors"
                required
              />
              <Button variant="primary" size="sm" className="w-full bg-[#CEF17B] text-[#084734] hover:bg-[#CDEDB3] border-none font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CDEDB3]/60">
          <p>© {new Date().getFullYear()} Payzero Energy Infrastructure Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#CEF17B] transition-colors">
              Privacy Standard
            </Link>
            <Link href="/terms" className="hover:text-[#CEF17B] transition-colors">
              Terms of Infrastructure
            </Link>
            <Link href="/security" className="hover:text-[#CEF17B] transition-colors">
              Grid Compliance
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
