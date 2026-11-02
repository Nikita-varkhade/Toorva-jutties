import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND_INFO, FAQS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const ContactPage = () => {
  const { setIsSizeGuideOpen } = useShop();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: 'Bridal Order',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct link with user inquiry
    const whatsappText = `Namaste TOORVA JUTTIS!\n\n*Name:* ${form.name}\n*Contact:* ${form.phone || form.email}\n*Inquiry Type:* ${form.occasion}\n*Message:* ${form.message}\n\nPlease get in touch regarding this inquiry. Thank you!`;
    const url = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappText)}`;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-gold-dark text-xs uppercase tracking-widest font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Stylist Concierge</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            Connect With Toorva
          </h1>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed">
            Whether you need personal sizing advice, custom bridal shoe design, or worldwide shipping tracking, our concierge is here to assist.
          </p>
        </div>

        {/* 2 Column Layout: Quick Channels & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          
          {/* Left Column: Direct WhatsApp & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Hero Card */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/40 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-brown">
                    Instant WhatsApp Concierge
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">Fastest response time (under 15 mins)</span>
                </div>
              </div>
              <p className="text-xs text-brown/80 leading-relaxed mb-4">
                Chat directly with our brand styling team for real-time sizing advice, custom color matching, and worldwide shipping orders.
              </p>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent('Namaste Toorva Juttis! I would like to chat with a stylist.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Chat Now on {BRAND_INFO.whatsappNumber}</span>
              </a>
            </div>

            {/* Channels Card */}
            <div className="bg-white p-6 rounded-2xl border border-beige/80 shadow-xs space-y-4">
              <h3 className="font-serif text-lg text-brown font-medium pb-2 border-b border-beige">
                Brand Information & Links
              </h3>

              <div className="space-y-3.5 text-xs text-brown-muted">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brown font-bold block">WhatsApp & Call</span>
                    <a href={`https://wa.me/${BRAND_INFO.whatsappRaw}`} className="text-brown hover:text-gold font-medium">
                      {BRAND_INFO.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brown font-bold block">Instagram Direct</span>
                    <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-brown hover:text-gold font-medium">
                      {BRAND_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brown font-bold block">Global Shipping</span>
                    <span>Worldwide doorstep delivery with live tracking (USA, UK, Canada, UAE, etc.)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brown font-bold block">Concierge Hours</span>
                    <span>Monday – Saturday: 10:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-beige">
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="w-full py-2.5 bg-ivory text-brown hover:bg-beige/40 text-xs uppercase tracking-wider font-semibold rounded border border-beige transition-colors"
                >
                  View Shoe Sizing & Measurement Guide
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-beige/80 shadow-luxury">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-brown font-normal">
                  Inquire or Request Custom Consultation
                </h3>
                <p className="text-xs text-brown-muted mt-1">
                  Fill out the details below and we will automatically prepare your personalized WhatsApp message.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-brown">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs text-brown-muted max-w-sm mx-auto leading-relaxed">
                    Opening WhatsApp to connect directly with Toorva concierge...
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(`Namaste TOORVA! My name is ${form.name}. Inquiry: ${form.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Click to Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Meera Singhania"
                        className="w-full px-3.5 py-2.5 bg-ivory border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 / +1 / +44 Phone"
                        className="w-full px-3.5 py-2.5 bg-ivory border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="meera@example.com"
                        className="w-full px-3.5 py-2.5 bg-ivory border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                        Nature of Inquiry
                      </label>
                      <select
                        value={form.occasion}
                        onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-ivory border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                      >
                        <option value="Bridal Order">Bespoke Bridal Footwear</option>
                        <option value="Size Consultation">Size / Fit Recommendation</option>
                        <option value="Worldwide Shipping">International Shipping Query</option>
                        <option value="Bulk Order">Bridesmaids / Gifting Orders</option>
                        <option value="General Inquiry">General Brand Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brown mb-1">
                      Your Message / Shoe Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about the design you are interested in, your regular shoe size, event date, or custom requests..."
                      className="w-full px-3.5 py-2.5 bg-ivory border border-beige rounded text-xs text-brown focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-brown hover:bg-gold-dark text-ivory text-xs uppercase tracking-widest font-semibold rounded shadow-luxury transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send Inquiry to Toorva Concierge</span>
                      <Send className="w-3.5 h-3.5 text-gold-light" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-brown font-normal mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-beige overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-brown hover:text-gold-dark"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-dark transition-transform flex-shrink-0 ${
                      openFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brown-muted font-light leading-relaxed border-t border-beige/40 bg-ivory-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
