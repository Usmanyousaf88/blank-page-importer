'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Measure dimensions when component mounts or children change
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, [children]);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? dimensions.width : dimensions.height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    dimensions.width,
    dimensions.height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={containerRef}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src='/apple_music_logo.svg'
        alt='Apple Music logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/chrome_logo.svg'
        alt='Chrome logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/strava_logo.svg'
        alt='Strava logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/nintendo_logo.svg'
        alt='Nintendo logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/jquery_logo.svg'
        alt='Jquery logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/prada_logo.svg'
        alt='Prada logo'
        className='h-[120px] w-auto'
      />
    </InfiniteSlider>
  );
}
