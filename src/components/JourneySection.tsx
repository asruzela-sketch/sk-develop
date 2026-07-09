import stageImage2 from "@/assets/stage-render-2.jpg";
import siteZoneMap from "@/assets/site-zone-map-v2.jpg";

const currentItems = [
  "В собственности земельный участок",
  "Проработана АГК",
  "Внесены изменения в функциональное назначение участка, утверждена функциональная зона О1",
];

export const JourneySection = () => {
  return (
    <section id="journey" className="pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-4 order-1">
            <div className="bg-background rounded-[1.5rem] border border-border/50 p-6 md:p-8 flex flex-col justify-center shadow-lg h-full min-h-[320px]">
              <p className="label-small mb-5 text-secondary-foreground">
                ТЕКУЩАЯ СТАДИЯ
              </p>
              <div className="space-y-3">
                {currentItems.map((item) => (
                  <div
                    key={item}
                    className="px-5 py-4 rounded-xl border border-[hsl(40_30%_82%)] text-sm md:text-base font-medium tracking-tight text-[hsl(35_40%_30%)] shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg min-h-[320px] order-2">
            <img
              src={stageImage2}
              alt="Визуализация проекта — вид с дороги"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-4 rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg bg-background min-h-[320px] order-3 lg:order-3">
            <img
              src={siteZoneMap}
              alt="Карта функциональной зоны участка под строительство"
              loading="lazy"
              className="w-full h-full object-cover object-center bg-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
