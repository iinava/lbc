"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { NoiseBackground } from "./ui/noise-background";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-based transformations for the "Floating Island" aesthetic
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "95%"]);
  const navBg = useTransform(scrollY, [0, 100], ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.8)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);
  const navY = useTransform(scrollY, [0, 100], ["0px", "20px"]);
  const navRadius = useTransform(scrollY, [0, 100], ["0px", "24px"]);
  const navPadding = useTransform(scrollY, [0, 100], ["1.5rem 3rem", "1rem 2rem"]);

  // Mobile specific scroll transform for padding (to prevent shrinking too much)
  const mobileNavPadding = useTransform(scrollY, [0, 100], ["1.5rem 1rem", "1rem 1rem"]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
        <motion.nav 
          style={{ 
            width: navWidth,
            backgroundColor: navBg,
            borderColor: navBorder,
            y: navY,
            borderRadius: navRadius,
            padding: mounted && typeof window !== 'undefined' && window.innerWidth < 1024 ? mobileNavPadding : navPadding
          }}
          className="max-w-[1400px] flex items-center justify-between border backdrop-blur-xl transition-all duration-700 ease-[0.16, 1, 0.3, 1] pointer-events-auto"
        >
          {/* Left: Logo (Kept exactly as it was) */}
          <div className="flex items-center gap-12">
            <Link href="/" className="text-white text-xl md:text-2xl tracking-tighter font-medium flex items-center gap-2 group" style={{ fontFamily: "var(--font-playfair)" }}>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-rose-500 rounded-full group-hover:scale-150 transition-transform" />
              LBC.
            </Link>
            
            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {["Experience", "Sanctuary", "Rituals", "Inquiry"].map(item => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="relative text-[10px] uppercase tracking-[0.3em] font-extrabold text-zinc-500 hover:text-white transition-colors group"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-500 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <NoiseBackground
              containerClassName="hidden lg:block p-[1px] rounded-full overflow-hidden bg-zinc-900 border-none shadow-none"
              gradientColors={[
                "rgb(244, 63, 94)",
                "rgb(251, 113, 133)",
                "rgb(190, 18, 60)",
              ]}
              noiseIntensity={0.2}
            >
              <button 
                className="px-6 py-2 bg-zinc-950 text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-extrabold hover:text-rose-400 transition-colors" 
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Enquire Now
              </button>
            </NoiseBackground>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 md:p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors shadow-2xl group active:scale-90"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X weight="bold" size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <List weight="bold" size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-zinc-950/95 lg:hidden flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-10">
              {["Experience", "Sanctuary", "Rituals", "Inquiry", "Enquire Now"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl md:text-6xl tracking-tighter font-medium hover:italic transition-all duration-300 ${item === 'Enquire Now' ? 'text-rose-400' : 'text-white'}`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item}
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
