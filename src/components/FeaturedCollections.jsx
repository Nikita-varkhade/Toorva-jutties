import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { COLLECTIONS } from '../data/products';

export const FeaturedCollections = () => {
  const { navigateToCategory } = useShop();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory via-beige-light/30 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ruby-light border border-ruby-border text-ruby text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Silhouettes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brown tracking-tight">
            Featured Collections
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-ruby via-gold to-emeraldRoyal mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-brown font-medium leading-relaxed">
            From regal bridal celebrations to cushioned everyday footwear, explore handcrafted juttis made with timeless devotion.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS.map((col, index) => {
            return (
              <div
                key={col.id}
                onClick={() => navigateToCategory(col.name)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-beige-light border-2 border-gold/30 shadow-md hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1.5 ${
                  index === 0 ? 'lg:col-span-2 md:h-[420px] h-[360px]' : 'h-[360px] md:h-[420px]'
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <img
                  src={col.image}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Colorful jewel-tone gradient overlay based on collection */}
                <div className={`absolute inset-0 bg-gradient-to-t ${col.bgGradient || 'from-brown/90 via-brown/30 to-black/10'} group-hover:opacity-95 transition-opacity duration-500`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                  
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-[11px] uppercase tracking-widest font-bold text-white px-3.5 py-1 rounded-full shadow-sm border border-white/30 backdrop-blur-sm"
                      style={{ backgroundColor: col.accentColor }}
                    >
                      {col.themeTag || col.itemCount}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-brown flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gold group-hover:text-white shadow-md">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-gold-light font-medium drop-shadow-xs">
                      {col.tagline}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-wide drop-shadow-sm">
                      {col.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 font-light line-clamp-2 max-w-lg drop-shadow-xs">
                      {col.description}
                    </p>
                    
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold-light font-bold group-hover:text-white transition-colors">
                        Explore Collection &rarr;
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
