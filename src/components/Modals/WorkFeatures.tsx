import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Zap, CheckCircle, MessageCircle, HeartHandshake, Rocket} from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';

interface WorkFeatureContent {
  title: string;
  description: string;
  clientImportance: string;
  companyImportance: string;
  personalImportance: string;
  gradient: {
    from: string;
    to: string;
    text: string;
  };
  icon: React.ElementType;
}

const featureContent: Record<string, WorkFeatureContent> = {
  process: {
    title: "Our Process: Building Together",
    description: "Every great journey begins with understanding. We don't just build solutions; we build relationships that start with truly knowing you, your dreams, and your aspirations.",
    clientImportance: "For you, this means more than just getting a service - it's about having a partner who truly understands your vision. Our process ensures that every step we take together is purposeful, aligned with your goals, and designed to bring your dreams to life.",
    companyImportance: "At Intellisync Solutions, we believe that true innovation comes from deep understanding. Our process isn't just a methodology; it's our commitment to creating solutions that genuinely resonate with our clients' needs and aspirations.",
    personalImportance: "Throughout my career, I've learned that the most meaningful solutions come from genuine connections. When I sit down for a 1-1 consultation, I'm not just gathering requirements - I'm listening to your story, understanding your passions, and committing myself to helping you achieve your goals.",
    gradient: {
      from: "from-blue-500/20",
      to: "to-indigo-500/20",
      text: "from-blue-600 to-indigo-600"
    },
    icon: Target
  },
  commitment: {
    title: "Our Commitment: Excellence Through Dedication",
    description: "Excellence isn't just a goal - it's a commitment we make to every client, every project, and every line of code we write.",
    clientImportance: "When you choose Intellisync Solutions, you're choosing a partner who sees your success as our success. Our commitment means you'll always receive honest communication, innovative solutions tailored to your needs, and unwavering support.",
    companyImportance: "Excellence is woven into every aspect of our work. From our rigorous development practices to our client communication, we maintain the highest standards to deliver exceptional value.",
    personalImportance: "Throughout my career, I've lived by a simple principle: Trust and consistency do not live in isolation. This isn't just about writing code or building systems - it's about making a real difference in people's lives.",
    gradient: {
      from: "from-purple-500/20",
      to: "to-pink-500/20",
      text: "from-purple-600 to-pink-600"
    },
    icon: CheckCircle
  },
  expectations: {
    title: "Your Expectations: Our Blueprint for Success",
    description: "We believe in setting clear expectations and then consistently exceeding them. Your trust is earned through our reliability, transparency, and dedication.",
    clientImportance: "We understand that entrusting your project to us is a significant decision. That's why we've built our entire service model around ensuring you always feel informed, supported, and confident in our partnership.",
    companyImportance: "Meeting and exceeding expectations isn't just a goal - it's fundamental to how we operate. We've carefully crafted our processes to ensure consistency and excellence in everything we do.",
    personalImportance: "Having been on both sides of technology projects, I understand the importance of clear expectations and reliable delivery. Your trust drives me to ensure we not only meet but exceed your expectations at every turn.",
    gradient: {
      from: "from-emerald-500/20",
      to: "to-cyan-500/20",
      text: "from-emerald-600 to-cyan-600"
    },
    icon: Zap
  }
};

interface WorkFeaturesProps {
  isOpen: boolean;
  closeModal: () => void;
  feature: 'process' | 'commitment' | 'expectations';
}

export const WorkFeatures = ({ isOpen, closeModal, feature }: WorkFeaturesProps) => {
  const content = featureContent[feature];

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
              className={`bg-gradient-to-r ${content.gradient.from} ${content.gradient.to} dark:from-blue-400 dark:via-blue-500 dark:to-blue-700`}
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
                <div className={`
                  p-4 rounded-xl 
                  bg-gradient-to-br ${content.gradient.from} ${content.gradient.to}
                  mr-4
                `}>
                  <content.icon className="w-6 h-6" />
                </div>
                <h2 className={`
                  text-3xl font-bold 
                  bg-gradient-to-r ${content.gradient.text} 
                  bg-clip-text text-transparent
                `}>
                  {content.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {content.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-blue-500" /> 
                    Client Perspective
                  </h3>
                  <p className="text-muted-foreground">
                    {content.clientImportance}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Rocket className="w-5 h-5 mr-2 text-purple-500" /> 
                    Company Vision
                  </h3>
                  <p className="text-muted-foreground">
                    {content.companyImportance}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <HeartHandshake className="w-5 h-5 mr-2 text-green-500" />
                  A Personal Note
                </h3>
                <p className="text-muted-foreground italic">
                  {content.personalImportance}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
