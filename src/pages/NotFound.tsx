import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Shield } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6"
      style={{ background: 'hsl(225 6% 15%)' }}
    >
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
          style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.2)' }}>
          <Shield className="w-7 h-7 text-primary" />
        </div>

        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-4">Erreur 404</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
          Page introuvable
        </h1>
        <div className="w-16 h-px mx-auto mb-6" style={{ background: 'hsl(42 72% 50% / 0.4)' }} />
        <p className="text-[14px] leading-relaxed mb-10" style={{ color: 'hsl(38 15% 55%)' }}>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <a
          href="/"
          className="btn-premium px-8 py-3.5 text-[12px] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
