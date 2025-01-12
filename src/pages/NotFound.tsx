import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaLaugh, FaExclamationTriangle, FaSpaceShuttle } from 'react-icons/fa';
import { TextEffect } from '@/components/core/text-effect';

const NotFoundPage: React.FC = () => {
  const icons = [FaRobot, FaLaugh, FaExclamationTriangle, FaSpaceShuttle];
  const funnyMessages = [
    "Oops! Looks like you've wandered into the digital void ",
    "404: The page you're looking for went on vacation ",
    "Quantum page malfunction! Page not found in this universe ",
    "Congratulations! You've discovered the internet's black hole ",
    "Page missing in action. Send a search party! "
  ];

  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  const IconComponent = randomIcon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          className="flex justify-center mb-8"
        >
          <IconComponent className="text-9xl text-white drop-shadow-2xl" />
        </motion.div>

        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          <TextEffect preset="fade">🎉 HURRAY! 🎉 You found the page you were looking for! Honestly, this is like finding $20 in your pocket… but better. Go ahead, do a little happy dance—we won’t judge! 💃🕺</TextEffect>
        </h1>
        
        <p className="text-2xl text-white mb-8 max-w-2xl mx-auto px-4">
          <TextEffect preset="fade">{randomMessage}</TextEffect>
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-purple-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-purple-100 transition-all"
          onClick={() => window.location.href = '/'}
        >
          E.T. Go Home
        </motion.button>
      </motion.div>

      {/* Crazy Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -100,
              opacity: 0.7
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

export default NotFoundPage;
