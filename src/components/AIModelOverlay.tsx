import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AIModelNav from './AIModelNav';

interface AIModelOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIModelOverlay: React.FC<AIModelOverlayProps> = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative w-full max-w-3xl bg-background rounded-xl shadow-lg p-6">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative w-full h-[70vh] overflow-y-auto">
                <AIModelNav inOverlay={true} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIModelOverlay;
