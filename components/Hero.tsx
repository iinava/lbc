"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { useRef, useState, useEffect } from "react";
import LineWaves from "./LineWaves/LineWaves";
import { VerticalGallery } from "./VerticalGallery";

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
          innerLineCount={40}
          outerLineCount={40}
          warpIntensity={1.5}
          // rotation={-45}
          rotation={32}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.3}
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

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 md:px-8 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-16 lg:pb-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

        {/* Left Column: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start lg:-mt-12"
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
              className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.85] lg:leading-[0.8] tracking-[-0.04em] text-white [text-shadow:_0_20px_40px_rgba(0,0,0,0.5)]"
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

          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10 pt-6">
            <MagneticButton className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-white text-black rounded-full font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-4 group transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] overflow-hidden relative active:scale-95" style={{ fontFamily: "var(--font-outfit)" }}>
              <span className="relative z-10">Book Experience</span>
              <ArrowUpRight weight="bold" size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-rose-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </MagneticButton>

            <button className="text-zinc-500 hover:text-white transition-all duration-500 flex items-center gap-4 font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] group" style={{ fontFamily: "var(--font-outfit)" }}>
              View Sanctuary
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full group-hover:scale-150 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition (Bento Scrolling Grid) */}
        <div className="relative h-[500px] md:h-[550px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end">

          <div className="relative w-full lg:w-full h-full z-20 mt-6">
            {/* The Auto-Scrolling Bento Stream */}
            <VerticalGallery />
          </div>

          {/* 
            PREVIOUS VISUAL (Preserved but not called)
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full lg:w-[85%] h-full lg:h-[80%] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-20 border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 z-10" />
              <img
                src="https://i.pinimg.com/736x/cc/6b/56/cc6b5645d91f8d7bf2806dd13bfa264c.jpg"
                alt="Premium Spa Sanctuary"
                className="w-full h-full object-cover grayscale-[0.3] transition-transform duration-[3s] group-hover:scale-110 ease-out"
              />
            </motion.div>
          */}


        </div>

      </div>

      {/* Partner Branding Logos (Editorial Anchor) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-8 hidden md:flex flex-wrap items-center justify-center gap-x-16 gap-y-8 grayscale opacity-20 invert pointer-events-none"
      >
        {["VOGUE", "ELLE", "GQ", "BAZAAR", "DAZED"].map(brand => (
          <span key={brand} className="text-[10px] font-black tracking-[0.6em] uppercase">{brand}</span>
        ))}
      </motion.div>
    </section>
  );
}
