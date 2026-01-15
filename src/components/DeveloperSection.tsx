export const DeveloperSection = () => {
  return (
    <section id="developer" className="section-dark py-24 md:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-small text-accent mb-4">Девелопер</p>
            <h2 className="heading-section text-[hsl(var(--text-light))] mb-2">
              <span className="text-accent">144</span>/Девелопмент
            </h2>
            <div className="accent-line mb-8" />
            <p className="body-large text-[hsl(var(--text-light)_/_0.8)] mb-6">
              Компания с системным подходом к девелопменту, ориентированная на создание качественных проектов с долгосрочной ценностью.
            </p>
            <p className="body-base text-[hsl(var(--text-light)_/_0.7)]">
              Наш подход основан на глубоком анализе рынка, профессиональном проектировании и эффективном взаимодействии со всеми участниками процесса.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 text-center">
              <p className="text-3xl font-light text-[hsl(var(--text-light))] mb-2">10+</p>
              <p className="label-small text-[hsl(var(--text-light)_/_0.6)]">Лет опыта</p>
            </div>
            <div className="glass-panel p-6 text-center">
              <p className="text-3xl font-light text-[hsl(var(--text-light))] mb-2">5</p>
              <p className="label-small text-[hsl(var(--text-light)_/_0.6)]">Реализованных проектов</p>
            </div>
            <div className="glass-panel p-6 text-center col-span-2">
              <p className="text-2xl font-light text-[hsl(var(--text-light))] mb-2">Комплексный девелопмент</p>
              <p className="label-small text-[hsl(var(--text-light)_/_0.6)]">Ключевая компетенция</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
