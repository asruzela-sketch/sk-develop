import { CheckCircle2 } from "lucide-react";

// Sber logo as inline SVG component
const SberLogo = () => (
  <svg viewBox="0 0 200 48" className="h-8 md:h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sber icon - simplified green circle with checkmark */}
    <circle cx="24" cy="24" r="22" fill="url(#sberGradient)" />
    <path d="M14 24L21 31L34 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sber text */}
    <text x="56" y="32" fill="#21A038" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">
      Сбер
    </text>
    <defs>
      <linearGradient id="sberGradient" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#21A038" />
        <stop offset="1" stopColor="#107F28" />
      </linearGradient>
    </defs>
  </svg>
);

export const SberFinancingSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-wide">
        <div className="relative bg-gradient-to-br from-[#21A038]/5 via-background to-[#21A038]/10 rounded-[2rem] border border-[#21A038]/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#21A038]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#21A038]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 lg:p-16">
            {/* Left: Content */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#21A038]/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-[#21A038]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="label-small mb-2 text-[#21A038]">Финансирование</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground">
                  Возможность финансирования СБЕРом
                </h3>
              </div>
            </div>
            
            {/* Right: Sber Logo */}
            <div className="flex-shrink-0">
              <div className="px-6 py-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#21A038]/10">
                <SberLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
