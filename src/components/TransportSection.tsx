import { Train, Plane, Navigation } from "lucide-react";

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
    {/* Premium glass background */}
    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] to-foreground/[0.08] backdrop-blur-md border border-foreground/[0.06] rounded-2xl group-hover:border-accent/20 transition-all duration-500" />
    
    <div className="relative p-5 md:p-7 flex items-center gap-5">
      {/* Premium icon container */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base md:text-lg font-medium text-foreground mb-2.5 leading-snug tracking-tight">
          {destination}
        </p>
        <div className="flex flex-wrap gap-2">
          {details.map((d, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-foreground/[0.05] border border-foreground/[0.08] text-xs tracking-wide"
            >
              <span className="font-semibold text-foreground">{d.time}</span>
              <span className="text-foreground/20">|</span>
              <span className="text-muted-foreground">{d.mode}</span>
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
      icon: <Train className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "МЦД",
      details: [
        { mode: "на такси", time: "6 мин" },
        { mode: "пешком", time: "20 мин" },
      ],
    },
    {
      icon: <Plane className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "Аэропорт Внуково",
      details: [
        { mode: "на авто/такси", time: "27 мин" },
      ],
    },
    {
      icon: <Plane className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "Аэропорт Шереметьево",
      details: [
        { mode: "на МЦД", time: "1 ч 20 мин" },
      ],
    },
    {
      icon: <Navigation className="w-5 h-5 text-accent" strokeWidth={1.5} />,
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
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">
          
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

          {/* Right: Map pin with land plot outline — reference style */}
          <div className="flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              <svg viewBox="0 0 300 400" className="w-64 h-[340px] md:w-80 md:h-[420px]" fill="none">
                {/* Subtle outer glow */}
                <defs>
                  <radialGradient id="pinGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="hsl(60 100% 50% / 0.08)" />
                    <stop offset="100%" stopColor="hsl(60 100% 50% / 0)" />
                  </radialGradient>
                  <filter id="softShadow" x="-20%" y="-10%" width="140%" height="130%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="hsl(220 15% 15% / 0.15)" />
                  </filter>
                </defs>
                
                {/* Background glow */}
                <circle cx="150" cy="160" r="140" fill="url(#pinGlow)" />

                {/* Pin shape — filled dark like reference */}
                <path
                  d="M150 385 C150 385 275 240 275 145 C275 76 219.0 20 150 20 C81 20 25 76 25 145 C25 240 150 385 150 385Z"
                  className="fill-foreground"
                  filter="url(#softShadow)"
                />

                {/* Inner pin highlight edge */}
                <path
                  d="M150 385 C150 385 275 240 275 145 C275 76 219.0 20 150 20 C81 20 25 76 25 145 C25 240 150 385 150 385Z"
                  fill="none"
                  stroke="hsl(0 0% 100% / 0.08)"
                  strokeWidth="1"
                />

                {/* Land plot outline inside pin — irregular polygon resembling a real plot */}
                <g transform="translate(150, 140)" className="stroke-accent" strokeWidth="2" fill="none">
                  {/* Irregular land plot shape */}
                  <path
                    d="M-45 -50 L15 -55 L50 -35 L55 10 L40 45 L5 55 L-35 40 L-50 5 Z"
                    className="fill-accent/15"
                    strokeLinejoin="round"
                  />
                  {/* Inner building footprint */}
                  <rect x="-20" y="-22" width="40" height="44" rx="2" className="fill-accent/10 stroke-accent/60" strokeWidth="1.5" strokeDasharray="3 2" />
                  
                  {/* Small marker dot at center */}
                  <circle cx="0" cy="0" r="4" className="fill-accent" />
                  <circle cx="0" cy="0" r="8" className="fill-accent/20 stroke-accent/40" strokeWidth="1" />
                </g>

                {/* Label text */}
                <text x="150" y="245" textAnchor="middle" className="fill-background/60" fontSize="11" fontWeight="500" letterSpacing="0.15em">
                  УЧАСТОК 6 000 М²
                </text>

                {/* Small crosshair lines */}
                <g className="stroke-accent/30" strokeWidth="0.8">
                  <line x1="130" y1="140" x2="110" y2="140" />
                  <line x1="170" y1="140" x2="190" y2="140" />
                  <line x1="150" y1="120" x2="150" y2="100" />
                  <line x1="150" y1="160" x2="150" y2="180" />
                </g>
              </svg>

              {/* Pulse under pin */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-foreground/[0.08] animate-pulse blur-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
