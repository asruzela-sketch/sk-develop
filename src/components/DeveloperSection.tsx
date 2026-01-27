import { Building2, Award, Briefcase, ArrowUpRight } from "lucide-react";
import hotelImage from "@/assets/hotel-render.jpg";

const stats = [
  {
    icon: Building2,
    value: "10+",
    label: "Лет опыта",
  },
  {
    icon: Award,
    value: "5",
    label: "Реализованных проектов",
  },
  {
    icon: Briefcase,
    value: "Комплексный",
    label: "Девелопмент",
  },
];

export const DeveloperSection = () => {
  return (
    <section id="developer" className="py-16 md:py-24 bg-foreground">
      <div className="container-wide">
        {/* Premium Card Container */}
        <div className="relative bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-border/50">
          <div className="grid lg:grid-cols-2 min-h-[550px]">
            
            {/* Left: Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="label-small mb-4 text-accent">Девелопер</p>
              <h2 className="heading-section mb-2">
                <span className="text-accent">144</span>/Девелопмент
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8" />
              
              <p className="body-base text-muted-foreground mb-8">
                Компания с системным подходом к девелопменту, ориентированная на создание качественных проектов с долгосрочной ценностью.
              </p>

              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-medium group-hover:text-accent transition-colors">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-xl">
                <img
                  src={hotelImage}
                  alt="Архитектурная визуализация проекта"
                  className="w-full h-full object-cover"
                />
                {/* Decorative overlay badges */}
                <div className="absolute top-8 right-8 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full text-sm font-medium shadow-lg">
                  <span className="text-accent">144</span> Capital
                </div>
                <div className="absolute bottom-8 right-8 px-4 py-3 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">Фокус</p>
                  <p className="text-sm font-medium">Качественный девелопмент</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
