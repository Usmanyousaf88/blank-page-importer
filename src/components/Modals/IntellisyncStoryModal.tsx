import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Target, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface IntellisyncStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  storyPoint: {
    icon: React.ReactNode;
    title: string;
    content: string;
    year: string;
  };
}

export const IntellisyncStoryModal: React.FC<IntellisyncStoryModalProps> = ({ 
  isOpen, 
  onClose, 
  storyPoint 
}) => {
  const storyDetails = {
    "Our Vision": {
      expandedDescription: "In 2020, we envisioned a digital landscape where technology transcends mere functionality, becoming a personalized, intuitive extension of human creativity and potential.",
      keyBenefits: [
        "Pioneering Personalized Digital Experiences",
        "AI-Driven User-Centric Design",
        "Transformative Technology Paradigm",
        "Holistic Digital Ecosystem Approach"
      ],
      whyImportant: "Our vision is not just about creating technology, but about crafting digital narratives that resonate, adapt, and grow with the unique journey of each user and organization."
    },
    "The Journey": {
      expandedDescription: "2021 marked our evolution from conceptual innovators to practical pioneers, transforming theoretical AI potential into tangible, game-changing solutions.",
      keyBenefits: [
        "Rapid Prototyping and Innovation",
        "Adaptive AI Development Frameworks",
        "Strategic Technology Implementation",
        "Continuous Learning and Iteration"
      ],
      whyImportant: "Our journey is a testament to the power of relentless innovation—where each challenge becomes an opportunity to redefine what's possible in the digital realm."
    },
    "Growing Community": {
      expandedDescription: "By 2022, we had cultivated a thriving ecosystem of innovators, developers, and visionaries committed to pushing the boundaries of personal and enterprise AI solutions.",
      keyBenefits: [
        "Collaborative Innovation Networks",
        "Cross-Disciplinary Technology Integration",
        "Global Talent and Idea Exchange",
        "Sustainable Technology Ecosystem"
      ],
      whyImportant: "Community is the heartbeat of innovation. We're not just building technologies; we're nurturing a global movement that transforms how we interact with digital possibilities."
    },
    "The Path Forward": {
      expandedDescription: "Looking towards 2025, we are positioning ourselves at the forefront of a digital revolution, where AI becomes an intuitive, empowering force that amplifies human potential across every domain.",
      keyBenefits: [
        "Next-Generation AI Integration",
        "Predictive and Adaptive Technologies",
        "Ethical and Responsible AI Development",
        "Transformative Digital Experiences"
      ],
      whyImportant: "The path forward is not about predicting the future, but about actively creating it—where technology becomes a seamless, intelligent companion in human progress."
    }
  };

  const currentStoryDetails = storyDetails[storyPoint.title as keyof typeof storyDetails] || {};

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
                  {storyPoint.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {storyPoint.title}
                </h2>
              </div>

              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {storyPoint.year}
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {storyPoint.content}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Strategic Insight
                  </h3>
                  <p className="text-muted-foreground">
                    {currentStoryDetails.expandedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Key Innovation Principles
                  </h3>
                  <ul className="space-y-2">
                    {currentStoryDetails.keyBenefits?.map((benefit, index) => (
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
                  Our Continuous Evolution
                </h3>
                <p className="text-muted-foreground italic">
                  {currentStoryDetails.whyImportant}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
