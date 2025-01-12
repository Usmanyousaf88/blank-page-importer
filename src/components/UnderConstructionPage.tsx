import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHardHat, FaTools, FaWrench, FaCogs } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface UnderConstructionPageProps {
  pageName?: string;
}

const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({ pageName = 'This Page' }) => {
  const navigate = useNavigate();
  
  const constructionIcons = [FaHardHat, FaTools, FaWrench, FaCogs];
  const funnyMessages = [
    `${pageName} is currently under digital construction! 🏗️`,
    `Oops! ${pageName} is taking a coffee break while being built ☕`,
    `${pageName} is getting a makeover. Stay tuned! 💅`,
    `Our dev team is working their magic on ${pageName} ✨`,
    `${pageName} is in the coding gym, getting buff! 💪`
  ];

  const randomIcon = constructionIcons[Math.floor(Math.random() * constructionIcons.length)];
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 overflow-hidden">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            className="flex justify-center mb-8"
          >
            {React.createElement(randomIcon, { 
              className: "text-9xl text-white drop-shadow-2xl" 
            })}
          </motion.div>

          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Under Construction
          </h1>
          
          <p className="text-2xl text-white mb-8 max-w-2xl mx-auto px-4">
            {randomMessage}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-100 transition-all"
            onClick={() => navigate('/')}
          >
            Return to Home
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Playful Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -100,
              opacity: 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 5, 
              repeat: Infinity, 
              repeatType: 'loop' 
            }}
            className="absolute w-4 h-4 bg-white/30 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default UnderConstructionPage;
