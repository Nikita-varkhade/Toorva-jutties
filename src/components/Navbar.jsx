import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  Phone, 
  ChevronRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_INFO, COLLECTIONS } from '../data/products';

export const Navbar = () => {
  const { 
    currentView, 
    setCurrentView, 
    cartItemCount, 
    setIsCartOpen, 
    wishlist, 
    setIsWishlistOpen,
    setIsSearchOpen,
    navigateToCategory
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Shop All', view: 'shop' },
    { name: 'Collections', view: 'collections', hasDropdown: true },
    { name: 'Our Story', view: 'story' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setCollectionsDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-ivory/95 backdrop-blur-md shadow-md border-b border-beige/80 py-1.5' 
          : 'bg-ivory border-b border-beige/60 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* LEFT: Brand Logo & Identity */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 -ml-1 text-brown hover:text-ruby transition-colors lg:hidden"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo Clickable */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
              aria-label="TOORVA JUTTIS Homepage"
            >
              <img
                src={BRAND_INFO.logo}
                alt="TOORVA JUTTIS Logo"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="hidden sm:block leading-tight">
                <span className="block font-serif text-sm font-bold text-brown tracking-wider group-hover:text-ruby transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="block text-[10px] uppercase font-bold text-ruby tracking-widest">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </button>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setCollectionsDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setCollectionsDropdown(false)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(link.view)}
                  className={`text-[12px] uppercase tracking-widest font-bold transition-colors py-2 relative flex items-center gap-1 ${
                    currentView === link.view
                      ? 'text-ruby font-extrabold'
                      : 'text-brown hover:text-ruby'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-brown/60 transition-transform group-hover:rotate-180" />
                  )}
                  {currentView === link.view && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-ruby rounded-full" />
                  )}
                </button>

                {/* Collections Dropdown Mega Menu */}
                {link.hasDropdown && collectionsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border-2 border-gold/40 shadow-2xl rounded-xl py-3 px-2 animate-fade-in z-50">
                    <div className="px-3 py-1.5 border-b border-beige/60 mb-2">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-ruby">
                        Curated Collections
                      </span>
                    </div>
                    {COLLECTIONS.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          navigateToCategory(c.name);
                          setCollectionsDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-bold text-brown hover:bg-ruby-light hover:text-ruby rounded-lg transition-colors flex items-center justify-between group"
                      >
                        <span>{c.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brown/40 group-hover:text-ruby transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                    <div className="mt-2 pt-2 border-t border-beige/60 px-3">
                      <button
                        type="button"
                        onClick={() => handleNavClick('shop')}
                        className="text-[11px] text-ruby font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Explore All Creations</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Desktop Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 text-brown hover:text-ruby transition-colors py-1 px-2.5 rounded-full hover:bg-beige/40"
              aria-label="Search products"
            >
              <Search className="w-4 h-4 text-brown" />
              <span className="hidden md:inline text-[11px] uppercase tracking-wider font-bold">Search</span>
            </button>

            {/* WhatsApp Quick Direct Contact */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-brown hover:text-[#25D366] transition-colors py-1 px-2 rounded-full"
              title="Chat with Toorva Stylist on WhatsApp"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden xl:inline text-[11px] tracking-wider uppercase font-bold">Concierge</span>
            </a>

            {/* Wishlist */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-1.5 text-brown hover:text-ruby transition-colors rounded-full hover:bg-beige/40"
              aria-label={`Wishlist with ${wishlist.length} saved items`}
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rani text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-brown hover:text-ruby transition-colors flex items-center gap-1 rounded-full hover:bg-beige/40"
              aria-label={`Shopping bag with ${cartItemCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-brown" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-ruby text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-ivory shadow-sm">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase ml-1">
                Bag
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-ivory shadow-2xl p-6 flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-beige">
                <div className="flex items-center gap-2">
                  <img
                    src={BRAND_INFO.logo}
                    alt="TOORVA JUTTIS Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <span className="block font-serif text-sm font-bold text-brown">TOORVA</span>
                    <span className="block text-[9px] uppercase font-bold text-ruby">JUTTIS</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-brown hover:text-ruby"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline reminder */}
              <div className="py-2.5 text-center border-b border-beige/60">
                <span className="font-serif italic text-xs font-bold text-ruby tracking-wide">
                  "{BRAND_INFO.tagline}"
                </span>
              </div>

              {/* Mobile Links */}
              <nav className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.view)}
                      className={`block w-full text-left py-2 text-xs tracking-widest uppercase font-bold ${
                        currentView === link.view
                          ? 'text-ruby font-extrabold'
                          : 'text-brown hover:text-ruby'
                      }`}
                    >
                      {link.name}
                    </button>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-1 space-y-1.5 border-l-2 border-ruby/30">
                        {COLLECTIONS.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              navigateToCategory(c.name);
                              setMobileMenuOpen(false);
                            }}
                            className="block text-xs font-medium text-brown hover:text-ruby py-1 text-left"
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Search trigger on mobile */}
              <div className="mt-6 pt-4 border-t border-beige">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-beige rounded-lg text-xs uppercase tracking-wider font-bold text-brown shadow-xs"
                >
                  <span>Search juttis...</span>
                  <Search className="w-4 h-4 text-ruby" />
                </button>
              </div>
            </div>

            {/* Mobile Drawer Footer with WhatsApp & Instagram */}
            <div className="pt-6 border-t border-beige mt-6 space-y-2.5">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-bold rounded-lg shadow-sm hover:bg-[#20ba5a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {BRAND_INFO.whatsappNumber}</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-ruby/40 text-brown text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-ruby-light transition-colors"
              >
                <span>Follow {BRAND_INFO.instagram}</span>
              </a>

              <div className="text-center text-[11px] text-brown font-medium pt-1">
                Handcrafted in India • Worldwide Express Shipping
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
