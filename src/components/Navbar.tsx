import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight, Shield } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Prestations", href: "#prestations" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Approche", href: "#approche" },
  { label: "Confiance", href: "#confiance" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-nav shadow-2xl shadow-black/30"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      {/* Top micro-bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div style={{ borderBottom: '1px solid hsl(42 72% 50% / 0.06)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-9 text-[11px]">
            <div className="hidden sm:flex items-center gap-2 text-foreground/35">
              <Shield className="w-3 h-3 text-primary/50" />
              <span className="tracking-wider">Sécurité privée — Paris & Île-de-France</span>
            </div>
            <div className="flex items-center gap-4 text-foreground/35">
              <a href="tel:+33955790988" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300">
                <Phone className="w-3 h-3" />
                <span>09 55 79 09 88</span>
              </a>
              <span className="hidden sm:inline text-primary/15">|</span>
              <span className="hidden sm:inline text-primary/40 font-medium">24h/24 — 7j/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
        <a href="#accueil" className="relative z-10 shrink-0 group">
          <BrandLogo
            variant="light"
            className={`transition-all duration-500 group-hover:scale-105 ${
              scrolled ? "h-10 md:h-11" : "h-11 md:h-14"
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 rounded-md ${
                activeSection === link.href
                  ? "text-primary bg-primary/[0.08]"
                  : "text-foreground/40 hover:text-foreground/75 hover:bg-foreground/[0.04]"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2.5 px-6 py-2.5 text-[11px] font-bold tracking-[0.06em] uppercase gold-gradient text-primary-foreground rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] group"
        >
          <span>Devis gratuit</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/[0.98] backdrop-blur-xl transition-all duration-500 flex flex-col justify-center items-center ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-xl font-serif font-semibold transition-colors ${
                activeSection === link.href ? "text-primary" : "text-foreground/45 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="metallic-line w-12 my-3" />
          <a href="tel:+33955790988" className="flex items-center gap-2 text-primary text-sm font-medium">
            <Phone className="w-4 h-4" />
            09 55 79 09 88
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-8 py-3 gold-gradient text-primary-foreground font-bold text-sm rounded-md uppercase tracking-wider"
          >
            Devis gratuit
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
