import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <Hero />
      <Services />
    </main>
  );
}
