import logo144 from "@/assets/logo-144capital.png";

export const Footer = () => {
  return (
    <footer className="section-dark py-8 border-t border-[hsl(var(--glass-border))]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--text-light)_/_0.5)]">
            © 2025 <img src={logo144} alt="144/Девелопмент" className="h-8 w-auto inline" />
          </div>
          <p className="text-sm text-[hsl(var(--text-light)_/_0.5)]">
            Проект команды 144/Capital
          </p>
        </div>
      </div>
    </footer>
  );
};
