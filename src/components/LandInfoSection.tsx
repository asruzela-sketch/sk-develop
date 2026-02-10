import { MapPin, Maximize2, Building2, Users } from "lucide-react";
import locationMap from "@/assets/location-map.jpg";

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

export const LandInfoSection = () => {
  return (
    <>
      {/* Info Cards Section */}
      <section className="bg-background py-10 md:py-14">
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

      {/* Map Section */}
      <section id="project" className="bg-muted/40 py-16 md:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[0.9] mb-6">
                ЛОКАЦИЯ
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Московская область, Одинцовский район, г.&nbsp;Одинцово, ул.&nbsp;Чистяковой — в непосредственной близости от Сколково
              </p>

              <div className="relative group inline-block">
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

            {/* Right: Map Image */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={locationMap}
                  alt="Расположение участка на карте Москвы и Московской области"
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
