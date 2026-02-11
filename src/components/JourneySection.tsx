import stageImage from "@/assets/stage-render.jpg";
import stageImage2 from "@/assets/stage-render-2.jpg";

const currentItems = [
  "В собственности земельный участок",
  "Проработана АГК",
];

const nextStep = {
  title: "Получение ГПЗУ",
  date: "апрель 2026 года",
};

export const JourneySection = () => {
  return (
    <section id="journey" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

          {/* Left column: small photo on top + text below */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1">
            {/* Small photo cell */}
            <div className="rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg aspect-[4/3]">
              <img
                src={stageImage2}
                alt="Визуализация проекта — вид с дороги"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text items */}
            <div className="bg-background rounded-[1.5rem] border border-border/50 p-6 md:p-8 flex flex-col justify-end shadow-lg flex-1">
              <p className="label-small mb-5 text-secondary-foreground">
                ТЕКУЩАЯ СТАДИЯ
              </p>
              <div className="space-y-3">
                {currentItems.map((item) => (
                  <div
                    key={item}
                    className="px-5 py-4 rounded-xl bg-muted/50 border border-border/30 text-sm md:text-base font-medium tracking-tight hover:border-border/60 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
                <div className="px-5 py-4 rounded-xl bg-muted/50 border border-border/30 hover:border-border/60 transition-all duration-300">
                  <p className="text-sm md:text-base font-medium tracking-tight">{nextStep.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{nextStep.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Main image */}
          <div className="lg:col-span-8 rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg min-h-[250px] sm:min-h-[400px] order-1 lg:order-2">
            <img
              src={stageImage}
              alt="Архитектурная визуализация проекта Сколковский"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
