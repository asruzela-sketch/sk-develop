import { Phone, Send, Mail, ArrowUpRight } from "lucide-react";
import contactVisual from "@/assets/contact-visual.jpg";
export const ContactsSection = () => {
  return <section id="contacts" className="py-16 md:py-24 bg-muted/30">
      <div className="container-wide">
        {/* Premium Card Container */}
        <div className="relative bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-border/50">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            
            {/* Left: Contact Info Card */}
            <div className="flex flex-col justify-center p-6 sm:p-10 md:p-16 lg:p-20">
              <p className="label-small mb-4 text-secondary-foreground">Контакты</p>
              <h2 className="heading-section mb-8">
                Получить больше информации
              </h2>
              
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <a href="tel:+79269852905" className="group flex items-center gap-4 p-4 rounded-2xl border border-[hsl(40_30%_82%)] shadow-sm hover:shadow-md transition-all duration-300" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Phone className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[hsl(35_30%_50%)] mb-1">Телефон</p>
                    <p className="text-lg font-medium text-[hsl(35_40%_30%)] group-hover:text-accent transition-colors">+7 (926) 985-29-05</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[hsl(35_30%_50%)] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>

                {/* Telegram */}
                <a href="https://t.me/Igor_Chaplinsky" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl border border-[hsl(40_30%_82%)] shadow-sm hover:shadow-md transition-all duration-300" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Send className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[hsl(35_30%_50%)] mb-1">Telegram</p>
                    <p className="text-lg font-medium text-[hsl(35_40%_30%)] group-hover:text-accent transition-colors">Написать в Telegram</p>
                    <p className="text-sm text-[hsl(35_30%_50%)]">Игорь Чаплинский</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[hsl(35_30%_50%)] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>

                {/* Email */}
                <a href="mailto:Chaplinsky@mail.ru" className="group flex items-center gap-4 p-4 rounded-2xl border border-[hsl(40_30%_82%)] shadow-sm hover:shadow-md transition-all duration-300" style={{ background: 'linear-gradient(135deg, hsl(42 35% 92%), hsl(40 40% 87%), hsl(38 35% 90%))' }}>
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Mail className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[hsl(35_30%_50%)] mb-1">Почта</p>
                    <p className="text-lg font-medium text-[hsl(35_40%_30%)] group-hover:text-accent transition-colors">Chaplinsky@mail.ru</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[hsl(35_30%_50%)] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Свяжитесь с нами для получения подробной информации о проекте
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-xl">
                <img src={contactVisual} alt="Архитектурная визуализация проекта" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>;
};