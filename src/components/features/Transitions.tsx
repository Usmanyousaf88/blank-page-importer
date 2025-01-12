import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TransitionProps {
  children: ReactNode;
  className?: string;
  type?: 'fade' | 'slide' | 'scale' | 'modal';
  duration?: number;
  delay?: number;
}

const transitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
  modal: {
    initial: { scale: 0.96, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.96, opacity: 0, y: 10 },
  },
};

export function Transition({
  children,
  className = '',
  type = 'fade',
  duration = 0.4,
  delay = 0,
}: TransitionProps) {
  const transition = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1], // Adjusted cubic-bezier curve for smoother easing
  };

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitions[type]}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

// Higher-order component for page transitions
export function withPageTransition<P extends object>(
  Component: React.ComponentType<P>,
  transitionProps?: Omit<TransitionProps, 'children'>
) {
  return function WithPageTransition(props: P) {
    return (
      <Transition {...transitionProps} type="fade" duration={0.6}>
        <Component {...props} />
      </Transition>
    );
  };
}

// Specialized transitions for common use cases
export function ModalTransition({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Transition type="modal" duration={1.2} className={className}>
      {children}
    </Transition>
  );
}

export function PageTransition({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Transition type="fade" duration={0.6} className={className}>
      {children}
    </Transition>
  );
}

export function SlideTransition({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <Transition type="slide" duration={0.4} className={className}>
      {children}
    </Transition>
  );
}
