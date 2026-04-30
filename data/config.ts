/**
 * LBC Sanctuary - Content Configuration
 * Centralized data for easy management of text, links, and assets.
 */

export const NAV_DATA = {
  logo: {
    text: "LBC.",
    href: "/"
  },
  links: [
    { name: "Experience", href: "/experience" },
    { name: "Sanctuary", href: "/sanctuary" },
    { name: "Rituals", href: "/rituals" },
    { name: "Inquiry", href: "/inquiry" }
  ],
  cta: {
    text: "Enquire Now",
    href: "/enquiry"
  }
};

export const HERO_DATA = {
  eyebrow: "The Art of Refinement",
  headline: {
    top: "Ethereal",
    bottom: "Rituals"
  },
  description: "A bespoke grooming and wellness sanctuary for individuals who value precision, elegance, and the luxury of quiet confidence.",
  primaryCta: {
    text: "Book Experience",
    href: "/booking"
  },
  secondaryCta: {
    text: "View Sanctuary",
    href: "/sanctuary"
  },
  partners: ["VOGUE", "ELLE", "GQ", "BAZAAR", "DAZED"]
};

export const THEME_DATA = {
  dark: {
    bg: "#120c0b",
    text: "#fdfcfb",
    accent: "#d4b08c",
    secondaryText: "#a1a1aa", // zinc-400
    glass: "rgba(18, 12, 11, 0.4)",
    glassBorder: "rgba(255, 255, 255, 0.1)"
  },
  light: {
    bg: "#fdfcfb",
    text: "#120c0b",
    accent: "#8c6239", // Deeper brown for light mode
    secondaryText: "#71717a", // zinc-500
    glass: "rgba(253, 252, 251, 0.4)",
    glassBorder: "rgba(0, 0, 0, 0.1)"
  }
};

export const GALLERY_DATA = {
  column1: [
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", alt: "Salon Interior" },
    { url: "https://i.pinimg.com/736x/c2/d0/f4/c2d0f4275fb00c800ba273c708375419.jpg", alt: "Grooming Detail" },
    { url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800", alt: "Treatment Room" },
  ],
  column2: [
    { url: "https://i.pinimg.com/736x/fb/5c/38/fb5c38774490ba33b6ee20af1da03743.jpg", alt: "Stylist at Work" },
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", alt: "Grooming Products" },
    { url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800", alt: "Relaxation Area" },
  ],
  column3: [
    { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", alt: "Wellness Sanctuary" },
    { url: "https://i.pinimg.com/736x/b9/72/6d/b9726d0e5f9daf1161a9de13cce91668.jpg", alt: "Hair Detail" },
    { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800", alt: "Salon Ambience" },
  ],
  stats: [
    { title: "Average Ritual Time", value: "90 mins", color: "bg-[#fdfcfb]/90" },
    { title: "Client Satisfaction", value: "99.8%", color: "bg-[#d4b08c]/90" },
    { title: "Master Stylists", value: "12+", color: "bg-[#3d2b24]/90" }
  ]
};
