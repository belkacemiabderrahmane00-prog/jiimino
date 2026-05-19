import React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const directionStyles = {
  up: "translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  scale: "scale-95",
};

const RevealSection = ({ children, className, delay = 0, direction = "up" }: RevealSectionProps) => {
  const { ref, isVisible } = useScrollReveal();
  const delayMs = delay * 120;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDuration: '900ms',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealSection;
