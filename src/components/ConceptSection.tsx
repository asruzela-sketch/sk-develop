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
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">
          {title}
        </h3>
        
        {/* Area badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(40_20%_88%)] text-sm font-medium text-foreground">
            <span className="text-accent mr-1.5">●</span>
            {area}
            {areaLabel && <span className="ml-1 text-muted-foreground font-normal">{areaLabel}</span>}
          </span>
          {secondaryArea && <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[hsl(40_20%_88%)] text-sm font-medium text-foreground">
              {secondaryArea}
              {secondaryLabel && <span className="ml-1 text-muted-foreground font-normal">{secondaryLabel}</span>}
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
          <h2 className="heading-section mb-6">
            Архитектурно-градостроительная концепция МФК
          </h2>
          <p className="body-base text-muted-foreground">
            Сбалансированная структура коммерческих и гостиничных функций 
            с учётом локации и градостроительных параметров.
          </p>
        </div>

        {/* Three Zone Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Hotel Zone */}
          <ZoneCard title="Гостиница" area="23 232,5" areaLabel="м²" secondaryArea="509" secondaryLabel="номеров" image={buildingImage} description="Гостиничный блок с номерным фондом, ориентированным на деловой и транзитный спрос." details={<ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span><span className="text-foreground">Standard</span> — средняя площадь 25 м²</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span><span className="text-foreground">Superior</span> — средняя площадь 36,5 м²</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Рациональная модульная планировка</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">●</span>
                  <span>Возможность операторской модели управления</span>
                </li>
              </ul>} />

          {/* Retail Zone */}
          <ZoneCard title="Торговый центр и офисы" area="12 411" areaLabel="м²" image={retailImage} description="Коммерческая инфраструктура, формирующая активную городскую среду и сервисное ядро проекта." details={<div className="space-y-4">
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
              </div>} />

          {/* Parking Zone */}
          <ZoneCard title="Подземный и надземный паркинг" area="135" areaLabel="м/м" image={parkingImage} description="Инфраструктурный элемент, обеспечивающий транспортную доступность комплекса." details={<div className="space-y-4"><p className="text-xs text-muted-foreground italic">С учётом аренды м/м в паркинге соседнего участка</p><ul className="space-y-2">
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
              </ul></div>} />
        </div>

        {/* Total Area */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-accent text-accent-foreground animate-fade-in hover:scale-105 transition-transform duration-300 shadow-lg">
            <span className="text-sm opacity-90">Общая площадь</span>
            <span className="text-2xl font-semibold">39 482,5</span>
            <span className="text-sm opacity-90">м²</span>
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