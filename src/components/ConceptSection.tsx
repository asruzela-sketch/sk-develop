import hotelImage from "@/assets/hotel-render.jpg";
import retailImage from "@/assets/retail-render.jpg";
import buildingImage from "@/assets/building-render.jpg";

export const ConceptSection = () => {
  return (
    <section id="concept" className="section-light py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="label-small text-accent mb-4">Архитектурно-градостроительная концепция</p>
          <h2 className="heading-section mb-6">
            Архитектурно-градостроительная концепция многофункционального комплекса
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="body-base text-muted-foreground">
            Проект формирует сбалансированную структуру коммерческих и гостиничных функций 
            с учётом локации, транспортной доступности и градостроительных параметров территории.
          </p>
        </div>

        {/* Three Zone Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          
          {/* Hotel Zone */}
          <div className="relative overflow-hidden rounded-sm min-h-[600px] group">
            <img
              src={hotelImage}
              alt="Гостиничная зона"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[hsl(220_15%_10%_/_0.6)]" />
            <div className="relative h-full p-6 md:p-8 flex flex-col">
              <div className="bg-[hsl(220_15%_10%_/_0.7)] backdrop-blur-md p-6 md:p-8 rounded-sm flex-1 flex flex-col">
                <h3 className="heading-subsection text-[hsl(var(--text-light))] mb-4">
                  Гостиничная зона
                </h3>
                <p className="text-accent text-3xl md:text-4xl font-light mb-4">
                  23 232,5 м²
                </p>
                <p className="text-[hsl(var(--text-light)_/_0.8)] text-sm leading-relaxed mb-6">
                  Функциональный гостиничный блок с номерным фондом, ориентированным на деловой 
                  и транзитный спрос в зоне Сколково — Одинцово.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span><span className="text-[hsl(var(--text-light))]">Standard</span> — средняя площадь 25 м²</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span><span className="text-[hsl(var(--text-light))]">Superior</span> — средняя площадь 36,5 м²</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Рациональная модульная планировка</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Возможность операторской модели управления</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retail Zone */}
          <div className="relative overflow-hidden rounded-sm min-h-[600px] group">
            <img
              src={retailImage}
              alt="Торговый центр"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[hsl(220_15%_10%_/_0.6)]" />
            <div className="relative h-full p-6 md:p-8 flex flex-col">
              <div className="bg-[hsl(220_15%_10%_/_0.7)] backdrop-blur-md p-6 md:p-8 rounded-sm flex-1 flex flex-col">
                <h3 className="heading-subsection text-[hsl(var(--text-light))] mb-4">
                  Торгово-общественный блок
                </h3>
                <p className="text-accent text-3xl md:text-4xl font-light mb-4">
                  12 411 м²
                </p>
                <p className="text-[hsl(var(--text-light)_/_0.8)] text-sm leading-relaxed mb-6">
                  Коммерческая инфраструктура комплекса, формирующая активную городскую среду 
                  и сервисное ядро проекта.
                </p>
                
                <div className="space-y-4 mt-auto">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent mb-2">Зона ритейла — 4 988 м²</p>
                    <ul className="space-y-1.5">
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Супермаркет — 933 м²</li>
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Мелкие арендаторы — 1 761 м²</li>
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Аптека — 113 м²</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent mb-2">Общественные функции</p>
                    <ul className="space-y-1.5">
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Досугово-развлекательная зона — 1 118 м²</li>
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Фудкорт (200 мест) — 1 063 м²</li>
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Салон красоты — 181 м²</li>
                      <li className="text-xs text-[hsl(var(--text-light)_/_0.7)]">• Бытовые услуги — 119 м²</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent mb-2">Техническая зона</p>
                    <p className="text-xs text-[hsl(var(--text-light)_/_0.7)]">2 135 м²</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Zone */}
          <div className="relative overflow-hidden rounded-sm min-h-[600px] group">
            <img
              src={buildingImage}
              alt="Паркинг"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[hsl(220_15%_10%_/_0.6)]" />
            <div className="relative h-full p-6 md:p-8 flex flex-col">
              <div className="bg-[hsl(220_15%_10%_/_0.7)] backdrop-blur-md p-6 md:p-8 rounded-sm flex-1 flex flex-col">
                <h3 className="heading-subsection text-[hsl(var(--text-light))] mb-4">
                  Подземный и надземный паркинг
                </h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="text-accent text-3xl md:text-4xl font-light">
                    405
                  </p>
                  <p className="text-[hsl(var(--text-light)_/_0.7)] text-sm">машино-мест</p>
                </div>
                <p className="text-accent text-2xl font-light mb-4">
                  3 839 м²
                </p>
                <p className="text-[hsl(var(--text-light)_/_0.8)] text-sm leading-relaxed mb-6">
                  Инфраструктурный элемент, обеспечивающий транспортную доступность комплекса 
                  и разгрузку прилегающих улиц.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Размещение в составе стилобатной части</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Логика въездов и выездов</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Распределение потоков посетителей и резидентов</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Связь с торговыми и гостиничными функциями</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Total Area */}
        <div className="text-center mb-8">
          <p className="label-small text-muted-foreground mb-2">Общая площадь комплекса</p>
          <p className="text-4xl md:text-5xl font-light text-foreground">
            39 482,5 <span className="text-xl text-muted-foreground">м²</span>
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Все показатели представлены в рамках разработанной архитектурно-градостроительной концепции 
            и могут уточняться на следующих стадиях проектирования.
          </p>
        </div>
      </div>
    </section>
  );
};
