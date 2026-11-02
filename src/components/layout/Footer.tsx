"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { SITE_CONFIG } from "@/data/site";

const SocialIcon: React.FC<{ platform: string }> = ({ platform }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "x":
      return (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102B50] text-[#FFF8E7] pt-20 pb-12 border-t border-[#E8D8A5]/20">
      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16 border-b border-[#E8D8A5]/20">
          {/* Column 1: Brand & Official Entity + Social Links */}
          <div className="space-y-5">
            <Logo
              variant="white"
              size="lg"
              imageClassName="h-12 sm:h-14 w-auto"
            />
            <div className="font-heading text-sm font-semibold text-[#FFC928]">
              Pay Zero Energy Expert Private Limited
            </div>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 leading-relaxed max-w-xs font-normal">
              Designing, financing, and deploying high-yield solar energy architecture and utility-grade storage systems for institutional property owners and businesses.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[11px] font-mono tracking-wider text-[#FFC928] uppercase font-semibold block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {SITE_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FFF8E7]/10 hover:bg-[#FFC928] text-[#FFF8E7] hover:text-[#102B50] border border-[#E8D8A5]/25 hover:border-[#FFC928] transition-all duration-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#FFC928]"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
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
                  href="tel:+916002370023"
                  className="font-mono text-sm text-[#FFF8E7] hover:text-[#FFC928] transition-colors duration-200 block mt-0.5"
                >
                  +91 60023 70023
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
              <p>Shop No. 07, Shopping Complex, B Sector,</p>
              <p>in front of Raodev Hospital, CIDCO N-1,</p>
              <p>Chhatrapati Sambhajinagar – 431003,</p>
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Legal Area with subtle GST number */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF8E7]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Pay Zero Energy Expert Private Limited. All rights reserved.</p>
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
