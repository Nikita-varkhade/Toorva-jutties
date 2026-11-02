import React from 'react';
import { Sparkles, Scissors, Heart, Award, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { useShop } from '../context/ShopContext';

export const OurStoryPage = () => {
  const { setCurrentView } = useShop();

  return (
    <div className="bg-ivory py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-dark text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>The Heritage Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brown font-normal tracking-tight leading-tight">
            Where Tradition Meets <br />
            <span className="italic font-normal text-gold-dark">
              Timeless Elegance
            </span>
          </h1>

          <div className="w-20 h-[1.5px] bg-gold mx-auto mt-4 mb-4" />

          <p className="font-serif italic text-lg sm:text-xl text-brown/90">
            "{BRAND_INFO.tagline}"
          </p>
        </div>

        {/* Hero Image Spread */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-16">
          <img
            src="/assets/jutti-pastel-floral.jpg"
            alt="Toorva Handcrafted Juttis Artistry"
            className="w-full h-[400px] sm:h-[500px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-ivory max-w-xl">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-light">
              Crafted in India • Worn Worldwide
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-ivory font-normal mt-1">
              Compliments Guaranteed in Every Step
            </h2>
          </div>
        </div>

        {/* Story Narrative */}
        <div className="bg-white rounded-2xl p-8 sm:p-14 border border-beige/80 shadow-luxury space-y-8 text-brown-muted leading-relaxed font-light text-sm sm:text-base">
          
          <div className="border-l-2 border-gold pl-6 py-1">
            <p className="text-lg sm:text-xl font-serif italic text-brown leading-relaxed">
              "Every pair of Toorva Juttis reflects the beauty of Indian craftsmanship. Designed for women who love tradition, celebrate individuality and walk with confidence."
            </p>
          </div>

          <p>
            The story of <strong>TOORVA JUTTIS</strong> begins with a simple yet passionate observation: while Indian ethnic wear is celebrated globally for its grandeur and delicate ornamentation, traditional footwear often forced women into an unfair compromise between exquisite looks and painful blisters.
          </p>

          <p>
            We set out on a journey to re-engineer the royal Punjabi jutti from the inside out — honoring two-hundred-year-old embroidery lineages while infusing modern ergonomic orthotic memory cushioning. The result? Footwear that looks like an heirloom piece of jewellery, but feels like walking on clouds.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-beige">
            <div className="p-4 rounded-xl bg-ivory-50 border border-gold/30">
              <Scissors className="w-5 h-5 text-gold-dark mb-2" />
              <h3 className="font-serif text-base font-semibold text-brown mb-1">
                Authentic Needlecraft
              </h3>
              <p className="text-xs leading-relaxed text-brown-muted">
                From Lucknowi chikankari and zardozi wires to Rajasthani gota patti and resham silk, every knot is tied by generational master karigars.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-50 border border-gold/30">
              <ShieldCheck className="w-5 h-5 text-gold-dark mb-2" />
              <h3 className="font-serif text-base font-semibold text-brown mb-1">
                Zero Shoe-Bite Promise
              </h3>
              <p className="text-xs leading-relaxed text-brown-muted">
                Each sole is cut from genuine vegetable-tanned buffalo leather and lined with butter-soft calfskin and dual-layered memory foam.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-50 border border-gold/30">
              <Award className="w-5 h-5 text-gold-dark mb-2" />
              <h3 className="font-serif text-base font-semibold text-brown mb-1">
                Worldwide Doorstep Express
              </h3>
              <p className="text-xs leading-relaxed text-brown-muted">
                Bridging the diaspora across the USA, UK, Canada, UAE, Australia, and beyond with insured doorstep courier delivery.
              </p>
            </div>
          </div>

          {/* Brand Promise Callout */}
          <div className="p-6 rounded-xl bg-beige/30 border border-gold/40 text-center space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-gold-dark">
              Our Uncompromising Promise
            </span>
            <h4 className="font-serif text-2xl text-brown font-normal">
              "Compliments Guaranteed"
            </h4>
            <p className="text-xs sm:text-sm text-brown-muted max-w-md mx-auto">
              Slip into your Toorva Juttis at any wedding, festival, dinner, or brunch. We promise you will turn heads and receive inquiries before the night ends.
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-beige flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setCurrentView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark transition-colors"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brown font-semibold hover:text-gold"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>Connect with Founder & Stylist on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

