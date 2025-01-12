import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'rgba(59, 130, 246, 0.5)', // Default blue glow
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-lg p-4 ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        style={{ 
          boxShadow: `0 0 60px 30px ${glowColor}`,
          pointerEvents: 'none'
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
