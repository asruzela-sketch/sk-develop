import { MapPin } from "lucide-react";
import heroVisual from "@/assets/hero-new.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-start">
      {/* Full Background Visual */}
      <img
        src={heroVisual}
        alt="Сколковский — зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией"
        className="w-full h-full object-cover absolute inset-0"
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full p-6 md:p-10 lg:p-12 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-xl">
          {/* Glass card - more subtle */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
              Сколковский
            </h1>
            
            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6">
              Зрелый девелоперский актив в Сколково: участок с разработанной архитектурно-градостроительной концепцией
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2.5 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base font-light">
                Московская область, г. Одинцово
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
