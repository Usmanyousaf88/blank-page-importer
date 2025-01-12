import React from 'react';
import { AnimatedGradientBackground } from '@/components/core/animated-background';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Global animated background */}
      <AnimatedGradientBackground />
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
