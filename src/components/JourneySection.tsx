import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Анализ градостроительного потенциала",
    description: "Исследование участка и его возможностей",
  },
  {
    title: "Формирование функциональной модели",
    description: "Определение структуры многофункционального комплекса",
  },
  {
    title: "Разработка концепции",
    description: "Архитектурно-градостроительная концепция МФК",
  },
  {
    title: "Технико-экономические параметры",
    description: "Определение основных показателей проекта",
  },
  {
    title: "Взаимодействие с органами власти",
    description: "Прохождение административных процедур",
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="section-dark py-24 md:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="label-small text-accent mb-4">Пройденный путь</p>
            <h2 className="heading-section text-[hsl(var(--text-light))] mb-6">
              Этап девелоперского цикла
            </h2>
            <div className="accent-line mb-8" />
            <p className="body-large text-[hsl(var(--text-light)_/_0.8)]">
              Проект прошёл значительную часть девелоперского цикла. Это существенно сокращает сроки выхода на стадию реализации.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-panel p-6 md:p-8 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="label-small text-[hsl(var(--text-light)_/_0.5)] mb-2">
                    Этап {index + 1}
                  </p>
                  <h3 className="text-lg font-medium text-[hsl(var(--text-light))] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--text-light)_/_0.7)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
