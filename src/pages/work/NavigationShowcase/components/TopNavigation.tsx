import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Bell, User, MessageSquare, Settings, ChevronDown } from 'lucide-react';
import { Button } from '../../../../components/ui/Button/button';
import Card from '../../../../components/ui/card';

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <div className="space-y-6">
      {/* Classic Top Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Classic Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav className="flex items-center justify-between p-4 bg-background">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">Logo</h1>
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost">Dashboard</Button>
                <Button variant="ghost">Projects</Button>
                <Button variant="ghost">Team</Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </nav>

          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="md:hidden"
          >
            <div className="p-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
              <Button variant="ghost" className="w-full justify-start">Projects</Button>
              <Button variant="ghost" className="w-full justify-start">Team</Button>
            </div>
          </motion.div>
        </Card.Content>
      </Card>

      {/* Modern Centered Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Centered Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav className="flex flex-col items-center space-y-4 p-4 bg-background">
            <h1 className="text-2xl font-bold">Brand</h1>
            <div className="flex items-center space-x-6">
              <Button variant="link">Home</Button>
              <Button variant="link">Products</Button>
              <Button variant="link">About</Button>
              <Button variant="link">Contact</Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        </Card.Content>
      </Card>

      {/* Enterprise Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Enterprise Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-2">
            {/* Top bar */}
            <div className="flex items-center justify-between p-2 bg-muted/50">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">Support</Button>
                <Button variant="ghost" size="sm">Documentation</Button>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">Contact Sales</Button>
                <Button variant="ghost" size="sm">Login</Button>
              </div>
            </div>
            
            {/* Main navigation */}
            <nav className="flex items-center justify-between p-4 bg-background border-t">
              <div className="flex items-center space-x-6">
                <h1 className="text-xl font-semibold">Enterprise</h1>
                <div className="hidden md:flex items-center space-x-1">
                  <Button variant="ghost" className="flex items-center">
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="flex items-center">
                    Solutions <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="ghost">Resources</Button>
                  <Button variant="ghost">Pricing</Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button>Start Free Trial</Button>
              </div>
            </nav>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default TopNavigation;
