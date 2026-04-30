import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        } else if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10" />
      
      <div className="relative w-full h-[60vh] md:h-[80vh] max-h-[700px]">
        <video
          ref={videoRef}
          src={heroVideo.url}
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Notre engagement
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-4">
              La sécurité<br />
              <span className="gold-shimmer">au service de l'excellence</span>
            </h2>
            <p className="text-foreground/40 text-sm md:text-base max-w-lg mx-auto">
              Des agents formés, des dispositifs sur mesure, une présence qui rassure.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary transition-colors"
            aria-label={isMuted ? "Activer le son" : "Couper le son"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default VideoShowcase;
