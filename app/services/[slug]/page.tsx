"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '@/data/services';
import { ArrowLeft, ArrowUpRight, Clock } from '@phosphor-icons/react';
import Link from 'next/link';

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const service = SERVICES_DATA.categories.find(c => c.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl text-[var(--text-color)] font-medium mb-8" style={{ fontFamily: "var(--font-playfair)" }}>Ritual Not Found</h1>
          <Link href="/" className="text-[var(--accent-color)] uppercase tracking-widest text-xs font-black">Return to Sanctuary</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] pt-40 pb-24 px-4 md:px-8">
      <div className="max-w-[800px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Minimal High-Visibility Back Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-4 group w-fit"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--accent-color)] text-[var(--bg-color)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
            <ArrowLeft size={18} weight="bold" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--accent-color)] opacity-60 group-hover:opacity-100 transition-all">
            Back
          </span>
        </motion.button>

        {/* Header: Pure Typography */}
        <div className="flex flex-col gap-6 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 items-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--accent-color)]">
              {service.tag} Ritual
            </span>
            <h1 
              className="text-6xl md:text-8xl font-medium tracking-tighter leading-none text-[var(--text-color)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {service.title}
            </h1>
            <div className="w-12 h-[1px] bg-[var(--accent-color)] opacity-30 mt-4" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--secondary-text)] leading-relaxed max-w-[45ch] font-medium"
          >
            {service.details}
          </motion.p>
        </div>

        {/* Singular Photo Showcase: Minimal & Cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-[var(--glass-border)] shadow-2xl"
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/20 to-transparent" />
        </motion.div>

        {/* Ritual Catalog: Clean List */}
        <div className="flex flex-col border-t border-[var(--glass-border)]">
          {service.rituals.map((ritual, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
              key={ritual.name}
              className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-[var(--glass-border)]"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  {ritual.name}
                </h3>
                <div className="flex items-center gap-4 text-[var(--secondary-text)]">
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span className="text-[10px] font-black tracking-widest uppercase">{ritual.duration}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-6 md:mt-0">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-[var(--accent-color)]">
                  ₹{ritual.price}
                </span>
                <Link 
                  href="/booking"
                  className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all duration-500"
                >
                  <ArrowUpRight size={18} weight="bold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="flex justify-center pt-8">
          <Link 
            href="/contact"
            className="group flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--secondary-text)] group-hover:text-[var(--accent-color)] transition-colors">
              Request Appointment
            </span>
            <div className="w-12 h-[1px] bg-[var(--glass-border)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--accent-color)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
