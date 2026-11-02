import React, { useState } from 'react';
import { Star, Heart, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const CustomerLove = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : (prev + 1) % TESTIMONIALS.length));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-ivory-50 via-beige/20 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-ruby text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-ruby text-ruby" />
            <span>Compliments Guaranteed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            Customer Love
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-ruby via-gold to-emeraldRoyal mx-auto mt-4 mb-3" />
          <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed">
            Stories from brides, bridesmaids, and women across the globe who walked with pride and zero pain in Toorva.
          </p>
        </div>

        {/* Featured Editorial Testimonial Showcase */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-gold/40 p-8 sm:p-12 shadow-luxury relative overflow-hidden">
          
          {/* Subtle Quote Background Graphic */}
          <Quote className="absolute -top-4 -right-4 w-32 h-32 text-gold/15 pointer-events-none transform rotate-12" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            
            {/* Left Profile Badge with Color Theme */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center font-serif text-2xl font-bold shadow-md mx-auto md:mx-0 ${current.avatarBg || 'bg-rose-100 text-ruby border-rose-300'}`}>
                {current.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="mt-3 flex items-center justify-center md:justify-start gap-1 text-[11px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Bride / Buyer</span>
              </div>
            </div>

            {/* Right Review Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              
              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-brown leading-relaxed">
                "{current.comment}"
              </p>

              {/* Author & Occasion */}
              <div className="pt-3 border-t border-beige/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-serif text-lg font-bold text-brown">
                    {current.name}
                  </h4>
                  <span className="text-xs text-brown-muted">
                    {current.city} • <span className="text-ruby font-semibold">{current.occasion}</span>
                  </span>
                </div>
                
                <div className="text-[11px] uppercase tracking-wider text-brown-muted bg-ivory px-3 py-1 rounded-full border border-beige font-medium">
                  Wore: <strong className="text-brown font-bold">{current.product}</strong>
                </div>
              </div>

            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-beige/60">
            <button
              type="button"
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-beige hover:border-ruby hover:bg-ruby-light flex items-center justify-center text-brown hover:text-ruby transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-8 bg-ruby' : 'w-2.5 bg-beige-dark'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-beige hover:border-ruby hover:bg-ruby-light flex items-center justify-center text-brown hover:text-ruby transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
