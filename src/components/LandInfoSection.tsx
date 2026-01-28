import { MapPin, Maximize2, Building2 } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: string;
}

const InfoCard = ({ icon, label, value, delay = "0s" }: InfoCardProps) => (
  <div 
    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <div className="flex items-start gap-5">
      {/* Elegant Icon Container */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transform -rotate-3 hover:rotate-0 transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
          {label}
        </p>
        <p className="text-base md:text-lg font-medium text-foreground leading-snug">
          {value}
        </p>
      </div>
    </div>
  </div>
);

export const LandInfoSection = () => {
  return (
    <section className="bg-[hsl(40_30%_96%)] py-16 md:py-20">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <InfoCard
            icon={<Maximize2 className="w-6 h-6 text-white" strokeWidth={1.5} />}
            label="Площадь участка"
            value="6 000 м²"
            delay="0s"
          />
          <InfoCard
            icon={<MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />}
            label="Адрес"
            value="Московская область, Одинцовский район, г. Одинцово, ул. Чистяковой"
            delay="0.15s"
          />
          <InfoCard
            icon={<Building2 className="w-6 h-6 text-white" strokeWidth={1.5} />}
            label="Форма собственности"
            value="Владелец — общество с ограниченной ответственностью"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};
