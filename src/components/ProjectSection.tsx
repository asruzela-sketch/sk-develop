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
        <a
          href="https://yandex.ru/maps/-/CLxnaU2Z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <MapPin className="w-5 h-5" />
          Открыть на Яндекс Картах
        </a>
      </div>
    </section>
  );
};