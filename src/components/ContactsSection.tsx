import { Phone, Send } from "lucide-react";
export const ContactsSection = () => {
  return <section id="contacts" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-small mb-4 text-secondary-foreground">Контакты</p>
          <h2 className="heading-section mb-4">Получить больше информации 
об участке и проекте</h2>
          

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <a href="tel:+74951234567" className="text-lg hover:text-accent transition-colors">+7 915 038 9088</a>
            </div>

            <div className="flex items-center justify-center gap-4">
              
              
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-accent" />
              </div>
              <a href="https://t.me/developer144" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">@info_144capital</a>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            Свяжитесь с нами для получения подробной информации о проекте
          </p>
        </div>
      </div>
    </section>;
};