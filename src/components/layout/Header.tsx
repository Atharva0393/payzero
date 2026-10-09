"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";

const NAV_ITEMS: NavItem[] = [
  { id: "solutions", label: "Solutions", href: "/solutions" },
  { id: "process", label: "How It Works", href: "/how-it-works" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "about", label: "About", href: "/about" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(-1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      if (pathname === "/solutions") {
        setActiveSectionIndex(0);
        setIsDarkSection(false);
        return;
      }
      if (pathname === "/how-it-works") {
        setActiveSectionIndex(1);
        setIsDarkSection(false);
        return;
      }
      if (pathname === "/projects") {
        setActiveSectionIndex(2);
        setIsDarkSection(false);
        return;
      }
      if (pathname === "/about") {
        setActiveSectionIndex(3);
        setIsDarkSection(false);
        return;
      }

      // On Homepage ("/") - It is the homepage, so no subpage tab is active
      if (pathname === "/") {
        setActiveSectionIndex(-1);

        if (scrollY < 200) {
          setIsDarkSection(true);
          return;
        }

        const navbarCheckY = 40;
        const sections = document.querySelectorAll<HTMLElement>("section, footer");
        let currentIsDark = false;

        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= navbarCheckY && rect.bottom > navbarCheckY) {
            const classList = sections[i].className || "";
            const isDarkSec =
              classList.includes("bg-[#102B50]") ||
              classList.includes("herobg") ||
              classList.includes("payzerobg") ||
              sections[i].tagName.toLowerCase() === "footer";
            currentIsDark = isDarkSec;
            break;
          }
        }

        setIsDarkSection(currentIsDark);
        return;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
        !isScrolled
          ? "bg-gradient-to-b from-black/50 via-black/10 to-transparent py-5"
          : isDarkSection
          ? "bg-[#102B50]/30 backdrop-blur-md border-b border-[#FFC928]/15 shadow-xs"
          : "bg-[#FFF8E7]/80 backdrop-blur-md border-b border-[#E8D8A5]/60 shadow-xs"
      }`}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Top-Left: PAYZERO Wordmark */}
          <Link
            href="/"
            className={`group flex items-center text-xl sm:text-2xl font-extrabold tracking-widest uppercase focus:outline-none font-heading transition-colors duration-300 ${
              isDarkSection ? "text-white" : "text-[#102B50]"
            }`}
            aria-label="Payzero Homepage"
          >
            PAYZERO
          </Link>

          {/* Top-Center: Limelight Navigation Bar */}
          <div className="hidden md:flex items-center">
            <LimelightNav
              items={NAV_ITEMS}
              activeIndex={activeSectionIndex}
              onTabChange={(idx) => setActiveSectionIndex(idx)}
              className={`transition-colors duration-300 ${
                isDarkSection ? "text-white" : "text-[#102B50]"
              }`}
              limelightClassName="bg-[#FFC928] shadow-[0_50px_15px_#FFC928]"
            />
          </div>

          {/* Top-Right: Consultation Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className={`inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none ${
                isDarkSection
                  ? "text-white bg-white/10 hover:bg-white/20 border border-white/40 focus:ring-2 focus:ring-white/50"
                  : "text-[#102B50] bg-[#102B50]/5 hover:bg-[#102B50]/15 border border-[#102B50]/30 focus:ring-2 focus:ring-[#102B50]/20"
              }`}
            >
              <span>Get a Consultation</span>
              <span className="text-base leading-none">→</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none ${
              isDarkSection
                ? "text-white hover:bg-white/10"
                : "text-[#102B50] hover:bg-[#102B50]/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-5 pb-4 border border-[#E8D8A5] mt-4 space-y-4 bg-[#FFF8E7]/95 backdrop-blur-xl rounded-xl p-4 animate-in fade-in duration-200 text-[#102B50] shadow-xl">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href || "#"}
                  className="text-base font-semibold text-[#102B50] hover:text-[#EAA900] py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold text-white bg-[#102B50] hover:bg-[#0B1F3A] rounded-full transition-all shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Get a Consultation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
