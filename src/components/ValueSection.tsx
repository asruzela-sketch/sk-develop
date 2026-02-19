import { useState } from "react";
import { Hotel, ShoppingBag, Briefcase, CarFront } from "lucide-react";

const blocks = [
  { icon: Hotel, label: "Гостиница", key: "hotel" },
  { icon: ShoppingBag, label: "Торговый центр", key: "retail" },
  { icon: Briefcase, label: "Офисный центр", key: "office" },
  { icon: CarFront, label: "Подземный паркинг", key: "parking" },
];

export const ValueSection = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <section className="section-dark py-16 sm:py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-small text-accent mb-4">Ценность актива</p>
          <h2 className="heading-section text-[hsl(var(--text-light))] mb-8">
            Девелоперский проект рядом со Сколково
          </h2>
          <div className="accent-line mx-auto mb-10" />
          <p className="body-large text-[hsl(var(--text-light)_/_0.8)] mb-10">
            Многофункциональный комплекс в архитектурно-градостроительной концепции включает в себя:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blocks.map(({ icon: Icon, label, key }) => (
              <button
                key={key}
                onClick={() => setActiveKey(activeKey === key ? null : key)}
                className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-6 flex flex-col items-center gap-3 transition-colors duration-300 cursor-pointer ${
                  activeKey === key ? "bg-white/15 border-accent/40" : "hover:bg-white/10"
                }`}
              >
                <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[hsl(var(--text-light))]">{label}</span>
              </button>
            ))}
          </div>
          {activeKey === "office" && (
            <p className="text-[hsl(var(--text-light)_/_0.6)] mt-8 text-xs sm:text-sm leading-relaxed animate-fade-in">
              Возможно формирование офисных помещений на 4 и 5 этажах здания в объеме до 3 500 м² на стадии проектирования и получения разрешения на строительство.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
