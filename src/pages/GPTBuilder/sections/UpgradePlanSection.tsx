import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Check, 
  Zap, 
  TrendingUp, 
  ChevronRight 
} from 'lucide-react';

const planDetails = [
  {
    key: 'current-plan',
    title: 'Current Plan',
    icon: CreditCard,
    description: 'Overview of your current subscription',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Current Subscription
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Trial Plan
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Free tier with limited messaging
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                $0 
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  / month
                </span>
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { label: 'Message Limit', value: '50 messages/month', icon: Zap },
              { label: 'Active Users', value: '1', icon: TrendingUp }
            ].map((detail) => (
              <div 
                key={detail.label} 
                className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-md"
              >
                <div className="flex items-center space-x-3">
                  <detail.icon className="text-blue-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">
                    {detail.label}
                  </span>
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'upgrade-options',
    title: 'Upgrade Options',
    icon: Zap,
    description: 'Available subscription plans',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Upgrade Your Plan
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Starter Plan',
                price: 37,
                messageLimit: 2000,
                features: [
                  'Up to 2,000 messages/month',
                  'Basic analytics',
                  'Standard support'
                ],
                recommended: false
              },
              {
                name: 'Pro Plan',
                price: 99,
                messageLimit: 5000,
                features: [
                  'Up to 5,000 messages/month',
                  'Advanced analytics',
                  'Priority support',
                  'Custom integrations'
                ],
                recommended: true
              }
            ].map((plan) => (
              <div 
                key={plan.name} 
                className={`
                  border rounded-lg p-6 transition-all 
                  ${plan.recommended 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'}
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className={`
                    text-xl font-bold 
                    ${plan.recommended ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}
                  `}>
                    {plan.name}
                    {plan.recommended && (
                      <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
                  </h4>
                  <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    ${plan.price}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      / month
                    </span>
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center space-x-2"
                    >
                      <Check 
                        className={`
                          ${plan.recommended 
                            ? 'text-blue-500' 
                            : 'text-green-500'}
                        `} 
                        size={20} 
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button 
                  className={`
                    w-full py-3 rounded-lg transition-all 
                    ${plan.recommended 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
                  `}
                >
                  Select {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'billing-history',
    title: 'Billing History',
    icon: CreditCard,
    description: 'View past invoices and payments',
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Billing History
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <div className="space-y-4">
            {[
              { 
                date: 'January 2024', 
                amount: 0, 
                status: 'Trial', 
                plan: 'Free Plan' 
              },
              { 
                date: 'December 2023', 
                amount: 0, 
                status: 'Trial', 
                plan: 'Free Plan' 
              }
            ].map((billing) => (
              <div 
                key={billing.date} 
                className="bg-white dark:bg-gray-900 p-4 rounded-md flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    {billing.date}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {billing.plan}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-sm 
                      ${billing.status === 'Trial' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'}
                    `}
                  >
                    {billing.status}
                  </span>
                  <span className="font-bold text-gray-800 dark:text-gray-100">
                    ${billing.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

const UpgradePlanSection: React.FC = () => {
  const [activeUpgradePlanSubsection, setActiveUpgradePlanSubsection] = useState<string>('current-plan');

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
          Upgrade Plan
        </h3>
        <div className="space-y-2">
          {planDetails.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveUpgradePlanSubsection(section.key)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
                ${activeUpgradePlanSubsection === section.key 
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
        {planDetails.find(section => section.key === activeUpgradePlanSubsection)?.content}
      </motion.div>
    </div>
  );
};

export default UpgradePlanSection;
