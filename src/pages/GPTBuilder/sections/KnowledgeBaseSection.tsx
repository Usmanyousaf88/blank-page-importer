import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Upload, 
  Tags, 
  Search, 
  Edit2, 
  Link2, 
  Terminal, 
  CheckCircle, 
  BookOpen, 
  Users, 
  ChevronRight,
  Trash2
} from 'lucide-react';

const knowledgeBaseSections = [
  {
    key: 'overview',
    title: 'Knowledge Base Overview',
    icon: Database,
    description: 'Central repository for assistant information',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Knowledge Base Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Knowledge Base serves as a central repository for all the information 
          your IntelliSync assistant requires to provide accurate and contextual 
          responses. Proper management ensures consistent and helpful information 
          for users.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { 
              icon: Upload, 
              title: 'Content Upload', 
              description: 'Multiple methods to add content to your knowledge base'
            },
            { 
              icon: Tags, 
              title: 'Smart Organization', 
              description: 'Categorize and tag content for easy retrieval'
            },
            { 
              icon: Search, 
              title: 'Advanced Search', 
              description: 'Quickly locate specific information'
            },
            { 
              icon: Edit2, 
              title: 'Content Management', 
              description: 'Update and maintain your knowledge base'
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
    key: 'adding-content',
    title: 'Adding Content',
    icon: Upload,
    description: 'Methods to populate your knowledge base',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Adding Content to Knowledge Base
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                method: 'Direct Upload',
                description: 'Upload PDF files directly through the interface.',
                icon: Upload,
                status: 'Available',
                statusColor: 'text-green-600'
              },
              {
                method: 'URL Import',
                description: 'Import content from web pages by providing URLs.',
                icon: Link2,
                status: 'Available',
                statusColor: 'text-green-600'
              },
              {
                method: 'API Integration',
                description: 'Programmatically add content using REST API.',
                icon: Terminal,
                status: 'Coming Soon',
                statusColor: 'text-yellow-600'
              },
              {
                method: 'Manual Entry',
                description: 'Create and edit content directly in the knowledge base editor.',
                icon: Edit2,
                status: 'Available',
                statusColor: 'text-green-600'
              }
            ].map((method) => (
              <div 
                key={method.method} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <method.icon className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      {method.method}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
                <span className={`font-medium ${method.statusColor}`}>
                  {method.status}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="text-blue-500" size={20} />
              <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                Automatic Processing
              </h5>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Each piece of content is automatically processed and indexed 
              for optimal retrieval by your assistant.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'organization',
    title: 'Content Organization',
    icon: Tags,
    description: 'Organize and categorize your knowledge base',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Knowledge Base Organization
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Collections
              </h4>
              <div className="space-y-3">
                {[
                  { name: 'Product Documentation', items: 12 },
                  { name: 'Customer Support', items: 8 },
                  { name: 'Technical Guides', items: 15 }
                ].map((collection) => (
                  <div 
                    key={collection.name} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {collection.name}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {collection.items} Items
                      </p>
                    </div>
                    <BookOpen className="text-blue-500" size={20} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Tagging System
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Getting Started', 'API', 'Troubleshooting', 
                  'Best Practices', 'Configuration', 'Security'
                ].map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 bg-white dark:bg-gray-900 p-4 rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <Search className="text-blue-500" size={20} />
                  <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                    Advanced Search
                  </h5>
                </div>
                <input 
                  type="text" 
                  placeholder="Search knowledge base..."
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'management',
    title: 'Content Management',
    icon: Edit2,
    description: 'Manage and maintain your knowledge base',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Knowledge Base Management
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                action: 'Editing',
                description: 'Update existing content to ensure information remains current and accurate.',
                icon: Edit2
              },
              {
                action: 'Deleting',
                description: 'Remove outdated or irrelevant content to maintain quality.',
                icon: Trash2
              },
              {
                action: 'Version Control',
                description: 'Track changes and revert to previous versions if necessary.',
                icon: BookOpen
              }
            ].map((management) => (
              <div 
                key={management.action} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <management.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {management.action}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {management.description}
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
    key: 'best-practices',
    title: 'Best Practices',
    icon: CheckCircle,
    description: 'Optimize your knowledge base management',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Knowledge Base Best Practices
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              {
                practice: 'Regular Updates',
                description: 'Frequently review and update the knowledge base to reflect the latest information.',
                icon: Edit2
              },
              {
                practice: 'Consistent Formatting',
                description: 'Maintain a uniform format across all content to enhance readability and professionalism.',
                icon: BookOpen
              },
              {
                practice: 'User Feedback',
                description: 'Encourage users to provide feedback on assistant responses to identify improvement areas.',
                icon: Users
              }
            ].map((practice) => (
              <div 
                key={practice.practice} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center space-x-4"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <practice.icon className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {practice.practice}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {practice.description}
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

const KnowledgeBaseSection: React.FC = () => {
  const [activeKnowledgeBaseSubsection, setActiveKnowledgeBaseSubsection] = useState<string>('overview');

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
          Knowledge Base
        </h3>
        <div className="space-y-2">
          {knowledgeBaseSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveKnowledgeBaseSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeKnowledgeBaseSubsection === section.key 
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
        {knowledgeBaseSections.find(section => section.key === activeKnowledgeBaseSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default KnowledgeBaseSection;
