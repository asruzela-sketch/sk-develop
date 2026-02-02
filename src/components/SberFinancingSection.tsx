import { CheckCircle2 } from "lucide-react";
import sberLogo from "@/assets/sber-logo.png";

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
              <div className="p-3 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#21A038]/10">
                <img src={sberLogo} alt="Сбер" className="h-16 md:h-20 w-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
