import { Menu, X, Send } from "lucide-react";
import { useState } from "react";
import logo144 from "@/assets/logo-144capital.png";

const navItems = [{
  label: "Проект",
  href: "#project"
}, {
  label: "Концепция",
  href: "#concept"
}, {
  label: "Девелопер",
  href: "#developer"
}];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-panel">
        <div className="container-wide py-2 flex items-center justify-between">
          <a href="#">
            <img src={logo144} alt="144/Девелопмент" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="text-[hsl(var(--text-light)_/_0.8)] hover:text-[hsl(var(--text-light))] text-sm font-light transition-colors">
                {item.label}
              </a>)}
            
            {/* Telegram Button */}
            <a 
              href="https://t.me/info_144capital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--text-light))] text-[hsl(var(--dark-bg))] rounded-full text-sm font-medium hover:bg-[hsl(var(--text-light)_/_0.9)] transition-colors"
            >
              <Send size={16} />
              Написать
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[hsl(var(--text-light))]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden border-t border-[hsl(var(--glass-border))]">
            <div className="container-wide py-4 flex flex-col gap-4">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-[hsl(var(--text-light)_/_0.8)] hover:text-[hsl(var(--text-light))] text-sm font-light transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              
              {/* Mobile Telegram Button */}
              <a 
                href="https://t.me/info_144capital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--text-light))] text-[hsl(var(--dark-bg))] rounded-full text-sm font-medium w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Send size={16} />
                Написать в Telegram
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};