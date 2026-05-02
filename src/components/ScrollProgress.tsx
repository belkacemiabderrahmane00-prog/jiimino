import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]" style={{ background: 'hsl(225 8% 12%)' }}>
      <div
        className="h-full transition-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(42 72% 46%), hsl(43 88% 64%), hsl(42 72% 50%))',
          boxShadow: '0 0 8px hsl(42 72% 50% / 0.6)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
