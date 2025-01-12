import React, { useState } from 'react';
import { FeatureType } from '../types';
import { motion } from 'framer-motion';
import { AIModal } from '../../../Modals/AIModal';

interface HeroFeatureCardProps {
  feature: FeatureType;
}

export const HeroFeatureCard: React.FC<HeroFeatureCardProps> = ({ feature }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <motion.div 
      className={`hero-feature-card bg-gradient-to-r ${feature.gradient.from} ${feature.gradient.to}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-wrapper">
        {feature.icon}
      </div>
      <h2 className="text-3xl font-bold mt-4 text-white">{feature.title}</h2>
      <p className="text-lg mt-2 text-white/80">{feature.description}</p>
      <ul className="mt-4 space-y-2">
        {feature.features?.map((item, index) => (
          <li key={index} className="text-white/90 flex items-center">
            <span className="mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button
          onClick={handleOpenModal}
          className="explore-btn hover:scale-105 transition-transform"
        >
          Explore Possibilities
        </button>
      </div>
      <AIModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        feature={feature}
      />
    </motion.div>
  );
};
