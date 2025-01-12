import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const models = [
  { 
    name: 'Language Model', 
    description: 'Create custom language models with advanced prompt engineering capabilities.',
    icon: '💬'
  },
  { 
    name: 'Vision Model', 
    description: 'Build AI models that can understand and analyze visual content.',
    icon: '👁️'
  },
  { 
    name: 'Persona Model', 
    description: 'Design AI personalities for specific roles and interactions.',
    icon: '🤖'
  }
];

const ModelsSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

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
          AI Models
        </h3>
        <div className="space-y-2">
          {models.map((model) => (
            <button
              key={model.name}
              onClick={() => setSelectedModel(model.name)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${selectedModel === model.name 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}
              `}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{model.icon}</span>
                <span>{model.name}</span>
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
        {selectedModel ? (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {selectedModel}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {models.find(m => m.name === selectedModel)?.description}
            </p>
            {/* Add more detailed content for each model type */}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Select a model to view details
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ModelsSection;
