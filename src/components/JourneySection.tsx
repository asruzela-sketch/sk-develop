import { CheckCircle2, ArrowUpRight } from "lucide-react";
import buildingImage from "@/assets/building-render.jpg";
const steps = [{
  title: "Анализ градостроительного потенциала",
  description: "Исследование участка и его возможностей"
}, {
  title: "Формирование функциональной модели",
  description: "Определение структуры многофункционального комплекса"
}, {
  title: "Разработка концепции",
  description: "Архитектурно-градостроительная концепция МФК"
}, {
  title: "Технико-экономические параметры",
  description: "Определение основных показателей проекта"
}, {
  title: "Взаимодействие с органами власти",
  description: "Прохождение административных процедур"
}];
export const JourneySection = () => {
  return <section id="journey" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30">
      <div className="container-wide">
        {/* Premium Card Container */}
        <div className="relative bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-border/50">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            
            {/* Left: Visual */}
            <div className="relative hidden lg:block order-2 lg:order-1">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-xl">
                <img src={buildingImage} alt="Архитектурная визуализация проекта" className="w-full h-full object-cover" />
                {/* Decorative overlay badges */}
                <div className="absolute top-8 left-8 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full text-sm font-medium shadow-lg">
                  <span className="text-foreground">5</span> этапов пройдено
                </div>
                <div className="absolute bottom-8 left-8 px-4 py-3 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">Статус</p>
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Готов к реализации
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-1 lg:order-2">
              <p className="label-small mb-4 text-secondary-foreground">Пройденный путь</p>
              <h2 className="heading-section mb-8">
                Этап девелоперского цикла
              </h2>
              
              <div className="space-y-4 mb-8">
                {steps.map((step, index) => <div key={step.title} className="group flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">Этап {index + 1}</p>
                      <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1" />
                  </div>)}
              </div>

              <p className="text-sm text-muted-foreground">
                Проект прошёл значительную часть девелоперского цикла, что сокращает сроки выхода на стадию реализации.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>;
};