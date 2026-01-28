import { TrendingUp, BarChart3, MapPin, ExternalLink } from "lucide-react";
import logo144Capital from "@/assets/logo-144capital.png";

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
    title: "Аналитика",
    description: "Разработчики первой геоинформационной аналитической системы для исследования рынка готового арендного бизнеса",
  },
];

export const DeveloperSection = () => {
  const mapUrl = "https://yandex.ru/maps/?um=constructor%3Ae4704c257d8258f591cadc7b3ec0d7ac32c5eb15bc1369eeb00025f524898d38&source=constructorLink";

  return (
    <section id="developer" className="py-16 md:py-24 bg-foreground">
      <div className="container-wide">
        {/* Badge above the block */}
        <div className="flex justify-end mb-4 lg:pr-4">
          <div className="px-4 py-2 bg-[#ffff00] rounded-full text-sm font-medium text-foreground">
            Москва и МО
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Content */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Девелопер</p>
              <img 
                src={logo144Capital} 
                alt="144/Capital" 
                className="h-16 md:h-20 w-auto mb-6"
              />
              <p className="text-lg text-white/80 leading-relaxed">
                Реализует объекты коммерческой торговой недвижимости в Москве и Московской области.
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-4 flex-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ffff00]/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#ffff00]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-medium text-white group-hover:text-[#ffff00] transition-colors mb-1">
                        {feature.title}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map Card */}
          <div className="flex flex-col">
            <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex-1 flex flex-col">
              {/* Map Preview - stretched */}
              <div className="relative flex-1 min-h-[400px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4704c257d8258f591cadc7b3ec0d7ac32c5eb15bc1369eeb00025f524898d38&amp;source=constructor&amp;z=10&amp;ll=37.6173,55.7558"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                  title="Карта проектов 144/Capital"
                />
              </div>
              
              {/* Map CTA */}
              <div className="p-6">
                <p className="text-sm text-white/60 mb-3">
                  География проектов
                </p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#ffff00] text-foreground rounded-full text-sm font-medium hover:bg-[#ffff00]/90 transition-colors group"
                >
                  Все проекты на карте
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
