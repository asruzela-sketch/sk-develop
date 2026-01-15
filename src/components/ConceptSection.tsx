import hotelImage from "@/assets/hotel-render.jpg";
import retailImage from "@/assets/retail-render.jpg";

const zones = [
  {
    title: "Гостиничная зона",
    area: "23 232,5 м²",
    image: hotelImage,
    details: [
      "Standard — ~25 м²",
      "Superior — ~36,5 м²",
    ],
  },
  {
    title: "Торговый центр",
    area: "12 411,0 м²",
    image: retailImage,
    details: [
      "Ритейл",
      "Предприятия общественного питания",
      "Досугово-развлекательная зона",
      "Сервисные функции",
    ],
  },
];

export const ConceptSection = () => {
  return (
    <section id="concept" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="label-small text-accent mb-4">Архитектурно-градостроительная концепция</p>
          <h2 className="heading-section mb-4">
            Функциональное зонирование МФК
          </h2>
          <div className="accent-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {zones.map((zone) => (
            <div key={zone.title} className="group relative overflow-hidden rounded-sm">
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay))] via-[hsl(var(--hero-overlay)_/_0.3)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="heading-subsection text-[hsl(var(--text-light))] mb-2">{zone.title}</h3>
                    <p className="text-accent font-medium">{zone.area}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1">
                  {zone.details.map((detail) => (
                    <li key={detail} className="text-sm text-[hsl(var(--text-light)_/_0.7)]">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Parking Info */}
        <div className="glass-panel-light p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="heading-subsection mb-2">Паркинг</h3>
            <p className="text-muted-foreground">Подземная парковка с удобным доступом</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-foreground">405</p>
              <p className="label-small text-muted-foreground mt-1">Машиномест</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-foreground">3 839,0</p>
              <p className="label-small text-muted-foreground mt-1">м²</p>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="mt-12 text-center">
          <p className="label-small text-muted-foreground mb-2">Общая площадь комплекса</p>
          <p className="text-4xl md:text-5xl font-light text-foreground">
            39 482,5 <span className="text-xl text-muted-foreground">м²</span>
          </p>
        </div>
      </div>
    </section>
  );
};
