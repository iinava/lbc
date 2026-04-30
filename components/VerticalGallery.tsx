"use client";

import { motion } from "motion/react";
import { GALLERY_DATA } from "@/data/config";

function DataCard({ title, value, color }: { title: string, value: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`relative w-full aspect-square rounded-2xl p-4 md:p-6 flex flex-col justify-between ${color} border border-white/10 shadow-2xl transition-all duration-500`}
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
  const { column1, column2, column3, stats } = GALLERY_DATA;

  return (
    <div 
      className="relative w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-hidden px-4"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.4) 12%, black 25%, black 75%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0.02) 98%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 2%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.4) 12%, black 25%, black 75%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0.1) 95%, rgba(0,0,0,0.02) 98%, transparent 100%)'
      }}
    >
      <ImageColumn items={column1.map(img => ({ src: img.url, aspect: "aspect-[4/5]" }))} duration={30}>
         <DataCard {...stats[0]} />
      </ImageColumn>
      <div className="hidden sm:block h-full">
        <ImageColumn items={column2.map(img => ({ src: img.url, aspect: "aspect-square" }))} duration={22} reverse>
           <DataCard {...stats[1]} />
        </ImageColumn>
      </div>
      <ImageColumn items={column3.map(img => ({ src: img.url, aspect: "aspect-[3/4]" }))} duration={35}>
         <DataCard {...stats[2]} />
      </ImageColumn>
    </div>
  );
}
