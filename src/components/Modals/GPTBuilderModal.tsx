import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X} from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface GPTBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: React.ReactNode;
    modalContent?: {
      fullDescription: string;
      keyFeatures: string[];
      useCases: string[];
      benefits: string[];
    }
  };
}

export const GPTBuilderModal: React.FC<GPTBuilderModalProps> = ({ 
  isOpen, 
  onClose, 
  feature 
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
            <div className="p-8 relative z-10">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {feature.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {feature.description}
              </p>

              {feature.modalContent && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      Full Description
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.modalContent.fullDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">
                        Key Features
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {feature.modalContent.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2 text-blue-500">▪</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">
                        Use Cases
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {feature.modalContent.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2 text-green-500">▪</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">
                        Benefits
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {feature.modalContent.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2 text-purple-500">▪</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
