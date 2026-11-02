export interface SiteConfig {
  name: string;
  legalName: string;
  companyName: string;
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
  googleMapsUrl: string;
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
  socialLinks: Array<{
    name: string;
    href: string;
    platform: "facebook" | "x" | "linkedin" | "instagram";
    ariaLabel: string;
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  name: "PAYZERO",
  legalName: "Pay Zero Energy Expert Private Limited",
  companyName: "PAY ZERO ENERGY EXPERT PVT LTD",
  tagline: "Let the Sun Pay Your Energy Bills.",
  description:
    "Payzero makes solar energy simple with expert site surveys, custom solar system design, quality components, professional installation, net metering support, and subsidy assistance.",
  contactPerson: "Vivek Rathod",
  phone: "9561087785",
  phoneDisplay: "+91 95610 87785",
  phoneHref: "tel:+919561087785",
  email: "pay0energy@gmail.com",
  emailHref: "mailto:pay0energy@gmail.com",
  addressLines: [
    "H-5/5, MIDC Industrial Area,",
    "Chilkalthana, Chhatrapati Sambhajinagar,",
    "Maharashtra 431008",
  ],
  fullAddress:
    "H-5/5, MIDC Industrial Area, Chilkalthana, Chhatrapati Sambhajinagar, Maharashtra 431008",
  googleMapsUrl: "https://maps.app.goo.gl/vYYfyBuMejHaaK9i6",
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
  socialLinks: [
    {
      name: "Facebook",
      href: "https://facebook.com/payzeroenergy",
      platform: "facebook",
      ariaLabel: "Follow Payzero on Facebook",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/payzeroenergy",
      platform: "x",
      ariaLabel: "Follow Payzero on Twitter / X",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/payzeroenergy",
      platform: "linkedin",
      ariaLabel: "Connect with Payzero on LinkedIn",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/payzeroenergy",
      platform: "instagram",
      ariaLabel: "Follow Payzero on Instagram",
    },
  ],
};
