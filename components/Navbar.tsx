"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sun, Moon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { NAV_DATA, THEME_DATA } from "@/data/config";

export function Navbar() {
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = THEME_DATA[theme];

  // Spatial Rhythm: Dynamic Island Morphing
  const navWidth = useTransform(scrollY, [0, 150], ["100%", "94%"]);
  const navY = useTransform(scrollY, [0, 150], ["20px", "28px"]);
  const navOpacity = useTransform(scrollY, [0, 150], [0.9, 1]);
  const navScale = useTransform(scrollY, [0, 150], [1, 0.98]);

  // Readability & Depth: Dynamic Background Contrast
  const navBgOpacity = useTransform(scrollY, [0, 150], [0.4, 0.98]);
  const navBgColor = useTransform(navBgOpacity, (v) => 
    theme === 'dark' ? `rgba(18, 12, 11, ${v})` : `rgba(253, 252, 251, ${v})`
  );

  // Double-Bezel Inner Shadow Intensity
  const innerShadow = useTransform(scrollY, [0, 150], [
    theme === 'dark' ? "inset 0 1px 1px rgba(255,255,255,0.1)" : "inset 0 1px 1px rgba(0,0,0,0.05)",
    theme === 'dark' ? "inset 0 1px 1px rgba(255,255,255,0.3)" : "inset 0 1px 1px rgba(0,0,0,0.1)"
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
          <div 
            style={{ 
              backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}
            className="w-full flex items-center justify-between p-1 md:p-1.5 rounded-full backdrop-blur-[80px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-colors duration-700"
          >
            
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
                  <div 
                    style={{ backgroundColor: currentTheme.accent }}
                    className="w-1.5 h-1.5 rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_8px_rgba(212,176,140,0.4)]" 
                  />
                  <div 
                    style={{ backgroundColor: currentTheme.accent }}
                    className="absolute inset-0 blur-md opacity-40" 
                  />
                </div>
                <span 
                  style={{ color: currentTheme.text, fontFamily: "var(--font-playfair)" }}
                  className="text-lg md:text-xl tracking-tighter font-medium transition-colors duration-700"
                >
                  {NAV_DATA.logo.text}
                </span>
              </Link>

              {/* Center: Desktop Navigation (Staggered Rhythm) */}
              <div className="hidden lg:flex items-center gap-10">
                {NAV_DATA.links.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    style={{ color: theme === 'dark' ? '#d1d1d6' : '#555' }}
                    className="relative text-[9px] uppercase tracking-[0.5em] font-black hover:!text-[#d4b08c] transition-all duration-500 group flex flex-col items-center gap-1"
                  >
                    {link.name}
                    <motion.div 
                      style={{ backgroundColor: currentTheme.accent }}
                      className="w-1 h-1 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" 
                    />
                  </Link>
                ))}
              </div>

              {/* Right: Actions (Button-in-Button Architecture) */}
              <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  style={{ color: currentTheme.text, backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-95 border border-white/5"
                >
                  {theme === 'dark' ? <Sun size={20} weight="light" /> : <Moon size={20} weight="light" />}
                </button>

                <button 
                  style={{ 
                    backgroundColor: currentTheme.text,
                    color: currentTheme.bg
                  }}
                  className="hidden md:flex items-center gap-6 pl-6 pr-1.5 py-1.5 rounded-full group hover:scale-[1.02] active:scale-[0.98] transition-all duration-700 shadow-2xl"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ fontFamily: "var(--font-outfit)" }}>{NAV_DATA.cta.text}</span>
                  <div 
                    style={{ backgroundColor: currentTheme.bg }}
                    className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#d4b08c] transition-colors duration-500"
                  >
                    <ArrowUpRight weight="bold" size={14} style={{ color: currentTheme.text }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                  </div>
                </button>

                {/* Mobile Hamburger Morph */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50 group"
                >
                  <motion.div 
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    style={{ backgroundColor: currentTheme.text }}
                    className="w-5 h-[1.5px] rounded-full transition-all duration-500" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    style={{ backgroundColor: currentTheme.accent }}
                    className="w-5 h-[1.5px] rounded-full transition-all duration-500" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    style={{ backgroundColor: currentTheme.text }}
                    className="w-5 h-[1.5px] rounded-full transition-all duration-500" 
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
            style={{ backgroundColor: theme === 'dark' ? 'rgba(18, 12, 11, 0.95)' : 'rgba(253, 252, 251, 0.95)' }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center px-8 transition-colors duration-700"
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
                    style={{ color: currentTheme.text, fontFamily: "var(--font-playfair)" }}
                    className="text-5xl md:text-7xl font-medium hover:text-[#d4b08c] transition-all duration-500 tracking-tighter text-center"
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
