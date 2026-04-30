import { Shield, Clock, Star, Users } from "lucide-react";
import photoSurveillance from "@/assets/photo-surveillance.jpg";
import photoEvent from "@/assets/photo-evenementiel.jpg";

const stats = [
  { icon: Users, value: "50+", label: "Agents certifiés" },
  { icon: Shield, value: "500+", label: "Missions réalisées" },
  { icon: Clock, value: "24/7", label: "Disponibilité" },
  { icon: Star, value: "98%", label: "Satisfaction client" },
];

const VideoShowcase = () => (
  <section className="relative overflow-hidden" style={{ background: 'hsl(225 8% 13%)' }}>
    {/* Stats bar */}
    <div
      className="border-b border-t"
      style={{ borderColor: 'hsl(42 72% 50% / 0.12)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center mb-1"
              style={{ background: 'hsl(42 72% 50% / 0.1)', border: '1px solid hsl(42 72% 50% / 0.2)' }}
            >
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <p className="font-serif text-3xl font-bold leading-none text-primary">{value}</p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'hsl(38 15% 50%)' }}>{label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Two distinct images */}
    <div className="grid grid-cols-1 md:grid-cols-2 h-[260px] md:h-[340px]">
      {/* Surveillance */}
      <div className="relative overflow-hidden group cursor-pointer">
        <img
          src={photoSurveillance}
          alt="Surveillance humaine"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.50) saturate(0.75)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(225 20% 6% / 0.75) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, hsl(42 72% 50% / 0.08) 0%, transparent 60%)' }} />
        <div className="absolute bottom-6 left-7">
          <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary mb-1.5">Surveillance</p>
          <p className="font-serif text-xl md:text-2xl font-semibold text-white leading-tight">Présence dissuasive</p>
          <p className="text-[11px] mt-1.5" style={{ color: 'hsl(38 15% 60%)' }}>Gardiennage & rondes</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, hsl(42 72% 50% / 0.7), transparent 60%)' }} />
      </div>

      {/* Événementiel */}
      <div className="relative overflow-hidden group cursor-pointer border-l" style={{ borderColor: 'hsl(42 72% 50% / 0.1)' }}>
        <img
          src={photoEvent}
          alt="Sécurité événementielle"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.50) saturate(0.75)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(225deg, hsl(225 20% 6% / 0.75) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(225deg, hsl(42 72% 50% / 0.08) 0%, transparent 60%)' }} />
        <div className="absolute bottom-6 right-7 text-right">
          <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary mb-1.5">Événementiel</p>
          <p className="font-serif text-xl md:text-2xl font-semibold text-white leading-tight">Protection sur mesure</p>
          <p className="text-[11px] mt-1.5" style={{ color: 'hsl(38 15% 60%)' }}>Maîtres de cérémonie & accueil</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[2px]"
          style={{ background: 'linear-gradient(270deg, hsl(42 72% 50% / 0.7), transparent 60%)' }} />
      </div>
    </div>

    {/* Fade vers la suite */}
    <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
      style={{ background: 'linear-gradient(to top, hsl(228 7% 18%), transparent)' }} />
  </section>
);

export default VideoShowcase;
