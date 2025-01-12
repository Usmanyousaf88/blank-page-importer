import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Building, 
  Users, 
  CreditCard, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

const accountManagementSections = [
  {
    key: 'overview',
    title: 'Account Management Overview',
    icon: BookOpen,
    description: 'Manage settings related to your profile, organization, members, and billing.',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Account Management Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          The Account section allows users to manage settings related to their profile, 
          organization, members, and billing. It provides an interface to personalize 
          accounts, manage organizational details, and upgrade subscription plans.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: User, title: 'Profile', description: 'Manage personal details' },
            { icon: Building, title: 'Organization', description: 'Update company information' },
            { icon: Users, title: 'Members', description: 'Invite and manage team' },
            { icon: CreditCard, title: 'Billing', description: 'View and update payments' }
          ].map((section) => (
            <div 
              key={section.title} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <section.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                  {section.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    key: 'profile',
    title: 'Profile Settings',
    icon: User,
    description: 'Manage your personal account details',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Profile Settings
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
            Manage Personal Details
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Profile Photo
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="text-gray-500 dark:text-gray-400" size={32} />
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Upload Photo
                </button>
              </div>
            </div>
            <div className="pt-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'organization',
    title: 'Organization Settings',
    icon: Building,
    description: 'Manage your organization\'s details',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Organization Settings
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Organization Name
              </label>
              <input 
                type="text" 
                placeholder="Enter organization name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Industry
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              >
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'members',
    title: 'Team Management',
    icon: Users,
    description: 'Invite and manage team members',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Team Management
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Team Members
            </h4>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Invite Member
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'John Doe', role: 'Admin', email: 'john@example.com' },
              { name: 'Jane Smith', role: 'Editor', email: 'jane@example.com' }
            ].map((member) => (
              <div 
                key={member.email} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                    {member.name}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.email} - {member.role}
                  </p>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'billing',
    title: 'Billing & Subscription',
    icon: CreditCard,
    description: 'Manage your billing and subscription details',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Billing & Subscription
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Current Plan
              </h4>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-md">
                <h5 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Pro Plan
                </h5>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Billed monthly at $49.99
                </p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Upgrade Plan
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Payment Method
              </h4>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-md">
                <div className="flex items-center space-x-4 mb-4">
                  <CreditCard className="text-blue-500" size={24} />
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                      Visa **** 4567
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Expires 12/2025
                    </p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Update Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const AccountManagementSection: React.FC = () => {
  const [activeAccountSubsection, setActiveAccountSubsection] = useState<string>('overview');

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
          Account Management
        </h3>
        <div className="space-y-2">
          {accountManagementSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveAccountSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeAccountSubsection === section.key 
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
        {accountManagementSections.find(section => section.key === activeAccountSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default AccountManagementSection;
