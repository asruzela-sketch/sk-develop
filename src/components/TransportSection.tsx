import { Train, Plane, MapPin, Navigation } from "lucide-react";

interface TransportCardProps {
  icon: React.ReactNode;
  destination: string;
  details: { mode: string; time: string }[];
  delay?: string;
}

const TransportCard = ({ icon, destination, details, delay = "0s" }: TransportCardProps) => (
  <div
    className="group relative rounded-2xl overflow-hidden opacity-0 animate-fade-in"
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    {/* Glass background */}
    <div className="absolute inset-0 bg-foreground/5 backdrop-blur-sm border border-foreground/[0.08] rounded-2xl" />
    
    <div className="relative p-5 md:p-6 flex items-start gap-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-foreground/[0.07] border border-foreground/[0.06] flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm md:text-base font-medium text-foreground mb-2 leading-snug">
          {destination}
        </p>
        <div className="flex flex-wrap gap-2">
          {details.map((d, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/[0.04] border border-foreground/[0.06] text-xs text-muted-foreground"
            >
              <span className="font-medium text-foreground">{d.time}</span>
              <span className="text-muted-foreground/60">·</span>
              <span>{d.mode}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TransportSection = () => {
  const transportData: TransportCardProps[] = [
    {
      icon: <Train className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />,
      destination: "МЦД",
      details: [
        { mode: "на такси", time: "6 мин" },
        { mode: "пешком", time: "20 мин" },
      ],
    },
    {
      icon: <Plane className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />,
      destination: "Аэропорт Внуково",
      details: [
        { mode: "на авто/такси", time: "27 мин" },
      ],
    },
    {
      icon: <Plane className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />,
      destination: "Аэропорт Шереметьево",
      details: [
        { mode: "на МЦД", time: "1 ч 20 мин" },
      ],
    },
    {
      icon: <Navigation className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />,
      destination: "Метро Киевская",
      details: [
        { mode: "на авто/такси", time: "25 мин" },
        { mode: "на автобусе", time: "46 мин" },
      ],
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">
          
          {/* Left: Transport Cards */}
          <div className="space-y-3">
            <p className="label-small mb-6 text-secondary-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
              Транспортная доступность
            </p>
            {transportData.map((item, i) => (
              <TransportCard
                key={item.destination}
                {...item}
                delay={`${0.1 + i * 0.12}s`}
              />
            ))}
          </div>

          {/* Right: Location Icon with Building Outline */}
          <div className="flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-accent/[0.06] border border-accent/[0.12]" />
              <div className="absolute inset-4 rounded-full bg-accent/[0.04] border border-accent/[0.08]" />
              
              {/* Center pin icon with building */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Map pin shape */}
                  <svg viewBox="0 0 120 160" className="w-36 h-48 md:w-44 md:h-60" fill="none">
                    {/* Pin body */}
                    <path
                      d="M60 155 C60 155 110 95 110 55 C110 27.4 87.6 5 60 5 C32.4 5 10 27.4 10 55 C10 95 60 155 60 155Z"
                      className="fill-foreground/[0.08] stroke-foreground/20"
                      strokeWidth="1.5"
                    />
                    
                    {/* Building outline inside pin */}
                    <g className="stroke-foreground/50" strokeWidth="1.2" fill="none">
                      {/* Main building */}
                      <rect x="35" y="35" width="50" height="55" rx="2" />
                      {/* Windows row 1 */}
                      <rect x="40" y="40" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="52" y="40" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="64" y="40" width="8" height="8" rx="1" className="fill-accent/20" />
                      {/* Windows row 2 */}
                      <rect x="40" y="53" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="52" y="53" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="64" y="53" width="8" height="8" rx="1" className="fill-accent/20" />
                      {/* Windows row 3 */}
                      <rect x="40" y="66" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="52" y="66" width="8" height="8" rx="1" className="fill-accent/20" />
                      <rect x="64" y="66" width="8" height="8" rx="1" className="fill-accent/20" />
                      {/* Entrance */}
                      <rect x="52" y="78" width="16" height="12" rx="1" className="fill-foreground/[0.06]" />
                      {/* Roof accent */}
                      <line x1="35" y1="35" x2="85" y2="35" className="stroke-accent/40" strokeWidth="2" />
                    </g>
                  </svg>
                  
                  {/* Subtle pulse */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-foreground/[0.06] animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
