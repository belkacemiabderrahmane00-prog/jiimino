import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [display, setDisplay] = useState(children);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    setPhase("out");
    const t = setTimeout(() => {
      setDisplay(children);
      setPhase("in");
    }, 220);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      style={{
        transition: 'opacity 0.22s ease, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: phase === "out" ? 0 : 1,
        transform: phase === "out" ? 'translateY(8px)' : 'translateY(0)',
      }}
    >
      {display}
    </div>
  );
};

export default PageTransition;
