import { motion } from 'framer-motion';
import BasicCards from './components/BasicCards';
import InteractiveCards from './components/InteractiveCards';
import MediaCards from './components/MediaCards';
import LayoutCards from './components/LayoutCards';

const CardShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Background gradient and noise overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] dark:bg-grid-black/[0.02]" />
      
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                    Card Designs
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Explore our collection of versatile and beautiful card components designed 
                for various use cases and content types.
              </motion.p>
            </div>

            {/* Cards Grid */}
            <div className="space-y-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BasicCards />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <InteractiveCards />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <MediaCards />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <LayoutCards />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
