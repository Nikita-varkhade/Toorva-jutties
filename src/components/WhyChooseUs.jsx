import React from 'react';
import { Sparkles, Crown, HeartHandshake, Globe2 } from 'lucide-react';
import { WHY_CHOOSE_TOORVA } from '../data/products';

export const WhyChooseUs = () => {
  const iconMap = {
    Sparkles: Sparkles,
    Crown: Crown,
    HeartHandshake: HeartHandshake,
    Globe2: Globe2,
  };

  const colorStyles = {
    saffron: {
      iconBg: "bg-amber-100 text-saffron border-amber-300",
      tagColor: "text-saffron",
      borderHover: "hover:border-amber-300",
      dot: "bg-saffron",
    },
    ruby: {
      iconBg: "bg-rose-100 text-ruby border-rose-300",
      tagColor: "text-ruby",
      borderHover: "hover:border-rose-300",
      dot: "bg-ruby",
    },
    emeraldRoyal: {
      iconBg: "bg-emerald-100 text-emeraldRoyal border-emerald-300",
      tagColor: "text-emeraldRoyal",
      borderHover: "hover:border-emerald-300",
      dot: "bg-emeraldRoyal",
    },
    peacock: {
      iconBg: "bg-blue-100 text-peacock border-blue-300",
      tagColor: "text-peacock",
      borderHover: "hover:border-blue-300",
      dot: "bg-peacock",
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-ivory via-beige-light/20 to-ivory border-t border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ruby-light border border-ruby-border text-ruby text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Crown className="w-3.5 h-3.5" />
            <span>The Toorva Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brown font-normal tracking-tight">
            Why Choose Toorva?
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-ruby via-gold to-emeraldRoyal mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-brown-muted font-light leading-relaxed">
            Crafted for women who refuse to choose between regal heritage style and effortless all-day comfort.
          </p>
        </div>

        {/* 4 Premium Jewel-Toned Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_TOORVA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const theme = colorStyles[item.color] || colorStyles.ruby;

            return (
              <div
                key={item.title}
                className={`bg-gradient-to-b ${item.cardBg} p-8 rounded-2xl border border-beige/80 shadow-xs hover:shadow-luxury-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${theme.borderHover}`}
              >
                <div>
                  {/* Colorful Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-xs ${theme.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Subtitle / tag */}
                  <span className={`text-[10px] uppercase tracking-widest font-bold block mb-1 ${theme.tagColor}`}>
                    {item.subtitle}
                  </span>

                  {/* Card Title */}
                  <h3 className="text-xl font-serif text-brown font-medium mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brown-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-6 border-t border-beige/60 flex items-center justify-between text-[11px] text-brown-muted">
                  <span className="font-serif italic font-medium">Toorva Standard 0{index + 1}</span>
                  <div className={`w-2 h-2 rounded-full ${theme.dot} group-hover:scale-150 transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
