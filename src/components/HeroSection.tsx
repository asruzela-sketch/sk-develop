import heroImage from "@/assets/hero-render.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Сколковский — архитектурная визуализация многофункционального комплекса"
          className="w-full h-full object-cover"
        />
        <div className="image-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pb-16 md:pb-24 lg:pb-32 pt-32">
        <div className="max-w-3xl">
          <div className="accent-line mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
          
          <h1 className="heading-display text-[hsl(var(--text-light))] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Сколковский
          </h1>
          
          <p className="body-large text-[hsl(var(--text-light)_/_0.9)] mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Зрелый девелоперский актив с разработанной архитектурно-градостроительной концепцией
          </p>
          
          <p className="body-base text-[hsl(var(--text-light)_/_0.7)] max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Не просто земельный участок, а сформированный проект с уже пройденным этапом административного цикла.
          </p>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="stat-block">
            <p className="label-small text-accent mb-2">Общая площадь</p>
            <p className="text-2xl md:text-3xl font-light text-[hsl(var(--text-light))]">39 482,5 м²</p>
          </div>
          <div className="stat-block">
            <p className="label-small text-accent mb-2">Гостиница</p>
            <p className="text-2xl md:text-3xl font-light text-[hsl(var(--text-light))]">23 232,5 м²</p>
          </div>
          <div className="stat-block">
            <p className="label-small text-accent mb-2">Торговый центр</p>
            <p className="text-2xl md:text-3xl font-light text-[hsl(var(--text-light))]">12 411,0 м²</p>
          </div>
          <div className="stat-block">
            <p className="label-small text-accent mb-2">Паркинг</p>
            <p className="text-2xl md:text-3xl font-light text-[hsl(var(--text-light))]">405 м/м</p>
          </div>
        </div>
      </div>
    </section>
  );
};
