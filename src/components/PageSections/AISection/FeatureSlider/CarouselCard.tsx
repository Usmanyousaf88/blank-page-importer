import React from 'react';
import { motion } from 'framer-motion';
import { FeatureType } from '../types';

interface CarouselCardProps {
  feature: FeatureType;
  isActive: boolean;
  onClick: () => void;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ feature, isActive, onClick }) => {
  return (
    <motion.div 
      className={`carousel-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        background: isActive 
          ? 'rgba(255, 255, 255, 0.15)' 
          : 'rgba(255, 255, 255, 0.05)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-content-wrapper">
        <div className={`icon-container ${isActive ? 'active' : ''}`}>
          {feature.icon}
        </div>
        <h4 className="text-sm font-medium mt-2 text-white">{feature.title}</h4>
      </div>
      <div className="card-gradient-border" />
    </motion.div>
  );
};
