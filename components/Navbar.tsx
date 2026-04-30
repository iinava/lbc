"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { List } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 lg:px-12 py-6 md:py-8 flex items-center justify-between pointer-events-none"
    >
      <div className="flex items-center gap-6 md:gap-12 pointer-events-auto">
        <Link href="/" className="text-white text-xl md:text-2xl tracking-tighter font-medium flex items-center gap-2 group" style={{ fontFamily: "var(--font-playfair)" }}>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full group-hover:scale-150 transition-transform" />
          LBC.
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {["Experience", "Sanctuary", "Rituals", "Inquiry"].map(item => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-[9px] xl:text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
        <button className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold text-rose-400 hover:text-rose-300 transition-colors" style={{ fontFamily: "var(--font-outfit)" }}>
          Reservations
        </button>
        <button className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl text-white hover:bg-white/10 transition-colors shadow-2xl">
          <List weight="bold" size={16} className="md:hidden" />
          <List weight="bold" size={18} className="hidden md:block" />
        </button>
      </div>
    </motion.nav>
  );
}
