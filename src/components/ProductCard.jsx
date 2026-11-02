import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, MessageCircle, Star, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ProductCard = ({ product }) => {
  const { 
    viewProductDetails, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct, 
    generateWhatsAppProductUrl 
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('38');
  const [isHovered, setIsHovered] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div 
      className="group relative bg-white rounded-xl border border-beige/80 overflow-hidden shadow-xs hover:shadow-luxury-hover transition-all duration-300 flex flex-col hover:border-gold/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Area */}
      <div className="relative aspect-square overflow-hidden bg-ivory-100 cursor-pointer">
        <img
          src={displayImage}
          alt={product.name}
          onClick={() => viewProductDetails(product)}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-sm shadow-sm border border-white/20 ${product.badgeColor || 'bg-ruby text-white'}`}>
              {product.badge}
            </span>
          )}
          <span className="bg-ivory/95 text-gold-dark text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm shadow-xs border border-gold/30">
            Handcrafted
          </span>
        </div>

        {/* Top Right Actions (Wishlist) */}
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
              isFavorited
                ? 'bg-rose-50 text-rose-600'
                : 'bg-white/90 text-brown hover:text-rose-600 hover:bg-white'
            }`}
            aria-label="Save to wishlist"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-rose-600' : ''}`} />
          </button>
        </div>

        {/* Quick View Floating Action Bar on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex-1 py-2.5 px-3 bg-white/95 backdrop-blur-sm text-brown hover:bg-ruby hover:text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-md flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <a
            href={generateWhatsAppProductUrl(product, selectedSize, 1)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 bg-[#25D366] text-white hover:bg-[#20ba5a] rounded-lg transition-colors shadow-md flex items-center justify-center"
            title="Inquire directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="uppercase tracking-widest text-[10px] text-ruby font-bold">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-brown">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{product.rating}</span>
              <span className="text-brown-muted font-semibold">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => viewProductDetails(product)}
            className="font-serif text-lg sm:text-xl text-brown font-bold hover:text-ruby transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Embroidery Palette Swatches */}
          {product.swatches && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-[10px] text-brown font-bold mr-1">Shades:</span>
              {product.swatches.map((swatch, idx) => (
                <span
                  key={idx}
                  title={swatch.name}
                  className="w-3.5 h-3.5 rounded-full border border-beige shadow-xs inline-block"
                  style={{ backgroundColor: swatch.color }}
                />
              ))}
            </div>
          )}

          {/* Price Placeholder */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-base font-extrabold text-brown">
              {product.pricePlaceholder}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-ruby font-bold bg-ruby-light px-2 py-0.5 rounded border border-ruby-border">
              Demo Price
            </span>
          </div>

          {/* Size Selector Strip */}
          <div className="mt-3 pt-3 border-t border-beige/80">
            <div className="flex items-center justify-between text-[11px] mb-1.5">
              <span className="text-brown font-bold">Size (EU):</span>
              <span className="font-extrabold text-ruby">{selectedSize}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-7 h-7 text-[11px] font-semibold rounded-md transition-all border ${
                    selectedSize === size
                      ? 'bg-ruby text-white border-ruby shadow-xs scale-105'
                      : 'bg-ivory hover:border-ruby/50 text-brown border-beige'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add to Bag CTA Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => addToCart(product, selectedSize, 1)}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-ivory-200 to-beige-light hover:from-ruby hover:to-ruby-dark text-brown hover:text-white border border-gold/50 hover:border-ruby text-xs font-semibold uppercase tracking-widest rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-ruby"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>

      </div>
    </div>
  );
};
