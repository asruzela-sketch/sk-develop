import { MapPin, Maximize2, Building2, Users } from "lucide-react";
import locationMap from "@/assets/location-map.jpg";
import infraArena from "@/assets/infra-live-arena.jpg";
import infraGolf from "@/assets/infra-golf-club.jpg";
import infraVnukovo from "@/assets/infra-vnukovo.jpg";
import infraInnovacia from "@/assets/infra-zhk-innovacia.jpg";
import infraTrekhgorka from "@/assets/infra-zhk-trekhgorka.jpg";
import infraSkolkovsky from "@/assets/infra-zhk-skolkovsky.jpg";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: string;
}

const InfoCard = ({ icon, label, value, delay = "0s" }: InfoCardProps) => (
  <div 
    className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in"
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transform -rotate-3 hover:rotate-0 transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {label}
        </p>
        <p className="text-sm md:text-base font-medium text-foreground leading-snug whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  </div>
);

interface InfraCardProps {
  image: string;
  name: string;
  badges?: string[];
  delay?: string;
}

const InfraCard = ({ image, name, badges, delay = "0s" }: InfraCardProps) => (
  <div 
    className="group relative rounded-2xl overflow-hidden aspect-square opacity-0 animate-fade-in cursor-default"
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    
    {/* Floating badges */}
    {badges && badges.length > 0 && (
      <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-foreground text-[10px] md:text-xs font-medium shadow-lg"
          >
            {badge}
          </span>
        ))}
      </div>
    )}

    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-white font-medium text-sm md:text-base leading-tight">{name}</p>
    </div>
  </div>
);

export const LandInfoSection = () => {
  const infraItems: InfraCardProps[] = [
    { image: infraArena, name: "Live Arena", badges: ["11 тыс. мест", "2,27 км"] },
    { image: infraGolf, name: "Skolkovo Golf Club", badges: ["Премиум"] },
    { image: infraVnukovo, name: "Аэропорт Внуково", badges: ["Международный"] },
    { image: infraInnovacia, name: "ЖК Инновация" },
    { image: infraTrekhgorka, name: "ЖК Новая Трёхгорка" },
    { image: infraSkolkovsky, name: "ЖК Сколковский" },
  ];

  return (
    <>
      {/* Info Cards Section */}
      <section className="bg-muted/40 py-10 md:py-14">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <InfoCard
              icon={<Maximize2 className="w-5 h-5 text-white" strokeWidth={1.5} />}
              label="Площадь участка"
              value="6 000 м²"
              delay="0s"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />}
              label="Адрес"
              value="Московская область, Одинцовский район, г. Одинцово, ул. Чистяковой"
              delay="0.15s"
            />
            <InfoCard
              icon={<Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />}
              label="Форма владения"
              value="Участок в собственности"
              delay="0.3s"
            />
            <InfoCard
              icon={<Users className="w-5 h-5 text-white" strokeWidth={1.5} />}
              label="Население"
              value={"187 тыс. жителей\nг. Одинцово"}
              delay="0.45s"
            />
          </div>
        </div>
      </section>

      {/* Map + Infrastructure Section */}
      <section id="project" className="bg-muted/40 pb-16 md:pb-24">
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-[0.9] mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            ЛОКАЦИЯ
          </h2>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 items-start">
            {/* Left: Map Image */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={locationMap}
                  alt="Расположение участка на карте Москвы и Московской области"
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>

            {/* Right: Infrastructure Grid + Button */}
            <div className="opacity-0 animate-fade-in flex flex-col h-full" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Окружение и инфраструктура</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
                {infraItems.map((item, i) => (
                  <InfraCard
                    key={item.name}
                    {...item}
                    delay={`${0.2 + i * 0.1}s`}
                  />
                ))}
              </div>

              <div className="mt-6 relative group inline-block self-start opacity-0 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-amber-300 to-accent rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-amber-400 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                
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
        </div>
      </section>
    </>
  );
};
