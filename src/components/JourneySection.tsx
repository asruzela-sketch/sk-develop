import { CheckCircle2, Clock } from "lucide-react";
import stageImage from "@/assets/stage-render.jpg";

const currentStage = {
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
        <div className="relative rounded-[2rem] shadow-2xl overflow-hidden border border-border/50 min-h-[500px]">
          
          {/* Background image */}
          <img
            src={stageImage}
            alt="Архитектурная визуализация проекта Сколковский"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "65% center" }}
          />

          {/* Content — left aligned */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 max-w-lg min-h-[500px]">
            <h2 className="heading-section mb-8 text-white drop-shadow-lg">
              Текущая стадия
            </h2>

            <div className="space-y-3">
              {currentStage.items.map((item) => (
                <div key={item} className="group p-4 md:p-5 rounded-2xl bg-background/70 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-foreground flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm md:text-base font-medium tracking-tight">{item}</p>
                  </div>
                </div>
              ))}

              <div className="group p-4 md:p-5 rounded-2xl bg-background/70 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-foreground flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium tracking-tight">{nextStep.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{nextStep.date}</p>
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
