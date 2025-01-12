import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Settings, 
  Activity, 
  ChevronRight, 
  Check, 
  X 
} from 'lucide-react';

const userManagementSections = [
  {
    key: 'overview',
    title: 'User Management Overview',
    icon: Users,
    description: 'Manage and monitor user interactions',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          User Management Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Effectively manage users, roles, and permissions for your AI assistant. 
          Gain insights into user interactions and maintain secure access control.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { 
              icon: UserPlus, 
              title: 'User Onboarding', 
              description: 'Streamline user addition and role assignment'
            },
            { 
              icon: Shield, 
              title: 'Access Control', 
              description: 'Manage permissions and user roles'
            },
            { 
              icon: Activity, 
              title: 'User Analytics', 
              description: 'Track user engagement and interactions'
            },
            { 
              icon: Settings, 
              title: 'Configuration', 
              description: 'Customize user management settings'
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
    key: 'user-roles',
    title: 'User Roles',
    icon: Shield,
    description: 'Define and manage user roles',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          User Roles and Permissions
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                role: 'Admin',
                description: 'Full system access and management capabilities',
                permissions: [
                  'Manage Users',
                  'Configure System Settings',
                  'Access All Features'
                ]
              },
              {
                role: 'Manager',
                description: 'Limited administrative capabilities',
                permissions: [
                  'User Invitation',
                  'View Analytics',
                  'Manage Team Members'
                ]
              },
              {
                role: 'User',
                description: 'Standard user access',
                permissions: [
                  'Use AI Assistant',
                  'View Personal Analytics',
                  'Limited Configuration'
                ]
              }
            ].map((roleDetail) => (
              <div 
                key={roleDetail.role} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {roleDetail.role}
                  </h4>
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${roleDetail.role === 'Admin' 
                      ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      : roleDetail.role === 'Manager'
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}
                  `}>
                    {roleDetail.role}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {roleDetail.description}
                </p>
                <div className="space-y-2">
                  {roleDetail.permissions.map((permission) => (
                    <div 
                      key={permission} 
                      className="flex items-center space-x-2"
                    >
                      <Check 
                        className={`
                          ${roleDetail.role === 'Admin' 
                            ? 'text-red-500' 
                            : roleDetail.role === 'Manager'
                            ? 'text-yellow-500'
                            : 'text-blue-500'}
                        `} 
                        size={20} 
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        {permission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'add-users',
    title: 'Add Users',
    icon: UserPlus,
    description: 'Invite and onboard new users',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Add New Users
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Invite Users
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter user email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Role
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  >
                    <option>User</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                </div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Send Invitation
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Pending Invitations
              </h4>
              <div className="space-y-3">
                {[
                  { email: 'john.doe@example.com', role: 'User' },
                  { email: 'jane.smith@example.com', role: 'Manager' }
                ].map((invitation) => (
                  <div 
                    key={invitation.email} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {invitation.email}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {invitation.role}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 p-2 rounded-full">
                        <Check size={16} />
                      </button>
                      <button className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 p-2 rounded-full">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'activity-monitoring',
    title: 'Activity Monitoring',
    icon: Activity,
    description: 'Track user interactions and conversations',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          User Activity Monitoring
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Recent User Activities
              </h4>
              <div className="space-y-3">
                {[
                  { 
                    user: 'Alex Johnson', 
                    action: 'Logged in', 
                    time: '2 mins ago' 
                  },
                  { 
                    user: 'Sarah Martinez', 
                    action: 'Created new assistant', 
                    time: '1 hour ago' 
                  },
                  { 
                    user: 'Michael Chen', 
                    action: 'Updated profile', 
                    time: '3 hours ago' 
                  }
                ].map((activity) => (
                  <div 
                    key={activity.user} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {activity.user}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {activity.action}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Conversation Analytics
              </h4>
              <div className="h-64 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Conversation Analytics Chart Placeholder
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { label: 'Total Conversations', value: '1,245' },
                  { label: 'Avg. Conversation Length', value: '7m 23s' },
                  { label: 'Active Users', value: '342' }
                ].map((stat) => (
                  <div 
                    key={stat.label} 
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-center"
                  >
                    <h5 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const UserManagementSection: React.FC = () => {
  const [activeUserManagementSubsection, setActiveUserManagementSubsection] = useState<string>('overview');

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
          User Management
        </h3>
        <div className="space-y-2">
          {userManagementSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveUserManagementSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeUserManagementSubsection === section.key 
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
        {userManagementSections.find(section => section.key === activeUserManagementSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default UserManagementSection;
