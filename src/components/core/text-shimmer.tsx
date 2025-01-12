'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  style?: React.CSSProperties;
}

export function TextShimmer({
  children,
  className,
  duration = 2,
  style,
}: TextShimmerProps) {
  return (
    <motion.span
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration,
        ease: 'easeInOut',
      }}
      className={cn('inline-block', className)}
      style={style}
    >
      {children}
    </motion.span>
  );
}
