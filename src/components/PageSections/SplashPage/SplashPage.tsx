import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Animation from '../../features/Animation';
import { StreamingText } from '../../features/StreamingText';

interface SplashPageProps {
  onEnter: () => void;
  show: boolean;
}

const SplashPage: React.FC<SplashPageProps> = ({ onEnter, show }) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 3500); // 3.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen bg-black/95 flex flex-col justify-center items-center z-50"
        >
          <Animation type="slide-fade" duration={0.8} delay={0.2}>
            <div className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              <StreamingText
                text="We Build Digital Dreams"
                speed={200}
                delay={800}
                className="inline-block"
              />
            </div>
          </Animation>
          
          <Animation type="slide-fade" duration={0.8} delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-center max-w-xl px-4">
              <StreamingText
                text="Step into a world of creativity and innovation"
                speed={200}
                delay={1500}
              />
            </p>
          </Animation>
          
          <Animation type="slide-fade" duration={0.8} delay={0.6}>
            <button
              onClick={onEnter}
              disabled={!isButtonEnabled}
              className={`px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg
                       transition-all duration-500 ${
                         isButtonEnabled
                           ? 'hover:bg-white hover:text-black opacity-100 cursor-pointer'
                           : 'opacity-50 cursor-not-allowed'
                       }`}
            >
              {isButtonEnabled ? 'Click to Enter' : 'Please Wait...'}
            </button>
          </Animation>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashPage;
