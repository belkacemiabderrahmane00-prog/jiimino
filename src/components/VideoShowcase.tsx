import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-security.jpg";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.05 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'hsl(225 10% 9%)' }}
    >
      {/* Fondu depuis le hero — raccord parfait avec le bas du hero */}
      <div
        className="absolute top-0 inset-x-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, hsl(225 15% 8%), transparent)' }}
      />

      {/* Vidéo */}
      <div className="relative" style={{ height: 'clamp(260px, 65vw, 720px)' }}>
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.45) saturate(0.8)' }}
        />
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          poster={heroImg}
          preload="metadata"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.52) contrast(1.06) saturate(0.88)' }}
        />

        {/* Overlay subtil */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(42 72% 50% / 0.05), transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, hsl(225 15% 8% / 0.45) 0%, transparent 50%, hsl(225 15% 8% / 0.2) 100%)' }}
        />

        {/* Texte centré sur la vidéo */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5" style={{ color: 'hsl(42 72% 58%)' }}>
            Notre engagement
          </p>
          <h2 className="font-serif font-semibold leading-[1.05] mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textShadow: '0 2px 40px hsl(0 0% 0% / 0.5)' }}>
            La sécurité<br />
            <span className="gold-shimmer">au service de l'excellence</span>
          </h2>
          <p className="text-[14px] md:text-[16px] leading-relaxed max-w-lg" style={{ color: 'hsl(38 15% 72%)', textShadow: '0 1px 16px hsl(0 0% 0% / 0.6)' }}>
            Des agents formés, des dispositifs sur mesure,<br className="hidden md:block" />
            une présence qui protège et rassure.
          </p>
        </div>

        {/* Fondu bas — raccord avec la section services */}
        <div
          className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(228 7% 17%), transparent)' }}
        />
      </div>
    </section>
  );
};

export default VideoShowcase;
