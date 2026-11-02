import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 text-white bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Subtle top & bottom vignette gradient overlays for high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/35 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 my-auto text-center px-4 sm:px-6 -translate-y-6 sm:-translate-y-10 lg:-translate-y-14">
        <Container size="default">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Main Headline Lockup */}
            <h1 className="tracking-tight text-center">
              <span className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] text-white tracking-widest uppercase block drop-shadow-md leading-none">
                PAYZERO
              </span>
              <span className="font-heading italic font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] text-[#FFC928] leading-tight tracking-tight mt-3 sm:mt-4 block drop-shadow-sm">
                Let the Sun Pay Your Energy Bills.
              </span>
            </h1>

            {/* Single Primary CTA */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 text-sm sm:text-base font-semibold text-[#102B50] bg-white hover:bg-neutral-100 rounded-full shadow-2xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                <span>Get a Free Solar Consultation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-1 pt-4 pb-4 sm:pb-6">
        <a
          href="#solutions"
          className="inline-flex flex-col items-center text-[10px] font-mono tracking-widest text-white/75 hover:text-white uppercase transition-colors duration-200 group"
          aria-label="Scroll down to explore homepage sections"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5 font-bold">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
