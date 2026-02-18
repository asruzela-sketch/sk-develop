import { Hotel, ShoppingBag, Briefcase, CarFront } from "lucide-react";

const blocks = [
  { icon: Hotel, label: "Гостиница" },
  { icon: ShoppingBag, label: "Торговый центр" },
  { icon: Briefcase, label: "Офисный центр" },
  { icon: CarFront, label: "Подземный паркинг" },
];

export const ValueSection = () => {
  return (
    <section className="section-dark py-16 sm:py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-small text-accent mb-4">Ценность актива</p>
          <h2 className="heading-section text-[hsl(var(--text-light))] mb-8">
            Сколковский — девелоперский проект
          </h2>
          <div className="accent-line mx-auto mb-10" />
          <p className="body-large text-[hsl(var(--text-light)_/_0.8)] mb-10">
            Многофункциональный комплекс в архитектурно-градостроительной концепции включает в себя:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blocks.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-6 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[hsl(var(--text-light))]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
