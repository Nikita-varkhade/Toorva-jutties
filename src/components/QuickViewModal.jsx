import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    generateWhatsAppProductUrl,
    viewProductDetails 
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('38');

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isFavorited = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-xs transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center p-0">
        <div className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl border border-gold/30 relative z-50">
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 text-brown/60 hover:text-brown bg-white/80 rounded-full shadow-xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image */}
            <div className="relative aspect-square md:aspect-auto bg-ivory-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-brown text-ivory text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm border border-gold/40">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold-dark block mb-1">
                  {product.category}
                </span>

                <h3 className="font-serif text-2xl text-brown font-normal">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-1.5 text-xs text-brown">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>{product.rating}</span>
                  <span className="text-brown-muted">({product.reviewCount} Reviews)</span>
                </div>

                <div className="mt-3 p-2.5 bg-ivory-50 rounded border border-beige flex items-baseline gap-2">
                  <span className="text-xl font-bold text-brown">
                    {product.pricePlaceholder}
                  </span>
                  <span className="text-[10px] uppercase text-brown-muted">
                    Demo Placeholder
                  </span>
                </div>

                <p className="text-xs text-brown-muted mt-3 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Size picker */}
                <div className="mt-4 pt-3 border-t border-beige/60">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-brown font-medium">Select Size (EU):</span>
                    <span className="font-bold text-gold-dark">{selectedSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`w-8 h-8 rounded text-xs font-semibold border transition-all ${
                          selectedSize === s
                            ? 'bg-brown text-ivory border-brown'
                            : 'bg-ivory hover:border-gold text-brown border-beige'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product, selectedSize, 1);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-3 px-4 bg-brown hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold rounded transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-light" />
                  <span>Add to Shopping Bag</span>
                </button>

                <a
                  href={generateWhatsAppProductUrl(product, selectedSize, 1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Buy on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className="text-xs text-brown hover:text-rose-600 flex items-center gap-1.5"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current text-rose-600' : ''}`} />
                    <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      viewProductDetails(product);
                      setQuickViewProduct(null);
                    }}
                    className="text-xs text-gold-dark hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Full Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

