import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BrainCircuit, Sparkles, Cpu } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';
import { FeatureType } from '../PageSections/AISection/types';
import { createPortal } from 'react-dom';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: FeatureType;
}

export const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, feature }) => {
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
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
                <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient.from} ${feature.gradient.to} mr-4`}>
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {feature.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {feature.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BrainCircuit className="w-5 h-5 mr-2 text-blue-500" /> 
                    Core Capabilities
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5">
                      <div className="flex items-center mb-2">
                        <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                        <h4 className="font-medium">Advanced AI Processing</h4>
                      </div>
                      <p className="text-sm text-zinc-400">
                        Leveraging cutting-edge AI models for intelligent solutions
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <div className="flex items-center mb-2">
                        <Cpu className="w-5 h-5 text-purple-400 mr-2" />
                        <h4 className="font-medium">Real-time Adaptation</h4>
                      </div>
                      <p className="text-sm text-zinc-400">
                        Dynamic systems that learn and evolve with your needs
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {feature.features?.map((item, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-muted-foreground">
                  Discover how our AI solutions can revolutionize your operations and drive innovation.
                  Let's build something extraordinary together.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Create portal to render modal at root level
  return createPortal(modalContent, document.body);
};
