import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, BRAND_INFO } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation / View state
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'shop' | 'product' | 'story' | 'contact' | 'collections'
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [notification, setNotification] = useState(null);

  // Cart state stored in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('toorva_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state stored in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('toorva_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('toorva_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('toorva_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast / notification handler
  const showToast = (message, type = 'gold') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3800);
  };

  // Add to cart with specific size
  const addToCart = (product, size = '38', quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, size, quantity }];
      }
    });
    showToast(`Added "${product.name}" (Size ${size}) to your bag.`);
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, size, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
    showToast('Item removed from shopping bag.');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from your wishlist.`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to your wishlist.`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // View product details
  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products by category
  const navigateToCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp order generator helper
  const generateWhatsAppProductUrl = (product, size = '38', quantity = 1) => {
    const text = `Namaste TOORVA JUTTIS!\n\nI am interested in ordering:\n*Product:* ${product.name}\n*Collection:* ${product.category}\n*Size:* EU ${size}\n*Quantity:* ${quantity}\n*Price Placeholder:* ${product.pricePlaceholder}\n\nPlease share availability, payment options and delivery timeline.\n\nThank you!`;
    return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const generateWhatsAppCartUrl = () => {
    if (cart.length === 0) return `https://wa.me/${BRAND_INFO.whatsappRaw}`;
    
    let text = `Namaste TOORVA JUTTIS!\n\nI would like to place an order from your website:\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n   Size: EU ${item.size} | Qty: ${item.quantity} | ${item.product.pricePlaceholder}\n\n`;
    });
    
    const totalEstimate = cart.reduce((acc, item) => acc + (item.product.priceNumeric * item.quantity), 0);
    text += `*Estimated Subtotal:* ₹ ${totalEstimate.toLocaleString('en-IN')}\n\nPlease confirm product availability, shipping details and final invoice.\n\nThank you!`;
    return `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  // Cart totals
  const cartSubtotal = cart.reduce(
    (acc, item) => acc + item.product.priceNumeric * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProduct,
        setSelectedProduct,
        viewProductDetails,
        selectedCategory,
        setSelectedCategory,
        navigateToCategory,
        searchQuery,
        setSearchQuery,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartItemCount,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        notification,
        showToast,
        generateWhatsAppProductUrl,
        generateWhatsAppCartUrl,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

