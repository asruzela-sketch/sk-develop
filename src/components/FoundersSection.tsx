import founderIgor from "@/assets/founder-igor-clean.jpg";
import founderVladimir from "@/assets/founder-vladimir-clean.jpg";

const founders = [
  {
    name: "Игорь Чаплинский",
    role: "Сооснователь 144/Capital",
    image: founderIgor,
    experience: "22+",
    experienceLabel: "лет в недвижимости",
    bio: "Опыт работы в недвижимости и ритейле — более 22 лет.\n\nВ прошлом — исполнительный директор и руководитель отдела развития федеральной сети «Детский мир» (2002−2004). При его непосредственном участии было открыто 10 магазинов. С 2005 по 2018 года Игорь работал в консалтинге по торговой недвижимости в ведущих российских и международных компаниях: Магазин Магазинов, СBRE, Cushman & Wakefield, а также развивал собственную консалтинговую компанию CRG. В этот период при непосредственном участии было реализовано более 100 проектов торговых центров, заключено 1400 арендных сделок, проданы объекты на сумму более 450 млн. долларов.\n\nС 2019 — сооснователь инвестиционно-девелоперской компании 144/Capital.",
  },
  {
    name: "Владимир Бобрук",
    role: "Сооснователь 144/Capital",
    image: founderVladimir,
    experience: "14",
    experienceLabel: "лет в недвижимости",
    bio: "Опыт работы в недвижимости — 14 лет. Руководил отделом развития в X5 Retail Group, управляющей портфелем брендов сетевых магазинов «Перекресток», «Пятерочка», «Карусель». Под его руководством было открыто более 100 магазинов в Москве и МО. С 2018 года занимается инвестированием в проекты торговой недвижимости, управлением и развитием объектов стрит-ритейла в Москве и Московской области. С 2019 является сооснователем инвестиционной компании 144/Capital.",
  },
];

export const FoundersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            <span className="text-white/60">Руководство</span> в лицах
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500">
                {/* Top Section - Photo + Stats */}
                <div className="relative flex items-end justify-center pt-8 px-8 pb-0">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/10 rounded-full opacity-50" />
                  <div className="absolute top-8 left-8 w-12 h-12 border border-white/10 rounded-full opacity-30" />
                  <div className="absolute top-4 right-4 w-16 h-16 border border-[#ffff00]/20 rounded-full" />
                  
                  {/* Experience Badge - Top Right */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-[#ffff00] text-foreground px-4 py-3 rounded-2xl text-center">
                      <p className="text-2xl font-bold leading-none">{founder.experience}</p>
                      <p className="text-[10px] text-foreground/70 mt-1 leading-tight">
                        {founder.experienceLabel}
                      </p>
                    </div>
                  </div>

                  {/* Photo with gradient mask */}
                  <div className="relative w-64 h-72 md:w-72 md:h-80">
                    <div 
                      className="absolute inset-0 rounded-t-3xl overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                      }}
                    >
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bottom Section - Info */}
                <div className="p-8 pt-4">
                  {/* Name & Role */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-2 group-hover:text-[#ffff00] transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-white/60 text-sm uppercase tracking-wider">
                      {founder.role}
                    </p>
                  </div>

                  {/* Bio Text */}
                  <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                    {founder.bio}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#ffff00]/5 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <div className="w-2 h-2 rounded-full bg-[#ffff00]/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
};
