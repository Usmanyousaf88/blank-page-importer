import { motion } from 'framer-motion';
import TopNavigation from './components/TopNavigation';
import SideNavigation from './components/SideNavigation';
import TabNavigation from './components/TabNavigation';
import BottomNavigation from './components/BottomNavigation';
import DropdownMenu from './components/DropdownMenu';
import Breadcrumbs from './components/Breadcrumbs';

const NavigationShowcase = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-secondary/20" />
      </div>

      {/* Background noise overlay */}
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
                    Navigation Elements
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Explore our collection of modern navigation components designed 
                for seamless user experience and accessibility.
              </motion.p>
            </div>

            {/* Navigation Components Grid */}
            <div className="space-y-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TopNavigation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <SideNavigation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TabNavigation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <BottomNavigation />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <DropdownMenu />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Breadcrumbs />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavigationShowcase;
