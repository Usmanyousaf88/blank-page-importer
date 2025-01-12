import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface InfiniteCarouselProps {
  children: React.ReactNode[];
  speed?: number; 
  direction?: 'left' | 'right';
  className?: string;
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  speed = 5, 
  direction = 'left',
  className = '',
}) => {
  const [width, setWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate total width of all items
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [children]);

  const baseVelocity = direction === 'left' ? -1 : 1;

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: baseVelocity < 0 ? -width : width,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: (width / 500) * (1 / speed),
            ease: "linear",
          },
        },
      });
    }
  }, [isPaused, width, baseVelocity, speed, controls]);

  return (
    <div 
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade overlay */}
      <div className="absolute top-8 bottom-8 -left-4 -right-4 pointer-events-none dark:hidden z-10 rounded-[24px]" style={{
        background: `linear-gradient(90deg, 
          rgba(255,255,255,1) 0%, 
          rgba(255,255,255,1) 8%,
          rgba(255,255,255,0) 25%, 
          rgba(255,255,255,0) 75%, 
          rgba(255,255,255,1) 92%,
          rgba(255,255,255,1) 100%)`
      }} />
      <div className="absolute top-8 bottom-8 -left-4 -right-4 pointer-events-none hidden dark:block z-10 rounded-[24px]" style={{
        background: `linear-gradient(90deg, 
          rgb(2,6,23) 0%,
          rgb(2,6,23) 8%,
          rgba(2,6,23,0) 25%, 
          rgba(2,6,23,0) 75%, 
          rgb(2,6,23) 92%,
          rgb(2,6,23) 100%)`
      }} />
      <motion.div
        ref={carouselRef}
        className="flex gap-4 cursor-pointer relative"
        animate={controls}
        initial={{ x: 0 }}
      >
        {/* Original items */}
        {children}
        {/* Duplicated items for seamless loop */}
        {children}
      </motion.div>
    </div>
  );
};
