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

      const main = document.querySelector("main");
      if (!main) return;

      // Hide header during capture
      const header = document.querySelector("header");
      if (header) (header as HTMLElement).style.display = "none";

      // Scroll to top
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 500));

      const canvas = await html2canvas(main as HTMLElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        windowWidth: 1440,
      });

      if (header) (header as HTMLElement).style.display = "";

      const imgWidth = 297; // A4 landscape width mm
      const imgHeight = 210; // A4 landscape height mm
      const canvasRatio = canvas.width / canvas.height;
      const pageRatio = imgWidth / imgHeight;

      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

      // Split canvas into pages
      const pageCanvasHeight = canvas.width / pageRatio;
      const totalPages = Math.ceil(canvas.height / pageCanvasHeight);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();

        const srcY = i * pageCanvasHeight;
        const srcH = Math.min(pageCanvasHeight, canvas.height - srcY);

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = srcH;
        const ctx = pageCanvas.getContext("2d");
        if (!ctx) continue;

        ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);

        const imgData = pageCanvas.toDataURL("image/jpeg", 0.92);
        const drawHeight = (srcH / canvas.width) * imgWidth;
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, drawHeight);
      }

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
