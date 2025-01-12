import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Sparkles,
  MessageSquare,
  Image as ImageIcon,
  Volume2,
  Brain,
  GraduationCap,
  BookOpen,
  Crown,
  ChevronLeft,
  ChevronUp
} from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
  path: string;
  category: 'core' | 'persona';
}

const navigationItems: NavItem[] = [
  {
    id: 'overview',
    icon: Sparkles,
    label: 'Overview',
    path: '/ai',
    category: 'core'
  },
  {
    id: 'language',
    icon: MessageSquare,
    label: 'Language Model',
    path: '/ai/models/language',
    category: 'core'
  },
  {
    id: 'vision',
    icon: ImageIcon,
    label: 'Vision Model',
    path: '/ai/models/vision',
    category: 'core'
  },
  {
    id: 'audio',
    icon: Volume2,
    label: 'Audio Model',
    path: '/ai/models/audio',
    category: 'core'
  },
  {
    id: 'philosopher',
    icon: Brain,
    label: 'Philosophers',
    path: '/ai/models/personas/philosopher',
    category: 'persona'
  },
  {
    id: 'teacher',
    icon: GraduationCap,
    label: 'Teachers',
    path: '/ai/models/personas/teacher',
    category: 'persona'
  },
  {
    id: 'literary',
    icon: BookOpen,
    label: 'Literary Authors',
    path: '/ai/models/personas/literary',
    category: 'persona'
  },
  {
    id: 'historical',
    icon: Crown,
    label: 'Historical Figures',
    path: '/ai/models/personas/historical',
    category: 'persona'
  }
];

const NavButton = ({ 
  item,
  isActive,
  onClick,
  isCollapsed,
  isMobile
}: { 
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  isMobile: boolean;
}) => {
  const Icon = item.icon;
  
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative group flex items-center gap-3
        ${isMobile 
          ? 'w-full px-4 py-3' 
          : 'w-full px-3 py-2'
        }
        rounded-lg
        transition-all duration-300
        ${isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
        }
      `}
      whileHover={!isMobile ? { scale: 1.02, x: 4 } : undefined}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {(!isCollapsed || isMobile) && (
        <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
      )}
      {isCollapsed && !isMobile && (
        <div className="
          absolute left-full ml-2 px-3 py-2
          bg-popover/90 backdrop-blur-sm
          border border-border/50
          shadow-lg shadow-primary/5
          rounded-lg opacity-0 group-hover:opacity-100
          transition-all duration-200
          whitespace-nowrap z-50
          text-sm font-medium
          dark:bg-background dark:border-border/30
          dark:shadow-primary/20
          dark:text-foreground
        ">
          {item.label}
        </div>
      )}
      {!isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

const AIModelNav = ({ inOverlay = false, initialCollapsed = false }: { inOverlay?: boolean; initialCollapsed?: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = React.useState<'core' | 'persona'>('core');
  const [isCollapsed, setIsCollapsed] = React.useState(initialCollapsed);
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredItems = navigationItems.filter(item => 
    item.category === activeCategory || item.id === 'overview'
  );

  // Desktop version
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          ${!inOverlay ? 'fixed left-8 top-1/2 -translate-y-1/2' : ''}
          ${isCollapsed ? 'w-16' : 'w-64'} 
          transition-all duration-300
          ${!inOverlay ? 'hidden md:block' : ''}
          z-[100]
        `}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border border-border rounded-2xl shadow-lg" />
          
          <div className="relative p-3">
            {/* Category Switcher */}
            <div className="mb-3 flex flex-col gap-1">
              <motion.button
                onClick={() => setActiveCategory('core')}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium 
                  transition-colors text-left
                  ${activeCategory === 'core' 
                    ? 'bg-muted text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                  ${isCollapsed ? 'flex justify-center' : ''}
                `}
                whileTap={{ scale: 0.98 }}
              >
                {!isCollapsed ? 'Core Models' : '🤖'}
              </motion.button>
              <motion.button
                onClick={() => setActiveCategory('persona')}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium 
                  transition-colors text-left
                  ${activeCategory === 'persona' 
                    ? 'bg-muted text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                  ${isCollapsed ? 'flex justify-center' : ''}
                `}
                whileTap={{ scale: 0.98 }}
              >
                {!isCollapsed ? 'AI Personas' : '👥'}
              </motion.button>
            </div>

            {/* Navigation Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1"
              >
                {filteredItems.map((item) => (
                  <NavButton
                    key={item.id}
                    item={item}
                    isActive={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                    isCollapsed={isCollapsed}
                    isMobile={false}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Collapse Toggle */}
            <motion.button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background border border-border shadow-sm hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Mobile version
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 right-4 md:hidden z-50"
    >
      <motion.div
        animate={{ height: isMobileExpanded ? 'auto' : 'auto' }}
        className="bg-background/80 backdrop-blur-lg border border-border rounded-2xl shadow-lg overflow-hidden"
      >
        {isMobileExpanded && (
          <div className="p-4">
            {/* Mobile Category Switcher */}
            <div className="flex gap-2 mb-4">
              <motion.button
                onClick={() => setActiveCategory('core')}
                className={`
                  flex-1 px-4 py-2 rounded-lg text-sm font-medium 
                  transition-colors
                  ${activeCategory === 'core' 
                    ? 'bg-muted text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
                whileTap={{ scale: 0.98 }}
              >
                Core Models
              </motion.button>
              <motion.button
                onClick={() => setActiveCategory('persona')}
                className={`
                  flex-1 px-4 py-2 rounded-lg text-sm font-medium 
                  transition-colors
                  ${activeCategory === 'persona' 
                    ? 'bg-muted text-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
                whileTap={{ scale: 0.98 }}
              >
                AI Personas
              </motion.button>
            </div>

            {/* Mobile Navigation Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1"
              >
                {filteredItems.map((item) => (
                  <NavButton
                    key={item.id}
                    item={item}
                    isActive={location.pathname === item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileExpanded(false);
                    }}
                    isCollapsed={false}
                    isMobile={true}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between text-sm font-medium border-t border-border/10"
        >
          <span>{isMobileExpanded ? 'Close Navigation' : 'Show Navigation'}</span>
          <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isMobileExpanded ? 'rotate-180' : ''}`} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AIModelNav;
