import { MapPin } from "lucide-react";
import heroVisual from "@/assets/hero-new.png";

export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-start">
      {/* Full Background Visual */}
      <img src={heroVisual} alt="Сколковский — зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией" className="w-full h-full object-cover absolute inset-0" />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full p-4 sm:p-6 md:p-10 lg:p-16 flex items-end sm:items-center min-h-screen pb-16 sm:pb-0">
        <div className="max-w-md w-full">
          {/* Glass frame - narrow and tall */}
          <div className="backdrop-blur-md bg-white/5 border-white/15 rounded-2xl p-5 sm:p-8 md:p-10 opacity-90 border-2">
            {/* Spacer */}
            <div className="mb-4 sm:mb-6" />
            
            {/* Title */}
            <h1 className="text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-6 tracking-wide font-normal">
              Девелоперский актив<br />рядом со Сколково
            </h1>
            
            {/* Divider */}
            <div className="w-12 h-px gold-gradient-bg opacity-60 mb-4 sm:mb-6" />
            
            {/* Main headline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-8 font-normal">Земельный участок с разработанной архитектурно-градостроительной концепцией</p>
            
            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-4 sm:mb-6" />
            
            {/* Location inside card */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-[hsl(40_30%_60%_/_0.4)]" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92% / 0.25), hsl(40 40% 87% / 0.15))' }}>
                <MapPin className="w-4 h-4 text-[hsl(40_35%_80%)]" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 block mb-0.5">
                  Локация
                </span>
                <span className="text-xs sm:text-sm text-white font-light">
                  Московская область, г. Одинцово
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>;
};