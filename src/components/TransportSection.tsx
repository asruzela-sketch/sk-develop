import { Train, Plane, Navigation } from "lucide-react";
import transportMap from "@/assets/transport-map.png";

interface TransportCardProps {
  icon: React.ReactNode;
  destination: string;
  details: { mode: string; time: string }[];
  delay?: string;
}

const TransportCard = ({ icon, destination, details, delay = "0s" }: TransportCardProps) => (
  <div
    className="group relative opacity-0 animate-fade-in"
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <div className="relative p-4 md:p-5 flex items-center gap-4 rounded-2xl bg-foreground/[0.85] backdrop-blur-xl border border-white/[0.06] hover:border-accent/20 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.06] flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm md:text-base font-medium text-white/90 mb-1.5 leading-snug tracking-tight">
          {destination}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {details.map((d, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-wide"
            >
              <span className="font-semibold text-accent">{d.time}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/50">{d.mode}</span>
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
    <section className="relative overflow-hidden">
      {/* Full-width map background */}
      <div className="absolute inset-0">
        <img
          src={transportMap}
          alt="Карта транспортной доступности"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container-wide py-16 md:py-24">
        <div className="max-w-md">
          <p
            className="label-small mb-6 text-accent opacity-0 animate-fade-in"
            style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
          >
            Транспортная доступность
          </p>

          <div className="space-y-2">
            {transportData.map((item, i) => (
              <TransportCard
                key={item.destination}
                {...item}
                delay={`${0.1 + i * 0.08}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
