import { Home, ChevronRight, ChevronLast, Folder } from 'lucide-react';
import Card from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/Button/button';
import { cn } from '../../../../lib/utils';

const Breadcrumbs = () => {
  return (
    <div className="space-y-6">
      {/* Classic Breadcrumbs */}
      <Card>
        <Card.Header>
          <Card.Title>Classic Breadcrumbs</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn("h-auto py-1 px-2")}
                >
                  <Home className={cn("h-4 w-4 mr-1")} />
                  Home
                </Button>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className={cn("h-4 w-4 text-muted-foreground")} />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn("h-auto py-1 px-2")}
                  >
                    Products
                  </Button>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-1 text-sm text-muted-foreground">
                    Current Page
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </Card.Content>
      </Card>

      {/* Modern Breadcrumbs with Background */}
      <Card>
        <Card.Header>
          <Card.Title>Modern Breadcrumbs</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 bg-muted/50 rounded-lg p-2">
              <li>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 hover:bg-background"
                >
                  <Home className="h-4 w-4" />
                </Button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 hover:bg-background"
                >
                  Dashboard
                </Button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 hover:bg-background"
                >
                  Settings
                </Button>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="px-2 py-1 text-sm text-muted-foreground">
                  Profile
                </span>
              </li>
            </ol>
          </nav>
        </Card.Content>
      </Card>

      {/* Folder Path Breadcrumbs */}
      <Card>
        <Card.Header>
          <Card.Title>Folder Path Breadcrumbs</Card.Title>
        </Card.Header>
        <Card.Content>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 bg-background hover:bg-muted"
                >
                  <Folder className="h-4 w-4 mr-1" />
                  root
                </Button>
              </li>
              <li className="flex items-center">
                <ChevronLast className="h-4 w-4 text-muted-foreground mx-1" />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 bg-background hover:bg-muted"
                >
                  <Folder className="h-4 w-4 mr-1" />
                  projects
                </Button>
              </li>
              <li className="flex items-center">
                <ChevronLast className="h-4 w-4 text-muted-foreground mx-1" />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 bg-background hover:bg-muted"
                >
                  <Folder className="h-4 w-4 mr-1" />
                  web-app
                </Button>
              </li>
              <li className="flex items-center">
                <ChevronLast className="h-4 w-4 text-muted-foreground mx-1" />
                <span className="px-2 py-1 text-sm text-muted-foreground bg-muted rounded">
                  src
                </span>
              </li>
            </ol>
          </nav>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Breadcrumbs;
