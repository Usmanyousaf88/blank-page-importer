import { motion } from 'framer-motion';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/Button/button';
import { ArrowRight, ChevronRight, Check, ArrowUpRight } from 'lucide-react';

const LayoutCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
        Layout Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Horizontal Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40 sm:col-span-2"
        >
          <div className="grid sm:grid-cols-2 gap-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Horizontal"
              className="w-full h-full object-cover"
            />
            <div className="p-6">
              <Badge variant="secondary" className="mb-4">Featured</Badge>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Horizontal Layout
              </h3>
              <p className="text-muted-foreground mb-4">
                A wide card layout perfect for featuring important content with an image.
              </p>
              <Button className="group/button">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stacked Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Stacked"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Stacked Layout
              </h3>
              <p className="text-white/80 text-sm">
                Image with overlaid text and gradient
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex-1">Preview</Button>
              <Button size="sm" className="flex-1">Details</Button>
            </div>
          </div>
        </motion.div>

        {/* List Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">List</Badge>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              List Layout
            </h3>
            {['Feature One', 'Feature Two', 'Feature Three'].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0"
              >
                <Check className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{item}</span>
                <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Split Content Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="grid grid-cols-3">
            <div className="col-span-1 bg-primary/10 p-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">85%</span>
            </div>
            <div className="col-span-2 p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Split Content
              </h3>
              <p className="text-muted-foreground">
                Divided sections for different types of content.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Grid</Badge>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Grid Layout
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted flex items-center justify-center"
                >
                  <span className="text-2xl font-semibold text-muted-foreground">
                    {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Overlay Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group relative bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Overlay"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative p-6 h-full flex flex-col justify-end">
            <Badge variant="secondary" className="mb-4 w-fit">Overlay</Badge>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Overlay Layout
            </h3>
            <p className="text-white/80 mb-4">
              Full image background with overlay gradient and content.
            </p>
            <Button variant="outline" className="w-fit">
              Explore
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LayoutCards;
