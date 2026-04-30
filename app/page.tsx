import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { Gallery } from "@/components/Gallery";
import { InstagramReels } from "@/components/InstagramReels";
import { ContactFAQ } from "@/components/ContactFAQ";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <Hero />
      <Services />
      <Philosophy />
      <Gallery />
      <InstagramReels />
      <ContactFAQ />
    </main>
  );
}
