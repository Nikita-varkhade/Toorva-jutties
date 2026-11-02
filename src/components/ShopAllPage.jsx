import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Sparkles, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, COLLECTIONS } from '../data/products';
import { ProductCard } from './ProductCard';

export const ShopAllPage = () => {
  const { selectedCategory, setSelectedCategory } = useShop();

  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-low' | 'price-high' | 'rating'
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const categoryColors = {
    'All': 'bg-ruby text-white',
    'Traditional Juttis': 'bg-saffron text-white',
    'Festive Collection': 'bg-ruby text-white',
    'Everyday Elegance': 'bg-emeraldRoyal text-white',
    'Statement Juttis': 'bg-peacock text-white',
    'Embroidered Collection': 'bg-rani text-white',
  };
  const categories = ['All', ...COLLECTIONS.map((c) => c.name)];
  const occasions = ['All', 'Bridal & Wedding', 'Festive & Daytime', 'Reception & Cocktails', 'Everyday & Casual Chic', 'Evening & Cocktail', 'Festive & Puja', 'Office & Luncheons'];
  const sizes = ['All', '36', '37', '38', '39', '40', '41'];

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'All' && item.occasion !== selectedOccasion) {
        return false;
      }
      // Size filter
      if (selectedSizeFilter !== 'All' && !item.sizes.includes(selectedSizeFilter)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceNumeric - b.priceNumeric;
      if (sortBy === 'price-high') return b.priceNumeric - a.priceNumeric;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [selectedCategory, selectedOccasion, selectedSizeFilter, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedOccasion('All');
    setSelectedSizeFilter('All');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedOccasion !== 'All' || selectedSizeFilter !== 'All';

  return (
    <div className="bg-ivory py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-gold-dark text-xs uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pure Handcrafted Artistry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            The Toorva Collection
          </h1>
          <div className="w-14 h-[1.5px] bg-gold mx-auto mt-3 mb-3" />
          <p className="text-sm text-brown-muted font-light">
            Every creation is hand-stitched on pure leather soles with our signature cloud memory foam cushioning.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-white p-4 rounded-xl border border-beige/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Active Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all shadow-xs ${
                  selectedCategory === cat
                    ? `${categoryColors[cat] || 'bg-ruby text-white'} shadow-md scale-105`
                    : 'bg-ivory hover:bg-beige/60 text-brown border border-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls Right */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className="md:hidden flex items-center gap-1.5 text-xs text-brown border border-beige px-3 py-1.5 rounded bg-ivory"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>More Filters {hasActiveFilters && '•'}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-brown">
              <ArrowUpDown className="w-3.5 h-3.5 text-gold-dark hidden sm:block" />
              <span className="text-brown-muted hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-ivory border border-beige rounded px-2.5 py-1.5 text-xs text-brown focus:border-gold focus:outline-none"
              >
                <option value="featured">Featured / New</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Mobile Expandable Filter Tray */}
        {showFiltersMobile && (
          <div className="md:hidden mb-6 p-4 bg-white rounded-xl border border-beige space-y-4">
            <div>
              <span className="text-[11px] uppercase font-bold text-brown block mb-2">Filter by Size (EU)</span>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSizeFilter(s)}
                    className={`px-3 py-1 rounded text-xs border ${
                      selectedSizeFilter === s ? 'bg-brown text-ivory' : 'bg-ivory border-beige text-brown'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-rose-600 font-medium underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Active Filter Indicators */}
        {hasActiveFilters && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-brown-muted">Active Filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-beige/60 text-brown px-2.5 py-1 rounded-full border border-gold/30">
                Category: {selectedCategory}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
              </span>
            )}
            {selectedSizeFilter !== 'All' && (
              <span className="inline-flex items-center gap-1 text-xs bg-beige/60 text-brown px-2.5 py-1 rounded-full border border-gold/30">
                Size: EU {selectedSizeFilter}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSizeFilter('All')} />
              </span>
            )}
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-gold-dark hover:underline font-medium ml-2"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-beige p-8">
            <h3 className="font-serif text-2xl text-brown mb-2">
              No handcrafted juttis matched your filters
            </h3>
            <p className="text-xs text-brown-muted max-w-sm mx-auto mb-6">
              Try resetting your category or size filter to explore our entire handcrafted collection.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2.5 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark"
            >
              View Full Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Footnote on pricing */}
        <div className="mt-14 p-4 rounded-xl bg-ivory-100 border border-gold/30 text-center max-w-2xl mx-auto">
          <p className="text-xs text-brown-muted leading-relaxed">
            * <strong>Note on Pricing:</strong> Displayed prices are sample interactive placeholders for web preview. Official prices, custom bespoke modifications, and bridal bundle savings can be confirmed directly with the Toorva concierge on WhatsApp (+91 8149180595).
          </p>
        </div>

      </div>
    </div>
  );
};

