import { SITE_CONFIG } from "@/data/site";

/**
 * PAYZERO SCHEMA.ORG STRUCTURED DATA GENERATOR
 * Standardized, Next.js App Router compatible JSON-LD generators.
 * Matches visible page content and verified business details without fabricated claims.
 */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * WebSite Schema for PAYZERO
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    alternateName: ["Pay Zero Energy Expert", SITE_CONFIG.companyName],
    url: SITE_CONFIG.url,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };
}

/**
 * Organization & LocalBusiness Schema for PAY ZERO ENERGY EXPERT PVT LTD
 * Uses verified NAP, registration in Chhatrapati Sambhajinagar, and both active phone numbers.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.companyName,
    alternateName: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo.navy}`,
    image: `${SITE_CONFIG.url}/og-image.png`,
    description:
      "PAY ZERO ENERGY EXPERT PVT LTD is a solar EPC company based in Chhatrapati Sambhajinagar, Maharashtra, delivering residential rooftop solar, commercial solar rooftop infrastructure, industrial rooftop installations, and ground-mounted solar plants with net metering and subsidy assistance.",
    email: SITE_CONFIG.email,
    telephone: [SITE_CONFIG.phoneDisplay, SITE_CONFIG.secondaryPhone.display],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.addressDetails.streetAddress,
      addressLocality: SITE_CONFIG.addressDetails.addressLocality,
      addressRegion: SITE_CONFIG.addressDetails.addressRegion,
      postalCode: SITE_CONFIG.addressDetails.postalCode,
      addressCountry: SITE_CONFIG.addressDetails.addressCountry,
    },
    hasMap: SITE_CONFIG.googleMapsUrl,
    taxID: SITE_CONFIG.gstin,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phoneDisplay,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.secondaryPhone.display,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Chhatrapati Sambhajinagar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    sameAs: [
      SITE_CONFIG.googleMapsUrl,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar EPC & Renewable Infrastructure Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Rooftop Solar Systems",
            description:
              "Custom rooftop solar installations for independent homes and housing societies with net metering assistance and PM Surya Ghar subsidy assistance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Solar Rooftop Infrastructure",
            description:
              "High-yield solar power systems engineered for corporate offices, hospitals, educational campuses, and commercial properties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Solar Rooftops",
            description:
              "Heavy-duty solar installations for manufacturing plants, warehouses, cold storage facilities, and factories across MIDC industrial zones.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ground Mounted Solar Power Plants",
            description:
              "Utility-scale ground arrays, captive solar power generation plants, and open-access utility installations for agricultural and commercial land.",
          },
        },
      ],
    },
  };
}

/**
 * Solutions Page Services Schema
 * Generates an array of Service schemas matching visible solutions content.
 */
export function getSolutionsServicesSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/solutions#residential-solar`,
      name: "Residential Rooftop Solar System",
      serviceType: "Residential Solar Panel Installation",
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "Grid-tied residential rooftop solar system installation with net metering assistance and government solar subsidy support for homes and housing societies in Maharashtra.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/solutions#commercial-solar`,
      name: "Commercial Solar Rooftop Infrastructure",
      serviceType: "Commercial Solar EPC",
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "High-yield commercial rooftop solar power plants for corporate offices, hospitals, educational institutions, and commercial establishments.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/solutions#industrial-solar`,
      name: "Industrial Solar Rooftops",
      serviceType: "Industrial Solar Power Plant Installation",
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "Heavy-duty solar infrastructure and high-capacity rooftop installations for manufacturing units, warehouses, cold storage, and MIDC industrial factories.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/solutions#ground-mounted-solar`,
      name: "Ground Mounted Solar Power Plants",
      serviceType: "Utility & Ground-Mounted Solar Installation",
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "Megawatt-scale ground arrays, captive solar power generation plants, and open-access utility installations for agricultural and commercial land.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/solutions#bess`,
      name: "Battery Energy Storage Systems (BESS)",
      serviceType: "Clean Energy Storage & Microgrids",
      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      description:
        "Liquid-cooled lithium-ion and advanced commercial battery energy storage systems for peak shaving, demand management, and power backup.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
    },
  ];
}

/**
 * How It Works Page — 6-Step EPC Process Service Schema
 */
export function getEpcProcessServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}/how-it-works#solar-epc-process`,
    name: "Turnkey Solar EPC & Government Subsidy Process",
    serviceType: "Solar EPC Engineering & Project Execution",
    provider: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    description:
      "Comprehensive end-to-end solar EPC project execution comprising detailed site survey, custom engineering design, quality production, precise installation, grid connection and net metering assistance, and government subsidy assistance.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Maharashtra",
    },
  };
}

/**
 * BreadcrumbList Schema Generator
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_CONFIG.url : `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

