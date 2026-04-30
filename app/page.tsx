import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <Hero />
      <Services />
      <Philosophy />
    </main>
  );
}
