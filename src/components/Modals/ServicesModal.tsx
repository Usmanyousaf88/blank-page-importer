import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Target, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

export const ServicesModal: React.FC<ServiceModalProps> = ({ 
  isOpen, 
  onClose, 
  service 
}) => {
  const serviceDetails = {
    "Web Development": {
      expandedDescription: "Your digital identity is more than a website—it's your story, your brand, your connection to the world. We craft responsive, high-performance digital experiences that don't just look stunning, but speak directly to your unique vision.",
      keyBenefits: [
        "Personalized Design Tailored to Your Narrative",
        "Seamless Experience Across Every Device",
        "Lightning-Fast Performance That Captivates",
        "SEO-Optimized to Amplify Your Digital Voice"
      ],
      whyImportant: "Your digital presence is your global megaphone. We don't just design websites; we architect digital stages where your story unfolds, your brand resonates, and your vision becomes an immersive, unforgettable experience."
    },
    "Custom Web Application Software": {
      expandedDescription: "Your challenges are unique, and off-the-shelf solutions are relics of the past. We build a digital experience that doesn't just solve problems—it anticipates your needs, adapts to your workflow, and propels your vision forward.",
      keyBenefits: [
        "Precision-Engineered to Your Exact Specifications",
        "Intelligent Automation That Learns and Grows",
        
        "Scalable Architecture That Evolves With You"
      ],
      whyImportant: "Software is not a product—it's a living, breathing extension of your creativity. We craft digital companions that don't just execute tasks, but understand your rhythm, predict your needs, and dance to the unique melody of your ambition."
    },
    "AI Innovation": {
      expandedDescription: "Artificial Intelligence isn't just technology—it's the bridge between human potential and digital possibility. We harness AI to transform your most ambitious ideas from concepts to living, breathing digital realities.",
      keyBenefits: [
        "Predictive Intelligence That Anticipates Your Needs",
        "Natural Language Processing That Understands You",
        "Machine Learning Models That Grow Smarter",
        "Automated Insights That Reveal Hidden Opportunities"
      ],
      whyImportant: "AI is your digital crystal ball, your innovation accelerator. We don't just write algorithms; we create intelligent ecosystems that transform your wildest dreams into tangible, data-driven realities that push the boundaries of what's possible."
    },
    "Digital Innovation": {
      expandedDescription: "Innovation is an art form, and we're your digital atelier. We don't just follow trends—we create them, crafting digital experiences that are as unique and dynamic as the visionaries we serve.",
      keyBenefits: [
        "Cutting-Edge Technology Tailored to Your Vision",
        "Rapid Prototyping That Brings Ideas to Life",
        "User-Centric Design That Tells Your Story",
        "Emerging Tech Integration That Sets You Apart"
      ],
      whyImportant: "Innovation is not a destination—it's a continuous revolution. We are your digital alchemists, transforming the raw potential of your ideas into groundbreaking experiences that don't just disrupt markets, but redefine entire industries."
    },
    "Integrated Intelligence": {
      expandedDescription: "Your digital ecosystem should flow like a perfect conversation—intuitive, responsive, and deeply connected. We create intelligent systems that don't just work together, but communicate, learn, and evolve in harmony.",
      keyBenefits: [
        "Seamless Cross-Platform Synchronization",
        "Real-Time Adaptive Intelligence",
        "Holistic Digital Strategy That Connects All Dots",
        "Personalized Experience Across Every Touchpoint"
      ],
      whyImportant: "In the symphony of digital transformation, integration is the conductor. We orchestrate a seamless digital landscape where your technologies don't just coexist—they collaborate, communicate, and create magic in perfect harmony."
    },
    "Growth Solutions": {
      expandedDescription: "Growth isn't a destination—it's a dynamic journey. We provide more than solutions; we offer a digital compass that guides you through uncharted territories of opportunity and innovation.",
      keyBenefits: [
        "Strategic Technology Roadmapping",
        "Performance Optimization That Accelerates Potential",
        "Market Expansion Strategies Tailored to Your Unique Path",
        "Continuous Innovation Framework"
      ],
      whyImportant: "Growth is an art of perpetual reinvention. We are your strategic architects, designing digital pathways that transform potential into performance, challenges into opportunities, and your vision into a continuously evolving, unstoppable momentum."
    }
  };

  const currentServiceDetails = serviceDetails[service.title as keyof typeof serviceDetails] || {};

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
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Our Deep Dive Strategy
                  </h3>
                  <p className="text-muted-foreground">
                    {currentServiceDetails.expandedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Transformative Impact Points
                  </h3>
                  <ul className="space-y-2">
                    {currentServiceDetails.keyBenefits?.map((benefit, index) => (
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
                  Your Digital Transformation Starts Here
                </h3>
                <p className="text-muted-foreground italic">
                  {currentServiceDetails.whyImportant}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
