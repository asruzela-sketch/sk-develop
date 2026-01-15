import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Проект", href: "#project" },
  { label: "Концепция", href: "#concept" },
  { label: "Пройденный путь", href: "#journey" },
  { label: "Инвестору", href: "#investor" },
  { label: "Девелопер", href: "#developer" },
  { label: "Контакты", href: "#contacts" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-panel">
        <div className="container-wide py-4 flex items-center justify-between">
          <a href="#" className="text-[hsl(var(--text-light))] text-lg font-medium tracking-wide">
            <span className="text-accent">144</span>/Девелопмент
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[hsl(var(--text-light)_/_0.8)] hover:text-[hsl(var(--text-light))] text-sm font-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[hsl(var(--text-light))]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-[hsl(var(--glass-border))]">
            <div className="container-wide py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[hsl(var(--text-light)_/_0.8)] hover:text-[hsl(var(--text-light))] text-sm font-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
