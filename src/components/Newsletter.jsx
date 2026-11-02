import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section className="py-20 bg-ivory relative overflow-hidden">
      
      {/* Decorative background border accents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-ruby-dark via-ruby to-brown rounded-3xl border-2 border-gold/60 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden text-white">
          
          {/* Subtle gold ornamentation */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span>The Toorva Royal Circle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight drop-shadow-sm">
            Stay in Royal Style
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-3 mb-4" />

          <p className="text-sm sm:text-base text-gold-light/90 font-light max-w-lg mx-auto leading-relaxed">
            Discover new arrivals, exclusive festive collections and bespoke styling drops.
            Join our private circle for early bridal previews and complimentary gift wrapping.
          </p>

          {/* Form */}
          <div className="mt-8 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-gold/50 text-white flex items-center justify-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-gold-light flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-gold-light">Welcome to the Toorva Family!</h4>
                  <p className="text-xs text-white/90 mt-0.5">We've reserved your special welcome bridal gift code.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brown/50" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full pl-10 pr-4 py-3.5 bg-ivory text-brown placeholder-brown/50 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-gold border border-gold/40 shadow-inner font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-brown text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-gold/40"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5 text-brown" />
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-rose-300 text-left pt-1">
                    {error}
                  </p>
                )}

                <p className="text-[11px] text-ivory/70 tracking-wide pt-1">
                  Zero spam. Unsubscribe anytime with one single click.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
