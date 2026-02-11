import { Menu, X, Send, Download, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import logo144 from "@/assets/logo-144capital.png";

const navItems = [{
  label: "Локация",
  href: "#project"
}, {
  label: "Концепция",
  href: "#concept"
}];

const usePdfDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      // Hide header during capture
      const header = document.querySelector("header");
      if (header) (header as HTMLElement).style.display = "none";

      // Get all sections as individual slides
      const main = document.querySelector("main");
      if (!main) return;

      const sections = main.querySelectorAll(":scope > section, :scope > div > section");
      // Fallback: if no sections found, use direct children
      const elements = sections.length > 0 ? Array.from(sections) : Array.from(main.children);

      if (elements.length === 0) return;

      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));

      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const pageW = 297;
      const pageH = 210;

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        
        // Scroll element into view for proper rendering
        el.scrollIntoView({ behavior: "instant", block: "start" });
        await new Promise((r) => setTimeout(r, 200));

        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          windowWidth: 1440,
        });

        if (i > 0) pdf.addPage();

        // Fit the section into the slide, centered
        const ratio = Math.min(pageW / canvas.width, pageH / canvas.height);
        const drawW = canvas.width * ratio;
        const drawH = canvas.height * ratio;
        const offsetX = (pageW - drawW) / 2;
        const offsetY = (pageH - drawH) / 2;

        // White background
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageW, pageH, "F");

        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(imgData, "JPEG", offsetX, offsetY, drawW, drawH);
      }

      if (header) (header as HTMLElement).style.display = "";
      window.scrollTo(0, 0);

      pdf.save("144-Development-Presentation.pdf");
    } catch (err) {
      console.error("PDF generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { downloadPdf, isGenerating };
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { downloadPdf, isGenerating } = usePdfDownload();
  
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
            
            {/* PDF Download Button */}
            <button
              onClick={downloadPdf}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 border border-[hsl(var(--text-light)_/_0.3)] text-[hsl(var(--text-light)_/_0.8)] hover:text-[hsl(var(--text-light))] hover:border-[hsl(var(--text-light)_/_0.6)] rounded-full text-sm font-light transition-all disabled:opacity-50"
            >
              {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              {isGenerating ? "Генерация..." : "Скачать PDF"}
            </button>

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
              
              {/* Mobile PDF Download */}
              <button
                onClick={() => { setIsMenuOpen(false); downloadPdf(); }}
                disabled={isGenerating}
                className="flex items-center gap-2 px-4 py-2 border border-[hsl(var(--text-light)_/_0.3)] text-[hsl(var(--text-light)_/_0.8)] rounded-full text-sm font-light w-fit disabled:opacity-50"
              >
                {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                {isGenerating ? "Генерация..." : "Скачать PDF"}
              </button>

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
