import locationMap from "@/assets/location-map.jpg";

export const ProjectSection = () => {
  return (
    <section id="project" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="label-small text-accent mb-4">О проекте</p>
            <h2 className="heading-section mb-6">
              Многофункциональный комплекс
            </h2>
            <div className="accent-line mb-8" />
            <p className="body-large text-muted-foreground mb-6">
              Проект представляет собой многофункциональный комплекс, разработанный с учётом градостроительного контекста, функционального зонирования и потенциала локации.
            </p>
            <p className="body-base text-muted-foreground">
              Концепция проекта сформирована как результат комплексного девелоперского подхода и отражает текущую стадию проработки объекта.
            </p>
          </div>

          <div className="relative">
            <img
              src={locationMap}
              alt="Расположение проекта на карте Москвы"
              className="w-full h-auto rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
