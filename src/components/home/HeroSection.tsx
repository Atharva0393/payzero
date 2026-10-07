import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 text-white bg-[url('/payzerobg.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Subtle top & bottom vignette gradient overlays for high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/35 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 my-auto text-center px-4 sm:px-6 -translate-y-6 sm:-translate-y-10 lg:-translate-y-14">
        <Container size="default">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* Main Headline Lockup */}
            <h1 className="tracking-tight text-center">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[62px] text-white leading-none block whitespace-nowrap">
                Power Your Property.
              </span>
              <span className="font-heading italic font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-[#CEF17B] leading-tight tracking-tight mt-0.5 sm:mt-1 block">
                Own Your Energy.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal max-w-md sm:max-w-lg mx-auto mt-4 sm:mt-5">
              Thoughtfully designed solar systems for homes and businesses, built around how you use your property and energy.
            </p>

            {/* Single Primary CTA */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 text-sm sm:text-base font-semibold text-slate-950 bg-white hover:bg-neutral-100 rounded-full shadow-2xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-white/80"
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
