"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { useRef, useState, useEffect } from "react";
import LineWaves from "./LineWaves/LineWaves";

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-zinc-950 overflow-hidden flex items-center justify-center selection:bg-rose-500/30 selection:text-rose-200">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#2e2b2b"
          color2="#151313"
          color3="#4d3636"
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>

      {/* Floating Grain Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-8 pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-32 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 md:gap-10 text-center lg:text-left items-center lg:items-start"
        >
          <div className="flex flex-col gap-4">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="flex items-center gap-2 text-rose-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px]"
               style={{ fontFamily: "var(--font-outfit)" }}
             >
               <Sparkle weight="fill" className="animate-pulse" />
               The Art of Refinement
             </motion.div>
             <motion.h1 
               initial="hidden"
               animate="visible"
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.2,
                   },
                 },
               }}
               className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.9] lg:leading-[0.85] tracking-tighter text-white"
               style={{ fontFamily: "var(--font-playfair)" }}
             >
               <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block">Ethereal</motion.span>
               <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-rose-100/40 italic font-light block">Rituals</motion.span>
             </motion.h1>
          </div>

          <p 
            className="text-sm md:text-lg text-zinc-500 max-w-[45ch] leading-relaxed font-medium"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            A bespoke grooming and wellness sanctuary for individuals who value precision, elegance, and the luxury of quiet confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4">
            <MagneticButton className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-white text-black rounded-xl font-bold text-[10px] md:text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-4 group transition-transform shadow-2xl overflow-hidden relative" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="relative z-10">Book Experience</span>
              <ArrowUpRight weight="bold" size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-rose-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </MagneticButton>
            
            <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em]" style={{ fontFamily: "var(--font-outfit)" }}>
              View Sanctuary
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition (Liquid Glass & Asymmetry) */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[650px] w-full flex items-center justify-center lg:justify-end">
          {/* Main Image Container */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
             className="relative w-full lg:w-[85%] h-full lg:h-[80%] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-20 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1470&auto=format&fit=crop"
              alt="Premium Spa Sanctuary"
              className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-[3s] group-hover:scale-110 ease-out"
            />
            
            {/* Liquid Glass Overlay inside image */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-6 md:bottom-12 left-6 md:left-10 right-6 md:right-10 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl z-20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
               <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex -space-x-3 md:-space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-[3px] border-zinc-950 bg-zinc-800 shadow-xl overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-rose-400">Trusted by</div>
                    <div className="text-white font-bold text-xs md:text-sm">2,500+ Clients</div>
                  </div>
               </div>
               <p className="text-white/80 text-xs md:text-sm italic font-medium leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                 "An unparalleled journey of restoration. The detail and care in every ritual is truly world-class."
               </p>
            </motion.div>
          </motion.div>

          {/* Floating Element 1: Refraction Card - Hidden on mobile for viewability */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute top-0 right-[-2%] md:right-[-5%] w-32 h-32 md:w-44 md:h-44 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-3xl z-30 shadow-2xl items-center justify-center p-4 md:p-6 text-center"
          >
             <div className="flex flex-col gap-1 md:gap-2">
                <div className="text-2xl md:text-4xl font-medium text-rose-100" style={{ fontFamily: "var(--font-playfair)" }}>15+</div>
                <div className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-extrabold" style={{ fontFamily: "var(--font-outfit)" }}>Years of <br/> Mastery</div>
             </div>
          </motion.div>

          {/* Floating Element 2: Small Glass Accent - Scaled down on mobile */}
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[5%] md:bottom-[10%] left-[-2%] md:left-[-8%] w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-3xl border border-white/10 bg-rose-500/5 backdrop-blur-2xl z-30 rotate-12 flex items-center justify-center"
          >
             <Sparkle weight="light" size={24} className="text-rose-200/30 animate-spin-slow md:hidden" />
             <Sparkle weight="light" size={32} className="text-rose-200/30 animate-spin-slow hidden md:block" />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
