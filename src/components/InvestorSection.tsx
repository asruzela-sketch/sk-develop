import { Clock, Shield, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Сокращение сроков",
    description: "Значительная часть девелоперского цикла уже пройдена, что позволяет быстрее выйти на стадию реализации",
  },
  {
    icon: Shield,
    title: "Снижение рисков",
    description: "Концептуальные и градостроительные риски минимизированы за счёт проработанной документации",
  },
  {
    icon: FileCheck,
    title: "Проектная основа",
    description: "Готовая архитектурно-градостроительная концепция как фундамент для дальнейшего развития",
  },
];

export const InvestorSection = () => {
  return (
    <section id="investor" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="label-small text-accent mb-4">Ценность для инвестора</p>
          <h2 className="heading-section mb-4">
            Что получает инвестор
          </h2>
          <div className="accent-line mx-auto mb-8" />
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Приобретение данного актива позволяет опереться на уже сформированную проектную основу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card p-8 md:p-10 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-subsection mb-4">{benefit.title}</h3>
              <p className="body-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
