import { motion } from 'framer-motion';
import { Button } from '../../../../components/ui/Button/button';

const BasicButtons = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Basic Buttons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full">
            Primary Button
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Standard primary button for main actions
          </p>
        </motion.div>

        {/* Secondary Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button variant="secondary" size="lg" className="w-full">
            Secondary Button
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Alternative action button
          </p>
        </motion.div>

        {/* Outline Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button variant="outline" size="lg" className="w-full">
            Outline Button
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Subtle button style with border
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BasicButtons;
