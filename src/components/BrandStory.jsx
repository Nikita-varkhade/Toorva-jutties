import React from 'react';
import { ArrowRight, Sparkles, Feather, Scissors, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_INFO } from '../data/products';

export const BrandStory = () => {
  const { setCurrentView } = useShop();

  const handleReadMore = () => {
    setCurrentView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Artisan Craft Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/jutti-pearl-sequin.jpg"
                  alt="TOORVA Artisanal Craftsmanship and Pearl Embroidery"
                  className="w-full h-[460px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent" />
                
                {/* Floating Craft Quote */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-ivory/95 backdrop-blur-md border border-gold/30 shadow-md">
                  <div className="flex items-center gap-2 text-gold-dark text-[11px] uppercase tracking-wider font-bold mb-1">
                    <Scissors className="w-3.5 h-3.5" />
                    <span>20+ Hours Of Needlework Per Pair</span>
                  </div>
                  <p className="text-xs text-brown/90 font-serif italic">
                    "Every bead is knotted by hand; every sole is vegetable-tanned leather shaped on traditional wooden lasts."
                  </p>
                </div>
              </div>

              {/* Offset Decorative Visual */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-44 h-44 rounded-xl overflow-hidden shadow-xl border-4 border-white bg-beige transform rotate-3">
                <img
                  src="/assets/jutti-zardozi-gold.jpg"
                  alt="Zardozi close up"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artisan Seal Badge */}
              <div className="absolute -bottom-6 -left-6 bg-brown text-ivory p-4 rounded-full shadow-2xl border-2 border-gold flex flex-col items-center justify-center text-center w-24 h-24">
                <Award className="w-5 h-5 text-gold-light mb-0.5" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-gold-light">
                  Khari Kala
                </span>
                <span className="text-[8px] text-ivory/80">Desi Shaan</span>
              </div>

            </div>
          </div>

          {/* Right Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            
            {/* Tagline Pre-title */}
            <div className="inline-flex items-center gap-2 text-gold-dark text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.tagline}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight leading-tight">
              Where Tradition Meets <br />
              <span className="italic font-normal text-gold-dark">
                Timeless Elegance
              </span>
            </h2>

            {/* Core Content as required by user */}
            <p className="text-base sm:text-lg md:text-xl text-brown font-normal leading-relaxed">
              Every pair of Toorva Juttis reflects the beauty of Indian craftsmanship. Designed for women who love tradition, celebrate individuality and walk with confidence.
            </p>

            {/* Craft Pillar Breakdown with Rich Festive Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-left">
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 shadow-xs">
                <div className="flex items-center gap-2.5 text-brown font-serif text-lg font-bold mb-1">
                  <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-saffron">
                    <Feather className="w-4 h-4" />
                  </div>
                  <h4>Generational Karigars</h4>
                </div>
                <p className="text-xs text-brown font-medium leading-relaxed pl-10">
                  We work directly with master artisans across Punjab and Rajasthan, preserving age-old embroidery traditions and uplifting local families.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300 shadow-xs">
                <div className="flex items-center gap-2.5 text-brown font-serif text-lg font-bold mb-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emeraldRoyal">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4>Zero-Bite Cloud Comfort</h4>
                </div>
                <p className="text-xs text-brown font-medium leading-relaxed pl-10">
                  Engineered with our proprietary dual-cushioned memory foam insole and soft buff leather lining that banishes blisters forever.
                </p>
              </div>
            </div>

            {/* Read our full story CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handleReadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-ruby to-ruby-dark hover:from-ruby-dark hover:to-brown text-white text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 shadow-luxury group border border-ruby/40"
              >
                <span>Read The Full Artisan Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent('Namaste Toorva! I would like to know more about custom handcrafted juttis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-brown font-semibold hover:text-gold transition-colors underline underline-offset-4"
              >
                Inquire For Custom Bridal Juttis &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

