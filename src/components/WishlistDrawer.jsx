import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistDrawer = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    viewProductDetails,
    setCurrentView 
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl flex flex-col justify-between border-l border-gold/30 animate-fade-in">
          
          {/* Header */}
          <div className="p-5 border-b border-beige/80 bg-ivory-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-600 fill-current" />
              <h2 className="font-serif text-lg text-brown font-medium">
                Saved Favorites ({wishlist.length})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-brown/70 hover:text-brown transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mx-auto text-rose-400">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-xl text-brown">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-brown-muted max-w-xs mx-auto leading-relaxed">
                  Click the heart icon on any pair of handcrafted juttis to save your royal favorites.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setCurrentView('shop');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark transition-colors"
                >
                  <span>Browse Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 bg-white rounded-lg border border-beige/80 flex gap-3.5 shadow-xs"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      onClick={() => {
                        viewProductDetails(product);
                        setIsWishlistOpen(false);
                      }}
                      className="w-20 h-20 rounded object-cover flex-shrink-0 bg-ivory-100 cursor-pointer"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 
                            onClick={() => {
                              viewProductDetails(product);
                              setIsWishlistOpen(false);
                            }}
                            className="font-serif text-sm font-medium text-brown hover:text-gold-dark cursor-pointer line-clamp-1"
                          >
                            {product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => toggleWishlist(product)}
                            className="text-brown/40 hover:text-rose-600 p-1"
                            title="Remove from wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-brown mt-0.5 block">
                          {product.pricePlaceholder}
                        </span>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            addToCart(product, '38', 1);
                            setIsWishlistOpen(false);
                          }}
                          className="flex-1 py-1.5 px-3 bg-brown hover:bg-gold-dark text-ivory text-[11px] uppercase tracking-wider font-semibold rounded transition-colors flex items-center justify-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move to Bag</span>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-beige/80 bg-ivory-50 text-center">
              <button
                type="button"
                onClick={() => {
                  wishlist.forEach((item) => addToCart(item, '38', 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark transition-colors"
              >
                Move All to Shopping Bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

