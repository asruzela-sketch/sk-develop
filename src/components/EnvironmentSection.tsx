import { useState } from "react";
import environmentMap from "@/assets/environment-map.jpg";
import photo1 from "@/assets/environment-photo-1.jpg";
import photo2 from "@/assets/environment-photo-2.jpg";
import photo3 from "@/assets/environment-photo-3.jpg";
import photo4 from "@/assets/environment-photo-4.jpg";

interface LocationPoint {
  id: number;
  title: string;
  description: string;
  image: string;
}

const locationPoints: LocationPoint[] = [
  {
    id: 1,
    title: "Жилая застройка и деловая активность",
    description: "Современные жилые комплексы и сформированная городская среда в непосредственной близости от участка.",
    image: photo1
  },
  {
    id: 2,
    title: "Транспортная магистраль",
    description: "Примыкание к крупной транспортной артерии с высокой интенсивностью трафика.",
    image: photo2
  },
  {
    id: 3,
    title: "Сформированная застройка района",
    description: "Многоэтажная жилая застройка и плотный городской фронт вокруг участка.",
    image: photo3
  },
  {
    id: 4,
    title: "Перспектива развития территории",
    description: "Развитие городской инфраструктуры и дальнейшая урбанизация прилегающих кварталов.",
    image: photo4
  }
];

// Marker positions on the map (percentage-based) - aligned with original map markers
const markerPositions = [
  { top: "46%", left: "28%" },  // 1
  { top: "38%", left: "48%" },  // 2
  { top: "52%", left: "58%" },  // 3
  { top: "74%", left: "38%" },  // 4
];

export const EnvironmentSection = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <section id="environment" className="bg-background py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="label-small text-accent mb-4">Локация</p>
          <h2 className="heading-section mb-6">
            Городское окружение и транспортный контекст
          </h2>
          <p className="body-base text-muted-foreground">
            Участок расположен в сформированной городской среде с активной жилой застройкой, 
            коммерческой инфраструктурой и ключевыми транспортными артериями.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Map Section */}
          <div className="relative rounded-2xl overflow-hidden bg-[hsl(40_25%_94%)]">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <img
                src={environmentMap}
                alt="Карта окружения участка"
                className="w-full h-full object-cover"
              />
              
              {/* Interactive Markers - larger to cover original */}
              {markerPositions.map((pos, index) => (
                <button
                  key={index}
                  className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 ${
                    activePoint === index + 1
                      ? "bg-accent text-foreground scale-110 shadow-lg"
                      : "bg-white text-foreground shadow-md hover:bg-accent hover:scale-105"
                  }`}
                  style={{ top: pos.top, left: pos.left }}
                  onMouseEnter={() => setActivePoint(index + 1)}
                  onMouseLeave={() => setActivePoint(null)}
                  onClick={() => setActivePoint(activePoint === index + 1 ? null : index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locationPoints.map((point) => (
              <div
                key={point.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activePoint === point.id
                    ? "ring-2 ring-accent shadow-xl scale-[1.02]"
                    : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
              >
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={point.image}
                    alt={point.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      activePoint === point.id ? "scale-105" : ""
                    }`}
                  />
                </div>
                
                {/* Number Badge */}
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  activePoint === point.id
                    ? "bg-accent text-foreground"
                    : "bg-white/90 backdrop-blur-sm text-foreground"
                }`}>
                  {point.id}
                </div>
                
                {/* Caption Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 bg-foreground/70 backdrop-blur-sm transition-all duration-300 ${
                  activePoint === point.id ? "opacity-100" : "opacity-0 translate-y-2"
                }`}>
                  <p className="text-xs text-white font-medium">{point.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Descriptions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locationPoints.map((point) => (
            <div
              key={point.id}
              className={`p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                activePoint === point.id
                  ? "bg-accent/10 border border-accent"
                  : "bg-[hsl(40_25%_96%)] hover:bg-[hsl(40_25%_94%)]"
              }`}
              onMouseEnter={() => setActivePoint(point.id)}
              onMouseLeave={() => setActivePoint(null)}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  activePoint === point.id
                    ? "bg-accent text-foreground"
                    : "bg-foreground text-background"
                }`}>
                  {point.id}
                </span>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1.5">
                    {point.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Text */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-[hsl(40_25%_96%)] border border-[hsl(40_20%_90%)]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Локация характеризуется высокой степенью урбанизации и наличием устойчивого транспортного 
              и пешеходного потока. Сочетание жилой застройки, коммерческих функций и транспортных связей 
              формирует благоприятные условия для размещения многофункционального комплекса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
