import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button/button';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, Menu, X, Command } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    if (latest > 100 && direction === "down") {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(latest);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`
      }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/60"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Command size={20} />
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                >
                  IntelliSync
                </motion.span>
                <span className="text-xs text-muted-foreground">Solutions</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ai">AI</NavLink>
            
            {/* Work Dropdown */}
            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors hover:bg-accent/50 relative"
                onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                onMouseEnter={() => setIsWorkDropdownOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">Our Work</span>
                <motion.div
                  animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} className="text-muted-foreground" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isWorkDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 py-2 w-48 bg-background/95 backdrop-blur-sm rounded-lg border border-border/20 shadow-lg"
                    onMouseLeave={() => setIsWorkDropdownOpen(false)}
                  >
                    <WorkDropdownLink to="/work">All Projects</WorkDropdownLink>
                    <WorkDropdownLink to="/work/pages">Page Designs</WorkDropdownLink>
                    <WorkDropdownLink to="/work/buttons">Button Designs</WorkDropdownLink>
                    <WorkDropdownLink to="/work/cards">Card Designs</WorkDropdownLink>
                    <WorkDropdownLink to="/work/forms">Form Designs</WorkDropdownLink>
                    <WorkDropdownLink to="/work/navigation">Navigation Designs</WorkDropdownLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/gpt-builder">GPT Builder</NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg relative"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === 'dark' ? 360 : 0,
                    scale: theme === 'dark' ? 1 : 0.8
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-lg relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border/10"
            >
              <div className="py-4 space-y-1">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/services">Services</MobileNavLink>
                <MobileNavLink to="/ai">AI</MobileNavLink>
                <MobileNavLink to="/work">Our Work</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
                <MobileNavLink to="/gpt-builder">GPT Builder</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Helper Components
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors relative group",
        isActive 
          ? "text-foreground" 
          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-accent/50 rounded-md -z-10"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  );
};

const WorkDropdownLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "block px-4 py-1.5 text-sm transition-colors",
        isActive 
          ? "text-foreground bg-accent/50" 
          : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
      )}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "block px-4 py-2 text-sm font-medium transition-colors",
        isActive 
          ? "text-foreground bg-accent/50 rounded-md" 
          : "text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-md"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
