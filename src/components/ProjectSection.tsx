import locationMap from "@/assets/location-map.jpg";

export const ProjectSection = () => {
  return (
    <section
      id="project"
      className="relative min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${locationMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-wide relative z-10 py-16 md:py-24">
        <div className="max-w-lg bg-[hsl(220_15%_10%_/_0.75)] backdrop-blur-md p-8 md:p-10 rounded-sm">
          <p className="label-small text-accent mb-4">О ПРОЕКТЕ</p>

          <div className="accent-line mb-8" />
          <div className="space-y-4">
            <p className="body-large text-white">
              <span className="font-medium">Площадь участка:</span>{" "}
              <span className="text-white/80">6 000 м²</span>
            </p>
            <p className="body-large text-white">
              <span className="font-medium">Адрес:</span>{" "}
              <span className="text-white/80">
                Московская область, Одинцовский район, г. Одинцово, ул. Чистяковой
              </span>
            </p>
            <p className="body-large text-white">
              <span className="font-medium">Форма собственности:</span>{" "}
              <span className="text-white/80">у компании ООО «СНК»</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};