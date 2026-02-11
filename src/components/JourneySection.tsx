import { CheckCircle2, Clock } from "lucide-react";
import buildingImage from "@/assets/building-render.jpg";

const currentStage = {
  title: "Текущая стадия",
  items: [
    "В собственности земельный участок",
    "Проработана АГК",
  ],
};

const nextStep = {
  title: "Получение ГПЗУ",
  date: "апрель 2026 года",
};

export const JourneySection = () => {
  return (
    <section id="journey" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30">
      <div className="container-wide">
        <div className="relative bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-border/50">
          <div className="grid lg:grid-cols-2 min-h-[500px]">

            {/* Left: Visual — full image */}
            <div className="relative hidden lg:block">
              <img src={buildingImage} alt="Архитектурная визуализация проекта" className="absolute inset-0 w-full h-full object-cover rounded-l-[2rem]" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <h2 className="heading-section mb-10">
                Текущая стадия
              </h2>

              <div className="space-y-4">
                {/* Current stage items */}
                {currentStage.items.map((item) => (
                  <div key={item} className="group p-5 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/30 border border-border/40 hover:border-accent/20 backdrop-blur-sm transition-all duration-500 shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-foreground flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-5 h-5 text-background" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm md:text-base font-medium tracking-tight">{item}</p>
                    </div>
                  </div>
                ))}

                {/* Next step — accent border */}
                <div className="group p-5 rounded-2xl bg-gradient-to-br from-accent/[0.06] to-accent/[0.02] border border-accent/20 hover:border-accent/40 backdrop-blur-sm transition-all duration-500 shadow-sm hover:shadow-md hover:shadow-accent/5">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg">
                      <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-medium tracking-tight">{nextStep.title}</p>
                      <p className="text-xs text-accent mt-1">{nextStep.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};