import { useEffect, useRef, useState } from "react";
import { Users, ShieldCheck, CalendarCheck, TrendingUp, Star } from "lucide-react";

const figures = [
  { icon: Users, value: 50, suffix: "+", label: "Agents qualifiés", duration: 2000 },
  { icon: ShieldCheck, value: 500, suffix: "+", label: "Missions réalisées", duration: 2200 },
  { icon: CalendarCheck, value: 20, suffix: " ans+", label: "D'expérience dirigeante", duration: 1800 },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction client", duration: 2000 },
  { icon: TrendingUp, value: 24, suffix: "h/24", label: "Disponibilité", duration: 1800 },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function CounterCard({ icon: Icon, value, suffix, label, duration, started, index }: {
  icon: typeof Users; value: number; suffix: string; label: string; duration: number; started: boolean; index: number;
}) {
  const count = useCountUp(value, duration, started);

  return (
    <div
      className={`group relative text-center p-3 sm:p-6 md:p-8 transition-all duration-700 ${started ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at center, hsl(42 72% 50% / 0.08), transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.12), hsl(42 72% 50% / 0.05))',
            border: '1px solid hsl(42 72% 50% / 0.2)',
            boxShadow: '0 4px 20px hsl(42 72% 50% / 0.1)',
          }}
        >
          <Icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
        </div>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-2 tabular-nums"
          style={{ textShadow: started ? '0 0 30px hsl(42 72% 50% / 0.3)' : 'none', transition: 'text-shadow 1s ease' }}
        >
          {count}{suffix}
        </p>

        <div className="w-8 h-0.5 mx-auto mb-3 rounded-full transition-all duration-500 group-hover:w-12"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(42 72% 50% / 0.5), transparent)' }}
        />

        <p className="text-sm font-medium uppercase tracking-wider" style={{ color: 'hsl(225 10% 35%)' }}>{label}</p>
      </div>
    </div>
  );
}

const KeyFiguresSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden section-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block text-primary">
            En chiffres
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] text-primary-foreground">
            Une équipe dirigeante de <span className="text-primary">plus de 20 ans d'expérience</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {figures.map((f, i) => (
            <CounterCard key={i} {...f} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
