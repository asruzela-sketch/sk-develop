import { Train, Plane, Navigation, Car } from "lucide-react";
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
    <div className="relative p-5 md:p-6 rounded-2xl bg-foreground/[0.85] backdrop-blur-xl border border-white/[0.06] hover:border-accent/20 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.2)] h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.06] flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-500">
          {icon}
        </div>
        <p className="text-sm md:text-base font-medium text-white/90 leading-snug tracking-tight">
          {destination}
        </p>
      </div>
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
    {
      icon: <Car className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "Можайское шоссе",
      details: [{ mode: "выезд", time: "1 мин" }],
    },
    {
      icon: <Car className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "Минское шоссе",
      details: [{ mode: "выезд", time: "6 мин" }],
    },
    {
      icon: <Car className="w-5 h-5 text-accent" strokeWidth={1.5} />,
      destination: "МКАД",
      details: [{ mode: "выезд", time: "12 мин" }],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={transportMap}
          alt="Карта транспортной доступности"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container-wide py-16 md:py-24">
        <p
          className="label-small mb-8 text-accent opacity-0 animate-fade-in"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          Транспортная доступность
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {transportData.map((item, i) => (
            <TransportCard
              key={item.destination}
              {...item}
              delay={`${0.1 + i * 0.08}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
