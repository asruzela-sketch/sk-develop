import planHotel from "@/assets/plan-hotel.jpg";

export const PlansSection = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Floor plan as background */}
      <div className="absolute inset-0">
        <img
          src={planHotel}
          alt="Планировка 8-14 этажа"
          className="w-full h-full object-cover opacity-[0.08]"
          style={{ objectPosition: "center 35%" }}
        />
      </div>

      <div className="relative container-wide">
        <p className="label-small text-secondary-foreground">
          ПЛАНИРОВКИ АРХИТЕКТУРНО-ГРАДОСТРОИТЕЛЬНОЙ КОНЦЕПЦИИ
        </p>
      </div>
    </section>
  );
};
