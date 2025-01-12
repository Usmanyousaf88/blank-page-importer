import { motion } from 'framer-motion';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/Button/button';
import { Heart, Share2, MessageCircle, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

const InteractiveCards = () => {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
        Interactive Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Social Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">Social</Badge>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Social Interaction
            </h3>
            <p className="text-muted-foreground mb-4">
              A card with social interaction features like likes and comments.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setLiked1(!liked1)}
              >
                <Heart className={`h-4 w-4 ${liked1 ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{liked1 ? '1,024' : '1,023'}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>128</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Hover Reveal Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group relative bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-6">
            <Badge variant="secondary" className="mb-4">Reveal</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-white transition-colors">
              Hover Reveal
            </h3>
            <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
              Hover over this card to reveal additional content and styling.
            </p>
            <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Animated Button Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Interactive</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Animated Button
            </h3>
            <p className="text-muted-foreground mb-4">
              A card with an animated button that responds to user interaction.
            </p>
            <Button className="w-full group/button overflow-hidden relative">
              <span className="relative z-10">Try Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
        </motion.div>

        {/* Rating Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Rating</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Star Rating
            </h3>
            <p className="text-muted-foreground mb-4">
              Interactive star rating system with hover effects.
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-yellow-500"
                >
                  <Star className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sparkle Effect Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">Effects</Badge>
              <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Sparkle Effects
            </h3>
            <p className="text-muted-foreground">
              A card with animated sparkle effects and interactions.
            </p>
          </div>
        </motion.div>

        {/* Like Animation Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Animation</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Like Animation
            </h3>
            <p className="text-muted-foreground mb-4">
              Click the heart to see a smooth animation effect.
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12"
              onClick={() => setLiked2(!liked2)}
            >
              <motion.div
                animate={liked2 ? {
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  transition: { duration: 0.5 }
                } : {}}
              >
                <Heart className={`h-6 w-6 ${liked2 ? 'fill-red-500 text-red-500' : ''}`} />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCards;
