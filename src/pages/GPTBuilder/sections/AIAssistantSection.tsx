import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Bot, 
  Terminal, 
  Sliders, 
  Zap, 
  Settings, 
  User, 
  ChevronRight 
} from 'lucide-react';

const aiAssistantSections = [
  {
    key: 'overview',
    title: 'AI Assistant Overview',
    icon: HelpCircle,
    description: 'Enhance project management efficiency with our AI Assistant',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          AI Assistant Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          IntelliSync Solutions offers an AI Assistant feature designed to enhance project 
          management efficiency. This guide provides instructions on creating, configuring, 
          and utilizing the AI Assistant.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { 
              icon: Bot, 
              title: 'Personalized Assistance', 
              description: 'Create a custom AI assistant tailored to your workflow'
            },
            { 
              icon: Terminal, 
              title: 'Command Bar', 
              description: 'Execute commands quickly and efficiently'
            },
            { 
              icon: Sliders, 
              title: 'Advanced Customization', 
              description: 'Customize your assistant with unique commands'
            },
            { 
              icon: Zap, 
              title: 'Productivity Boost', 
              description: 'Streamline your daily tasks with AI-powered support'
            }
          ].map((feature) => (
            <div 
              key={feature.title} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <feature.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    key: 'getting-started',
    title: 'Getting Started',
    icon: Bot,
    description: 'Create your personalized AI Assistant',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Getting Started with AI Assistant
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
            Creating Your AI Assistant
          </h4>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Access the Assistant',
                description: 'Navigate to the AI Assistant section from your dashboard.'
              },
              {
                step: 2,
                title: 'Create New Assistant',
                description: 'Click on the central "AI Assistant" icon to initiate creation.'
              },
              {
                step: 3,
                title: 'Customize Settings',
                description: 'Configure your assistant\'s preferences and capabilities.'
              }
            ].map((step) => (
              <div 
                key={step.step} 
                className="flex items-start space-x-4 bg-white dark:bg-gray-900 p-4 rounded-md"
              >
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                    {step.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'command-bar',
    title: 'Command Bar',
    icon: Terminal,
    description: 'Master the AI Assistant command interface',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Using the Command Bar
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Command Input
            </h4>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                1M
              </button>
              <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                3M
              </button>
              <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                1Y
              </button>
            </div>
          </div>
          <div className="h-64 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Message Volume Chart Placeholder
            </p>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {[
              { title: 'Total Messages', value: '24,567' },
              { title: 'Average Messages/Day', value: '823' },
              { title: 'Peak Hour', value: '2-3 PM' }
            ].map((stat) => (
              <div 
                key={stat.title} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md text-center"
              >
                <h5 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'settings',
    title: 'Assistant Settings',
    icon: Settings,
    description: 'Manage and customize your AI Assistant',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Managing Your AI Assistant
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                title: 'Open Settings',
                description: 'Click the "Settings" button at the top-right corner',
                icon: Settings
              },
              {
                title: 'Account Management',
                description: 'Select "Account" to access account settings',
                icon: User
              },
              {
                title: 'Upgrade Access',
                description: 'Click "Get Premium Access" for additional features',
                icon: Zap
              },
              {
                title: 'Clear Chat',
                description: 'Click "Clear Chat" to erase chat history',
                icon: Terminal
              }
            ].map((setting) => (
              <div 
                key={setting.title} 
                className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-md"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <setting.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {setting.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {setting.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

const AIAssistantSection: React.FC = () => {
  const [activeAssistantSubsection, setActiveAssistantSubsection] = useState<string>('overview');

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 pr-8 border-r border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          AI Assistant
        </h3>
        <div className="space-y-2">
          {aiAssistantSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveAssistantSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeAssistantSubsection === section.key 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}
              `}
            >
              <div className="flex items-center space-x-3">
                <section.icon size={20} />
                <span>{section.title}</span>
              </div>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content Area */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pl-8"
      >
        {aiAssistantSections.find(section => section.key === activeAssistantSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default AIAssistantSection;
