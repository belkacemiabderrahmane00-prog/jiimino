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
      <div className="relative" style={{ height: 'clamp(380px, 58vw, 720px)' }}>
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

        {/* Overlay subtil — lumière dorée au centre */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(42 72% 50% / 0.04), transparent 70%)' }}
        />

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
