import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  Share2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  Check, 
  Info, 
  Ruler, 
  Star,
  Layers,
  Scissors
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, BRAND_INFO } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductDetailPage = () => {
  const { 
    selectedProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setIsSizeGuideOpen, 
    generateWhatsAppProductUrl,
    setCurrentView 
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('38');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('craft');
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const isFavorited = isInWishlist(product.id);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | TOORVA JUTTIS`,
        text: `Check out this handcrafted ${product.name} on TOORVA JUTTIS!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  // Related products from same or other collections
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-ivory py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-brown-muted mb-8 uppercase tracking-wider">
          <button 
            type="button" 
            onClick={() => setCurrentView('home')} 
            className="hover:text-gold transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-brown/40" />
          <button 
            type="button" 
            onClick={() => setCurrentView('shop')} 
            className="hover:text-gold transition-colors"
          >
            Shop All
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-brown/40" />
          <span className="text-gold-dark font-medium">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-brown/40" />
          <span className="text-brown font-semibold truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-2xl border border-beige/80 shadow-luxury">
          
          {/* Left Gallery: 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Active Image with Zoom effect */}
            <div 
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-ivory-100 rounded-xl overflow-hidden border border-beige/70 cursor-crosshair"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                className={`w-full h-full object-cover object-center transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                      }
                    : undefined
                }
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                {product.badge && (
                  <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm shadow-md border border-white/20 ${product.badgeColor || 'bg-ruby text-white'}`}>
                    {product.badge}
                  </span>
                )}
                <span className="bg-ivory/95 text-gold-dark text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-xs border border-beige">
                  100% Genuine Leather
                </span>
              </div>

              {/* Zoom hint */}
              <div className="absolute bottom-4 right-4 bg-brown/80 text-ivory text-[10px] tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm pointer-events-none hidden sm:block">
                Hover to Zoom Needlework
              </div>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? 'border-gold shadow-md scale-102'
                      : 'border-beige hover:border-gold/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Artisan Craft callout banner */}
            <div className="mt-6 p-4 rounded-xl bg-ivory-50 border border-gold/30 flex items-start gap-3">
              <Scissors className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brown">
                  The Handcrafting Story
                </h4>
                <p className="text-xs text-brown-muted mt-0.5 leading-relaxed font-serif italic">
                  "{product.artisanStory}"
                </p>
              </div>
            </div>

          </div>

          {/* Right Product Details: 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Category & Ratings */}
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest font-semibold text-gold-dark text-[11px]">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 font-medium text-brown">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>{product.rating}</span>
                  <span className="text-brown-muted">({product.reviewCount} Reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brown font-normal leading-tight">
                {product.name}
              </h1>

              {/* Color Swatches Palette */}
              {product.swatches && (
                <div className="flex items-center gap-2 p-2.5 bg-ivory-50 rounded-lg border border-beige/80">
                  <span className="text-xs uppercase tracking-wider font-bold text-brown">Embroidery Palette:</span>
                  <div className="flex items-center gap-2">
                    {product.swatches.map((swatch, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full border border-beige shadow-xs">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-beige inline-block shadow-xs"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <span className="text-[11px] font-medium text-brown">{swatch.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price placeholder */}
              <div className="p-3.5 rounded-lg bg-ivory-50 border border-beige flex items-baseline justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-brown">
                    {product.pricePlaceholder}
                  </div>
                  <span className="text-[11px] text-brown-muted uppercase tracking-wider block mt-0.5">
                    {product.priceNote}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                    Ready to Dispatch
                  </span>
                  <span className="block text-[10px] text-brown-muted mt-1">Double CUSHIONED</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-brown font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector with Size Guide trigger */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brown">
                    Select Size (EU): <span className="text-ruby font-extrabold">{selectedSize}</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs text-ruby hover:underline font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size & Fit Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2.5 rounded-lg text-xs font-bold transition-all border ${
                        selectedSize === size
                          ? 'bg-ruby text-white border-ruby shadow-md scale-102'
                          : 'bg-white hover:border-ruby/50 text-brown border-beige'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <span className="block text-[11px] text-brown font-medium mt-2 italic font-serif">
                  * Fits true to European size. Leather breaks in naturally to your foot contours within 1 wear.
                </span>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brown">
                  Quantity:
                </span>
                <div className="flex items-center border border-beige rounded bg-ivory-50">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-brown hover:bg-beige/40 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-xs font-semibold text-brown">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-brown hover:bg-beige/40 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons: Add to Bag & Buy on WhatsApp */}
              <div className="space-y-3 pt-4">
                
                {/* Add to Bag */}
                <button
                  type="button"
                  onClick={() => addToCart(product, selectedSize, quantity)}
                  className="w-full py-4 px-6 bg-gradient-to-r from-ruby to-ruby-dark hover:from-ruby-dark hover:to-brown text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all flex items-center justify-center gap-2 group border border-ruby/40"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-light" />
                  <span>Add to Shopping Bag</span>
                </button>

                {/* Buy on WhatsApp - Direct instant order */}
                <a
                  href={generateWhatsAppProductUrl(product, selectedSize, quantity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Buy on WhatsApp (+91 8149180595)</span>
                </a>

                {/* Secondary Actions (Wishlist & Share) */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`inline-flex items-center gap-2 text-xs font-medium py-2 px-3 rounded border transition-colors ${
                      isFavorited 
                        ? 'border-rose-300 bg-rose-50 text-rose-700' 
                        : 'border-beige hover:border-gold text-brown'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-current text-rose-600' : ''}`} />
                    <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 text-xs font-medium py-2 px-3 rounded border border-beige hover:border-gold text-brown transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Design</span>
                  </button>
                </div>

              </div>

              {/* Guarantees Grid */}
              <div className="pt-4 border-t border-beige grid grid-cols-2 gap-3 text-xs text-brown">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span>Compliments Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gold-dark" />
                  <span>Express Worldwide Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-dark" />
                  <span>Double Cushioned Cloud Sole</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-gold-dark" />
                  <span>Hassle-Free Size Exchange</span>
                </div>
              </div>

            </div>

            {/* Accordion / Tab Information */}
            <div className="pt-6 border-t border-beige">
              
              {/* Tab headers */}
              <div className="flex border-b border-beige">
                <button
                  type="button"
                  onClick={() => setActiveTab('craft')}
                  className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'craft'
                      ? 'border-gold text-brown'
                      : 'border-transparent text-brown-muted hover:text-brown'
                  }`}
                >
                  Craft & Details
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('care')}
                  className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'care'
                      ? 'border-gold text-brown'
                      : 'border-transparent text-brown-muted hover:text-brown'
                  }`}
                >
                  Care Guide
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-colors border-b-2 ${
                    activeTab === 'shipping'
                      ? 'border-gold text-brown'
                      : 'border-transparent text-brown-muted hover:text-brown'
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>

              {/* Tab content */}
              <div className="py-4 text-xs text-brown font-medium leading-relaxed">
                {activeTab === 'craft' && (
                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-ruby flex-shrink-0 mt-0.5" />
                        <span className="text-brown">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'care' && (
                  <div className="space-y-2 text-brown">
                    <p>{product.care}</p>
                    <p className="font-serif italic text-ruby font-bold">
                      * Pro Tip: Allow new leather juttis to air dry naturally after wearing. Never machine wash or soak.
                    </p>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-2 text-brown">
                    <p>
                      <strong className="text-brown font-bold">Domestic (India):</strong> 2–4 business days with premium courier partners (BlueDart / Delhivery).
                    </p>
                    <p>
                      <strong className="text-brown font-bold">International:</strong> 5–8 business days worldwide (USA, Canada, UK, UAE, Australia, etc.) via DHL Express.
                    </p>
                    <p>
                      <strong className="text-brown font-bold">Easy Size Exchange:</strong> In the rare event of size misfit, we offer quick size replacement assistance via our WhatsApp concierge.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Related Creations Section */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-gold-dark text-xs uppercase tracking-widest font-semibold block mb-1">
              You May Also Adore
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-brown font-normal">
              Complementary Handcrafted Pairs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

