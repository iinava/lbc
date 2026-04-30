"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center px-4">
      <div className="max-w-[600px] w-full text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--accent-color)]">
            Coming Soon
          </span>
          <h1 
            className="text-6xl md:text-8xl font-medium tracking-tighter leading-none text-[var(--text-color)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Curating the <br /> <span className="italic opacity-50">Sanctuary.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[var(--secondary-text)] leading-relaxed max-w-[40ch]"
        >
          Our physical space is being digitally manifested. 
          The portal to our sanctuary will open shortly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/"
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] border-b border-[var(--accent-color)] pb-1 hover:opacity-70 transition-opacity"
          >
            Back to Sanctuary
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
