import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AdvancedInteractiveButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}> = ({ 
  children, 
  onClick, 
  href, 
  target = '_blank', 
  rel = 'noopener noreferrer', 
  variant = 'primary', 
  icon: Icon, 
  size = 'medium', 
  className 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = 'rounded-full transition-all duration-300 ease-in-out hover:shadow-2xl flex items-center justify-center space-x-2';
  const sizeStyles = size === 'small' ? 'px-2 py-1 text-sm' 
    : size === 'medium' ? 'px-4 py-2' 
    : 'px-6 py-3 text-lg';
  const variantStyles = variant === 'primary' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
    : 'bg-white text-blue-600 border-2 border-blue-600 dark:bg-gray-800 dark:text-white dark:border-white';

  return (
    href ? (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`${className} ${baseStyles} ${sizeStyles} ${variantStyles}`}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }}
        onClick={onClick}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isHovered 
            ? {
                opacity: 1,
                x: [-2, 2, -2, 2, 0],
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                  x: {
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                    ease: "easeInOut"
                  }
                }
              }
            : { opacity: 1 }
          }
          className="relative z-10 flex items-center justify-center"
        >
          {Icon && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              <Icon size={20} />
            </motion.div>
          )}
          {children}
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </motion.a>
    ) : (
      <motion.button
        className={`${className} ${baseStyles} ${sizeStyles} ${variantStyles}`}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }}
        onClick={onClick}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isHovered 
            ? {
                opacity: 1,
                x: [-2, 2, -2, 2, 0],
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                  x: {
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                    ease: "easeInOut"
                  }
                }
              }
            : { opacity: 1 }
          }
          className="relative z-10 flex items-center justify-center"
        >
          {Icon && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              <Icon size={20} />
            </motion.div>
          )}
          {children}
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </motion.button>
    )
  );
};
