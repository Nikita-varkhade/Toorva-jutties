import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, viewProductDetails } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const popularKeywords = ['Floral', 'Zardozi', 'Pearl', 'Bridal', 'Velvet', 'Everyday', 'Gold'];

  const results = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.occasion.toLowerCase().includes(query)
        );
      });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20">
        <div className="inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl border border-gold/30 relative z-50 p-6 sm:p-8">
          
          {/* Search Input Bar */}
          <div className="relative flex items-center border-b-2 border-brown/80 pb-3">
            <Search className="w-5 h-5 text-gold-dark mr-3 flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search handcrafted juttis (e.g. Zardozi, Floral, Bridal)..."
              className="w-full text-base sm:text-lg text-brown placeholder-brown/40 focus:outline-none bg-transparent"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="p-1 text-brown/40 hover:text-brown mr-2"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-brown/70 hover:text-brown"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Popular Tag Pills */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase tracking-wider text-brown-muted font-semibold">
              Trending:
            </span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => setSearchTerm(kw)}
                className="px-2.5 py-1 text-[11px] bg-ivory hover:bg-beige/60 text-brown rounded-full border border-beige transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Results Area */}
          <div className="mt-6 max-h-96 overflow-y-auto">
            {searchTerm.trim() !== '' && results.length === 0 && (
              <div className="py-10 text-center text-brown-muted">
                <p className="font-serif text-lg text-brown">No handcrafted juttis found for "{searchTerm}"</p>
                <p className="text-xs mt-1">Try searching for "Floral", "Bridal", "Velvet", or "Pearl"</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold block mb-2">
                  Matching Creations ({results.length})
                </span>
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      viewProductDetails(product);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 bg-ivory hover:bg-beige/30 rounded-lg border border-beige/60 flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-14 h-14 rounded object-cover"
                      />
                      <div>
                        <span className="text-[10px] uppercase text-gold-dark font-medium block">
                          {product.category}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-brown group-hover:text-gold-dark">
                          {product.name}
                        </h4>
                        <span className="text-xs font-medium text-brown">
                          {product.pricePlaceholder}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brown/40 group-hover:text-gold transition-transform group-hover:translate-x-1 mr-2" />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

