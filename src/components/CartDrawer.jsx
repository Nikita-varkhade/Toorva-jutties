import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle,
  Truck
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BRAND_INFO } from '../data/products';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    cartItemCount,
    generateWhatsAppCartUrl,
    setCurrentView
  } = useShop();

  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'review' | 'success'
  const [customerDetails, setCustomerDetails] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    country: 'India',
    notes: '',
  });

  if (!isCartOpen) return null;

  const freeShippingThreshold = 3500;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));
  const remainingForFree = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep('cart');
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl flex flex-col justify-between border-l border-gold/30 animate-fade-in">
          
          {/* Cart Header */}
          <div className="p-5 border-b border-beige/80 bg-ivory-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-dark" />
              <h2 className="font-serif text-lg text-brown font-medium">
                Your Shopping Bag ({cartItemCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep('cart');
              }}
              className="p-1.5 text-brown/70 hover:text-brown transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-beige/30 border-b border-beige/60 text-xs">
            {remainingForFree > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-brown">
                  <span className="flex items-center gap-1 font-medium">
                    <Truck className="w-3.5 h-3.5 text-gold-dark" />
                    Add ₹{remainingForFree.toLocaleString('en-IN')} more for Free Shipping!
                  </span>
                  <span className="text-[11px] font-bold text-gold-dark">{progressPercent}%</span>
                </div>
                <div className="w-full bg-beige h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gold h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>You have unlocked Free Express Shipping!</span>
              </div>
            )}
          </div>

          {/* Cart Items List / Views */}
          <div className="flex-1 overflow-y-auto p-5">
            {checkoutStep === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-beige/40 flex items-center justify-center mx-auto text-gold-dark">
                      <ShoppingBag className="w-8 h-8 opacity-60" />
                    </div>
                    <h3 className="font-serif text-xl text-brown">
                      Your shopping bag is empty
                    </h3>
                    <p className="text-xs text-brown-muted max-w-xs mx-auto leading-relaxed">
                      Discover our handcrafted Punjabi and festive juttis adorned with traditional embroidery.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCartOpen(false);
                        setCurrentView('shop');
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-brown text-ivory text-xs uppercase tracking-widest font-semibold rounded hover:bg-gold-dark transition-colors"
                    >
                      <span>Explore Shop</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="p-3 bg-white rounded-lg border border-beige/80 flex gap-3.5 shadow-xs"
                      >
                        {/* Thumbnail */}
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-20 h-20 rounded object-cover flex-shrink-0 bg-ivory-100"
                        />

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="font-serif text-sm font-medium text-brown line-clamp-1">
                                {item.product.name}
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.product.id, item.size)}
                                className="text-brown/40 hover:text-rose-600 p-1"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="inline-block text-[11px] text-brown-muted uppercase tracking-wider">
                              Size: <strong>EU {item.size}</strong>
                            </span>
                          </div>

                          {/* Price & Quantity Controls */}
                          <div className="flex items-center justify-between pt-2">
                            <span className="text-xs font-semibold text-brown">
                              ₹ {(item.product.priceNumeric * item.quantity).toLocaleString('en-IN')}
                            </span>

                            <div className="flex items-center border border-beige rounded bg-ivory">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.size, -1)}
                                className="w-6 h-6 flex items-center justify-center text-xs text-brown hover:bg-beige/40 font-bold"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-semibold text-brown">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.product.id, item.size, 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs text-brown hover:bg-beige/40 font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Checkout Address Input Simulation */}
            {checkoutStep === 'review' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="pb-3 border-b border-beige">
                  <h3 className="font-serif text-lg font-medium text-brown">
                    Delivery & Contact Details
                  </h3>
                  <p className="text-[11px] text-brown-muted">
                    We ship worldwide. All orders are confirmed with our concierge.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerDetails.fullName}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, fullName: e.target.value })}
                    placeholder="e.g. Priyansha Roy"
                    className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    placeholder="+91 / +1 / +44 Phone number"
                    className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                    Street Address & House/Flat No. *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                    placeholder="Complete delivery street address"
                    className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerDetails.city}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, city: e.target.value })}
                      placeholder="City / Town"
                      className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerDetails.country}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, country: e.target.value })}
                      placeholder="e.g. India, USA, UK"
                      className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                    Special Sizing or Gift Note
                  </label>
                  <input
                    type="text"
                    value={customerDetails.notes}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                    placeholder="e.g. Wider feet, Gift wrapping required"
                    className="w-full px-3 py-2 bg-white border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-amber-50 rounded border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
                  <strong>Notice:</strong> This is an interactive boutique review. You can also send this exact order directly to our official WhatsApp (+91 8149180595) with one click!
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/2 py-2.5 border border-beige text-xs uppercase font-semibold text-brown rounded hover:bg-beige/30"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 bg-brown text-ivory text-xs uppercase font-semibold rounded hover:bg-gold-dark shadow-sm"
                  >
                    Confirm Order
                  </button>
                </div>
              </form>
            )}

            {/* Order Confirmation Screen */}
            {checkoutStep === 'success' && (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-brown">
                  Order Details Received!
                </h3>
                <p className="text-xs text-brown-muted max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong>{customerDetails.fullName || 'Valued Customer'}</strong>! Our concierge is preparing your handcrafted order details.
                </p>

                <div className="p-4 bg-beige/30 rounded-lg text-left text-xs space-y-1.5 border border-beige">
                  <div className="flex justify-between">
                    <span className="text-brown-muted">Estimated Total:</span>
                    <strong className="text-brown">₹ {cartSubtotal.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brown-muted">Contact:</span>
                    <span className="text-brown">{customerDetails.phone || 'WhatsApp'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brown-muted">Destination:</span>
                    <span className="text-brown">{customerDetails.city}, {customerDetails.country}</span>
                  </div>
                </div>

                {/* Direct WhatsApp follow-up button */}
                <div className="pt-2">
                  <a
                    href={generateWhatsAppCartUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-md flex items-center justify-center gap-2 hover:bg-[#20ba5a]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to WhatsApp Concierge</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('cart');
                  }}
                  className="text-xs text-gold-dark hover:underline font-medium uppercase tracking-wider block mx-auto pt-2"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Cart Footer Summary */}
          {cart.length > 0 && checkoutStep === 'cart' && (
            <div className="p-5 border-t border-beige/80 bg-white space-y-3">
              
              {/* Subtotal */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brown-muted">Estimated Subtotal:</span>
                  <span className="font-semibold text-lg text-brown">
                    ₹ {cartSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-brown-muted">
                  <span>Shipping:</span>
                  <span className="font-medium text-gold-dark">
                    {cartSubtotal >= freeShippingThreshold ? 'FREE Worldwide Delivery' : 'Calculated at dispatch'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                {/* Instant WhatsApp Order Checkout */}
                <a
                  href={generateWhatsAppCartUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-sm flex items-center justify-center gap-2 transition-all"
                  title="Direct WhatsApp Checkout"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Bag via WhatsApp</span>
                </a>

                {/* Standard Checkout simulation */}
                <button
                  type="button"
                  onClick={() => setCheckoutStep('review')}
                  className="w-full py-3 px-4 bg-brown hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold rounded shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Review & Delivery Address</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
                </button>
              </div>

              <div className="text-center flex items-center justify-center gap-1.5 text-[10px] text-brown-muted pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
                <span>Zero shoe-bite guarantee • Handcrafted genuine leather</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

