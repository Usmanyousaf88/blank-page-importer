import { useState } from 'react';
import { Home, MessageSquare, Settings, Users,  FileText, BarChart } from 'lucide-react';
import Card from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/Button/button';
import { cn } from '../../../../lib/utils';
import { motion } from 'framer-motion';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeUnderlineTab, setActiveUnderlineTab] = useState('overview');
  const [activePillTab, setActivePillTab] = useState('dashboard');

  return (
    <div className="space-y-6">
      {/* Classic Tabs */}
      <Card>
        <Card.Header>
          <Card.Title>Classic Tabs</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="border-b">
            <nav className="-mb-px flex space-x-8">
              <Button
                variant="link"
                onClick={() => setActiveTab('home')}
                className={cn(
                  'py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm',
                  activeTab === 'home'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                )}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => setActiveTab('messages')}
                className={cn(
                  'py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm',
                  activeTab === 'messages'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                )}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button
                variant="link"
                onClick={() => setActiveTab('settings')}
                className={cn(
                  'py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm',
                  activeTab === 'settings'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                )}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </nav>
          </div>
        </Card.Content>
      </Card>

      {/* Modern Underline Tabs */}
      <Card>
        <Card.Header>
          <Card.Title>Modern Underline Tabs</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="relative">
            <nav className="flex space-x-1">
              {['overview', 'analytics', 'reports', 'notifications'].map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  onClick={() => setActiveUnderlineTab(tab)}
                  className={cn(
                    'relative px-3 py-1.5 text-sm font-medium transition-all duration-200',
                    activeUnderlineTab === tab
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {activeUnderlineTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                    />
                  )}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </nav>
          </div>
        </Card.Content>
      </Card>

      {/* Pill Tabs */}
      <Card>
        <Card.Header>
          <Card.Title>Pill Tabs</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav className="inline-flex p-1 space-x-1 bg-muted rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActivePillTab('dashboard')}
              className={cn(
                'relative rounded-md transition-all duration-200',
                activePillTab === 'dashboard'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <BarChart className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActivePillTab('team')}
              className={cn(
                'relative rounded-md transition-all duration-200',
                activePillTab === 'team'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Users className="h-4 w-4 mr-2" />
              Team
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActivePillTab('projects')}
              className={cn(
                'relative rounded-md transition-all duration-200',
                activePillTab === 'projects'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <FileText className="h-4 w-4 mr-2" />
              Projects
            </Button>
          </nav>
        </Card.Content>
      </Card>
    </div>
  );
};

export default TabNavigation;
