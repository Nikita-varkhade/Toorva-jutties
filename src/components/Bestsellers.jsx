import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const Bestsellers = () => {
  const { setCurrentView } = useShop();
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = [
    { label: 'All Bestsellers', value: 'All', color: 'bg-ruby text-white' },
    { label: 'Festive & Bridal', value: 'Festive Collection', color: 'bg-ruby text-white' },
    { label: 'Embroidered Flora', value: 'Embroidered Collection', color: 'bg-rani text-white' },
    { label: 'Statement Juttis', value: 'Statement Juttis', color: 'bg-peacock text-white' },
    { label: 'Everyday Chic', value: 'Everyday Elegance', color: 'bg-emeraldRoyal text-white' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeTab === 'All') return item.isBestseller || item.isNew;
    return item.category === activeTab;
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory-50 via-beige/20 to-ivory-50 border-t border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-beige/80 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-saffron text-xs uppercase tracking-widest font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
              <span>Compliments Guaranteed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-bold tracking-tight">
              Most Adored Creations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-brown font-medium">
              Meticulously handcrafted in limited batches. Loved by modern brides and ethnic connoisseurs worldwide.
            </p>
          </div>

          {/* Category Filter Tabs with Color */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all shadow-xs ${
                  activeTab === tab.value
                    ? `${tab.color} shadow-md scale-105`
                    : 'bg-white hover:bg-beige/60 text-brown border border-beige/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to explore full shop */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => {
              setCurrentView('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brown via-ruby-dark to-brown hover:from-ruby hover:to-ruby-dark text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-xl group border border-gold/40"
          >
            <span>Explore All Handcrafted Juttis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold-light" />
          </button>
        </div>

      </div>
    </section>
  );
};
