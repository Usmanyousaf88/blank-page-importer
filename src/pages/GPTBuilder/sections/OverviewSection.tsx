import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
 
  Users, 
  Database, 
  TrendingUp,
  Info,
  Brain
} from 'lucide-react';
import { GPTBuilderModal } from '../../../components/Modals/GPTBuilderModal';
import { AdvancedInteractiveButton } from '../../../components/core/AdvancedInteractiveButton';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  gradient?: {
    from: string;
    to: string;
    text: string;
    background?: string;
  }
  modalContent?: {
    fullDescription: string;
    keyFeatures: string[];
    useCases: string[];
    benefits: string[];
  }
}

const overviewFeatures: Feature[] = [
  {
    id: '1',
    icon: <Rocket className="w-6 h-6" />,
    title: 'AI Model Creation',
    description: 'Easily build and customize AI models tailored to your specific needs.',
    gradient: {
      from: "from-blue-500/20",
      to: "to-purple-500/20",
      text: "from-blue-600 to-purple-600",
      background: "bg-blue-50 dark:bg-blue-950/30"
    },
    modalContent: {
      fullDescription: "Our AI Model Creation tool provides an intuitive, powerful platform for developing custom AI assistants with unprecedented ease and flexibility.",
      keyFeatures: [
        "Drag-and-drop model architecture",
        "Pre-trained model templates",
        "Advanced customization options",
        "Real-time model performance insights"
      ],
      useCases: [
        "Customer support chatbots",
        "Personalized recommendation systems",
        "Interactive educational assistants",
        "Enterprise knowledge management"
      ],
      benefits: [
        "Reduce development time by 70%",
        "No advanced AI expertise required",
        "Scalable and adaptable solutions",
        "Cost-effective AI development"
      ]
    }
  },
  {
    id: '2',
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Prototyping',
    description: 'Accelerate your AI development with our intuitive, fast-paced prototyping tools.',
    gradient: {
      from: "from-purple-500/20",
      to: "to-pink-500/20",
      text: "from-purple-600 to-pink-600",
      background: "bg-purple-50 dark:bg-purple-950/30"
    },
    modalContent: {
      fullDescription: "Rapid Prototyping empowers developers to quickly iterate and test AI assistants, transforming ideas into functional prototypes in minutes.",
      keyFeatures: [
        "Instant model deployment",
        "Live testing environment",
        "Comprehensive performance metrics",
        "Seamless integration capabilities"
      ],
      useCases: [
        "Startup MVP development",
        "Proof of concept validation",
        "Agile AI solution testing",
        "Rapid market experimentation"
      ],
      benefits: [
        "Reduce time-to-market by 50%",
        "Lower development costs",
        "Validate ideas quickly",
        "Iterate with confidence"
      ]
    }
  },
  {
    id: '3',
    icon: <Brain className="w-6 h-6" />,
    title: 'Intelligent Customization',
    description: 'Advanced customization options to fine-tune AI models for your unique requirements.',
    gradient: {
      from: "from-indigo-500/20",
      to: "to-blue-500/20",
      text: "from-indigo-600 via-blue-600 to-indigo-600",
      background: "bg-indigo-50 dark:bg-indigo-950/30"
    },
    modalContent: {
      fullDescription: "Our Intelligent Customization tools provide granular control over AI model behavior, allowing you to create truly unique and specialized assistants.",
      keyFeatures: [
        "Fine-tuning parameter controls",
        "Custom knowledge base integration",
        "Behavior modification toolkit",
        "Ethical AI guardrail settings"
      ],
      useCases: [
        "Industry-specific AI assistants",
        "Personalized learning platforms",
        "Specialized customer interaction tools",
        "Domain-specific knowledge systems"
      ],
      benefits: [
        "Unprecedented model adaptability",
        "Maintain brand voice and tone",
        "Ensure compliance and accuracy",
        "Create differentiated AI solutions"
      ]
    }
  },
  {
    id: '4',
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Development',
    description: 'Share and collaborate on AI assistant projects.',
    gradient: {
      from: "from-green-500/20",
      to: "to-yellow-500/20",
      text: "from-green-600 to-yellow-600",
      background: "bg-green-50 dark:bg-green-950/30"
    },
    modalContent: {
      fullDescription: "Our Collaborative Development platform breaks down barriers, enabling teams to work together seamlessly on AI assistant creation and refinement.",
      keyFeatures: [
        "Real-time collaborative editing",
        "Version control and history",
        "Role-based access management",
        "Integrated communication tools"
      ],
      useCases: [
        "Cross-functional AI teams",
        "Enterprise AI development",
        "Open-source AI projects",
        "Academic research collaborations"
      ],
      benefits: [
        "Enhanced team productivity",
        "Knowledge sharing",
        "Faster innovation cycles",
        "Reduced development silos"
      ]
    }
  },
  {
    id: '5',
    icon: <Database className="w-6 h-6" />,
    title: 'Knowledge Integration',
    description: 'Seamlessly incorporate custom knowledge bases.',
    gradient: {
      from: "from-red-500/20",
      to: "to-orange-500/20",
      text: "from-red-600 to-orange-600",
      background: "bg-red-50 dark:bg-red-950/30"
    },
    modalContent: {
      fullDescription: "Our Knowledge Integration feature allows you to effortlessly connect your AI assistants with existing data sources, creating intelligent, context-aware systems.",
      keyFeatures: [
        "Multi-source data ingestion",
        "Automatic knowledge mapping",
        "Semantic understanding engine",
        "Continuous learning capabilities"
      ],
      useCases: [
        "Corporate knowledge management",
        "Customer support enhancement",
        "Research and documentation tools",
        "Personalized learning assistants"
      ],
      benefits: [
        "Leverage existing organizational knowledge",
        "Improve AI response accuracy",
        "Reduce training time",
        "Create context-aware AI systems"
      ]
    }
  },
  {
    id: '6',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Continuous Improvement',
    description: 'Leverage analytics to refine and optimize your AI models.',
    gradient: {
      from: "from-teal-500/20",
      to: "to-cyan-500/20",
      text: "from-teal-600 to-cyan-600",
      background: "bg-teal-50 dark:bg-teal-950/30"
    },
    modalContent: {
      fullDescription: "Our Continuous Improvement analytics provide deep insights into AI model performance, enabling data-driven refinement and optimization.",
      keyFeatures: [
        "Comprehensive performance dashboards",
        "Automated model performance tracking",
        "Intelligent recommendation engine",
        "A/B testing capabilities"
      ],
      useCases: [
        "AI model optimization",
        "Performance benchmarking",
        "Predictive maintenance",
        "Iterative AI development"
      ],
      benefits: [
        "Maximize AI model effectiveness",
        "Data-driven improvements",
        "Reduce manual optimization efforts",
        "Stay ahead of performance curves"
      ]
    }
  }
];

const OverviewSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const handleOpenModal = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Welcome to IntelliSync Solutions GPT Builder
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                IntelliSync GPTBuilder is a comprehensive platform designed to empower 
                developers and businesses to create, customize, and deploy intelligent 
                AI assistants with unprecedented ease and flexibility.
              </p>
              <div className="flex space-x-4">
                <AdvancedInteractiveButton 
                  href="https://intellisyncsolutions.io/"
                  icon={Rocket}
                  size="large"
                >
                  Start Building
                </AdvancedInteractiveButton>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Quick Stats
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total AI Assistants', value: '127' },
                  { label: 'Active Users', value: '1,245' },
                  { label: 'Models Deployed', value: '342' }
                ].map((stat) => (
                  <div 
                    key={stat.label} 
                    className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 rounded-md"
                  >
                    <span className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </span>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {overviewFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-all relative ${feature.gradient?.background}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`
                    p-4 rounded-xl 
                    bg-gradient-to-br ${feature.gradient?.from} ${feature.gradient?.to}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {feature.icon}
                  </div>
                  <h3 className={`
                    text-2xl font-bold ml-4 
                    bg-gradient-to-r ${feature.gradient?.text} 
                    bg-clip-text text-transparent
                  `}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex justify-between items-center">
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 origin-left"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleOpenModal(feature)}
                    className="ml-2 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                  >
                    <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-foreground" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <GPTBuilderModal 
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        feature={selectedFeature ?? { title: '', description: '', icon: <></> }}
      />
    </>
  );
};

export default OverviewSection;
