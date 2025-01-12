import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, Users, Target, CheckCircle, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface WorkValueContent {
  title: string;
  description: string;
  icon: React.ReactNode;
  expandedDescription: string;
  keyBenefits: string[];
  whyImportant: string;
}

const workValuesContent: Record<string, WorkValueContent> = {
  'innovation': {
    title: 'Innovation with Purpose',
    description: 'At Intellisync Solutions, innovation isn\'t about chasing trends—it\'s about creating meaningful solutions that drive real value.',
    icon: <Lightbulb />,
    expandedDescription: "At Intellisync Solutions, innovation isn't about chasing trends—it's about creating meaningful solutions that drive real value and transform challenges into opportunities.",
    keyBenefits: [
      "Cutting-Edge Problem-Solving Techniques",
      "Technology Exploration with Purpose",
      "Continuous Learning and Adaptation",
      "Visionary Approach to Digital Challenges"
    ],
    whyImportant: "Innovation is not a destination, but a continuous journey of discovery. We cultivate an ecosystem where creativity meets technology, turning bold ideas into transformative digital experiences that challenge the status quo."
  },
  'connection': {
    title: 'Personal Connection',
    description: 'Building lasting relationships is at the heart of everything we do. We don\'t just work for clients; we partner with them to bring their visions to life.',
    icon: <Users />,
    expandedDescription: "Building lasting relationships is at the heart of everything we do. We don't just work for clients; we partner with them to bring their unique visions to life through deep understanding and collaborative innovation.",
    keyBenefits: [
      "Tailored Solutions that Reflect Your Vision",
      "Collaborative Partnership Approach",
      "Empathetic Understanding of Client Needs",
      "Transparent and Open Communication"
    ],
    whyImportant: "Every project is a shared journey. We don't just deliver services; we build meaningful connections that transform professional interactions into lasting partnerships of mutual growth and shared success."
  },
  'excellence': {
    title: 'Excellence in Delivery',
    description: 'Commitment to excellence is our north star. We don\'t just meet expectations; we consistently aim to exceed them and create lasting impact.',
    icon: <Target />,
    expandedDescription: "Commitment to excellence is our north star. We don't just meet expectations; we consistently aim to exceed them, creating solutions that are not only technically superior but deeply impactful.",
    keyBenefits: [
      "Rigorous Attention to Detail",
      "Continuous Performance Optimization",
      "Scalable and Future-Ready Solutions",
      "Holistic Approach to Technology Development"
    ],
    whyImportant: "Excellence is a continuous journey of passion, dedication, and unwavering commitment. We view each project as an opportunity to push the boundaries of what's possible, delivering solutions that inspire and transform."
  }
};

interface WorkValuesModalProps {
  isOpen: boolean;
  closeModal: () => void;
  value: 'innovation' | 'connection' | 'excellence';
}

export const WorkValuesModal: React.FC<WorkValuesModalProps> = ({ 
  isOpen, 
  closeModal, 
  value 
}) => {
  const content = workValuesContent[value];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
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
                onClick={closeModal} 
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                  {content.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {content.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {content.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Our Strategic Vision
                  </h3>
                  <p className="text-muted-foreground">
                    {content.expandedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Core Innovation Principles
                  </h3>
                  <ul className="space-y-2">
                    {content.keyBenefits?.map((benefit, index) => (
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
                  {content.whyImportant}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
