import { MapPin, Maximize2, Building2 } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoCard = ({ icon, label, value }: InfoCardProps) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
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
            icon={<Maximize2 className="w-5 h-5 text-accent" />}
            label="Площадь участка"
            value="6 000 м²"
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-accent" />}
            label="Адрес"
            value="Московская область, Одинцовский район, г. Одинцово, ул. Чистяковой"
          />
          <InfoCard
            icon={<Building2 className="w-5 h-5 text-accent" />}
            label="Форма собственности"
            value="ООО «СНК»"
          />
        </div>
      </div>
    </section>
  );
};
