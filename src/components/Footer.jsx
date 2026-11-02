import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  ShieldCheck, 
  Heart, 
  ArrowUpRight 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND_INFO, COLLECTIONS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const Footer = () => {
  const { setCurrentView, navigateToCategory, setIsSizeGuideOpen } = useShop();

  const handleLink = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown text-ivory border-t border-gold/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-ivory p-2 rounded-lg border border-gold/40">
              <img
                src={BRAND_INFO.logo}
                alt="TOORVA JUTTIS Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div>
              <h3 className="font-serif text-xl tracking-wide text-gold-light">
                {BRAND_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-medium mt-0.5">
                {BRAND_INFO.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-ivory/90 font-normal leading-relaxed max-w-sm">
              Handcrafted Juttis for women. Compliments Guaranteed. Traditional Indian craftsmanship with modern elegance. Worldwide shipping straight to your doorstep.
            </p>

            {/* Social Pill */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-brown flex items-center justify-center text-ivory transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-ivory transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-light border-b border-gold/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home')}
                  className="hover:text-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('shop')}
                  className="hover:text-gold transition-colors"
                >
                  Shop All Juttis
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('story')}
                  className="hover:text-gold transition-colors"
                >
                  Our Artisan Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-gold transition-colors"
                >
                  Size & Fit Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('contact')}
                  className="hover:text-gold transition-colors"
                >
                  Custom Bridal Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold-light border-b border-gold/30 pb-2">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory font-medium">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => navigateToCategory(c.name)}
                    className="hover:text-gold transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{c.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Concierge (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold-light border-b border-gold/20 pb-2">
              Concierge & Orders
            </h4>
            <ul className="space-y-3 text-xs text-ivory/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-ivory/60 uppercase">WhatsApp Ordering</span>
                  <a 
                    href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-ivory hover:text-gold transition-colors"
                  >
                    {BRAND_INFO.whatsappNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-ivory/60 uppercase">Instagram</span>
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {BRAND_INFO.instagram}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-ivory/60 uppercase">Shipping Destinations</span>
                  <span>USA, UK, Canada, UAE, Europe, Australia & 40+ countries.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-ivory/60 uppercase">Authenticity Promise</span>
                  <span>100% Genuine Leather & Hand Embroidery.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} TOORVA JUTTIS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-serif italic text-gold-light">
            <span>"Khari Kala. Desi Shaan."</span>
            <span>•</span>
            <span>Compliments Guaranteed</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-ivory/50">
            <button type="button" onClick={() => setIsSizeGuideOpen(true)} className="hover:text-ivory">Size Guide</button>
            <span>•</span>
            <button type="button" onClick={() => handleLink('contact')} className="hover:text-ivory">Shipping & Returns</button>
            <span>•</span>
            <button type="button" onClick={() => handleLink('contact')} className="hover:text-ivory">Contact Concierge</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
