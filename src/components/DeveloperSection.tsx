import { MapPin, TrendingUp, BarChart3, ExternalLink } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "300+",
    description: "Реализованных инвестиционных проектов за 6 лет",
  },
  {
    icon: BarChart3,
    title: "Лидеры рынка",
    description: "Коммерческой торговой недвижимости Москвы и МО",
  },
  {
    icon: MapPin,
    title: "ГАБ-система",
    description: "Разработчики первой геоинформационной аналитической системы для исследования рынка готового арендного бизнеса",
  },
];

export const DeveloperSection = () => {
  const mapUrl = "https://yandex.ru/maps/?um=constructor%3Ae4704c257d8258f591cadc7b3ec0d7ac32c5eb15bc1369eeb00025f524898d38&source=constructorLink";

  return (
    <section id="developer" className="py-16 md:py-24 bg-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Девелопер</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-background mb-6">
                <span className="text-accent">144</span>/Capital
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Реализует объекты коммерческой торговой недвижимости в Москве и Московской области.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-medium text-background group-hover:text-accent transition-colors mb-1">
                        {feature.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-background/5 border border-background/10">
              {/* Map Preview */}
              <div className="relative aspect-[4/3] bg-muted/20">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4704c257d8258f591cadc7b3ec0d7ac32c5eb15bc1369eeb00025f524898d38&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                  title="Карта проектов 144/Capital"
                />
              </div>
              
              {/* Map CTA */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-3">
                  География проектов
                </p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors group"
                >
                  Все проекты на карте
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent rounded-full text-sm font-medium text-foreground shadow-lg hidden lg:block">
              Москва и МО
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
