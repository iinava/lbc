export const SERVICES_DATA = {
  header: {
    eyebrow: "Our Rituals",
    title: "Curated Excellence",
    description: "A bespoke collection of grooming and wellness experiences, meticulously crafted for those who value the luxury of refinement."
  },
  categories: [
    {
      id: "hair",
      slug: "hair",
      title: "Hair Mastery",
      tag: "Styling",
      description: "Precision cuts, bespoke coloring, and advanced structural treatments for the modern individual.",
      details: "Our hair rituals are more than just cuts; they are structural transformations. From the precision of a master's scissor work to the alchemy of bespoke color blending, we redefine your silhouette.",
      rituals: [
        { name: "Bespoke Scissor Cut", price: "2,500", duration: "60 min" },
        { name: "Signature Balayage", price: "8,500+", duration: "180 min" },
        { name: "Global Color Alchemy", price: "4,500+", duration: "120 min" },
        { name: "Keratin Structural Repair", price: "12,000+", duration: "150 min" },
        { name: "Royal Grooming & Wash", price: "1,200", duration: "30 min" }
      ],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
      href: "/services/hair"
    },
    {
      id: "skin",
      slug: "skin",
      title: "Luminescence",
      tag: "Wellness",
      description: "Restorative face rituals and deep skin alchemy to reveal your natural glow.",
      details: "We treat the skin as a canvas of light. Our rituals combine ancient botanical wisdom with modern dermatological precision to restore radiance and peace.",
      rituals: [
        { name: "24K Gold Restoration", price: "5,500", duration: "90 min" },
        { name: "Deep Sea Hydra-Ritual", price: "4,000", duration: "75 min" },
        { name: "Oxygen Infusion Therapy", price: "6,000", duration: "60 min" },
        { name: "Minimalist Face Cleanup", price: "1,800", duration: "45 min" }
      ],
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
      href: "/services/skin"
    },
    {
      id: "grooming",
      slug: "grooming",
      title: "Grooming",
      tag: "Precision",
      description: "Elite beard styling and traditional razor ceremonies in a master-barber environment.",
      details: "For the discerning man, our grooming rituals are a sanctuary of precision. Experience the lost art of the hot towel shave and the architectural perfection of a master beard styling.",
      rituals: [
        { name: "Master Beard Sculpting", price: "800", duration: "30 min" },
        { name: "Traditional Razor Ceremony", price: "1,200", duration: "45 min" },
        { name: "Royal Head Shave", price: "1,500", duration: "45 min" },
        { name: "Men's Pedicure Ritual", price: "1,800", duration: "60 min" }
      ],
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
      href: "/services/grooming"
    },
    {
      id: "nails",
      slug: "nails",
      title: "Artistry",
      tag: "Aesthetics",
      description: "Minimalist nail designs and restorative hand therapy for a polished expression.",
      details: "The hands tell a story of elegance. Our nail rituals focus on health, minimalist aesthetics, and the quiet luxury of perfectly groomed details.",
      rituals: [
        { name: "Minimalist Gel Overlay", price: "2,200", duration: "90 min" },
        { name: "Restorative Hand Ritual", price: "1,500", duration: "60 min" },
        { name: "Bespoke Nail Artistry", price: "3,500+", duration: "120 min" },
        { name: "Signature Pedicure", price: "2,000", duration: "75 min" }
      ],
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800",
      href: "/services/nails"
    },
    {
      id: "bridal",
      slug: "bridal",
      title: "Bridal",
      tag: "Sacred",
      description: "Bespoke styling and makeup artistry for your most significant and sacred moments.",
      details: "On your most sacred day, we orchestrate a symphony of beauty. Our bridal rituals are personal, intimate, and designed to reflect your unique inner luminescence.",
      rituals: [
        { name: "Couture Bridal Makeup", price: "Consultation", duration: "240 min" },
        { name: "Occasion Hair Sculpting", price: "3,500+", duration: "90 min" },
        { name: "Royal Saree Draping", price: "1,500", duration: "30 min" },
        { name: "Pre-Bridal Glow Ritual", price: "15,000+", duration: "Multi-day" }
      ],
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
      href: "/services/bridal"
    }
  ]
};
