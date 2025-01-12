import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Palette, 
  Lock, 
  Key, 
  Webhook, 
  Link2, 
  Shield, 
  ChevronRight, 
  Code 
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Add this type adapter near the top of the file, after imports
const adaptLucideIcon = (LucideIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>): React.ComponentType<{className?: string, size?: number}> => {
  return (props: {className?: string, size?: number}) => (
    <LucideIcon 
      className={props.className} 
      size={props.size} 
    />
  );
};

// Define a more precise type for settings
type SettingItem = {
    label: string;
    description: string;
    type: "toggle";
    value: boolean;
} | {
    label: string;
    description: string;
    type: "value";
    value: string;
};

type SettingsCategory = {
  category: string;
  icon: React.ComponentType<{className?: string, size?: number}>;
  settings: SettingItem[];
};

type Integration = {
  service: string;
  key: string;
  status: string;
};

type Security = {
  method: string;
  description: string;
  icon: React.ComponentType<{className?: string, size?: number}>;
  enabled: boolean;
};

type Theme = {
  name: string;
  description: string;
  active: boolean;
};

const settingsSections = [
  {
    key: 'general',
    title: 'General Settings',
    icon: adaptLucideIcon(SettingsIcon),
    description: 'Configure basic platform preferences',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          General Settings
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                category: 'Notifications',
                icon: adaptLucideIcon(Bell),
                settings: [
                  { 
                    label: 'Email Notifications', 
                    description: 'Receive email updates for important events',
                    type: 'toggle',
                    value: true 
                  },
                  { 
                    label: 'Push Notifications', 
                    description: 'Get real-time alerts on your device',
                    type: 'toggle',
                    value: false 
                  }
                ] as SettingItem[]
              },
              {
                category: 'Localization',
                icon: adaptLucideIcon(Globe),
                settings: [
                  { 
                    label: 'Language', 
                    description: 'Select your preferred interface language',
                    type: 'value',
                    value: 'English (US)' 
                  },
                  { 
                    label: 'Time Zone', 
                    description: 'Set your local time zone',
                    type: 'value',
                    value: 'Eastern Time (UTC-5)' 
                  }
                ] as SettingItem[]
              }
            ].map((section: SettingsCategory) => (
              <div 
                key={section.category} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <section.icon className="text-blue-500" size={20} />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {section.category}
                  </h4>
                </div>
                {section.settings.map((setting: SettingItem) => (
                  <div 
                    key={setting.label} 
                    className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-100">
                        {setting.label}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {setting.description}
                      </p>
                    </div>
                    {setting.type === 'toggle' ? (
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            className="sr-only" 
                            defaultChecked={setting.value} 
                          />
                          <div className={`
                            w-10 h-4 rounded-full shadow-inner
                            ${setting.value 
                              ? 'bg-blue-500' 
                              : 'bg-gray-300 dark:bg-gray-600'}
                          `}></div>
                          <div className={`
                            dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full 
                            shadow transition-all
                            ${setting.value 
                              ? 'transform translate-x-full bg-blue-500' 
                              : 'bg-gray-200 dark:bg-gray-700'}
                          `}></div>
                        </div>
                      </label>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">
                        {setting.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'integrations',
    title: 'Integration Settings',
    icon: adaptLucideIcon(Link2),
    description: 'Manage API keys and third-party connections',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Integration Settings
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                API Key Management
              </h4>
              <div className="space-y-3">
                {[
                  { 
                    service: 'Slack Integration', 
                    key: 'xoxp-1234567890-abcdefg', 
                    status: 'Active' 
                  },
                  { 
                    service: 'GitHub Webhook', 
                    key: 'gh_webhook_secret_xyz', 
                    status: 'Active' 
                  }
                ].map((integration: Integration) => (
                  <div 
                    key={integration.service} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {integration.service}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                        {integration.key}
                      </p>
                    </div>
                    <span 
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${integration.status === 'Active' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}
                      `}
                    >
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Generate New API Key
              </button>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Webhook Configuration
              </h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Webhook className="text-blue-500" size={20} />
                  <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                    Webhook Endpoint
                  </h5>
                </div>
                <input 
                  type="text" 
                  placeholder="Enter webhook URL"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                />
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Save
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'security',
    title: 'Security Settings',
    icon: adaptLucideIcon(Lock),
    description: 'Configure authentication and access controls',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Security Settings
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Authentication
              </h4>
              <div className="space-y-4">
                {[
                  {
                    method: 'Multi-Factor Authentication',
                    description: 'Add an extra layer of security',
                    icon: adaptLucideIcon(Shield),
                    enabled: true
                  },
                  {
                    method: 'Password Policy',
                    description: 'Enforce strong password requirements',
                    icon: adaptLucideIcon(Key),
                    enabled: false
                  }
                ].map((security: Security) => (
                  <div 
                    key={security.method} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-3">
                      <security.icon 
                        className={`
                          ${security.enabled 
                            ? 'text-green-500' 
                            : 'text-gray-400 dark:text-gray-600'}
                        `} 
                        size={20} 
                      />
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                          {security.method}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {security.description}
                        </p>
                      </div>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="sr-only" 
                          defaultChecked={security.enabled} 
                        />
                        <div className={`
                          w-10 h-4 rounded-full shadow-inner
                          ${security.enabled 
                            ? 'bg-green-500' 
                            : 'bg-gray-300 dark:bg-gray-600'}
                        `}></div>
                        <div className={`
                          dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full 
                          shadow transition-all
                          ${security.enabled 
                            ? 'transform translate-x-full bg-green-500' 
                            : 'bg-gray-200 dark:bg-gray-700'}
                        `}></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Access Control
              </h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="text-blue-500" size={20} />
                  <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                    IP Whitelisting
                  </h5>
                </div>
                <textarea 
                  placeholder="Enter allowed IP addresses (one per line)"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-24"
                ></textarea>
                <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Save IP Whitelist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'customization',
    title: 'Customization',
    icon: adaptLucideIcon(Palette),
    description: 'Personalize your interface',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Interface Customization
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Theme Selection
              </h4>
              <div className="space-y-3">
                {[
                  { 
                    name: 'Dark Mode', 
                    description: 'Reduce eye strain in low-light environments',
                    active: true 
                  },
                  { 
                    name: 'Compact Layout', 
                    description: 'Optimize screen space usage',
                    active: false 
                  }
                ].map((theme: Theme) => (
                  <div 
                    key={theme.name} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {theme.name}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {theme.description}
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input 
                          type="checkbox" 
                          className="sr-only" 
                          defaultChecked={theme.active} 
                        />
                        <div className={`
                          w-10 h-4 rounded-full shadow-inner
                          ${theme.active 
                            ? 'bg-blue-500' 
                            : 'bg-gray-300 dark:bg-gray-600'}
                        `}></div>
                        <div className={`
                          dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full 
                          shadow transition-all
                          ${theme.active 
                            ? 'transform translate-x-full bg-blue-500' 
                            : 'bg-gray-200 dark:bg-gray-700'}
                        `}></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Color Scheme
              </h4>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md">
                <div className="flex flex-wrap gap-3">
                  {[
                    'bg-blue-500', 
                    'bg-green-500', 
                    'bg-purple-500', 
                    'bg-red-500', 
                    'bg-yellow-500'
                  ].map((color) => (
                    <button 
                      key={color} 
                      className={`
                        w-10 h-10 rounded-full ${color} 
                        hover:scale-110 transition-transform
                        focus:ring-2 focus:ring-offset-2 
                        focus:ring-gray-300 dark:focus:ring-gray-700
                      `}
                    ></button>
                  ))}
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Apply Color Scheme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const SettingsSection: React.FC = () => {
  const [activeSettingsSubsection, setActiveSettingsSubsection] = useState<string>('general');

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
          Settings
        </h3>
        <div className="space-y-2">
          {settingsSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSettingsSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeSettingsSubsection === section.key 
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
        {settingsSections.find(section => section.key === activeSettingsSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default SettingsSection;
