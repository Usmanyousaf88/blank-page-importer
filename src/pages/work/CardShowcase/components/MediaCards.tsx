import { motion } from 'framer-motion';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/Button/button';
import { Play, Bookmark, Share2, MoreHorizontal, ExternalLink } from 'lucide-react';

const MediaCards = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
        Media Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white">
                <Play className="h-6 w-6" />
              </Button>
            </div>
            <Badge variant="secondary" className="absolute top-4 right-4">
              12:34
            </Badge>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Video Tutorial
            </h3>
            <p className="text-muted-foreground mb-4">
              Learn the basics of web development in this comprehensive guide.
            </p>
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Watch Now
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Article Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Article"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">Article</Badge>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Modern Web Design
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore the latest trends in web design and development.
            </p>
            <Button variant="outline" className="w-full">
              Read More
            </Button>
          </div>
        </motion.div>

        {/* Gallery Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="grid grid-cols-2 gap-1">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Gallery 1"
              className="w-full h-24 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Gallery 2"
              className="w-full h-24 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Gallery 3"
              className="w-full h-24 object-cover"
            />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Gallery 4"
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-medium">+8</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Project Gallery
            </h3>
            <p className="text-muted-foreground mb-4">
              View our latest project portfolio and case studies.
            </p>
            <Button variant="outline" className="w-full">
              View Gallery
            </Button>
          </div>
        </motion.div>

        {/* Podcast Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Tech Talk Podcast
            </h3>
            <p className="text-muted-foreground mb-4">
              Listen to the latest episode about modern web development.
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">45:12</Badge>
              <Button variant="ghost" size="sm">
                Listen Now
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Live Stream Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Live Stream"
              className="w-full h-48 object-cover"
            />
            <Badge variant="destructive" className="absolute top-4 left-4">
              LIVE
            </Badge>
            <div className="absolute bottom-4 left-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
              <span className="text-white text-sm">1.2k watching</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Live Coding Session
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our live coding session and learn in real-time.
            </p>
            <Button className="w-full">
              Join Stream
            </Button>
          </div>
        </motion.div>

        {/* External Link Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border/40"
        >
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">External</Badge>
            <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              Resource Link
            </h3>
            <p className="text-muted-foreground mb-4">
              Access external resources and documentation.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">docs.example.com</span>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCards;
