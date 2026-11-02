import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickQuestions = [
    "I need help choosing my size.",
    "Do you take custom bridal orders?",
    "How fast is worldwide delivery?",
    "I want to order via WhatsApp."
  ];

  const handleSend = (text) => {
    const messageToSend = text || customMsg || "Namaste TOORVA JUTTIS! I would like to inquire about your handcrafted juttis.";
    const url = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Concierge Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-2xl shadow-2xl border border-gold/40 overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="bg-brown p-4 text-ivory flex items-center justify-between border-b border-gold/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={BRAND_INFO.logo}
                  alt="Toorva Stylist"
                  className="w-10 h-10 rounded-full bg-ivory object-contain p-1 border border-gold"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-brown rounded-full" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-gold-light">
                  Toorva Stylist Concierge
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-ivory/80">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span>Online • WhatsApp Concierge</span>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-ivory/70 hover:text-ivory"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-ivory-50 space-y-3">
            <div className="p-3 bg-white rounded-lg border border-beige/80 text-xs text-brown leading-relaxed shadow-xs">
              <p className="font-serif italic text-gold-dark font-medium mb-1">
                "Khari Kala. Desi Shaan."
              </p>
              <p>
                Namaste! Welcome to <strong>TOORVA JUTTIS</strong>. How may we assist your footwear journey today?
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-brown-muted font-bold block">
                Quick Questions:
              </span>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-2 rounded bg-white hover:bg-gold/10 hover:border-gold border border-beige/60 text-xs text-brown font-medium transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">{q}</span>
                  <span className="text-gold-dark opacity-0 group-hover:opacity-100 text-xs font-bold">&rarr;</span>
                </button>
              ))}
            </div>

            {/* Custom text input */}
            <div className="pt-1 flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 text-xs bg-white border border-beige rounded text-brown focus:border-gold focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="p-2 bg-[#25D366] text-white rounded hover:bg-[#20ba5a] transition-colors"
                title="Send on WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-1 text-center flex items-center justify-center gap-1 text-[10px] text-brown-muted">
              <ShieldCheck className="w-3 h-3 text-gold-dark" />
              <span>Official brand number: {BRAND_INFO.whatsappNumber}</span>
            </div>

          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-108 focus:outline-none ring-4 ring-[#25D366]/20"
        aria-label="Chat with Toorva Juttis on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        {/* Tooltip on desktop hover when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-brown text-ivory text-xs px-3 py-1.5 rounded-full shadow-lg border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:flex items-center gap-1.5">
            <span className="font-serif italic font-semibold text-gold-light">Order via WhatsApp</span>
            <span className="text-[10px] text-ivory/70">(+91 8149180595)</span>
          </span>
        )}
      </button>

    </div>
  );
};

