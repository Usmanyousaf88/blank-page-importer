import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  ChevronRight, 
  Rocket, Globe, Lock,
  Layers, Compass, Zap,
  Brain, Heart, Briefcase,
  Megaphone, GraduationCap, Wallet, Film, Building2, HandHeart
  
} from 'lucide-react';

import { FeatureSlider } from './FeatureSlider/FeatureSlider';
import { FloatingIcons } from './FloatingIcons';
import { CapabilitiesCarousel } from './CapabilitiesCarousel/CapabilitiesCarousel';
import './FloatingIcons.css';

export const AISection: React.FC = () => {
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const heroTexts = [
    "Transform Your Vision into Digital Reality",
    "Unleash the Power of AI Innovation",
    "Shape Tomorrow's Success Today",
    "Elevate Human Potential with AI"
  ];

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      text: "Launch Your AI Journey"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Global AI Solutions"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Secure Implementation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Lightning-Fast Integration"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(featureInterval);
  }, [features.length]);

  const advancedFeatures = [
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Business Transformation",
      description: "Revolutionize your business with AI that doesn't just adapt – it anticipates. Transform challenges into opportunities.",
      gradient: {
        from: "from-purple-500/30",
        to: "to-indigo-600/30",
        text: "from-purple-600 to-indigo-700",
        hover: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700"
      },
      features: [
        "10x Revenue Growth Potential",
        "Smart Decision Analytics",
        "Automated Excellence"
      ]
    },
    {
      icon: <Megaphone className="w-10 h-10 text-white" />,
      title: "Content Creator's Edge",
      description: "Amplify your creative voice with AI that understands your unique style. Turn inspiration into viral content.",
      gradient: {
        from: "from-pink-500/30",
        to: "to-rose-600/30",
        text: "from-pink-600 to-rose-700",
        hover: "hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-700"
      },
      features: [
        "Viral Content Generation",
        "Audience Growth Analytics",
        "Multi-Platform Optimization"
      ]
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Educational Evolution",
      description: "Transform learning into an engaging journey. Personalized education that adapts to every mind.",
      gradient: {
        from: "from-green-500/30",
        to: "to-emerald-600/30",
        text: "from-green-600 to-emerald-700",
        hover: "hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-700"
      },
      features: [
        "Adaptive Learning Paths",
        "Real-time Progress Tracking",
        "Interactive Knowledge Maps"
      ]
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "Healthcare Innovation",
      description: "Revolutionize patient care with AI that sees the unseen. Every diagnosis becomes a breakthrough.",
      gradient: {
        from: "from-red-500/30",
        to: "to-orange-600/30",
        text: "from-red-600 to-orange-700",
        hover: "hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-700"
      },
      features: [
        "Predictive Diagnostics",
        "Personalized Treatment",
        "24/7 Patient Monitoring"
      ]
    },
    {
      icon: <Wallet className="w-10 h-10 text-white" />,
      title: "Finance Reimagined",
      description: "Take control of your finances with AI that empowers smarter decisions, faster growth, and greater confidence.",
      gradient: {
        from: "from-cyan-500/30",
        to: "to-blue-600/30",
        text: "from-cyan-600 to-blue-700",
        hover: "hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700"
      },
      features: [
        "Predictive Financial Planning",
        "Real-time Portfolio Insights",
        "Fraud Detection at Scale"
      ]
    },
    {
      icon: <Film className="w-10 h-10 text-white" />,
      title: "Entertainment Evolution",
      description: "Elevate creativity with AI-crafted entertainment solutions. Unlock experiences your audience will never forget.",
      gradient: {
        from: "from-indigo-500/30",
        to: "to-violet-600/30",
        text: "from-indigo-600 to-violet-700",
        hover: "hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-700"
      },
      features: [
        "Personalized Audience Engagement",
        "Dynamic Content Generation",
        "Immersive Multimedia Insights"
      ]
    },
    {
      icon: <Building2 className="w-10 h-10 text-white" />,
      title: "Smart Cities, Smarter Living",
      description: "Build communities of the future with AI that optimizes energy, connectivity, and quality of life.",
      gradient: {
        from: "from-lime-500/30",
        to: "to-green-600/30",
        text: "from-lime-600 to-green-700",
        hover: "hover:bg-gradient-to-r hover:from-lime-600 hover:to-green-700"
      },
      features: [
        "Predictive Traffic Management",
        "Efficient Energy Distribution",
        "Data-Driven Urban Planning"
      ]
    },
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "Personal Growth",
      description: "Your AI-powered journey to excellence. Transform potential into unprecedented achievement.",
      gradient: {
        from: "from-blue-500/30",
        to: "to-cyan-600/30",
        text: "from-blue-600 to-cyan-700",
        hover: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-700"
      },
      features: [
        "Skill Enhancement AI",
        "Personal Goal Tracking",
        "Growth Analytics"
      ]
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: "AI Wellness Companion",
      description: "Transform your wellness journey with AI that listens, learns, and motivates you toward a better tomorrow.",
      gradient: {
        from: "from-blue-500/30",
        to: "to-teal-600/30",
        text: "from-blue-600 to-teal-700",
        hover: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-700"
      },
      features: [
        "Personalized Wellness Plans",
        "Stress & Sleep Tracking",
        "Guided Health Recommendations"
      ]
    },
    {
      icon: <HandHeart className="w-10 h-10 text-white" />,
      title: "AI for Nonprofits",
      description: "Empower missions with AI tools designed to create impact, amplify outreach, and maximize resources.",
      gradient: {
        from: "from-purple-500/30",
        to: "to-indigo-600/30",
        text: "from-purple-600 to-indigo-700",
        hover: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-700"
      },
      features: [
        "Impact Analytics",
        "Donor Engagement Insights",
        "Cause-Oriented Campaign Planning"
      ]
    }
  ];

  const aiCapabilities = [
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Rapid Prototyping",
      description: "Transform ideas into functional prototypes in hours, not weeks.",
      gradient: {
        from: "from-purple-500",
        to: "to-indigo-600",
        text: "text-white"
      }
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Intelligent Insights",
      description: "Leverage AI to uncover hidden patterns and actionable intelligence.",
      gradient: {
        from: "from-blue-500",
        to: "to-cyan-600",
        text: "text-white"
      }
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Scalability",
      description: "Deploy solutions that seamlessly scale across international markets.",
      gradient: {
        from: "from-green-500",
        to: "to-teal-600",
        text: "text-white"
      }
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Advanced Security",
      description: "Robust AI-powered security protocols to protect your digital assets.",
      gradient: {
        from: "from-red-500",
        to: "to-orange-600",
        text: "text-white"
      }
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Lightning Fast Processing",
      description: "Accelerate computational tasks with cutting-edge AI algorithms.",
      gradient: {
        from: "from-yellow-500",
        to: "to-amber-600",
        text: "text-white"
      }
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Multi-Layer Integration",
      description: "Seamlessly integrate AI across multiple technology stacks.",
      gradient: {
        from: "from-pink-500",
        to: "to-rose-600",
        text: "text-white"
      }
    },
    {
      icon: <Compass className="w-8 h-8 text-white" />,
      title: "Strategic Navigation",
      description: "AI-driven decision support for complex business challenges.",
      gradient: {
        from: "from-indigo-500",
        to: "to-purple-600",
        text: "text-white"
      }
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Empathetic AI",
      description: "Design AI solutions with human-centric emotional intelligence.",
      gradient: {
        from: "from-rose-500",
        to: "to-pink-600",
        text: "text-white"
      }
    },
    {
      icon: <Film className="w-8 h-8 text-white" />,
      title: "Creative Generation",
      description: "Generate innovative content, designs, and multimedia experiences.",
      gradient: {
        from: "from-cyan-500",
        to: "to-blue-600",
        text: "text-white"
      }
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Enterprise Optimization",
      description: "Transform business processes with intelligent automation.",
      gradient: {
        from: "from-teal-500",
        to: "to-green-600",
        text: "text-white"
      }
    },
    {
      icon: <HandHeart className="w-8 h-8 text-white" />,
      title: "Ethical AI Development",
      description: "Commit to responsible and transparent AI technologies.",
      gradient: {
        from: "from-orange-500",
        to: "to-red-600",
        text: "text-white"
      }
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Professional Augmentation",
      description: "Enhance professional capabilities through intelligent assistants.",
      gradient: {
        from: "from-amber-500",
        to: "to-yellow-600",
        text: "text-white"
      }
    }
  ];

  const performanceMetrics = [
    { 
      label: "Growth Impact", 
      value: "10x", 
      description: "Average business growth with AI" 
    },
    { 
      label: "Efficiency Boost", 
      value: "300%", 
      description: "Increased operational efficiency" 
    },
    { 
      label: "Innovation Rate", 
      value: "24/7", 
      description: "Continuous evolution & learning" 
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
      <FloatingIcons mouseX={mouseX} mouseY={mouseY} />
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Feature Banner */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
            key={featureIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {features[featureIndex].icon}
            <span className="text-white/90 font-medium">
              {features[featureIndex].text}
            </span>
            <ChevronRight className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={heroTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              {heroTexts[heroTextIndex]}
            </motion.h1>
          </AnimatePresence>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the transformative power of AI to <span className="text-blue-400 font-semibold">revolutionize</span> your world. 
            From visionary business solutions to groundbreaking healthcare innovations, 
            we're not just implementing AI – we're <span className="text-purple-400 font-semibold">unleashing human potential</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 w-full">
          <FeatureSlider features={advancedFeatures} />
        </div>

        {/* AI Capabilities Section */}
        <div className="mt-16">
          <CapabilitiesCarousel capabilities={aiCapabilities} />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 text-center group"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                  {metric.value}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{metric.label}</h3>
                  <p className="text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
