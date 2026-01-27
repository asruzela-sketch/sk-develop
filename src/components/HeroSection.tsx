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
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          {/* Glass card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Сколковский
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
              Зрелый девелоперский актив в Сколково: участок с разработанной архитектурно-градостроительной концепцией
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-base md:text-lg font-light">
                Московская область, г. Одинцово
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
