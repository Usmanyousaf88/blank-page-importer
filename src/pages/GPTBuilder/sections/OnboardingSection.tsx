import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  CheckCircle, 
  Settings, 
  BookOpen, 
  Users, 
  Database, 
  Rocket,
  ChevronRight,
  Bot,
  Building,
  Upload,
  Tags,
  Edit2,
  BarChart2
} from 'lucide-react';

export const onboardingSections = [
  {
    key: 'welcome',
    title: 'Welcome to IntelliSync',
    icon: Rocket,
    description: 'Transform your business operations with AI',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Welcome to IntelliSync!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          An AI-powered platform designed to transform your business operations. 
          This guide provides a step-by-step walkthrough for setting up your 
          intelligent assistant.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <div className="flex items-center space-x-4 mb-4">
            <Rocket className="text-blue-500" size={24} />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Quick Start Checklist
            </h4>
          </div>
          <div className="space-y-3">
            {[
              'Set Up Your Account',
              'Import Knowledge Base',
              'Customize Your Assistant',
              'Test and Deploy'
            ].map((step, index) => (
              <div 
                key={step} 
                className="flex items-center space-x-3 bg-white dark:bg-gray-900 p-3 rounded-md"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <CheckCircle className="text-blue-500" size={16} />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {index + 1}. {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'account-setup',
    title: 'Account Setup',
    icon: UserPlus,
    description: 'Configure your account and team access',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Account Setup
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Configure your account with essential details and preferences.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                title: 'Organization Profile',
                description: 'Provide necessary information about your organization.',
                icon: Building
              },
              {
                title: 'Team Member Access',
                description: 'Define roles and permissions for team members.',
                icon: Users
              },
              {
                title: 'Security Settings',
                description: 'Configure secure access and API integration.',
                icon: Settings
              },
              {
                title: 'Preferences',
                description: 'Set timezone and notification preferences.',
                icon: BookOpen
              }
            ].map((task) => (
              <div 
                key={task.title} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <task.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {task.description}
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
    key: 'create-assistant',
    title: 'Create Assistant',
    icon: Bot,
    description: 'Design your AI assistant',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Create Your First Assistant
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Design your AI assistant with key configurations to match your 
          organization's needs.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                title: 'Assistant Identity',
                description: 'Choose name and personality for your assistant.',
                icon: UserPlus
              },
              {
                title: 'Use Cases',
                description: 'Define primary functions and specializations.',
                icon: Settings
              },
              {
                title: 'Conversation Flow',
                description: 'Create response templates and interaction structures.',
                icon: BookOpen
              },
              {
                title: 'Language Preferences',
                description: 'Configure language and tone to match your brand.',
                icon: Users
              }
            ].map((task) => (
              <div 
                key={task.title} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <task.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {task.description}
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
    key: 'knowledge-base',
    title: 'Knowledge Base',
    icon: Database,
    description: 'Import and organize your content',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Knowledge Base Setup
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Import and organize your knowledge base to support the assistant's 
          responses effectively.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                title: 'Document Import',
                description: 'Upload existing documents and FAQs.',
                icon: Upload
              },
              {
                title: 'Content Organization',
                description: 'Categorize and tag content for efficient retrieval.',
                icon: Tags
              },
              {
                title: 'Regular Updates',
                description: 'Set up maintenance to keep information current.',
                icon: Edit2
              }
            ].map((task) => (
              <div 
                key={task.title} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <task.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {task.description}
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
    key: 'testing-deployment',
    title: 'Testing & Deployment',
    icon: Rocket,
    description: 'Launch and monitor your assistant',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Testing and Deployment
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ensure your assistant functions as intended before full deployment.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                title: 'Internal Testing',
                description: 'Conduct tests with team members and gather feedback.',
                icon: Users
              },
              {
                title: 'Configuration Refinement',
                description: 'Adjust based on test results and feedback.',
                icon: Settings
              },
              {
                title: 'Live Deployment',
                description: 'Launch the assistant for end-users.',
                icon: Rocket
              },
              {
                title: 'Performance Monitoring',
                description: 'Track usage and identify improvement areas.',
                icon: BarChart2
              }
            ].map((task) => (
              <div 
                key={task.title} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <task.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {task.description}
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

const OnboardingSection: React.FC = () => {
  const [activeOnboardingSubsection, setActiveOnboardingSubsection] = useState<string>('welcome');

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
          Onboarding
        </h3>
        <div className="space-y-2">
          {onboardingSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveOnboardingSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeOnboardingSubsection === section.key 
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
        {onboardingSections.find(section => section.key === activeOnboardingSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default OnboardingSection;
