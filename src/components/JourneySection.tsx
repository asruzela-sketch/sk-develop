import stageImage from "@/assets/stage-render.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 auto-rows-auto">

          {/* Top-left: Title + items */}
          <div className="lg:col-span-5 bg-background rounded-[1.5rem] border border-border/50 p-8 md:p-10 flex flex-col justify-center shadow-lg">
            <p className="label-small mb-8 text-secondary-foreground">
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

          {/* Right: Full image */}
          <div className="lg:col-span-7 rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg min-h-[400px] lg:min-h-[500px]">
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
