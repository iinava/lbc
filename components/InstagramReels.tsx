"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Play, MapPin, InstagramLogo, ArrowUpRight } from '@phosphor-icons/react';

const REELS_CONTENT = [
  {
    id: 1,
    user: "@lbc_salon",
    handle: "lbc_salon",
    avatar: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=100",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500",
    likes: "48K",
    views: "2.4M",
    location: "Calicut",
    caption: "Mastery in every ritual. ✨",
    offset: -130,
    rotate: -12,
    y: 30
  },
  {
    id: 2,
    user: "@lbc_salon",
    handle: "lbc_salon",
    avatar: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=100",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=500",
    likes: "91K",
    views: "3.1M",
    location: "Calicut",
    caption: "The LBC Sanctuary experience. 🌙",
    offset: 0,
    rotate: 0,
    y: 0,
    isHero: true
  },
  {
    id: 3,
    user: "@lbc_salon",
    handle: "lbc_salon",
    avatar: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=100",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=500",
    likes: "29K",
    views: "980K",
    location: "Calicut",
    caption: "Artisan details. ✂️",
    offset: 110,
    rotate: 12,
    y: -30
  }
];

function PhoneFrame({ content }: { content: typeof REELS_CONTENT[0] }) {
  return (
    <div 
      className="relative w-[240px] md:w-[280px] aspect-[9/19] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]" 
      style={{ 
        borderRadius: '36px', 
        background: 'linear-gradient(160deg, rgb(63, 63, 70) 0%, rgb(24, 24, 27) 40%, rgb(9, 9, 11) 100%)', 
        padding: '4px' 
      }}
    >
      <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '32px', backgroundColor: 'rgb(0, 0, 0)' }}>
        <img alt={content.caption} className="absolute inset-0 w-full h-full object-cover" loading="lazy" src={content.image} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.45) 100%)' }} />
        
        {/* Dynamic Island */}
        <div className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-1" style={{ top: '10px', width: '80px', height: '22px', borderRadius: '999px', backgroundColor: 'rgb(0, 0, 0)' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgb(26, 26, 26)', border: '1.5px solid rgb(51, 51, 51)' }}></div>
        </div>

        {/* Status Bar */}
        <div className="absolute left-0 right-0 flex items-center justify-between px-4 z-20" style={{ top: '38px' }}>
          <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'monospace' }}>9:41</span>
          <div className="flex items-center gap-1">
            <div style={{ width: '3px', height: '4px', borderRadius: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
            <div style={{ width: '3px', height: '6px', borderRadius: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
            <div style={{ width: '3px', height: '8px', borderRadius: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
            <div style={{ width: '3px', height: '10px', borderRadius: '1px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
            <div style={{ width: '16px', height: '8px', borderRadius: '2px', border: '1.5px solid rgba(255, 255, 255, 0.5)', marginLeft: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1px', top: '1px', bottom: '1px', width: '70%', borderRadius: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}></div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="absolute left-0 right-0 flex items-center gap-2 px-3 z-20" style={{ top: '58px' }}>
          <div className="rounded-full overflow-hidden ring-2 ring-white/30" style={{ width: '22px', height: '22px' }}>
            <img alt="" className="w-full h-full object-cover" src={content.avatar} />
          </div>
          <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgb(255, 255, 255)', flex: '1 1 0%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{content.user}</span>
          <div style={{ color: 'rgb(255, 255, 255)' }}>
             <InstagramLogo size={13} weight="bold" />
          </div>
        </div>

        {/* Engagement Side */}
        <div className="absolute right-3 flex flex-col items-center z-20" style={{ bottom: '48px', gap: '10px' }}>
          <div className="flex flex-col items-center" style={{ gap: '3px' }}>
            <div className="flex items-center justify-center backdrop-blur-md" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
               <Heart size={14} weight="fill" className="text-red-400" />
            </div>
            <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.9)' }}>{content.likes}</span>
          </div>
          <div className="flex flex-col items-center" style={{ gap: '3px' }}>
            <div className="flex items-center justify-center backdrop-blur-md" style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
               <Play size={12} weight="fill" className="text-white translate-x-px" />
            </div>
            <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.9)' }}>{content.views}</span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute left-3 right-12 z-20" style={{ bottom: '22px' }}>
          <div className="flex items-center gap-1 mb-1">
            <MapPin size={8} weight="fill" className="text-[var(--accent-color)] shrink-0" />
            <span style={{ fontSize: '9px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.6)' }}>{content.location}</span>
          </div>
          <p className="line-clamp-2" style={{ fontSize: '9px', fontWeight: '700', color: 'rgb(255, 255, 255)', lineHeight: '1.35' }}>{content.caption}</p>
        </div>

        {/* Home Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ bottom: '8px', width: '60px', height: '4px', borderRadius: '999px', backgroundColor: 'rgba(255, 255, 255, 0.35)' }}></div>
      </div>
    </div>
  );
}

export function InstagramReels() {
  return (
    <section id="social" className="relative w-full py-24 md:py-32 bg-[var(--bg-color)] overflow-hidden border-t border-[var(--glass-border)]">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Narrative & Stats (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative z-30">
            
            {/* UGC Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--glass-border)] w-fit bg-white/[0.02]"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)]">User Generated Content</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[var(--text-color)] uppercase italic">
                12M+ <br />
                <span className="text-[var(--accent-color)] normal-case not-italic">views</span> <br />
                on social.
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-[var(--secondary-text)] leading-relaxed max-w-[38ch] opacity-80"
            >
              Our guests are our best storytellers. Every reel, post, and story below is real — shot and shared by people who've lived the LBC experience.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--glass-border)]">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[var(--text-color)]">48K</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Followers</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[var(--text-color)]">2,847</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Reviews</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-[var(--text-color)]">4.8★</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--accent-color)] opacity-40">Rating</span>
              </div>
            </div>

            {/* Follow Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <a 
                href="https://www.instagram.com/lbc_salon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-5 px-8 py-4 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-full group hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(var(--accent-rgb),0.3)]"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <InstagramLogo size={22} weight="bold" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60">Join the Evolution</span>
                  <span className="text-sm font-bold tracking-tight">Follow on Instagram</span>
                </div>
                <ArrowUpRight size={18} weight="bold" className="ml-2 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right: Phone Stack (7 Cols - Shifted Left) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[650px] flex items-center justify-center lg:justify-center lg:-translate-x-10">
            
            {REELS_CONTENT.map((reel) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, x: 0, rotate: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  x: reel.offset, 
                  rotate: reel.rotate, 
                  y: reel.y,
                  scale: reel.isHero ? 1 : 0.95
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: reel.id * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-${reel.isHero ? '20' : reel.id === 1 ? '0' : '10'}`}
              >
                <PhoneFrame content={reel} />
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
