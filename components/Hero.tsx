"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { useRef } from "react";
import LineWaves from "./LineWaves/LineWaves";
import { VerticalGallery } from "./VerticalGallery";
import { useTheme } from "@/context/ThemeContext";
import { HERO_DATA, THEME_DATA } from "@/data/config";

function MagneticButton({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
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
      style={{ ...style, x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function Hero() {
  const { theme } = useTheme();
  const currentTheme = THEME_DATA[theme];

  return (
    <section
      style={{ backgroundColor: currentTheme.bg }}
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center selection:bg-[#d4b08c]/30 selection:text-white transition-colors duration-700"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        {/* <LineWaves
          speed={0.2}
          innerLineCount={45}
          outerLineCount={45}
          warpIntensity={1.2}
          rotation={32}
          edgeFadeWidth={0.0}
          colorCycleSpeed={0.5}
          brightness={theme === 'dark' ? 0.25 : 0.05}
          color1={theme === 'dark' ? "#241b19" : "#e5e5e5"}
          color2={theme === 'dark' ? "#120c0b" : "#fdfcfb"}
          color3={theme === 'dark' ? "#3d2b24" : "#d4b08c"}
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        /> */}
        <div
          style={{ backgroundColor: currentTheme.accent }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] opacity-[0.05] blur-[120px] rounded-full"
        />
        <div
          style={{ backgroundColor: currentTheme.text }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] opacity-[0.05] blur-[150px] rounded-full"
        />
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
              style={{ color: currentTheme.accent }}
              className="flex items-center gap-2 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px]"
            >
              <Sparkle weight="fill" className="animate-pulse" />
              {HERO_DATA.eyebrow}
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
              style={{ color: currentTheme.text, fontFamily: "var(--font-playfair)" }}
              className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.85] lg:leading-[0.8] tracking-[-0.04em] [text-shadow:_0_20px_40px_rgba(0,0,0,0.1)] transition-colors duration-700"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block">
                {HERO_DATA.headline.top}
              </motion.span>
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ color: `${currentTheme.accent}66` }}
                className="italic font-light block"
              >
                {HERO_DATA.headline.bottom}
              </motion.span>
            </motion.h1>
          </div>

          <p
            style={{ color: currentTheme.secondaryText, fontFamily: "var(--font-outfit)" }}
            className="text-sm md:text-lg max-w-[45ch] leading-relaxed font-medium transition-colors duration-700"
          >
            {HERO_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10 pt-6">
            <MagneticButton
              style={{
                backgroundColor: currentTheme.text,
                color: currentTheme.bg,
                fontFamily: "var(--font-outfit)"
              }}
              className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 rounded-full font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-4 group transition-all duration-700 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden relative active:scale-95"
            >
              <span className="relative z-10">{HERO_DATA.primaryCta.text}</span>
              <ArrowUpRight weight="bold" size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div
                style={{ backgroundColor: currentTheme.accent }}
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </MagneticButton>

            <button
              style={{ color: currentTheme.secondaryText, fontFamily: "var(--font-outfit)" }}
              className="hover:!text-[#d4b08c] transition-all duration-500 flex items-center gap-4 font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] group"
            >
              {HERO_DATA.secondaryCta.text}
              <div
                style={{ backgroundColor: currentTheme.accent }}
                className="w-1.5 h-1.5 rounded-full group-hover:scale-150 transition-transform"
              />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Composition (Bento Scrolling Grid) */}
        <div className="relative h-[500px] md:h-[550px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end">
          <div className="relative w-full lg:w-full h-full z-20 mt-6">
            <VerticalGallery />
          </div>
        </div>

      </div>

      {/* Partner Branding Logos (Editorial Anchor) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-8 hidden md:flex flex-wrap items-center justify-center gap-x-16 gap-y-8 grayscale opacity-20 invert pointer-events-none"
      >
        {HERO_DATA.partners.map(brand => (
          <span key={brand} className="text-[10px] font-black tracking-[0.6em] uppercase">{brand}</span>
        ))}
      </motion.div>
    </section>
  );
}
