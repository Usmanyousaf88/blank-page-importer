import { motion } from 'framer-motion';
import { Button } from '../../../../components/ui/Button/button';
import { Download, Share2, Trash2 } from 'lucide-react';

const ActionButtons = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Action Buttons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Download Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full" variant="default">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with download action
          </p>
        </motion.div>

        {/* Share Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full" variant="secondary">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Button with share action
          </p>
        </motion.div>

        {/* Delete Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button size="lg" className="w-full" variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Destructive action button
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionButtons;
