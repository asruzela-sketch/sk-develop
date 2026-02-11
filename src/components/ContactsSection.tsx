import { Phone, Send, ArrowUpRight } from "lucide-react";
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
                <a href="tel:+79154444444" className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Phone className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">+7 915 444 44 44</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>

                {/* Telegram */}
                <a href="https://t.me/info_144capital" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Send className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Telegram</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">@info_144capital</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Свяжитесь с нами для получения подробной информации о проекте
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden shadow-xl">
                <img src={contactVisual} alt="Архитектурная визуализация проекта" className="w-full h-full object-cover" />
                {/* Decorative overlay badges */}
                <div className="absolute bottom-8 right-8 px-4 py-3 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg">
                  <p className="text-xs text-muted-foreground mb-1">Проект команды</p>
                  <p className="text-sm font-medium">144/Capital</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>;
};