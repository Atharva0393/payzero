import React from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface VisualService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

const VISUAL_SERVICES: VisualService[] = [
  {
    id: "ground-mounted",
    number: "01",
    title: "Ground Mounted Solar",
    description: "Large-scale solar plants for maximum energy generation.",
    image: "/services/ground-mounted-solar.webp",
    alt: "Ground-mounted solar panel installation",
    badge: "UTILITY & MEGAWATT",
  },
  {
    id: "residential-rooftop",
    number: "02",
    title: "Residential Rooftop Solar",
    description: "Produce clean energy from your rooftop and lower electricity costs.",
    image: "/services/residential-rooftop-solar.webp",
    alt: "Residential rooftop solar panel installation",
    badge: "HOMES & ESTATES",
  },
  {
    id: "commercial-solutions",
    number: "03",
    title: "Commercial Solar Solutions",
    description: "Efficient solar setups for offices and businesses.",
    image: "/services/commercial-solar-solutions.webp",
    alt: "Commercial rooftop solar installation",
    badge: "ENTERPRISE & SME",
  },
];

const TEXT_CATEGORIES = [
  {
    number: "01",
    name: "Residential Solar Rooftop",
    scope: "Grid-tied rooftop solar with net metering for private residences and housing societies.",
  },
  {
    number: "02",
    name: "Commercial Solar Rooftop",
    scope: "High-yield power generation designed for corporate offices, hospitals, and educational campuses.",
  },
  {
    number: "03",
    name: "Industrial Solar Rooftops",
    scope: "Heavy-duty solar infrastructure for factories, cold storage, warehouses, and manufacturing plants.",
  },
  {
    number: "04",
    name: "Ground Mounted Solar",
    scope: "Open-access ground arrays, megawatt solar parks, and captive utility power plants.",
  },
];

export const EpcServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 border-b border-[var(--border-light)] relative">
      {/* 1. What We Do — EPC Company Introduction */}
      <div className="max-w-4xl space-y-4 mb-16 sm:mb-20">
        <Badge variant="outline">WHAT WE DO</Badge>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
          What We Do
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#102B50] font-semibold leading-relaxed">
          We are a full-service EPC (Engineering, Procurement & Construction) company delivering:
        </p>
        <p className="text-base sm:text-lg text-[#536171] leading-relaxed max-w-3xl">
          End-to-end solar energy systems engineered for maximum generation, uncompromising safety, and rapid financial return. From preliminary site analysis to government subsidy disbursement, we handle every phase under one roof.
        </p>
      </div>

      {/* 2. Main Services Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#EAA900] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
            OUR SERVICES
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102B50] tracking-tight">
            Turnkey Solar EPC Solutions
          </h3>
          <p className="text-sm sm:text-base text-[#536171] leading-relaxed">
            Engineered systems designed to optimize energy production, minimize maintenance, and guarantee decades of reliable clean energy.
          </p>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-full bg-[#102B50] hover:bg-[#0B1F3A] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md group"
        >
          <span>Request Site Survey</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* 3. Three Visual Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {VISUAL_SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-[24px] bg-[#FFF0B8] border border-[#E8D8A5] hover:border-[#FFC928] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Landscape Photographic Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8D8A5]/40">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#102B50]/85 text-[#FFF8E7] backdrop-blur-xs border border-white/20">
                  {service.badge}
                </span>
              </div>
              <div className="absolute bottom-3 right-4 z-10 font-mono text-xs font-bold text-white/90 drop-shadow-sm">
                SPEC // {service.number}
              </div>
            </div>

            {/* Card Content Beneath Image */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50] tracking-tight group-hover:text-[#EAA900] transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-[#536171] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8D8A5] flex items-center justify-between text-xs font-mono">
                <span className="text-[#536171] font-semibold uppercase tracking-wider text-[11px]">
                  TURNKEY EPC
                </span>
                <span className="font-bold text-[#102B50] group-hover:text-[#EAA900] group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1">
                  Learn more <span>→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Complete Four Service Categories (Text List / Grid) */}
      <div className="mt-16 sm:mt-20 p-8 sm:p-10 lg:p-12 rounded-[24px] bg-[#FFF8E7] border border-[#E8D8A5] shadow-xs relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#EAA900] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
            COMPLETE EPC CAPABILITIES
          </div>
          <h4 className="font-heading text-2xl sm:text-3xl font-bold text-[#102B50] tracking-tight">
            Our Four Core Solar Service Categories
          </h4>
          <p className="text-sm sm:text-base text-[#536171] leading-relaxed">
            Delivering precision engineering, Tier-1 procurement, and professional execution across every sector:
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEXT_CATEGORIES.map((cat) => (
            <div
              key={cat.number}
              className="p-5 rounded-2xl bg-[#FFF0B8]/60 border border-[#E8D8A5] hover:border-[#FFC928] transition-colors space-y-3"
            >
              <div className="flex items-center gap-3">
                {/* Solar Gold Accent Bullet */}
                <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#EAA900] to-[#FFC928] ring-4 ring-[#FFC928]/25 shrink-0" />
                <span className="font-mono text-xs font-bold text-[#EAA900]">
                  CAT // {cat.number}
                </span>
              </div>
              <h5 className="font-heading text-base sm:text-lg font-bold text-[#102B50] leading-snug">
                {cat.name}
              </h5>
              <p className="text-xs sm:text-sm text-[#536171] leading-relaxed font-normal">
                {cat.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpcServicesSection;
