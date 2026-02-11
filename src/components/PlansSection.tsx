import planHotel from "@/assets/plan-hotel.jpg";

export const PlansSection = () => {
  return (
    <section className="relative">
      <div className="container-wide">
        <div className="relative rounded-[1.5rem] overflow-hidden border border-border/50 shadow-lg">
          <img
            src={planHotel}
            alt="Планировка 8-14 этажа — гостиница"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="label-small text-foreground/70">
              ПЛАНИРОВКИ АРХИТЕКТУРНО-ГРАДОСТРОИТЕЛЬНОЙ КОНЦЕПЦИИ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
