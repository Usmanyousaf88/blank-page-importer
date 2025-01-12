import { Home, MessageSquare, Bell, User, Plus, Heart, Search, Settings } from 'lucide-react';
import { Button } from '../../../../components/ui/Button/button';
import Card from '../../../../components/ui/card';
import { cn } from '../../../../lib/utils';
import { useState } from 'react';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeFloatingTab, setActiveFloatingTab] = useState('');

  return (
    <div className="flex flex-col gap-8">
      <Card className="relative">
        <Card.Header>
          <Card.Title>Classic Navigation</Card.Title>
          <p className="text-muted-foreground mt-1"></p>
        </Card.Header>
        <Card.Content>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex justify-around items-center py-3">
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <Home className="h-4 w-4" />
                <span className="mt-1 text-xs">Home</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <MessageSquare className="h-4 w-4" />
                <span className="mt-1 text-xs">Messages</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <Bell className="h-4 w-4" />
                <span className="mt-1 text-xs">Notifications</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <User className="h-4 w-4" />
                <span className="mt-1 text-xs">Profile</span>
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>

      <Card className="relative">
        <Card.Header>
          <Card.Title>Modern Navigation</Card.Title>
          <p className="text-muted-foreground mt-1"></p>
        </Card.Header>
        <Card.Content>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex justify-around items-center py-2">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'search', icon: Search, label: 'Search' },
                { id: 'favorites', icon: Heart, label: 'Favorites' },
                { id: 'settings', icon: Settings, label: 'Settings' },
              ].map(({ id, icon: Icon, label }) => (
                <Button
                  key={id}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    'flex flex-col items-center relative py-3',
                    activeTab === id && 'text-primary'
                  )}
                >
                  <Icon className={cn('h-5 w-5 mb-1', activeTab === id && 'text-primary')} />
                  <span className="text-xs">{label}</span>
                  {activeTab === id && (
                    <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </Card.Content>
      </Card>

      <Card className="relative">
        <Card.Header>
          <Card.Title>Navigation with Action Button</Card.Title>
          <p className="text-muted-foreground mt-1"></p>
        </Card.Header>
        <Card.Content>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="relative flex justify-around items-center py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFloatingTab('home')}
                className={cn(
                  'flex flex-col items-center py-3',
                  activeFloatingTab === 'home' && 'text-primary'
                )}
              >
                <Home className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFloatingTab('search')}
                className={cn(
                  'flex flex-col items-center py-3',
                  activeFloatingTab === 'search' && 'text-primary'
                )}
              >
                <Search className="h-5 w-5" />
                <span className="text-xs mt-1">Search</span>
              </Button>
              
              {/* Floating Action Button */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Button size="lg" className="h-12 w-12 rounded-full p-0">
                  <Plus className="h-6 w-6" />
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFloatingTab('favorites')}
                className={cn(
                  'flex flex-col items-center py-3',
                  activeFloatingTab === 'favorites' && 'text-primary'
                )}
              >
                <Heart className="h-5 w-5" />
                <span className="text-xs mt-1">Favorites</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFloatingTab('profile')}
                className={cn(
                  'flex flex-col items-center py-3',
                  activeFloatingTab === 'profile' && 'text-primary'
                )}
              >
                <User className="h-5 w-5" />
                <span className="text-xs mt-1">Profile</span>
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default BottomNavigation;
