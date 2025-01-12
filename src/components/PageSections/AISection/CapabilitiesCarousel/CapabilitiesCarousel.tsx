import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarouselCard from './CarouselCard';

interface CapabilitiesCarouselProps {
  capabilities: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: {
      from: string;
      to: string;
      text: string;
    };
  }>;
}

export const CapabilitiesCarousel: React.FC<CapabilitiesCarouselProps> = ({ capabilities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= capabilities.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? capabilities.length - (capabilities.length % 2 || 2) : prevIndex - 2
    );
  };

  const visibleCapabilities = capabilities.slice(currentIndex, currentIndex + 2);
  const paddedCapabilities = visibleCapabilities.length < 2 
    ? [...visibleCapabilities, 
      { 
        title: 'placeholder',
        description: '',
        icon: null,
        gradient: {
          from: 'transparent',
          to: 'transparent',
          text: 'transparent'
        }
      }] 
    : visibleCapabilities;

  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center space-x-8 px-4">
      {/* Navigation Button - Left */}
      <button
        onClick={handlePrev}
        className="z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative w-full overflow-visible px-4">
          <motion.div 
            className="flex justify-center items-stretch"
            style={{ gap: '4rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {paddedCapabilities.map((capability, index) => (
              capability.title !== 'placeholder' ? (
                <motion.div
                  key={capability.title}
                  className="w-[380px] flex-shrink-0"
                  style={{ margin: '0 2rem' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <CarouselCard
                    capability={capability}
                    isActive={true}
                  />
                </motion.div>
              ) : (
                <div key={`placeholder-${index}`} className="w-[380px] flex-shrink-0" style={{ margin: '0 2rem' }} />
              )
            ))}
          </motion.div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(capabilities.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / 2)
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Button - Right */}
      <button
        onClick={handleNext}
        className="z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>
    </div>
  );
};

export default CapabilitiesCarousel;
