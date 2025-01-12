import React, { useMemo } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { 
  Globe, Lock, Layers, 
  Compass, Zap, Brain, 
  Heart, Film, Building2, 
  HandHeart, Rocket
} from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface IconConfig {
  Icon: React.FC<LucideProps>;
  initialX: number;
  initialY: number;
  size: number;
  depth: number;
}

interface FloatingIconsProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const FloatingIcons: React.FC<FloatingIconsProps> = ({ mouseX, mouseY }) => {
  const icons = useMemo<IconConfig[]>(() => [
    { Icon: Globe, initialX: 10, initialY: 20, size: 24, depth: 0.1 },
    { Icon: Lock, initialX: 80, initialY: 15, size: 20, depth: 0.2 },
    { Icon: Layers, initialX: 30, initialY: 70, size: 28, depth: 0.3 },
    { Icon: Compass, initialX: 70, initialY: 80, size: 22, depth: 0.4 },
    { Icon: Zap, initialX: 20, initialY: 40, size: 26, depth: 0.5 },
    { Icon: Brain, initialX: 90, initialY: 30, size: 30, depth: 0.6 },
    { Icon: Heart, initialX: 40, initialY: 90, size: 18, depth: 0.7 },
    { Icon: Film, initialX: 60, initialY: 10, size: 24, depth: 0.8 },
    { Icon: Building2, initialX: 85, initialY: 60, size: 28, depth: 0.9 },
    { Icon: HandHeart, initialX: 15, initialY: 85, size: 22, depth: 1.0 },
    { Icon: Rocket, initialX: 50, initialY: 50, size: 26, depth: 1.1 }
  ], []);

  const parallaxTransformX = useTransform(
    mouseX, 
    [0, 1], 
    [-50, 50], 
    { clamp: false }
  );

  const parallaxTransformY = useTransform(
    mouseY, 
    [0, 1], 
    [-50, 50], 
    { clamp: false }
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((config, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${config.initialX}%`,
            top: `${config.initialY}%`,
            x: parallaxTransformX,
            y: parallaxTransformY,
            scale: 1 - config.depth * 0.1,
            opacity: 1 - config.depth * 0.2,
          }}
          animate={{
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 3 + config.depth * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }
          }}
        >
          <config.Icon 
            className="text-white/20 hover:text-white/50 transition-colors" 
            size={config.size} 
          />
        </motion.div>
      ))}
    </div>
  );
};
