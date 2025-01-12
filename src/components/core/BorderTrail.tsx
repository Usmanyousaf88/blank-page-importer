'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'framer-motion';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
  children,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      {children}
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export function BorderTrailTextarea() {
  return (
    <div className='relative h-[160px] w-[260px] overflow-hidden rounded-md border border-zinc-950/10 bg-white text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300'>
      <textarea className='h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none' />
      <BorderTrail
        className='bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
        size={120}
      />
    </div>
  );
}
