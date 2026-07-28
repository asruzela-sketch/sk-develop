import { useState } from "react";
import { ChevronDown } from "lucide-react";
import buildingImage from "@/assets/building-render.jpg";
import retailImage from "@/assets/retail-render-v5.jpg";
import parkingImage from "@/assets/parking-render.jpg";
interface ZoneCardProps {
  title: string;
  area: string;
  areaLabel?: string;
  secondaryArea?: string;
  secondaryLabel?: string;
  description: string;
  image: string;
  details: React.ReactNode;
}
const ZoneCard = ({
  title,
  area,
  areaLabel,
  secondaryArea,
  secondaryLabel,
  description,
  image,
  details
}: ZoneCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return <div className="bg-[hsl(40_25%_94%)] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 cursor-pointer group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">
          {title}
        </h3>
        
        {/* Area badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-xl border border-[hsl(40_30%_82%)] text-sm font-medium text-[hsl(35_40%_30%)]" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
            <span className="mr-1.5" style={{ color: 'hsl(35 45% 40%)' }}>●</span>
            {area}
            {areaLabel && <span className="ml-1 text-[hsl(35_30%_50%)] font-normal">{areaLabel}</span>}
          </span>
          {secondaryArea && <span className="inline-flex items-center px-3 py-1.5 rounded-xl border border-[hsl(40_30%_82%)] text-sm font-medium text-[hsl(35_40%_30%)]" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
              {secondaryArea}
              {secondaryLabel && <span className="ml-1 text-[hsl(35_30%_50%)] font-normal">{secondaryLabel}</span>}
            </span>}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>

        {/* Spacer to push button to bottom */}
        <div className="mt-auto pt-4">
        {/* Expandable details */}
          <div className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
            <div className="pt-4 border-t border-[hsl(40_15%_85%)]">
              {details}
            </div>
          </div>

          {/* Toggle button */}
          <button onClick={() => setIsExpanded(!isExpanded)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium transition-all hover:bg-foreground/90">
            {isExpanded ? "Свернуть" : "Подробнее"}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </div>;
};
export const ConceptSection = () => {
    return <section id="concept" className="bg-[hsl(40_30%_96%)] pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-16">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 max-w-3xl mx-auto">
          <p className="label-small mb-4 text-secondary-foreground">Концепция</p>
          <h2 className="heading-section">
            Архитектурно-градостроительная концепция МФК
          </h2>
        </div>

        {/* Three Zone Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Hotel Zone */}
          <ZoneCard title="Гостиница" area="28 186,3" areaLabel="м²" secondaryArea="726" secondaryLabel="номеров" image={buildingImage} description="Гостиничный блок с номерным фондом, ориентированным на деловой и транзитный спрос." details={<ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span><span className="text-foreground">Standard</span> — площадь от 25 до 30,5 м²</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span><span className="text-foreground">Superior</span> — площадь от 36,5 до 49,5 м²</span>
                </li>
              </ul>} />

          {/* Retail Zone */}
          <ZoneCard title="Торговый центр и офисы" area="7 788,2" areaLabel="м²" image={retailImage} description="Коммерческая инфраструктура, формирующая активную городскую среду и сервисное ядро проекта." details={<div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground mb-2">Ритейл — 4 988 м²</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Супермаркет — 933 м²</li>
                    <li>• Мелкие арендаторы — 1 761 м²</li>
                    <li>• Аптека — 113 м²</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground mb-2">Общественные функции</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Досуг — 1 118 м²</li>
                    <li>• Фудкорт (200 мест) — 1 063 м²</li>
                    <li>• Салон красоты — 181 м²</li>
                    <li>• Бытовые услуги — 119 м²</li>
                  </ul>
              </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Возможно формирование офисных помещений на 4 и 5 этажах здания в объеме до 3 500 м² на стадии проектирования и получения разрешения на строительство.
                </p>
              </div>} />

          {/* Parking Zone */}
          <ZoneCard title="Подземный и надземный паркинг" area="135" areaLabel="м/м" secondaryArea="с учётом аренды м/м в паркинге соседнего участка" image={parkingImage} description="Инфраструктурный элемент, обеспечивающий транспортную доступность комплекса." details={<ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Размещение в составе стилобатной части</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Логика въездов и выездов</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Распределение потоков посетителей и резидентов</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Связь с торговыми и гостиничными функциями</span>
                </li>
              </ul>} />
        </div>

        {/* Total Area */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300 shadow-md border border-[hsl(40_30%_82%)] text-[hsl(35_40%_30%)]" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
            <span className="text-sm font-medium opacity-80">Площадь МФК</span>
            <span className="text-2xl font-semibold" style={{ color: 'hsl(35 45% 40%)' }}>40 215,1</span>
            <span className="text-sm font-medium opacity-80">м²</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Все показатели представлены в рамках разработанной архитектурно-градостроительной концепции 
            и могут уточняться на следующих стадиях проектирования.
          </p>
        </div>
      </div>
    </section>;
};
