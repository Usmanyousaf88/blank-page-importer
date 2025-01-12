import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Star, 
  FileText, 
  ChevronRight 
} from 'lucide-react';

const insightsSections = [
  {
    key: 'overview',
    title: 'Insights Overview',
    icon: BarChart2,
    description: 'Comprehensive analytics of your AI assistant interactions',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Insights Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Insights page provides a comprehensive overview of user statistics 
          and activity, enabling you to monitor and analyze interactions with 
          your assistant.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { 
              icon: Users, 
              title: 'Total Users', 
              value: '1,245',
              description: 'Users who have interacted with your assistant'
            },
            { 
              icon: TrendingUp, 
              title: 'New Users', 
              value: '342',
              description: 'First-time users this month'
            },
            { 
              icon: MessageCircle, 
              title: 'Average Session Time', 
              value: '7m 23s',
              description: 'Average interaction duration'
            },
            { 
              icon: Star, 
              title: 'User Satisfaction', 
              value: '4.7/5',
              description: 'Average user rating'
            }
          ].map((metric) => (
            <div 
              key={metric.title} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <metric.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {metric.value}
                </h4>
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-200">
                    {metric.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    key: 'message-volume',
    title: 'Message Volume',
    icon: MessageCircle,
    description: 'Analyze message exchange trends',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Message Volume Analysis
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Monthly Message Trends
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
    key: 'user-engagement',
    title: 'User Engagement',
    icon: Users,
    description: 'Detailed user interaction metrics',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          User Engagement Metrics
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Active User Breakdown
              </h4>
              <div className="space-y-3">
                {[
                  { title: 'Daily Active Users', value: '456', percentage: '+12%' },
                  { title: 'Weekly Active Users', value: '2,345', percentage: '+8%' },
                  { title: 'Monthly Active Users', value: '7,890', percentage: '+15%' }
                ].map((stat) => (
                  <div 
                    key={stat.title} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {stat.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {stat.value} Users
                      </p>
                    </div>
                    <span className="text-green-600 font-medium">
                      {stat.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Sessions per User
              </h4>
              <div className="h-64 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  User Sessions Chart Placeholder
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Average <span className="font-bold text-blue-600 dark:text-blue-400">3.2</span> sessions per user
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'popular-intents',
    title: 'Popular Intents',
    icon: Star,
    description: 'Most frequently triggered user intents',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Popular Interaction Intents
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              { intent: 'Product Information', percentage: 35, color: 'bg-blue-500' },
              { intent: 'Technical Support', percentage: 25, color: 'bg-green-500' },
              { intent: 'Billing Queries', percentage: 15, color: 'bg-purple-500' },
              { intent: 'Feature Requests', percentage: 10, color: 'bg-yellow-500' },
              { intent: 'General Inquiry', percentage: 15, color: 'bg-red-500' }
            ].map((intent) => (
              <div key={intent.intent} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    {intent.intent}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {intent.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`${intent.color} h-2.5 rounded-full`} 
                    style={{ width: `${intent.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'feedback',
    title: 'User Feedback',
    icon: FileText,
    description: 'Analyze user satisfaction and comments',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          User Feedback Analysis
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Overall Satisfaction
              </h4>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-md text-center">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  4.7
                </div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill={i < 4 ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Based on 1,245 user ratings
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-200">
                Recent Feedback
              </h4>
              <div className="space-y-3">
                {[
                  { 
                    name: 'Alex Johnson', 
                    comment: 'Great assistant! Really helps streamline my workflow.', 
                    rating: 5 
                  },
                  { 
                    name: 'Sarah Martinez', 
                    comment: 'Useful, but could use more customization options.', 
                    rating: 4 
                  },
                  { 
                    name: 'Michael Chen', 
                    comment: 'Impressive AI capabilities. Saves me time daily.', 
                    rating: 5 
                  }
                ].map((feedback, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-900 p-4 rounded-md"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {feedback.name}
                      </h5>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                            fill={i < feedback.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      "{feedback.comment}"
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

const InsightsSection: React.FC = () => {
  const [activeInsightsSubsection, setActiveInsightsSubsection] = useState<string>('overview');

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
          Insights
        </h3>
        <div className="space-y-2">
          {insightsSections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveInsightsSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeInsightsSubsection === section.key 
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
        {insightsSections.find(section => section.key === activeInsightsSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default InsightsSection;
