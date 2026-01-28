import { MapPin } from "lucide-react";
import locationMap from "@/assets/location-map.jpg";

export const ProjectSection = () => {
  return (
    <section
      id="project"
      className="relative min-h-[500px] md:min-h-[600px] flex items-end justify-start"
      style={{
        backgroundImage: `url(${locationMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-wide relative z-10 py-8 md:py-12">
        {/* Premium Button with Frame */}
        <div className="inline-block opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <div className="relative group">
            {/* Outer decorative frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-amber-300 to-accent rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-amber-400 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Button */}
            <a
              href="https://yandex.ru/maps/-/CLxnaU2Z"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium text-sm md:text-base transition-all duration-300 group-hover:scale-[1.02] shadow-xl"
            >
              <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Открыть на Яндекс Картах</span>
              <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center ml-1 transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-3 h-3 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};