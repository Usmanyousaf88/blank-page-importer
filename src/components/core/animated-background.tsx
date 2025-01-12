import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGradientBackgroundProps {
  className?: string;
}

export const AnimatedGradientBackground = ({ 
  className 
}: AnimatedGradientBackgroundProps) => (
  <motion.div
    initial={{ backgroundPosition: '0% 50%' }}
    animate={{ 
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{ 
      duration: 10, 
      repeat: Infinity, 
      ease: 'linear'
    }}
    className={cn(
      'absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl -z-10 opacity-50',
      className
    )}
  />
);

// Alias for backward compatibility
export const AnimatedBackground = AnimatedGradientBackground;
