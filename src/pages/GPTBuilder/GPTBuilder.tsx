import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import section components
import ModelsSection from './sections/ModelsSection';
import OnboardingSection from './sections/OnboardingSection';
import AccountManagementSection from './sections/AccountManagementSection';
import AIAssistantSection from './sections/AIAssistantSection';
import InsightsSection from './sections/InsightsSection';
import KnowledgeBaseSection from './sections/KnowledgeBaseSection';
import UpgradePlanSection from './sections/UpgradePlanSection';
import UserManagementSection from './sections/UserManagementSection';
import SettingsSection from './sections/SettingsSection';
import OverviewSection from './sections/OverviewSection';

// Import Sidebar component
import Sidebar from './components/Sidebar';

const GPTBuilder: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    'overview' |
    'models' | 
    'onboarding' | 
    'account-management' | 
    'ai-assistant' | 
    'insights' | 
    'knowledge-base' | 
    'upgrade-plan' | 
    'user-management' | 
    'settings'
  >('overview');

  return (
    <>
      <Helmet>
        <title>GPT Builder | AI Model Creation</title>
        <meta name="description" content="Create and customize your own AI models with our intuitive GPT Builder" />
      </Helmet>

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={(section) => setActiveSection(section as typeof activeSection)} 
        />

        {/* Main Content Area */}
        <div className="flex-grow overflow-y-auto bg-gray-50 dark:bg-gray-800 p-8">
          {/* Render the active section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'overview' && <OverviewSection />}
            {activeSection === 'models' && <ModelsSection />}
            {activeSection === 'onboarding' && <OnboardingSection />}
            {activeSection === 'account-management' && <AccountManagementSection />}
            {activeSection === 'ai-assistant' && <AIAssistantSection />}
            {activeSection === 'insights' && <InsightsSection />}
            {activeSection === 'knowledge-base' && <KnowledgeBaseSection />}
            {activeSection === 'upgrade-plan' && <UpgradePlanSection />}
            {activeSection === 'user-management' && <UserManagementSection />}
            {activeSection === 'settings' && <SettingsSection />}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GPTBuilder;