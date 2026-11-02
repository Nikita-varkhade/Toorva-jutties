import React from 'react';
import { Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-ruby-dark via-ruby to-ruby-dark text-ivory text-xs tracking-wider uppercase py-1.5 sm:py-2 px-4 border-b border-gold/40 shadow-sm relative overflow-hidden">
      
      {/* Decorative Gold Shimmer Line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center gap-1.5 md:gap-4 relative z-10">
        
        {/* Left perk */}
        <div className="hidden lg:flex items-center gap-2 text-gold-light text-[11px] font-medium tracking-widest">
          <Globe className="w-3.5 h-3.5 text-gold-light animate-pulse" />
          <span>Worldwide Express Doorstep Shipping</span>
        </div>

        {/* Center brand statement */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs md:text-[12px] font-medium text-white tracking-widest drop-shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-gold-light hidden sm:inline-block animate-pulse" />
          <span>{BRAND_INFO.announcement}</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-light hidden sm:inline-block animate-pulse" />
        </div>

        {/* Right WhatsApp quick link */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-medium tracking-widest text-gold-light">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-light" />
          <span>WhatsApp Concierge: {BRAND_INFO.whatsappNumber}</span>
        </div>

      </div>
    </div>
  );
};
