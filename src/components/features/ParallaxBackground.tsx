import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  imageSrc: string;
}

export function ParallaxBackground({
  children,
  className,
  imageSrc,
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative w-full min-h-screen",
        className
      )}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-[120%] -z-10"
        style={{
          y,
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div 
        className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-background/95 via-background/80 to-background"
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
