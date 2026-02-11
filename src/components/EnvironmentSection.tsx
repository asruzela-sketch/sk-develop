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
const locationPoints: LocationPoint[] = [{
  id: 1,
  title: "Жилая застройка и деловая активность",
  description: "Современные жилые комплексы и сформированная городская среда в непосредственной близости от участка.",
  image: photo1
}, {
  id: 2,
  title: "Транспортная магистраль",
  description: "Примыкание к крупной транспортной артерии с высокой интенсивностью трафика.",
  image: photo2
}, {
  id: 3,
  title: "Сформированная застройка района",
  description: "Многоэтажная жилая застройка и плотный городской фронт вокруг участка.",
  image: photo3
}, {
  id: 4,
  title: "Перспектива развития территории",
  description: "Развитие городской инфраструктуры и дальнейшая урбанизация прилегающих кварталов.",
  image: photo4
}];

// Marker positions on the map (percentage-based) - aligned with original map markers
const markerPositions = [{
  top: "52%",
  left: "28%"
},
// 1
{
  top: "36%",
  left: "52%"
},
// 2 - moved up and right
{
  top: "50%",
  left: "68%"
},
// 3 - moved right
{
  top: "80%",
  left: "38%"
} // 4
];
export const EnvironmentSection = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  return <section id="environment" className="bg-background pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="label-small mb-4 text-secondary-foreground">Локация</p>
          <h2 className="heading-section mb-6">
            Городское окружение и транспортный контекст
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Map Section */}
          <div className="relative rounded-2xl overflow-hidden bg-[hsl(40_25%_94%)]">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <img src={environmentMap} alt="Карта окружения участка" className="w-full h-full object-cover" />
              
              {/* Interactive Markers - larger to cover original */}
              {markerPositions.map((pos, index) => <button key={index} className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-300 ${activePoint === index + 1 ? "bg-accent text-foreground scale-110 shadow-lg" : "bg-white text-foreground shadow-md hover:bg-accent hover:scale-105"}`} style={{
              top: pos.top,
              left: pos.left
            }} onMouseEnter={() => setActivePoint(index + 1)} onMouseLeave={() => setActivePoint(null)} onClick={() => setActivePoint(activePoint === index + 1 ? null : index + 1)}>
                  {index + 1}
                </button>)}
            </div>
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locationPoints.map(point => <div key={point.id} className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activePoint === point.id ? "ring-2 ring-accent shadow-xl scale-[1.02]" : "hover:shadow-lg"}`} onMouseEnter={() => setActivePoint(point.id)} onMouseLeave={() => setActivePoint(null)}>
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={point.image} alt={point.title} className={`w-full h-full object-cover transition-transform duration-500 ${activePoint === point.id ? "scale-105" : ""}`} />
                </div>
                
                {/* Number Badge */}
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${activePoint === point.id ? "bg-accent text-foreground" : "bg-white/90 backdrop-blur-sm text-foreground"}`}>
                  {point.id}
                </div>
                
                {/* Caption Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 bg-foreground/70 backdrop-blur-sm transition-all duration-300 ${activePoint === point.id ? "opacity-100" : "opacity-0 translate-y-2"}`}>
                  <p className="text-xs text-white font-medium">{point.title}</p>
                </div>
              </div>)}
          </div>
        </div>

      </div>
    </section>;
};