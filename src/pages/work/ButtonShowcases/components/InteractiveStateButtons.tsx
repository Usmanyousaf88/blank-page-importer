import { motion } from 'framer-motion';
import { Button } from '../../../../components/ui/Button/button';
import { Loader2 } from 'lucide-react';

const InteractiveStateButtons = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Interactive State Buttons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hover State */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button 
            size="lg" 
            className="w-full hover:bg-blue-600 transition-colors"
          >
            Hover Me
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with hover state
          </p>
        </motion.div>

        {/* Loading State */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Loading state button
          </p>
        </motion.div>

        {/* Disabled State */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full" disabled>
            Disabled Button
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Disabled state button
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveStateButtons;
