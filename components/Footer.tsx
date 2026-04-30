"use client";

import React from 'react';
import Link from 'next/link';
import { NAV_DATA } from '@/data/config';
import { ArrowUpRight } from '@phosphor-icons/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-color)] border-t border-[var(--glass-border)] pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Elegant Brand Signature */}
        <div className="flex flex-col gap-2 mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-color)]" style={{ fontFamily: "var(--font-playfair)" }}>
            Life Behind Chair
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-[var(--accent-color)] opacity-30" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[var(--accent-color)]">Sanctuary of Precision</span>
          </div>
        </div>

        {/* Modular 4-Column Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: The Narrative */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-60">The Legacy</span>
            <p className="text-sm md:text-base text-[var(--secondary-text)] leading-relaxed opacity-80">
              Defining Calicut's aesthetic silhouette since 2012. A decade of artisan mastery and sanctuary ethics.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-60">Sanctuary Map</span>
            <div className="flex flex-col gap-3">
              {NAV_DATA.links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all w-fit"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-60">Connection</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-30 mb-1">Direct Dial</span>
                <p className="text-lg font-medium text-[var(--text-color)]">+91 90483 31100</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-30 mb-1">Inquiry</span>
                <p className="text-base font-medium text-[var(--text-color)]">hello@lbc-salon.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-60">The Sanctuary</span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-30 mb-1">Address</span>
                <p className="text-base text-[var(--text-color)] leading-snug opacity-80">
                  Left Behind Chair, <br />
                  Near Focus Mall, <br />
                  Calicut, Kerala.
                </p>
              </div>
              <Link href="#" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent-color)] hover:underline underline-offset-4">
                Open in Maps <ArrowUpRight size={10} weight="bold" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-[var(--glass-border)] gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
            <span>© {currentYear} LBC Salon Sanctuary</span>
            <Link href="#" className="hover:opacity-100 transition-all">Privacy</Link>
            <Link href="#" className="hover:opacity-100 transition-all">Terms</Link>
          </div>
          
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] opacity-30">
            <span>Precision by</span>
            <span className="text-[var(--accent-color)]">Antigravity.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


