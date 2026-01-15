import heroImage from "@/assets/hero-render.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Сколковский — архитектурная визуализация многофункционального комплекса"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_15%_8%_/_0.5)] via-[hsl(220_15%_8%_/_0.2)] to-[hsl(220_15%_8%_/_0.85)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center container-wide pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-6 opacity-0 animate-fade-in tracking-tight leading-[1.1]" style={{ animationDelay: "0.2s" }}>
            Сколковский — зрелый девелоперский актив
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Не просто земельный участок, а сформированный проект с разработанной архитектурно-градостроительной концепцией
          </p>
        </div>
      </div>

      {/* Bottom Glass Cards */}
      <div className="relative z-10 container-wide pb-10 md:pb-16 mt-auto">
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {/* Card 1 - Project Status */}
          <div className="hero-glass-card p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Статус проекта</p>
            <p className="text-white text-base md:text-lg font-light leading-snug">
              Архитектурно-градостроительная концепция разработана
            </p>
          </div>

          {/* Card 2 - Value */}
          <div className="hero-glass-card p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Ценность</p>
            <p className="text-white text-base md:text-lg font-light leading-snug">
              Пройден значительный этап административного цикла
            </p>
          </div>

          {/* Card 3 - Developer */}
          <div className="hero-glass-card p-5 md:p-6 rounded-xl md:rounded-2xl flex flex-col">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Девелопер</p>
            <p className="text-white text-base md:text-lg font-light leading-snug">
              <span className="text-accent">144</span>/Девелопмент
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
