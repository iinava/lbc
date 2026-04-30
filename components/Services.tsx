"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle, CaretLeft, CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/services';


const ServiceCard = ({ category }: { category: any }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[280px] md:w-[350px] flex flex-col gap-0 rounded-[2rem] overflow-hidden group shadow-xl bg-[var(--accent-color)] transition-transform duration-500 hover:-translate-y-2 border border-[var(--glass-border)]"
    >
      {/* Top Section: Information (Theme-Aware Contrast) */}
      <div className="p-6 md:p-8 flex flex-col gap-4 h-[180px] md:h-[220px] justify-center">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-[var(--bg-color)]/10 text-[8px] font-black uppercase tracking-widest text-[var(--bg-color)]">
            {category.tag}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 
            className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--bg-color)] leading-[0.9]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.title.split(' ')[0]} <br />
            {category.title.split(' ')[1] || ''}
          </h3>
          <p className="text-[10px] md:text-xs text-[var(--bg-color)]/70 max-w-[22ch] leading-relaxed mt-1">
            {category.description}
          </p>
        </div>
      </div>

      {/* Bottom Section: Visual (Optimized Aspect) */}
      <div className="relative aspect-[4/3] md:aspect-square p-3 pt-0">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-lg bg-[var(--bg-color)]/20">
          <img 
            src={category.image} 
            alt={category.title} 
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          {/* Begin Ritual Action Pill (Solid Contrast) */}
          <Link 
            href={category.href}
            className="absolute bottom-4 left-4 right-4 p-3 rounded-full bg-[var(--accent-color)] flex items-center justify-between group/btn shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--bg-color)] relative z-10 transition-colors duration-500">
              Explore Ritual
            </span>
            <div className="w-6 h-6 rounded-full bg-[var(--bg-color)] flex items-center justify-center text-[var(--accent-color)] group-hover/btn:scale-110 transition-all duration-500 relative z-10">
              <ArrowUpRight size={12} weight="bold" />
            </div>
            {/* Subtle Hover Reveal */}
            <div className="absolute inset-0 bg-[var(--bg-color)] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            <span className="absolute left-3 text-[9px] font-black uppercase tracking-[0.2em] text-[var(--accent-color)] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 z-20">
              Explore Ritual
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export function Services() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [xOffset, setXOffset] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // 3x duplication for infinite seamless loop
  const loopedCategories = [...SERVICES_DATA.categories, ...SERVICES_DATA.categories, ...SERVICES_DATA.categories];
  const totalCategories = SERVICES_DATA.categories.length;
  
  // Precise width calculation (Card: 350px + Gap: 32px)
  const cardWidth = 350 + 32; 
  const totalWidth = cardWidth * totalCategories;

  // Manual Scroll
  const scroll = (direction: 'left' | 'right') => {
    const shift = cardWidth;
    setXOffset(prev => direction === 'left' ? prev + shift : prev - shift);
  };

  // Autoscroll Loop Logic
  React.useEffect(() => {
    let animationId: number;
    const speed = 0.8; // Pixels per frame

    const animate = () => {
      if (!isHovered) {
        setXOffset(prev => {
          let next = prev - speed;
          // Seamless reset: If we've scrolled past one full set, snap back to the middle set
          if (Math.abs(next) >= totalWidth * 2) return next + totalWidth;
          if (next > -totalWidth) return next - totalWidth;
          return next;
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    // Initial positioning in the middle set for bidirectional infinite feel
    setXOffset(-totalWidth);
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, totalWidth]);

  return (
    <section id="services" className="relative w-full min-h-[100dvh] flex flex-col justify-center py-12 md:py-16 bg-[var(--bg-color)] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full relative z-10">
        
        {/* Header with Navigation (Compact) */}
        <div className="flex items-end justify-between gap-10 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-[var(--accent-color)]">
              <div className="w-8 h-[1px] bg-current" />
              <span className="text-[8px] font-black uppercase tracking-[0.4em]">The Ritual Selection</span>
            </div>
            <h2 
              className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.9] text-[var(--text-color)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Curated <span className="italic font-light opacity-50">Experiences.</span>
            </h2>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all duration-500"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all duration-500"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* Carousel Stage with Mask-Based Vignetting */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full cursor-grab active:cursor-grabbing"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)"
          }}
        >
          <motion.div 
            ref={containerRef}
            animate={{ x: xOffset }}
            transition={{ type: "spring", stiffness: 400, damping: 40, mass: 1 }}
            className="flex gap-4 md:gap-8 w-fit py-4"
          >
            {loopedCategories.map((category, index) => (
              <div key={`${category.id}-${index}`} className="flex-shrink-0">
                <ServiceCard category={category} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


