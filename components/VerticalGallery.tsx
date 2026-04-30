"use client";

import { motion } from "motion/react";

const COLUMN_1 = [
  { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

const COLUMN_2 = [
  { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=600&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

const COLUMN_3 = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600&auto=format&fit=crop", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=600&auto=format&fit=crop", aspect: "aspect-[4/5]" },
];

function DataCard({ title, value, colorClass }: { title: string, value: string, colorClass: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`relative w-full aspect-square rounded-2xl p-4 md:p-6 flex flex-col justify-between ${colorClass} border border-white/10 shadow-2xl transition-all duration-500`}
    >
      <div className="text-xl md:text-3xl font-medium tracking-tighter text-black/90 drop-shadow-sm" style={{ fontFamily: "var(--font-playfair)" }}>{value}</div>
      <div className="text-[7px] md:text-[9px] uppercase tracking-[0.25em] font-black text-black/70 leading-tight">{title}</div>
    </motion.div>
  );
}

function ImageColumn({ items, duration, reverse = false, children }: { items: { src: string, aspect: string }[], duration: number, reverse?: boolean, children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {[...items, ...items].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02, rotate: 1 }}
            className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 ease-out cursor-none`}
          >
             <img src={item.src} alt="Gallery" className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-1000" />
          </motion.div>
        ))}
        {children}
      </motion.div>
    </div>
  );
}

export function VerticalGallery() {
  return (
    <div 
      className="relative w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-hidden px-4"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.4) 12%, black 25%, black 75%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0.02) 98%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.4) 12%, black 25%, black 75%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0.02) 98%, transparent 100%)'
      }}
    >
      <ImageColumn items={COLUMN_1} duration={30}>
         <DataCard title="Average Ritual Time" value="90 mins" colorClass="bg-rose-200/90" />
      </ImageColumn>
      <div className="hidden sm:block h-full">
        <ImageColumn items={COLUMN_2} duration={22} reverse>
           <DataCard title="Client Satisfaction" value="99.8%" colorClass="bg-emerald-200/90" />
        </ImageColumn>
      </div>
      <ImageColumn items={COLUMN_3} duration={35}>
         <DataCard title="Master Stylists" value="12+" colorClass="bg-zinc-200/90" />
      </ImageColumn>
    </div>
  );
}
