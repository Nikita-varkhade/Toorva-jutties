import React from 'react';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_INFO } from '../data/products';

export const Hero = () => {
  const { setCurrentView } = useShop();

  const handleExplore = () => {
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOurStory = () => {
    setCurrentView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-ivory-50 to-beige-light/40 border-b border-beige/60">
      
      {/* Luxury Color Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-ruby/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-emeraldRoyal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#8B1E2D_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content (7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left z-10">
            
            {/* Brand Prestige Pill in Rich Sindoor Ruby & Gold */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ruby-light border border-ruby-border text-ruby text-xs uppercase tracking-widest font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-ruby animate-pulse" />
              <span>{BRAND_INFO.tagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-ruby-dark lowercase font-normal italic">handcrafted heritage</span>
            </div>

            {/* Headline with Gold & Jewel highlights */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-brown tracking-tight leading-[1.08]">
                Walk Beautifully. <br />
                <span className="italic font-medium bg-gradient-to-r from-ruby to-gold-dark bg-clip-text text-transparent">
                  Walk Traditionally.
                </span>
              </h1>
            </div>

            {/* Subheading - Darker & clearly readable */}
            <p className="text-base sm:text-lg md:text-xl text-brown font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover handcrafted juttis that celebrate the beauty of Indian artistry.
              Each pair is lovingly stitched by master karigars with pure leather soles and double-cushioned comfort.
            </p>

            {/* CTA Buttons with Ruby & Gold richness */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={handleExplore}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-ruby to-ruby-dark hover:from-ruby-dark hover:to-brown text-white text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 flex items-center justify-center gap-2 group border border-ruby/30"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold-light" />
              </button>

              <button
                type="button"
                onClick={handleOurStory}
                className="w-full sm:w-auto px-8 py-4 border-2 border-gold/60 hover:border-ruby text-brown text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-ruby-light/50 transition-all duration-300 flex items-center justify-center shadow-xs"
              >
                <span>Discover Our Story</span>
              </button>
            </div>

            {/* Micro Pillars / Trust Badges with Rich Color Tints */}
            <div className="pt-8 border-t border-beige/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-300">
                <span className="block text-lg sm:text-xl font-serif font-extrabold text-saffron">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-brown uppercase tracking-wider font-bold">
                  Handcrafted Leather
                </span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300">
                <span className="block text-lg sm:text-xl font-serif font-extrabold text-emeraldRoyal">
                  Cloud Sole
                </span>
                <span className="text-[11px] sm:text-xs text-brown uppercase tracking-wider font-bold">
                  Zero Shoe-Bite
                </span>
              </div>
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-300">
                <span className="block text-lg sm:text-xl font-serif font-extrabold text-peacock">
                  Worldwide
                </span>
                <span className="text-[11px] sm:text-xs text-brown uppercase tracking-wider font-bold">
                  Doorstep Delivery
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Editorial Campaign Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Gold & Ruby touch */}
              <div className="absolute -inset-4 border-2 border-gold/40 rounded-2xl transform rotate-2 pointer-events-none hidden sm:block" />
              <div className="absolute -inset-2 border border-ruby/20 rounded-2xl transform -rotate-1 pointer-events-none hidden sm:block" />
              
              {/* Main Campaign Hero Visual */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-beige-light border-4 border-ivory">
                <img
                  src="/assets/jutti-pastel-floral.jpg"
                  alt="TOORVA Handcrafted Floral Embroidered Jutti"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ruby-dark/75 via-transparent to-black/10" />

                {/* Floating Inset Badge - Customer Guarantee */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-ivory/95 backdrop-blur-md border border-gold/50 shadow-luxury flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-ruby text-xs uppercase tracking-wider font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                      <span>Compliments Guaranteed</span>
                    </div>
                    <p className="text-xs text-brown/80 mt-0.5 font-serif italic">
                      "Pure heirloom craft with zero break-in pain."
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 text-brown font-serif text-sm font-bold border border-gold">
                    ★ 5.0
                  </div>
                </div>

                {/* Top Corner Festive Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-ruby to-rani text-white text-[10px] uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full shadow-md border border-white/20">
                  New Festive Drop '26
                </div>
              </div>

              {/* Floating Miniature Teaser Card (Zardozi Craft) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-white p-3 rounded-xl shadow-xl border border-gold/30 max-w-[210px] items-center gap-3 animate-fade-in">
                <img
                  src="/assets/jutti-zardozi-gold.jpg"
                  alt="Zardozi craft close up"
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border-2 border-gold/40"
                />
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-ruby tracking-wider">
                    Pure Zardozi
                  </span>
                  <span className="text-[11px] text-brown font-semibold leading-tight block">
                    Shahi Collection
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
