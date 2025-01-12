import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  User, 
  Settings, 
  Rocket, 
  BarChart, 
  Database, 

  TrendingUp,
  Users, 
  HelpCircle 
} from 'lucide-react';

// Define the sidebar menu items with their properties
const sidebarMenuItems = [
  {
    key: 'overview',
    title: 'Overview',
    icon: HelpCircle,
    description: 'IntelliSync GPTBuilder overview',
    category: 'Fundamentals'
  },
  {
    key: 'models',
    title: 'Getting Started',
    icon: Rocket,
    description: 'Create your first AI model',
    category: 'Fundamentals'
  },
  {
    key: 'account-management',
    title: 'Account',
    icon: User,
    description: 'Manage your personal account settings',
    category: 'User Management'
  },
  {
    key: 'ai-assistant',
    title: 'AI Assistants',
    icon: Rocket,
    description: 'Create and customize AI assistants',
    category: 'AI Tools'
  },
  {
    key: 'insights',
    title: 'Insights',
    icon: BarChart,
    description: 'Analyze performance and metrics',
    category: 'Analytics'
  },
  {
    key: 'knowledge-base',
    title: 'Knowledge Base',
    icon: Database,
    description: 'Manage and organize your knowledge',
    category: 'Content Management'
  },
  {
    key: 'onboarding',
    title: 'Onboarding',
    icon: Book,
    description: 'Guided setup and introduction',
    category: 'Fundamentals'
  },
  {
    key: 'settings',
    title: 'Settings',
    icon: Settings,
    description: 'Configure platform preferences',
    category: 'System'
  },
  {
    key: 'upgrade-plan',
    title: 'Upgrade',
    icon: TrendingUp,
    description: 'Explore subscription plans',
    category: 'Account'
  },
  {
    key: 'user-management',
    title: 'Users',
    icon: Users,
    description: 'Manage team members and permissions',
    category: 'User Management'
  }
];

// Group menu items by category
const categorizedMenuItems = sidebarMenuItems.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {} as Record<string, typeof sidebarMenuItems>);

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  console.log('Active Section:', activeSection);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          GPT Builder
        </h2>

        {Object.entries(categorizedMenuItems).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">
              {category}
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onSectionChange(item.key)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all
                    ${activeSection === item.key 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}
                  `}
                >
                  <item.icon 
                    size={20} 
                    className={`
                      ${activeSection === item.key 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-500 dark:text-gray-500'}
                    `} 
                  />
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
