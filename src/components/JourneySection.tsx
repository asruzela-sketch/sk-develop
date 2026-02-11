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

            {/* Left: Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-xl">
                <img src={buildingImage} alt="Архитектурная визуализация проекта" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 px-4 py-3 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">Статус</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    В процессе подготовки
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="label-small mb-4 text-secondary-foreground">Пройденный путь</p>
              <h2 className="heading-section mb-10">
                Стадия проекта
              </h2>

              <div className="space-y-4 mb-8">
                {/* Current stage */}
                <div className="p-5 rounded-2xl bg-muted/50 border border-border/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-medium">{currentStage.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-[52px]">
                    {currentStage.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next step */}
                <div className="p-5 rounded-2xl bg-muted/50 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{nextStep.title}</h3>
                      <p className="text-xs text-accent mt-0.5">{nextStep.date}</p>
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