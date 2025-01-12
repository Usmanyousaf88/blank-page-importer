import { motion } from 'framer-motion';
import BasicButtons from './components/BasicButtons';
import InteractiveStateButtons from './components/InteractiveStateButtons';
import ActionButtons from './components/ActionButtons';
import InteractiveButtons from './components/InteractiveButtons';
import AnimatedButtons from './components/AnimatedButtons';

const ButtonShowcase = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Button Designs
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our collection of beautiful and interactive button components designed 
          for various use cases and interactions.
        </p>

        <div className="space-y-16">
          <BasicButtons />
          <InteractiveStateButtons />
          <ActionButtons />
          <InteractiveButtons />
          <AnimatedButtons />
        </div>
      </motion.div>
    </div>
  );
};

export default ButtonShowcase;
