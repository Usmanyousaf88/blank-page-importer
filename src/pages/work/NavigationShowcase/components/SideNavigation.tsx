import { Home, MessageSquare, Calendar, Mail, Settings, X, Users, BarChart, FileText, Layout, ChevronRight } from 'lucide-react';
import { Button } from '../../../../components/ui/Button/button';
import Card from '../../../../components/ui/card';
import { cn } from '../../../../lib/utils';
import { useState } from 'react';

const SideNavigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="space-y-6">
      {/* Classic Side Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Classic Side Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="h-[400px] w-64 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-4 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-semibold">Menu</span>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </nav>
              <div className="mt-auto">
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Collapsible Side Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Collapsible Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className={cn(
            "h-[400px] rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
            isCollapsed ? "w-16" : "w-64"
          )}>
            <div className="p-4 flex flex-col h-full">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="mb-6 ml-auto"
              >
                {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </Button>
              <nav className="space-y-2">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full",
                    isCollapsed ? "justify-center px-2" : "justify-start"
                  )}
                >
                  <BarChart className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Analytics"}
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full",
                    isCollapsed ? "justify-center px-2" : "justify-start"
                  )}
                >
                  <Users className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Team"}
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full",
                    isCollapsed ? "justify-center px-2" : "justify-start"
                  )}
                >
                  <FileText className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                  {!isCollapsed && "Documents"}
                </Button>
              </nav>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Modern Side Navigation */}
      <Card>
        <Card.Header>
          <Card.Title>Modern Navigation</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="h-[400px] w-64 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-8 w-8 rounded-lg bg-primary" />
                <span className="text-xl font-bold">Brand</span>
              </div>
              <nav className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Overview</h3>
                  <div className="space-y-1">
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start",
                        activeTab === 'dashboard' && "bg-muted"
                      )}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      <Layout className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start",
                        activeTab === 'analytics' && "bg-muted"
                      )}
                      onClick={() => setActiveTab('analytics')}
                    >
                      <BarChart className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Workspace</h3>
                  <div className="space-y-1">
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start",
                        activeTab === 'projects' && "bg-muted"
                      )}
                      onClick={() => setActiveTab('projects')}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Projects
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        "w-full justify-start",
                        activeTab === 'team' && "bg-muted"
                      )}
                      onClick={() => setActiveTab('team')}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Team
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SideNavigation;
