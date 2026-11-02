import React from 'react';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { BRAND_INFO, INSTAGRAM_POSTS } from '../data/products';

export const InstagramFeed = () => {
  return (
    <section className="py-20 md:py-24 bg-ivory border-t border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-rani text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>Social Lookbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            Get Inspired by Toorva
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-rani via-gold to-ruby mx-auto mt-4 mb-3" />
          <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed">
            Follow our design diary, real bride moments, and behind-the-scenes karigar craftsmanship on Instagram.
          </p>

          {/* Instagram Handle Link */}
          <div className="mt-4">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-300 hover:border-pink-500 text-brown hover:text-pink-700 text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>{BRAND_INFO.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-600" />
            </a>
          </div>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-beige-light border border-beige/80 block shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Top Colorful Corner Tag */}
              {post.tag && (
                <div className="absolute top-2 left-2 z-10">
                  <span className={`text-[9px] uppercase tracking-wider font-bold text-white px-2 py-0.5 rounded-full shadow-xs ${post.tagColor || 'bg-pink-600'}`}>
                    {post.tag}
                  </span>
                </div>
              )}

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-brown/80 to-transparent backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-ivory">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-gold-light" />
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-light line-clamp-3 text-ivory/95 font-serif italic leading-tight">
                    "{post.caption}"
                  </p>
                  
                  <div className="flex items-center gap-3 text-[11px] pt-1.5 border-t border-gold/40 text-gold-light font-medium">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 fill-current" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 text-white hover:opacity-95 text-xs uppercase tracking-widest font-bold rounded-xl transition-all shadow-md group"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>Join Our Circle @toorvajuttis</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
