import { motion } from 'framer-motion';
import { Badge } from '../../../../components/ui/badge';
import { ArrowRight } from 'lucide-react';

const BasicCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
        Basic Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Simple Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Simple</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Clean Design
            </h3>
            <p className="text-muted-foreground">
              A clean and simple card design with minimal styling for basic content presentation.
            </p>
          </div>
        </motion.div>

        {/* Gradient Border Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative group rounded-xl p-[1px] bg-gradient-to-b from-border to-border/0"
        >
          <div className="bg-card rounded-xl p-6">
            <Badge variant="secondary" className="mb-4">Gradient</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Gradient Border
            </h3>
            <p className="text-muted-foreground">
              A card with a subtle gradient border that adds depth and visual interest.
            </p>
          </div>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group backdrop-blur-sm bg-card/80 rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Glass</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Glass Effect
            </h3>
            <p className="text-muted-foreground">
              A modern glass-effect card with backdrop blur and transparency.
            </p>
          </div>
        </motion.div>

        {/* Hover Effect Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Interactive</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              Hover Effects
            </h3>
            <p className="text-muted-foreground">
              A card that responds to user interaction with subtle animations.
            </p>
            <ArrowRight className="mt-4 w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-200" />
          </div>
        </motion.div>

        {/* Accent Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group bg-gradient-to-b from-primary/10 to-transparent rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Accent</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Accent Background
            </h3>
            <p className="text-muted-foreground">
              A card with a subtle gradient background that adds a pop of color.
            </p>
          </div>
        </motion.div>

        {/* Minimal Card */}
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group bg-transparent rounded-xl overflow-hidden border border-border"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Minimal</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Minimalist
            </h3>
            <p className="text-muted-foreground">
              A minimalist card design with simple borders and clean typography.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BasicCards;
