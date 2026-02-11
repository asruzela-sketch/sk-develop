import planGenplan from "@/assets/plan-genplan.jpg";
import planFloor1 from "@/assets/plan-floor1.jpg";
import planFloor3 from "@/assets/plan-floor3.jpg";
import planHotel from "@/assets/plan-hotel.jpg";

const plans = [
  { src: planGenplan, label: "Генеральный план" },
  { src: planFloor1, label: "1 этаж — ритейл" },
  { src: planFloor3, label: "3 этаж — фудкорт" },
  { src: planHotel, label: "8–14 этаж — гостиница" },
];

export const PlansSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container-wide">
        <p className="label-small mb-10 text-secondary-foreground">
          ПЛАНИРОВКИ АРХИТЕКТУРНО-ГРАДОСТРОИТЕЛЬНОЙ КОНЦЕПЦИИ
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="group rounded-[1.5rem] overflow-hidden border border-border/50 bg-background shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={plan.src}
                  alt={plan.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <p className="text-xs md:text-sm text-muted-foreground tracking-tight">
                  {plan.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
