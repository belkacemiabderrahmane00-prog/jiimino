import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number;
    let ring = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      setHidden(false);
    };

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.12;
      ring.y += (mouse.y - ring.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);
    const handleOut = () => setHidden(true);

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", handleOut);
    document.querySelectorAll("a, button, [role=button]").forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    const obs = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role=button]").forEach(el => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleOut);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          opacity: hidden ? 0 : 1,
          width: hovering ? '6px' : '5px',
          height: hovering ? '6px' : '5px',
          borderRadius: '50%',
          background: 'hsl(42 85% 62%)',
          boxShadow: '0 0 6px hsl(42 72% 50% / 0.8)',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          opacity: hidden ? 0 : 0.5,
          width: hovering ? '36px' : '28px',
          height: hovering ? '36px' : '28px',
          borderRadius: '50%',
          border: '1px solid hsl(42 72% 52%)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
