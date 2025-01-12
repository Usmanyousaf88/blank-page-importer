import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Target, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

export const AboutUsModal: React.FC<AboutUsModalProps> = ({ 
  isOpen, 
  onClose, 
  value 
}) => {
  const valueDetails = {
    "Innovation First": {
      expandedDescription: "At the heart of our approach lies a commitment to pushing technological boundaries. We don't just adapt to change—we drive it, transforming creative concepts into groundbreaking digital solutions that redefine possibilities.",
      keyBenefits: [
        "Cutting-Edge Problem-Solving Techniques",
        "Proactive Technology Exploration",
        "Continuous Learning and Adaptation",
        "Visionary Approach to Digital Challenges"
      ],
      whyImportant: "Innovation is not a destination, but a continuous journey of discovery. We cultivate an ecosystem where creativity meets technology, turning bold ideas into transformative digital experiences that challenge the status quo."
    },
    "Innovation Excellence": {
      expandedDescription: "Personalization is our north star. We craft AI solutions that are not just technically sophisticated, but deeply attuned to the unique needs and aspirations of each client, breaking through traditional technological barriers.",
      keyBenefits: [
        "Tailored AI Solutions",
        "Intelligent Adaptive Frameworks",
        "Client-Centric Technology Design",
        "Breakthrough Performance Optimization"
      ],
      whyImportant: "Excellence is born from understanding. We don't just develop technology; we create digital companions that understand, anticipate, and elevate your unique vision, turning potential into extraordinary performance."
    },
    "Innovation Driven": {
      expandedDescription: "Our philosophy transcends traditional technological development. We are architects of future possibilities, crafting progressive ideas that not only solve current challenges but anticipate and shape future digital landscapes.",
      keyBenefits: [
        "Forward-Thinking Strategy",
        "Transformative Idea Generation",
        "Future-Ready Technology Frameworks",
        "Holistic Digital Transformation Approach"
      ],
      whyImportant: "Driving innovation means seeing beyond the horizon. We are your strategic partners in a continuous revolution, transforming progressive ideas into powerful digital narratives that don't just respond to the future—they create it."
    }
  };

  const currentValueDetails = valueDetails[value.title as keyof typeof valueDetails] || {};

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
                  {value.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {value.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {value.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Our Strategic Vision
                  </h3>
                  <p className="text-muted-foreground">
                    {currentValueDetails.expandedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Core Innovation Principles
                  </h3>
                  <ul className="space-y-2">
                    {currentValueDetails.keyBenefits?.map((benefit, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Transforming Vision into Reality
                </h3>
                <p className="text-muted-foreground italic">
                  {currentValueDetails.whyImportant}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
