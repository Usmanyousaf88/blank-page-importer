import React from 'react';
import { motion } from 'framer-motion';

const PageShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
      
      {/* Main content */}
      <div className="relative">
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Page Design Showcase
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Explore our collection of modern, responsive page designs for various applications.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {/* Add your page design showcase content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageShowcase;
