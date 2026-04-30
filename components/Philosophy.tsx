"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, ShieldCheck, Crown, ClockCounterClockwise, Star } from '@phosphor-icons/react';

const STATS = [
  {
    label: "Years of Mastery",
    value: "12+",
    sub: "Founded in 2012",
    icon: <ClockCounterClockwise size={24} weight="light" />
  },
  {
    label: "Rituals Performed",
    value: "25k+",
    sub: "Bespoke Services",
    icon: <Crown size={24} weight="light" />
  },
  {
    label: "Sanctuary Rating",
    value: "4.8",
    sub: "Google Verified",
    icon: <Star size={24} weight="fill" className="text-[var(--accent-color)]" />
  },
  {
    label: "Master Artisans",
    value: "15+",
    sub: "Industry Leaders",
    icon: <Users size={24} weight="light" />
  }
];

const PILLARS = [
  {
    title: "Precision Engineering",
    desc: "Our artisans treat every silhouette as an architectural project, blending structural integrity with aesthetic fluidness.",
    icon: <ShieldCheck size={32} weight="thin" />
  },
  {
    title: "Sanctuary Ethics",
    desc: "A commitment to silence, privacy, and the ritualistic nature of grooming. We don't just provide services; we curate peace.",
    icon: <Trophy size={32} weight="thin" />
  }
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-12 md:py-16 bg-[var(--bg-color)] overflow-hidden border-t border-[var(--glass-border)]">
      
      {/* Background Legacy Watermark (Static) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter text-[var(--accent-color)] leading-none select-none">
          Legacy
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[var(--accent-color)]"
          >
            <div className="w-8 h-[1px] bg-current" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">The LBC Narrative</span>
            <div className="w-8 h-[1px] bg-current" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--text-color)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Art of <span className="italic font-light opacity-50">Mastery.</span>
          </motion.h2>
        </div>

        {/* 2x2 Mastery Grid (Typographic Poster Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              key={stat.label}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="text-[var(--accent-color)] opacity-20 group-hover:opacity-100 transition-all duration-700 mb-2">
                {stat.icon}
              </div>
              
              <div className="flex flex-col items-center">
                <span 
                  className="text-7xl md:text-9xl font-medium tracking-tighter text-[var(--text-color)] leading-[0.8] mb-4" 
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)]">
                  {stat.label}
                </span>
                <div className="w-0 group-hover:w-full h-[1px] bg-[var(--accent-color)] opacity-30 mt-3 transition-all duration-1000" />
                <span className="text-[9px] font-medium uppercase tracking-widest opacity-30 mt-3">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Detail (Static) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 md:mt-32 text-center flex flex-col items-center"
        >
          <p className="text-sm md:text-lg text-[var(--secondary-text)] leading-relaxed max-w-[50ch] font-medium opacity-60">
            For over a decade, we have been the sanctuary for aesthetic mastery in Calicut, defining the ritual of precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
