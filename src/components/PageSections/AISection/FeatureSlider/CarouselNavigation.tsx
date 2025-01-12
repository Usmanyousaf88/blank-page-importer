import React, { useRef } from 'react';
import { CarouselCard } from './CarouselCard';
import { FeatureType } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  features: FeatureType[];
  currentFeature: FeatureType;
  setCurrentFeature: (feature: FeatureType) => void;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  features, 
  currentFeature, 
  setCurrentFeature 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container">
      <button 
        onClick={() => scroll('left')}
        className="carousel-button left"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="carousel-navigation" ref={scrollContainerRef}>
        {features.map((feature, index) => (
          <CarouselCard 
            key={index} 
            feature={feature} 
            isActive={currentFeature.title === feature.title}
            onClick={() => setCurrentFeature(feature)} 
          />
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="carousel-button right"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
