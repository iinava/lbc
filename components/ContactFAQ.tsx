"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, InstagramLogo, WhatsappLogo, MapPin, Phone, Envelope } from '@phosphor-icons/react';

const FAQS = [
  {
    question: "How do I reserve a specific ritual?",
    answer: "You can book directly via our 'Enquire Now' portal or via WhatsApp. We recommend booking 48 hours in advance for premium rituals."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We value the sanctuary experience for all. Please provide at least 24 hours notice for any changes to your appointment."
  },
  {
    question: "Do you offer bridal consultations?",
    answer: "Yes, our Master Artisans specialize in bespoke bridal rituals. Consultations are complementary with any bridal package."
  },
  {
    question: "Where is the sanctuary located?",
    answer: "We are situated in the heart of Calicut. For exact directions, please use the map link in the contact section."
  }
];

export function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="contact" className="relative w-full py-24 md:py-40 bg-[var(--bg-color)] overflow-hidden border-t border-[var(--glass-border)]">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: FAQ (The Inquiries) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[var(--accent-color)]">
                <div className="w-8 h-[1px] bg-current" />
                <span className="text-[9px] font-black uppercase tracking-[0.6em]">Clarifications</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--text-color)]" style={{ fontFamily: "var(--font-playfair)" }}>
                Common <span className="italic font-light opacity-50">Inquiries.</span>
              </h2>
            </div>

            <div className="flex flex-col border-t border-[var(--glass-border)]">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-[var(--glass-border)]">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full py-8 flex items-center justify-between group text-left"
                  >
                    <span className="text-lg md:text-xl font-medium text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors pr-8">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIdx === idx ? 180 : 0 }}
                      className="text-[var(--accent-color)] opacity-40 group-hover:opacity-100"
                    >
                      <CaretDown size={20} weight="bold" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[var(--secondary-text)] leading-relaxed pb-8 max-w-[55ch]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact (The Connection) */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            
            {/* Contact Info Group */}
            <div className="flex flex-col gap-12 p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-[var(--glass-border)] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-color)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-medium text-[var(--text-color)]" style={{ fontFamily: "var(--font-playfair)" }}>Visit the Sanctuary.</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                      <MapPin size={18} weight="light" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Location</span>
                      <p className="text-lg text-[var(--text-color)] opacity-80 leading-snug">
                        Left Behind Chair, <br />
                        Near Focus Mall, Calicut.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                      <Phone size={18} weight="light" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Direct</span>
                      <p className="text-lg text-[var(--text-color)] opacity-80">+91 90483 31100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                      <Envelope size={18} weight="light" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Inquiry</span>
                      <p className="text-lg text-[var(--text-color)] opacity-80">hello@lbc-salon.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials & Action */}
              <div className="flex items-center gap-4 pt-8 border-t border-[var(--glass-border)]">
                <a href="#" className="w-12 h-12 rounded-full bg-[var(--accent-color)] text-[var(--bg-color)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg">
                  <InstagramLogo size={22} weight="bold" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[var(--glass-border)] text-[var(--text-color)] flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all">
                  <WhatsappLogo size={22} weight="bold" />
                </a>
                <div className="flex-1" />
                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] hover:underline decoration-2 underline-offset-8">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Operating Hours (Compact) */}
            <div className="flex items-center justify-between px-10">
               <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40 mb-2">Sanctuary Hours</span>
                  <p className="text-sm font-medium opacity-60">Mon — Sun: 10:00 AM — 08:30 PM</p>
               </div>
               <div className="w-3 h-3 rounded-full bg-green-500/40 animate-pulse" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
