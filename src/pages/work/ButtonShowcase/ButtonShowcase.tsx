import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Code, 
  Palette, 
  Users, 
 
  Check, 
  X, 
  Send, 
 
  Trash, 
  Star, 
  Zap, 
  Bell,
  
} from 'lucide-react';
import { Button } from '../../../components/ui/Button/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../../components/ui/dialog";
import { Toaster, toast } from 'sonner';
import { StreamingText } from '../../../components/features/StreamingText';

const ButtonShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleButtonToast = (buttonName: string) => {
    toast(`Congrats, You used the "${buttonName}" Button!`);
  };

  const handleVariantButtons = (variant: string) => {
    console.log(`Attempting to toast for variant: ${variant}`);
    handleButtonToast(variant);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Button Showcase',
      text: 'Check out this awesome button collection!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        handleButtonToast("Share");
        await navigator.share(shareData);
        toast.success('Page shared successfully!');
      } else {
        toast.error('Web Share API not supported');
      }
    } catch (error: unknown) {
      console.error('Error sharing page:', error);
      toast.error('Error sharing page');
    }
  };

  const openModal = () => {
    setIsOpen(true);
    handleButtonToast("Discover My Journey");
    toast("Let me share my passion for design with you", {
      duration: 3000,
    });
  };

  const simulateLoading = () => {
    setIsLoading(true);
    handleButtonToast("Simulate Loading");
    toast.loading("Your request is being processed");
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your request has been processed successfully");
    }, 2000);
  };

  const handleNotification = () => {
    setNotificationCount(prev => prev + 1);
    handleButtonToast("Notifications");
    toast(`You have ${notificationCount + 1} unread messages`);
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
    handleButtonToast("Delete");
    setShowConfirmModal(true);
    toast.error("Please confirm if you want to delete this item");
  };

  const confirmDelete = () => {
    handleButtonToast("Confirm Delete");
    toast.success("The item has been deleted successfully");
    setShowConfirmModal(false);
  };

  const handleApprove = () => {
    console.log('Approve button clicked');
    handleButtonToast("Approve");
    toast.success("The requested action has been approved successfully");
  };

  const handleDecline = () => {
    console.log('Decline button clicked');
    handleButtonToast("Reject");
    toast.error("The requested action has been rejected");
  };

  const handleSend = () => {
    console.log('Send button clicked');
    handleButtonToast("Send");
    toast.success("Your message has been sent successfully. We'll get back to you soon!");
  };

  const handleCart = () => {
    setCartCount(prev => prev + 1);
    handleButtonToast("Add to Cart");
    toast.success(`Added to cart. Total items: ${cartCount + 1}`);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black text-white pt-24 pb-6 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.button
        onClick={openModal}
        className="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Discover My Journey
          </span>
          <ArrowRight className="w-5 h-5 text-purple-400" />
        </span>
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl text-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Crafting Digital Experiences with Passion & Purpose
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-lg mt-4">
              <StreamingText 
                text="Every pixel speaks a purpose, every interaction leaves a mark. Hover on a Title to see a change."
                speed={50}
                className="text-slate-300"
                cursor={false}
              />
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Heart className="w-6 h-6 text-pink-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                    Passion for Digital Integration
                  </h3>
                  <p className="text-slate-300 mt-2">
                    I believe design is about more than just visuals—it's about creating deeply personal experiences that resonate and inspire.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Sparkles className="w-6 h-6 text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    Creative Vision
                  </h3>
                  <p className="text-slate-300 mt-2">
                    Each project is a chance to explore new ideas and push boundaries, translating concepts into compelling digital stories.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Users className="w-6 h-6 text-sky-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    User-Centered Approach
                  </h3>
                  <p className="text-slate-300 mt-2">
                    Collaboration is at the heart of my process, designing personalized solutions that deliver impact and authenticity.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Code className="w-6 h-6 text-emerald-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Technical Excellence
                  </h3>
                  <p className="text-slate-300 mt-2">
                    I blend technical expertise with a human touch to transform creative ideas into intuitive, high-performing solutions.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Palette className="w-6 h-6 text-violet-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                    Aesthetic Sensibility
                  </h3>
                  <p className="text-slate-300 mt-2">
                    With an eye for detail and a knack for visual storytelling, I create designs that balance artistry with usability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                toast.success("I'm excited to collaborate on your next project.");
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white transition-all duration-300"
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShare}
            >
              Share Page
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative mt-12 p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
        <p className="text-lg text-white/90 italic">
          "I'm not just building interfaces; I'm crafting experiences that leave lasting 
          impressions and inspire meaningful connections."
        </p>
      </div>

      {/* Button Showcase Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Interactive Button Collection
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Explore our collection of beautiful, accessible, and interactive button designs 
              that enhance user experience and engagement.
            </p>
          </div>

          <div className="space-y-16">
            {/* Basic Variants */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Basic Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  variant="default" 
                  className="w-full" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVariantButtons("Default Button");
                    handleButtonToast("Default Button");
                    toast.success("Default Button clicked");
                  }}
                >
                  Default Button
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVariantButtons("Secondary Button");
                    handleButtonToast("Secondary Button");
                    toast.success("Secondary Button clicked");
                  }}
                >
                  Secondary
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVariantButtons("Outline Button");
                    handleButtonToast("Outline Button");
                    toast.success("Outline Button clicked");
                  }}
                >
                  Outline
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVariantButtons("Ghost Button");
                    handleButtonToast("Ghost Button");
                    toast.success("Ghost Button clicked");
                  }}
                >
                  Ghost
                </Button>
              </div>
            </section>

            {/* Action Buttons */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Action Buttons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  onClick={() => {
                    simulateLoading();
                    toast.success("Simulate Loading button clicked");
                  }}
                >
                  <Zap className="mr-2 h-4 w-4" /> {isLoading ? 'Loading...' : 'Simulate Loading'}
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={() => {
                    handleNotification();
                    toast.success("Notifications button clicked");
                  }}
                >
                  <Bell className="mr-2 h-4 w-4" /> Notifications
                </Button>
                
                <Button 
                  type="button"
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    handleDelete();
                    toast.error("Delete button clicked");
                  }}
                >
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600"
                  onClick={() => {
                    handleApprove();
                    toast.success("Approve button clicked");
                  }}
                >
                  <Check className="mr-2 h-4 w-4" /> Approve
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    handleDecline();
                    toast.error("Decline button clicked");
                  }}
                >
                  <X className="mr-2 h-4 w-4" /> Decline
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600"
                  onClick={() => {
                    handleSend();
                    toast.success("Send button clicked");
                  }}
                >
                  <Send className="mr-2 h-4 w-4" /> Send
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                  onClick={() => {
                    handleCart();
                    toast.success("Add to Cart button clicked");
                  }}
                >
                  <Star className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                >
                  Share Page
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={simulateLoading}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Simulate Loading'}
                </Button>
                
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={handleCart}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Star className="w-5 h-5" /> Add to Cart ({cartCount})
                </Button>
                
                <Button 
                  type="button"
                  variant={isLiked ? "default" : "outline"}
                  className={`w-full ${isLiked 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600' 
                    : 'border-pink-400 text-pink-400 hover:bg-pink-950/30'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                    handleButtonToast("Like");
                    toast.success(isLiked ? "Removed from likes" : "Added to likes");
                  }}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isLiked ? 'fill-white' : 'text-pink-400'}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </Button>
              </div>
            </section>

            {/* Animated Buttons */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Animated Buttons</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                    onClick={() => {
                      toast.success("Hover and click effects demonstration");
                    }}
                  >
                    <motion.div
                      className="flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      Hover Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 0 }}
                >
                  <Button 
                    className="w-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                    onClick={() => {
                      toast.success("Watch me bounce on hover");
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="flex items-center"
                    >
                      <Star className="mr-2 h-4 w-4" />
                      Bounce Effect
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    rotate: [-2, 2, -2, 2, 0],
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    onClick={() => {
                      toast.success("Watch the shake animation on hover");
                    }}
                  >
                    <motion.div 
                      className="flex items-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Shake Effect
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Loading Button */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Loading Button</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={simulateLoading}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Simulate Loading'}
                </Button>
              </div>
            </section>

            {/* Cart Button */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Cart Button</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={handleCart}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Star className="w-5 h-5" /> Add to Cart ({cartCount})
                </Button>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <DialogHeader>
                  <DialogTitle>Welcome to the Modal</DialogTitle>
                  <DialogDescription>
                    This is an example of a modal dialog. It can be used to display important information or gather user input.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button onClick={() => {
                    toast.success("Action completed successfully.");
                    setShowModal(false);
                  }}>
                    Save Changes
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmModal && (
          <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <DialogHeader>
                  <DialogTitle>Confirm Delete</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={confirmDelete}>
                    Delete
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      <Toaster 
        position="top-right" 
        richColors 
        className="z-[9999]"
        toastOptions={{
          style: { 
            zIndex: 9999,
            position: 'fixed',
            top: '20px',
            right: '20px'
          }
        }}
      />
    </div>
  );
};

export default ButtonShowcase;
