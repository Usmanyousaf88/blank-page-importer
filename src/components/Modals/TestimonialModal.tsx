import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
    fullStory?: JSX.Element;
  };
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ 
  isOpen, 
  onClose, 
  testimonial 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-background w-full max-w-4xl mx-4 rounded-2xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <BorderTrail 
              className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
              size={120}
            />
            
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {testimonial.avatar && (
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                />
              )}
              
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <Quote className="absolute -top-4 -left-6 text-gray-200 dark:text-gray-700 w-16 h-16" />
                  <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-200 mb-6 pl-6 relative z-10">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
                
                <div className="flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {testimonial.fullStory && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                  >
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Full Story
                    </h4>
                    {testimonial.fullStory}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialModal;
