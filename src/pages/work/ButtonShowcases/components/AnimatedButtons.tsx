import { motion } from 'framer-motion';
import { Button } from '../../../../components/ui/Button/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const AnimatedButtons = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Animated Buttons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pulse Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button
            size="lg"
            className="w-full relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <Sparkles className="mr-2 h-4 w-4" />
            Pulse Effect
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with pulse animation
          </p>
        </motion.div>

        {/* Slide Arrow Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button
            size="lg"
            className="w-full group"
          >
            <span>Slide</span>
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with sliding arrow
          </p>
        </motion.div>

        {/* Energetic Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            >
              <Zap className="mr-2 h-4 w-4" />
              Energetic
            </Button>
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with scale animation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedButtons;
