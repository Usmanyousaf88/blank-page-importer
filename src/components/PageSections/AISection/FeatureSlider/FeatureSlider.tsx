import React, { useState } from 'react';
import { HeroFeatureCard } from './HeroFeatureCard';
import { CarouselNavigation } from './CarouselNavigation';
import { FeatureType } from '../types';
import './FeatureSlider.css';

interface FeatureSliderProps {
  features: FeatureType[];
}

export const FeatureSlider: React.FC<FeatureSliderProps> = ({ features }) => {
  const [currentFeature, setCurrentFeature] = useState<FeatureType>(features[0]);

  return (
    <div className="feature-slider">
      <HeroFeatureCard feature={currentFeature} />
      <CarouselNavigation 
        features={features} 
        setCurrentFeature={setCurrentFeature} 
        currentFeature={currentFeature} 
      />
    </div>
  );
}
