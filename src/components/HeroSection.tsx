import { MapPin } from "lucide-react";
import heroVisual from "@/assets/hero-new.png";
import locationMap from "@/assets/location-map.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between">
      {/* Full Background Visual */}
      <img
        src={heroVisual}
        alt="Сколковский — зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией"
        className="w-full h-full object-cover absolute inset-0"
      />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      
      {/* Top Content with Glass Frame */}
      <div className="relative z-10 p-6 md:p-10 lg:p-16 pt-24 md:pt-28 lg:pt-32">
        <div className="max-w-2xl">
          {/* Glass frame - just border, minimal bg */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10">
            {/* Small title */}
            <p className="text-sm md:text-base text-white/90 font-normal mb-4 md:mb-6 tracking-wide">
              Сколковский
            </p>
            
            {/* Main headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight mb-6 md:mb-8">
              Зрелый девелоперский актив<br className="hidden md:block" /> 
              с разработанной архитектурно-<br className="hidden md:block" />
              градостроительной концепцией
            </h1>
            
            {/* Supporting text */}
            <p className="text-sm md:text-base text-white/70 font-light leading-relaxed max-w-lg">
              Не просто земельный участок, а сформированный<br className="hidden md:block" />
              проект с уже пройденным этапом административного цикла
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Content */}
      <div className="relative z-10 p-6 md:p-10 lg:p-16 pb-8 md:pb-12 lg:pb-16 flex justify-between items-end">
        {/* Location */}
        <div className="flex items-center gap-2.5 text-white/90">
          <MapPin className="w-5 h-5 text-[#ffff00]" />
          <span className="text-sm md:text-base font-light">
            Московская область, г. Одинцово
          </span>
        </div>
        
        {/* Map preview card */}
        <a 
          href="https://yandex.ru/maps/-/CLxnaU2Z"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block relative group"
        >
          <div className="w-40 lg:w-48 h-28 lg:h-32 rounded-xl overflow-hidden border border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-105">
            <img 
              src={locationMap} 
              alt="Карта расположения"
              className="w-full h-full object-cover"
            />
            {/* Yellow pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#ffff00] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
