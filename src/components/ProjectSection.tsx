import locationMap from "@/assets/location-map.jpg";
export const ProjectSection = () => {
  return <section id="project" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="label-small text-accent mb-4">О ПРОЕКТЕ</p>
            
            <div className="accent-line mb-8" />
            <div className="space-y-4">
              <p className="body-large text-foreground">
                <span className="font-medium">Площадь участка:</span>{" "}
                <span className="text-muted-foreground">6 000 м²</span>
              </p>
              <p className="body-large text-foreground">
                <span className="font-medium">Адрес:</span>{" "}
                <span className="text-muted-foreground">Московская область, Одинцовский район, г. Одинцово, ул. Чистяковой</span>
              </p>
              <p className="body-large text-foreground">
                <span className="font-medium">Форма собственности:</span>{" "}
                <span className="text-muted-foreground"> юридическое лицо</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={locationMap} alt="Расположение проекта на карте Москвы" className="w-full h-auto rounded-sm shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-accent opacity-50" />
          </div>
        </div>
      </div>
    </section>;
};