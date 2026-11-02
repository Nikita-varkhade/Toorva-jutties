import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const CollectionsPage = () => {
  const { navigateToCategory } = useShop();

  return (
    <div className="bg-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-dark text-xs uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Silhouettes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            Our Signature Collections
          </h1>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed">
            Each collection is a celebration of distinct Indian textile artistry — from heirloom tilla wire to delicate French knots and celestial pearls.
          </p>
        </div>

        {/* Collections Detailed Cards */}
        <div className="space-y-12">
          {COLLECTIONS.map((c, idx) => {
            const isReversed = idx % 2 === 1;
            const previewProducts = PRODUCTS.filter((p) => p.collectionId === c.id || p.category === c.name);

            return (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-beige/80 overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Visual Image Banner */}
                <div className={`lg:col-span-6 relative h-80 sm:h-96 lg:h-[450px] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-ivory">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-gold-light bg-brown/80 px-3 py-1 rounded-full border border-gold/40">
                      {c.itemCount}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 p-8 sm:p-12 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark block mb-1">
                      {c.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-brown font-normal">
                      {c.name}
                    </h2>
                  </div>

                  <p className="text-sm text-brown-muted font-light leading-relaxed">
                    {c.description}
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateToCategory(c.name)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark transition-colors shadow-sm group"
                    >
                      <span>Explore {c.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

