import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TextEffect } from '@/components/core/text-effect';
import { cn } from '@/lib/utils';
import { 
  Sparkles, 
  Rocket, 
  Code, 
  Laptop, 
  Cpu, 
  Cloud, 
  Globe,
  Zap,
  Terminal,
  Layers,
  Braces,
  Network,
  Workflow,
  Trello,
  Aperture,
  Compass,
  Lightbulb,
  Target,
  Gem,
  Puzzle
} from 'lucide-react';

const companionWords = [
  ' Experiences',
' Connections',
'Solutions',
'Innovation',
  ' Dreams',
  ' Ideas',
  ' Visions'
];

const HomePageHero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStreaming(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          (prevIndex + 1) % companionWords.length
        );
        setIsStreaming(true);
      }, 500); // Short pause between words
    }, 3000); // Total cycle time

    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.section 
      ref={ref}
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        isStreaming ? "opacity-100" : "opacity-95"
      )}
      style={{ 
        backgroundPosition: `center ${backgroundY}`,
        perspective: "1000px"
      }}
    >
      {/* Cosmic Background Blobs */}
      <motion.div 
        className="absolute w-96 h-96 bg-blue-200/30 dark:bg-blue-900/30 -top-20 -right-20 rounded-full blur-3xl opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 0.5], 
          scale: [0.8, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      <motion.div 
        className="absolute w-96 h-96 bg-purple-200/30 dark:bg-purple-900/30 -bottom-20 -left-20 rounded-full blur-3xl opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 0.5], 
          scale: [0.8, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Hero Content Container */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        style={{ 
          y: textY,
          transformStyle: "preserve-3d"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20, rotateX: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: { 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100 
              }
            }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Designing Digital
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block"
                >
                  {companionWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
            
            <TextEffect 
              className="text-xl md:text-2xl text-muted-foreground max-w-xl"
              preset="fade"
            >
              At IntelliSync Solutions, we don’t just create digital experiences – we bring your vision to life with seamless, user-centered solutions designed to inspire and engage. Together, let’s craft something truly extraordinary.
            </TextEffect>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TextEffect className="text-sm md:text-base">React.js</TextEffect>
            <TextEffect className="text-sm md:text-base">Next.js</TextEffect>
            <TextEffect className="text-sm md:text-base">TypeScript</TextEffect>
            <TextEffect className="text-sm md:text-base">Node.js</TextEffect>
            <TextEffect className="text-sm md:text-base">Python</TextEffect>
            <TextEffect className="text-sm md:text-base">TailwindCSS</TextEffect>
          </motion.div>
        </div>

        {/* Right Side: Interactive Content */}
        <motion.div 
          className="flex items-center justify-center relative w-full h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {(() => {
              const allIcons = [
                { icon: <Sparkles className="w-12 h-12 text-blue-500" /> },
                { icon: <Rocket className="w-12 h-12 text-purple-500" /> },
                { icon: <Code className="w-12 h-12 text-green-500" /> },
                { icon: <Laptop className="w-12 h-12 text-red-500" /> },
                { icon: <Cpu className="w-12 h-12 text-yellow-500" /> },
                { icon: <Cloud className="w-12 h-12 text-indigo-500" /> },
                { icon: <Globe className="w-12 h-12 text-pink-500" /> },
                { icon: <Zap className="w-12 h-12 text-orange-500" /> },
                { icon: <Terminal className="w-12 h-12 text-teal-500" /> },
                { icon: <Layers className="w-12 h-12 text-cyan-500" /> },
                { icon: <Braces className="w-12 h-12 text-gray-500" /> },
                { icon: <Network className="w-12 h-12 text-blue-500" /> },
                { icon: <Workflow className="w-12 h-12 text-purple-500" /> },
                { icon: <Trello className="w-12 h-12 text-pink-500" /> },
                { icon: <Aperture className="w-12 h-12 text-yellow-500" /> },
                { icon: <Compass className="w-12 h-12 text-orange-500" /> },
                { icon: <Lightbulb className="w-12 h-12 text-green-500" /> },
                { icon: <Target className="w-12 h-12 text-red-500" /> },
                { icon: <Gem className="w-12 h-12 text-indigo-500" /> },
                { icon: <Puzzle className="w-12 h-12 text-cyan-500" /> }
              ];

              return allIcons.map((item, index) => {
                const totalIcons = allIcons.length;
                const angle = (index * 360) / totalIcons;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5,
                      x: 0,
                      y: 0 
                    }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5],
                      x: [
                        0, 
                        Math.cos(angle * Math.PI / 180) * 400, 
                        Math.cos(angle * Math.PI / 180) * 300, 
                        0
                      ],
                      y: [
                        0, 
                        Math.sin(angle * Math.PI / 180) * 400, 
                        Math.sin(angle * Math.PI / 180) * 300, 
                        0
                      ],
                      rotate: [0, 360, -360, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    style={{
                      position: 'absolute',
                      transformOrigin: 'center'
                    }}
                  >
                    {item.icon}
                  </motion.div>
                );
              });
            })()}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomePageHero;
