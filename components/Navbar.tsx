"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { NAV_DATA } from "@/data/config";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Spatial Rhythm: Dynamic Island Morphing
  const navWidth = useTransform(scrollY, [0, 150], ["100%", "94%"]);
  const navY = useTransform(scrollY, [0, 150], ["20px", "28px"]);
  const navOpacity = useTransform(scrollY, [0, 150], [0.9, 1]);
  const navScale = useTransform(scrollY, [0, 150], [1, 0.98]);

  // Readability & Depth: Dynamic Background Contrast
  const navBgOpacity = useTransform(scrollY, [0, 150], [0.4, 0.98]);
  const navBgColor = useTransform(navBgOpacity, (v) => `rgba(9, 9, 11, ${v})`);

  // Double-Bezel Inner Shadow Intensity
  const innerShadow = useTransform(scrollY, [0, 150], [
    "inset 0 1px 1px rgba(255,255,255,0.1)",
    "inset 0 1px 1px rgba(255,255,255,0.3)"
  ]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none px-4 md:px-8">
        <motion.nav 
          style={{ 
            width: navWidth,
            y: navY,
            scale: navScale,
            opacity: navOpacity,
          }}
          className="max-w-[1400px] pointer-events-auto flex items-center justify-between"
        >
          {/* OUTER SHELL (Double-Bezel Architecture) */}
          <div className="w-full flex items-center justify-between p-1 md:p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-[80px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
            
            {/* INNER CORE */}
            <motion.div 
               style={{ 
                 boxShadow: innerShadow,
                 backgroundColor: navBgColor
               }}
               className="w-full h-full flex items-center justify-between px-6 py-3 md:px-8 md:py-3.5 rounded-full backdrop-blur-[40px] overflow-hidden"
            >
              {/* Left: Branding */}
              <Link href={NAV_DATA.logo.href} className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-rose-500 blur-md opacity-40 animate-pulse" />
                </div>
                <span className="text-white text-lg md:text-xl tracking-tighter font-medium" style={{ fontFamily: "var(--font-playfair)" }}>{NAV_DATA.logo.text}</span>
              </Link>

              {/* Center: Desktop Navigation (Staggered Rhythm) */}
              <div className="hidden lg:flex items-center gap-10">
                {NAV_DATA.links.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="relative text-[9px] uppercase tracking-[0.5em] font-black text-zinc-300 hover:text-white transition-all duration-500 group flex flex-col items-center gap-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {link.name}
                    <motion.div 
                      className="w-1 h-1 rounded-full bg-rose-500 scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" 
                    />
                  </Link>
                ))}
              </div>

              {/* Right: Actions (Button-in-Button Architecture) */}
              <div className="flex items-center gap-4">
                <button 
                  className="hidden md:flex items-center gap-6 pl-6 pr-1.5 py-1.5 bg-white rounded-full text-black group hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ fontFamily: "var(--font-outfit)" }}>{NAV_DATA.cta.text}</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-500">
                    <ArrowUpRight weight="bold" size={14} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                  </div>
                </button>

                {/* Mobile Hamburger Morph */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50 group"
                >
                  <motion.div 
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-5 h-[1.5px] bg-white rounded-full transition-all duration-500" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    className="w-5 h-[1.5px] bg-rose-500 rounded-full transition-all duration-500" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-5 h-[1.5px] bg-white rounded-full transition-all duration-500" 
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      </div>

      {/* Fullscreen Modal Reveal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-zinc-950/90 flex flex-col items-center justify-center px-8"
          >
            <div className="flex flex-col items-center gap-12">
              {NAV_DATA.links.concat([{ name: NAV_DATA.cta.text, href: NAV_DATA.cta.href }]).map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                  transition={{ delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl md:text-7xl font-medium text-white hover:text-rose-400 transition-all duration-500 tracking-tighter text-center"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.name === 'Enquire Now' ? 'Enquiry' : item.name}.
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
