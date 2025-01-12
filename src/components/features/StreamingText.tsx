import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface StreamingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  delay?: number; // initial delay before starting
  color?: string; // final color of the text
  gradientStart?: string; // starting dark color for gradient
  dynamicColors?: string[]; // array of colors to cycle through during streaming
}

const StreamingText = ({
  text,
  speed = 50,
  className = '',
  onComplete,
  cursor = true,
  delay = 0,
  color,
  gradientStart,
  dynamicColors
}: StreamingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "100px 0px 0px 0px"
  });

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    
    // Reset state when text changes or comes into view
    setCurrentIndex(-1);
    setIsComplete(false);

    // Initial delay before starting
    timeout = setTimeout(() => {
      const streamText = () => {
        setCurrentIndex(prev => {
          const next = prev + 1;
          if (next < text.length) {
            // Calculate dynamic speed based on position in text
            const progress = next / text.length;
            const dynamicSpeed = Math.min(
              speed,
              speed * (1 + progress * 2) // Speed increases gradually
            );
            
            timeout = setTimeout(streamText, dynamicSpeed);
            return next;
          } else {
            setIsComplete(true);
            if (onComplete) onComplete();
            return prev;
          }
        });
      };
      streamText();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, delay, isInView, onComplete]);

  return (
    <span ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}-${text}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: index <= currentIndex ? 1 : 0,
            y: index <= currentIndex ? 0 : 10,
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1], // Custom easing for smoother animation
            opacity: { duration: 0.3 },
            y: { duration: 0.4 }
          }}
          style={{
            color: isComplete ? color : dynamicColors && dynamicColors[index % dynamicColors.length] || gradientStart,
            backgroundImage: isComplete ? undefined : dynamicColors && dynamicColors[index % dynamicColors.length] ? undefined : `linear-gradient(to right, ${gradientStart}, ${color})`,
            backgroundClip: isComplete || dynamicColors && dynamicColors[index % dynamicColors.length] ? undefined : 'text',
            WebkitBackgroundClip: isComplete || dynamicColors && dynamicColors[index % dynamicColors.length] ? undefined : 'text',
          }}
        >
          {char}
        </motion.span>
      ))}
      <AnimatePresence mode="wait">
        {cursor && !isComplete && (
          <motion.span
            key="cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block ml-[1px] -translate-y-[2px]"
            style={{
              color: isComplete ? color : dynamicColors && dynamicColors[currentIndex % dynamicColors.length] || gradientStart,
              backgroundImage: isComplete ? undefined : dynamicColors && dynamicColors[currentIndex % dynamicColors.length] ? undefined : `linear-gradient(to right, ${gradientStart}, ${color})`,
              backgroundClip: isComplete || dynamicColors && dynamicColors[currentIndex % dynamicColors.length] ? undefined : 'text',
              WebkitBackgroundClip: isComplete || dynamicColors && dynamicColors[currentIndex % dynamicColors.length] ? undefined : 'text',
            }}
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export { StreamingText };
