import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ 
  children, 
  text, 
  className = '' 
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 px-3 py-2 text-sm text-white bg-black rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2"
        >
          {text}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black"></div>
        </motion.div>
      )}
    </div>
  );
};
