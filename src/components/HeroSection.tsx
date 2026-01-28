import { MapPin } from "lucide-react";
import heroVisual from "@/assets/hero-new.png";

export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-start">
      {/* Full Background Visual */}
      <img src={heroVisual} alt="Сколковский — зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией" className="w-full h-full object-cover absolute inset-0" />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full p-6 md:p-10 lg:p-16">
        <div className="max-w-md">
          {/* Glass frame - narrow and tall */}
          <div className="backdrop-blur-md bg-white/5 border-white/15 rounded-2xl p-8 md:p-10 opacity-90 border-2">
            {/* Team label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-[0.15em] text-white/50 font-light">
                Проект команды
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[#ffff00] font-medium">
                144/Capital
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-xl md:text-2xl text-white mb-6 tracking-wide uppercase font-normal">
              Сколковский
            </h1>
            
            {/* Divider */}
            <div className="w-12 h-px bg-[#ffff00]/60 mb-6" />
            
            {/* Main headline */}
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-8 font-normal">Зрелый девелоперский актив в Сколково: земельный участок с разработанной архитектурно-градостроительной концепцией</p>
            
            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-6" />
            
            {/* Location inside card */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ffff00] flex items-center justify-center">
                <MapPin className="w-4 h-4 text-black" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-white/50 block mb-0.5">
                  Локация
                </span>
                <span className="text-sm text-white font-light">
                  Московская область, г. Одинцово
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>;
};