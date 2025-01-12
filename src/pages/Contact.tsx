import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Target, 
  
  Zap, 

  Shield,
  Info
} from 'lucide-react';
import { ScrollAnimation } from '../components/features/ScrollAnimation';
import ContactFormModal from '../components/Modals/ContactFormModal';
import TestimonialModal from '../components/Modals/TestimonialModal';
import { TextEffect } from '../components/core/text-effect';

// Advanced Interactive Button Component
export const AdvancedInteractiveButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ElementType;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}> = ({ children, onClick, variant = 'primary', icon: Icon, size = 'medium', className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        rotate: [0, -2, 2, -2, 2, 0],
        transition: {
          duration: 0.4,
          type: "tween"
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }}
      className={`
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
          : 'bg-white text-blue-600 border-2 border-blue-600 dark:bg-gray-800 dark:text-white dark:border-white'}
        ${size === 'small' ? 'px-2 py-1 text-sm' 
          : size === 'medium' ? 'px-4 py-2' 
          : 'px-6 py-3 text-lg'}
        rounded-full transition-all duration-300 ease-in-out
        hover:shadow-2xl
        flex items-center justify-center space-x-2
        ${className}
      `}
      onClick={onClick}
    >
      {/* Animated Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isHovered 
          ? {
              opacity: 1,
              x: [-2, 2, -2, 2, 0],
              transition: {
                duration: 0.5,
                delay: 0.2,
                x: {
                  duration: 0.4,
                  repeat: Infinity,
                  repeatDelay: 0.1,
                  ease: "easeInOut"
                }
              }
            }
          : { opacity: 1 }
        }
        className="relative z-10 flex items-center justify-center"
      >
        {Icon && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mr-2"
          >
            <Icon size={20} />
          </motion.div>
        )}
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </motion.button>
  );
};

const ContactHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const connectWords = "Let's Connect & Create".split(' ');

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 relative px-4"
      >
        {/* Bouncing Message Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex justify-center mb-6"
        >
          <Shield 
            size={64} 
            className="text-blue-500 dark:text-blue-400 opacity-80" 
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          <AnimatePresence mode="wait">
            {connectWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className={`inline-block mr-2 ${
                  word === "Connect" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
          Transform ideas into reality. Reach out and let's spark a conversation that could change everything.
        </p>
        
        <div className="flex justify-center space-x-4">
          <AdvancedInteractiveButton 
            onClick={() => setIsModalOpen(true)} 
            icon={Send}
            size="large"
          >
            Get in Touch
          </AdvancedInteractiveButton>
        </div>
      </motion.div>
      
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 dark:bg-blue-300/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 dark:bg-purple-300/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>

      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};



const StaggeredAsymmetricalLayout: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    quote: string;
    author: string;
    role: string;
    avatar?: string;
    fullStory?: JSX.Element;
  } | null>(null);
  
  const whyChooseUsCards = [
    {
      icon: <Target size={48} className="text-blue-500" />,
      title: "Precision-Driven Solutions",
      description: "Meticulously crafted strategies tailored to your unique challenges.",
      testimonial: {
        quote: "Their attention to detail is unparalleled. Every solution feels custom-made.",
        author: "Emily",
        role: "Tech Innovator",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
        fullStory: (
          <TextEffect 
            preset="fade" 
            className="text-gray-700 dark:text-gray-300 italic"
          >
            When we approached Chris, we had a complex digital transformation idea. Chris didn't just provide a solution; he dissected our entire workflow, identified opportunities, and designed a custom strategy that increased our data use effectiveness. His precision and deep understanding of our unique ecosystem is what sets IntelliSync Solutions apart from any other tech partner we've worked with.
          </TextEffect>
        ),
      },
      gradient: {
        from: "from-blue-500/20",
        to: "to-indigo-500/20",
        text: "from-blue-600 to-indigo-600"
      }
    },
    {
      icon: <Zap size={48} className="text-green-500" />,
      title: "Rapid Innovation",
      description: "Swift, agile development that transforms ideas into reality.",
      testimonial: {
        quote: "They don't just meet deadlines, they redefine what's possible.",
        author: "Michael",
        role: "Startup Founder",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        fullStory: (
          <TextEffect 
            preset="fade" 
            className="text-gray-700 dark:text-gray-300 italic"
          >
            As a startup founder, time and precision are everything. Chris took the time to understand our vision from day one. They not only developed our Website in record time but also provided strategic insights that helped us secure our first client. Their agile approach and innovative thinking turned our concept into a market-ready product faster than we ever imagined.
          </TextEffect>
        ),
      },
      gradient: {
        from: "from-green-500/20",
        to: "to-emerald-500/20",
        text: "from-green-600 to-emerald-600"
      }
    },
    {
      icon: <Shield size={48} className="text-purple-500" />,
      title: "Trusted Partnership",
      description: "Building lasting relationships through transparency and integrity.",
      testimonial: {
        quote: "More than a service provider, they're a true strategic partner.",
        author: "Sarah",
        role: "Enterprise Leader",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        fullStory: (
          <TextEffect 
            preset="fade" 
            className="text-gray-700 dark:text-gray-300 italic"
          >
            In the enterprise world, trust is everything. Chris has been a trusted partner because he always takes the time to listen to our challenges and understand our needs. That's not just a service provider, and they consistently demonstrated an unwavering commitment to our success.
          </TextEffect>
        ),
      },
      gradient: {
        from: "from-purple-500/20",
        to: "to-violet-500/20",
        text: "from-purple-600 to-violet-600"
      }
    }
  ];

  return (
    <>
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {whyChooseUsCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                className={`
                  bg-gradient-to-r ${item.gradient.from} ${item.gradient.to} 
                  rounded-3xl 
                  shadow-2xl 
                  hover:shadow-[0_45px_70px_-20px_rgba(0,0,0,0.2)] 
                  transition-all 
                  duration-300 
                  p-6 
                  relative 
                  overflow-hidden
                `}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className={`ml-4 text-2xl font-bold ${item.gradient.text}`}>
                    {item.title}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedTestimonial(item.testimonial)}
                    className="ml-auto p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-foreground" />
                  </motion.button>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ScrollAnimation>

      <TestimonialModal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        testimonial={selectedTestimonial || {
          quote: '',
          author: '',
          role: ''
        }}
      />
    </>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen pt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      
      <ScrollAnimation>
        <div className="relative z-10">
          <ContactHero />
          <StaggeredAsymmetricalLayout />
        </div>
      </ScrollAnimation>
    </main>
  );
};

export default Contact;
