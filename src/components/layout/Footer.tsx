"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102B50] text-[#FFF8E7] pt-20 pb-12 border-t border-[#E8D8A5]/20">
      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16 border-b border-[#E8D8A5]/20">
          {/* Column 1: Brand & Official Entity */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#FFF8E7]">
              <span className="w-7 h-7 bg-[#FFC928] text-[#102B50] font-mono text-xs flex items-center justify-center font-bold rounded-[var(--radius-sm)]">
                P
              </span>
              <span className="font-heading tracking-tighter text-xl uppercase font-extrabold text-[#FFF8E7]">
                PAYZERO<span className="text-[#FFC928]">.</span>
              </span>
            </Link>
            <div className="font-heading text-sm font-semibold text-[#FFC928]">
              Pay Zero Energy Expert Pvt Ltd
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 leading-relaxed max-w-xs font-normal">
              Designing, financing, and deploying high-yield solar energy architecture and utility-grade storage systems for institutional property owners and businesses.
            </p>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#FFC928] uppercase font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8E7]/80 font-normal">
              <li>
                <Link href="/about" className="hover:text-[#FFC928] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FFC928] transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#FFC928] transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#FFC928] transition-colors duration-200">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#FFC928] uppercase font-semibold">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#FFF8E7]/80 font-normal">
              <div>
                <div className="text-[11px] font-mono tracking-wider text-[#FFF8E7]/60 uppercase">
                  Contact Person
                </div>
                <div className="font-medium text-[#FFF8E7] mt-0.5">
                  Vivek Rathod
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono tracking-wider text-[#FFF8E7]/60 uppercase">
                  Phone
                </div>
                <a
                  href="tel:9561087785"
                  className="font-mono text-sm text-[#FFF8E7] hover:text-[#FFC928] transition-colors duration-200 block mt-0.5"
                >
                  9561087785
                </a>
              </div>
              <div>
                <div className="text-[11px] font-mono tracking-wider text-[#FFF8E7]/60 uppercase">
                  Email
                </div>
                <a
                  href="mailto:pay0energy@gmail.com"
                  className="text-sm text-[#FFF8E7] hover:text-[#FFC928] transition-colors duration-200 block mt-0.5 break-all"
                >
                  pay0energy@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Physical Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#FFC928] uppercase font-semibold">
              Office
            </h4>
            <div className="text-sm text-[#FFF8E7]/80 space-y-1.5 leading-relaxed font-normal">
              <p>Shop No 7, N-1, Shopping Complex,</p>
              <p>Chhatrapati Sambhajinagar 431003</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Legal Area with subtle GST number */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF8E7]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Pay Zero Energy Expert Pvt Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-[#FFF8E7]/30">•</span>
            <p className="font-mono text-[11px] text-[#FFF8E7]/70 tracking-wide">
              GST No. 27AAQCP1719G1Z7
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FFC928] transition-colors">
              Privacy Standard
            </Link>
            <Link href="/terms" className="hover:text-[#FFC928] transition-colors">
              Terms of Infrastructure
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
