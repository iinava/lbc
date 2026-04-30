"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const INTERIOR_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1200",
    title: "The Sculpting Lounge",
    aspect: "aspect-[4/5]"
  },
  {
    url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200",
    title: "Sanctuary Lighting",
    aspect: "aspect-square"
  },
  {
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    title: "Precision Stations",
    aspect: "aspect-[4/5]"
  },
  {
    url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1200",
    title: "Wait in Peace",
    aspect: "aspect-square"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="relative w-full h-[100dvh] flex flex-col justify-center py-12 md:py-16 bg-[var(--bg-color)] overflow-hidden border-t border-[var(--glass-border)]">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full h-full flex flex-col">
        
        {/* Header: Minimal & Pinned */}
        <div className="flex flex-col items-start mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[var(--accent-color)] mb-3"
          >
            <div className="w-8 h-[1px] bg-current" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">The Spatial Map</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--text-color)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sanctuary <span className="italic font-light opacity-50 pl-2">Interior.</span>
          </motion.h2>
        </div>

        {/* Interior Bento Architecture (Constrained to 100vh) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6 pb-8 md:pb-12">
          
          {/* Main Hero: The Sanctuary (Tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] border border-[var(--glass-border)] shadow-2xl"
          >
            <img 
              src={INTERIOR_IMAGES[0].url} 
              alt={INTERIOR_IMAGES[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-8 left-8 flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white opacity-40 group-hover:opacity-100 transition-opacity">01 / The Main Stage</span>
              <span className="text-xl md:text-2xl font-medium text-white" style={{ fontFamily: "var(--font-playfair)" }}>The Sculpting Lounge</span>
            </div>
          </motion.div>

          {/* Secondary: Lighting (Wide) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-[var(--glass-border)] shadow-xl"
          >
            <img 
              src={INTERIOR_IMAGES[1].url} 
              alt={INTERIOR_IMAGES[1].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white opacity-40">02 / Atmosphere</span>
            </div>
          </motion.div>

          {/* Details: Precision (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-[var(--glass-border)] shadow-xl"
          >
            <img 
              src={INTERIOR_IMAGES[2].url} 
              alt={INTERIOR_IMAGES[2].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/60 to-transparent opacity-60" />
            <div className="absolute bottom-4 left-6">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white opacity-40">03 / Tooling</span>
            </div>
          </motion.div>

          {/* Waiting: Peace (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] border border-[var(--glass-border)] shadow-xl"
          >
            <img 
              src={INTERIOR_IMAGES[3].url} 
              alt={INTERIOR_IMAGES[3].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/60 to-transparent opacity-60" />
            <div className="absolute bottom-4 left-6">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white opacity-40">04 / Rest</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
