import React from 'react';
import { motion } from 'framer-motion';

interface CarouselCardProps {
  capability: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: {
      from: string;
      to: string;
      text: string;
    };
  };
  isActive: boolean;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ capability, isActive }) => {
  return (
    <motion.div
      className={`w-full md:w-[450px] flex-shrink-0 transform transition-all duration-500 ease-out ${
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
      }`}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <div
        className={`
          relative h-full p-8 rounded-2xl border border-border
          bg-gradient-to-br ${capability.gradient.from} ${capability.gradient.to}
          transition-all duration-300 group
        `}
      >
        <div className="flex items-center mb-6">
          <div className={`
            p-4 rounded-xl 
            bg-gradient-to-br ${capability.gradient.from} ${capability.gradient.to}
            group-hover:scale-110 transition-transform duration-300
          `}>
            {capability.icon}
          </div>
          <h3 className={`
            text-2xl font-bold ml-4 
            bg-gradient-to-r ${capability.gradient.text} 
            bg-clip-text text-transparent
          `}>
            {capability.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {capability.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
