import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#050505] selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <Hero />
    </main>
  );
}
