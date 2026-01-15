import heroVisual from "@/assets/hero-visual.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Full Background Visual */}
      <img
        src={heroVisual}
        alt="Сколковский — зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией"
        className="w-full h-full object-cover absolute inset-0"
      />
    </section>
  );
};
