import { motion, AnimatePresence, Target, TargetAndTransition, AnimationProps as FramerAnimationProps } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationVariant = {
  initial?: Target;
  animate?: TargetAndTransition | ((custom?: number) => TargetAndTransition);
  exit?: Target;
  transition?: FramerAnimationProps["transition"];
};

interface AnimationProps extends Omit<FramerAnimationProps, 'initial' | 'animate' | 'exit' | 'transition'> {
  children: ReactNode;
  type?: 
    | 'fade' 
    | 'slide' 
    | 'scale' 
    | 'bounce' 
    | 'rotate' 
    | 'pulse' 
    | 'shake'
    | 'zoom'
    | 'flip'
    | 'swing'
    | 'drop'
    | 'elastic'
    | 'pop'
    | 'slide-fade'
    | 'wave'
    | 'blur'
    | 'expand'
    | 'contract'
    | 'ripple'
    | 'highlight'
    | 'skew'
    | 'morph'
    | 'glow'
    | 'curtain'
    | 'parallax'
    | '3d-rotate'
    | 'staggered';
  duration?: number;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right'; // For slide, curtain
  intensity?: number; // For blur, glow
  color?: string; // For highlight, glow
  custom?: number;
}

const animations: { [key: string]: AnimationVariant } = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  slide: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: {
      type: "tween"
    }
  },
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
      type: "tween"
    },
  },
  rotate: {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
      type: "tween"
    },
  },
  pulse: {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1],
      boxShadow: [
        '0 0 0 rgba(var(--primary), 0.6)',
        '0 0 30px rgba(var(--primary), 0.8)',
        '0 0 0 rgba(var(--primary), 0.6)'
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      },
      type: "tween"
    }
  },
  shake: {
    animate: {
      x: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 0.1,
        ease: "easeInOut"
      },
      type: "tween"
    }
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { scale: 0.5, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  flip: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { 
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { rotateY: 90, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  swing: {
    animate: {
      rotate: [0, 15, -15, 10, -10, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 1
      },
      type: "tween"
    }
  },
  drop: {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    exit: { y: 100, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  elastic: {
    animate: {
      scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      },
      type: "tween"
    }
  },
  pop: {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      },
      type: "tween"
    }
  },
  "slide-fade": {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { x: 20, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  wave: {
    animate: (custom: number = 0) => ({
      y: [0, -15, 0],
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        repeat: Infinity
      }
    })
  },
  blur: {
    initial: { filter: "blur(0px)" },
    animate: { 
      filter: "blur(4px)",
      transition: {
        duration: 0.3
      }
    },
    exit: { filter: "blur(0px)" },
    transition: {
      type: "tween"
    }
  },
  expand: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { scale: 0, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  contract: {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { scale: 1.2, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  ripple: {
    animate: {
      scale: [1, 1.2, 1.5],
      opacity: [1, 0.5, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  },
  highlight: {
    animate: {
      backgroundColor: ["rgba(255,255,0,0)", "rgba(255,255,0,0.2)", "rgba(255,255,0,0)"],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  },
  skew: {
    initial: { skewX: -30, opacity: 0 },
    animate: {
      skewX: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { skewX: 30, opacity: 0 },
    transition: {
      type: "tween"
    }
  },
  morph: {
    animate: {
      borderRadius: ["20%", "50%", "20%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  glow: {
    animate: {
      boxShadow: [
        "0 0 0 rgba(255,255,255,0)",
        "0 0 20px rgba(255,255,255,0.5)",
        "0 0 0 rgba(255,255,255,0)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  },
  curtain: {
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      scaleY: 0,
      transformOrigin: "bottom"
    },
    transition: {
      type: "tween"
    }
  },
  parallax: {
    animate: (custom: number = 0) => ({
      y: custom,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    })
  },
  "3d-rotate": {
    initial: { 
      perspective: "1000px",
      rotateX: 90,
      opacity: 0 
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: { 
      rotateX: -90,
      opacity: 0 
    },
    transition: {
      type: "tween"
    }
  },
  staggered: {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.1,
        ease: "easeOut"
      }
    })
  }
};

export const Animation = ({ 
  children, 
  type = 'fade', 
  duration = 0.5, 
  delay = 0, 
  className = '',
  direction = 'up',
  intensity = 1,
  color,
  custom,
  ...props 
}: AnimationProps) => {
  const selectedAnimation = animations[type];
  
  const getCustomAnimation = () => {
    let baseAnimation: TargetAndTransition;
    
    if (typeof selectedAnimation.animate === 'function') {
      baseAnimation = selectedAnimation.animate(custom);
    } else {
      baseAnimation = selectedAnimation.animate || {};
    }

    // Handle direction for slide and curtain animations
    if (type === 'slide' || type === 'curtain') {
      const directionMap = {
        up: { y: -20 },
        down: { y: 20 },
        left: { x: -20 },
        right: { x: 20 }
      };
      return {
        ...baseAnimation,
        ...directionMap[direction]
      };
    }
    
    // Handle intensity and color for blur and glow effects
    if (type === 'blur' || type === 'glow') {
      const intensityValue = intensity * 4;
      return {
        ...baseAnimation,
        ...(type === 'blur' ? {
          filter: `blur(${intensityValue}px)`
        } : {}),
        ...(type === 'glow' && color ? {
          boxShadow: [
            `0 0 0 rgba(${color},0)`,
            `0 0 20px rgba(${color},0.5)`,
            `0 0 0 rgba(${color},0)`
          ]
        } : {})
      };
    }

    // Handle highlight animation with color
    if (type === 'highlight') {
      const highlightColor = color || '255,255,0';
      return {
        ...baseAnimation,
        backgroundColor: [
          `rgba(${highlightColor},0)`,
          `rgba(${highlightColor},0.2)`,
          `rgba(${highlightColor},0)`
        ]
      };
    }

    return baseAnimation;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={selectedAnimation.initial}
        animate={getCustomAnimation()}
        exit={selectedAnimation.exit}
        transition={{
          duration,
          delay,
          ...selectedAnimation.transition
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animation;
