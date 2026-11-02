export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  contactPerson: string;
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  addressLines: string[];
  fullAddress: string;
  gstin: string;
  logo: {
    navy: string;
    white: string;
    icon: string;
    alt: string;
  };
  navLinks: Array<{ label: string; href: string }>;
  cta: {
    primary: string;
    primaryHref: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "PAYZERO",
  legalName: "Pay Zero Energy Expert Private Limited",
  tagline: "High-Performance Solar Infrastructure & Clean Energy Assets",
  description:
    "Payzero designs and deploys utility-grade solar energy architecture, battery storage systems, and turnkey power infrastructure for commercial and residential clients.",
  contactPerson: "Vivek Rathod",
  phone: "9561087785",
  phoneDisplay: "+91 95610 87785",
  phoneHref: "tel:+919561087785",
  email: "pay0energy@gmail.com",
  emailHref: "mailto:pay0energy@gmail.com",
  addressLines: [
    "Shop No. 07, Shopping Complex, B Sector,",
    "in front of Raodev Hospital, CIDCO N-1,",
    "Chhatrapati Sambhajinagar – 431003,",
    "Maharashtra, India",
  ],
  fullAddress:
    "Shop No. 07, Shopping Complex, B Sector, in front of Raodev Hospital, CIDCO N-1, Chhatrapati Sambhajinagar – 431003, Maharashtra, India",
  gstin: "27AAQCP1719G1Z7",
  logo: {
    navy: "/logo/payzero-logo.png",
    white: "/logo/payzero-logo-white.png",
    icon: "/logo/payzero-icon.png",
    alt: "Payzero – Solar Energy Expert",
  },
  navLinks: [
    { label: "Solutions", href: "/solutions" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  cta: {
    primary: "Get a Consultation",
    primaryHref: "/#contact",
  },
};
