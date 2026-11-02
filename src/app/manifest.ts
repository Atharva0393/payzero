import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Payzero – Solar Energy Expert",
    short_name: "Payzero",
    description:
      "Let the Sun Pay Your Energy Bills – Pay Zero Energy Expert Private Limited",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8E7",
    theme_color: "#FFF8E7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

