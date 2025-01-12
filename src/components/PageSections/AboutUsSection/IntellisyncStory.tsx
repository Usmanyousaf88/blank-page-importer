import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Users, Info } from 'lucide-react';
import { AdvancedInteractiveButton } from '../../../pages/Contact';
import { Link } from 'react-router-dom';
import { IntellisyncStoryModal } from '../../../components/Modals/IntellisyncStoryModal';

export const IntellisyncStory = () => {
  const [selectedStoryPoint, setSelectedStoryPoint] = useState<{
    icon: React.ReactNode;
    title: string;
    content: string;
    year: string;
    delay: number;
    gradient: {
      from: string;
      to: string;
      text: string;
    };
  } | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const storyPoints = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Our Vision",
      content: "Transforming digital adoption with personalized user experiences powered by innovative AI solutions.",
      year: "2020",
      delay: 0.2,
      gradient: {
        from: "from-blue-500/20",
        to: "to-purple-500/20",
        text: "from-blue-600 to-purple-600"
      }
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "The Journey",
      content: "A relentless pursuit of excellence, evolving from visionaries to pioneers in AI-powered transformation",
      year: "2021",
      delay: 0.3,
      gradient: {
        from: "from-purple-500/20",
        to: "to-pink-500/20",
        text: "from-purple-600 to-pink-600"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Growing Community",
      content: "Building a thriving ecosystem of personal and enterprise solutions.",
      year: "2023",
      delay: 0.4,
      gradient: {
        from: "from-indigo-500/20",
        to: "to-blue-500/20",
        text: "from-indigo-600 via-blue-600 to-indigo-600"
      }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "The Path Forward",
      content: "Unleashing the full potential of A.I. to reshape the future of digital experiences.",
      year: "2025",
      delay: 0.5,
      gradient: {
        from: "from-cyan-500/20",
        to: "to-emerald-500/20",
        text: "from-cyan-600 to-emerald-600"
      }
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left column - Main content */}
          <div className="lg:w-1/2 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IntelliSync</span>
              <span className="relative ml-4 text-gray-900 dark:text-gray-100">
                Story
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Empowering digital transformation with <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">innovative solutions</span> and <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">cutting-edge technology</span>. We turn visionary ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact">
                <AdvancedInteractiveButton 
                  variant="primary" 
                  size="large" 
                  className="flex items-center"
                >
                  Join Our Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AdvancedInteractiveButton>
              </Link>
            </motion.div>
          </div>

          {/* Right column - Timeline */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: point.delay
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 10 
                    }
                  }}
                  className="relative group"
                >
                  <motion.div
                    style={{
                      background: useMotionTemplate`
                        radial-gradient(
                          350px circle at ${mouseX}px ${mouseY}px,
                          rgba(59, 130, 246, 0.1),
                          transparent 80%
                        )
                      `
                    }}
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  />
                  
                  <div className={`
                    relative z-10 p-6 rounded-xl border border-border 
                    bg-gradient-to-br ${point.gradient.from} ${point.gradient.to}
                    hover:shadow-xl transition-all duration-300
                    transform hover:-translate-y-2
                  `}>
                    <div className="flex items-center mb-4">
                      <div className={`
                        p-4 rounded-xl 
                        bg-gradient-to-br ${point.gradient.from} ${point.gradient.to}
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        {point.icon}
                      </div>
                      <h3 className={`
                        text-2xl font-bold ml-4 
                        bg-gradient-to-r ${point.gradient.text} 
                        bg-clip-text text-transparent
                      `}>
                        {point.title}
                      </h3>
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">{point.year}</div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {point.content}
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
                        onClick={() => setSelectedStoryPoint(point)}
                        className="ml-2 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                      >
                        <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-foreground" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <IntellisyncStoryModal 
        isOpen={!!selectedStoryPoint}
        onClose={() => setSelectedStoryPoint(null)}
        storyPoint={selectedStoryPoint ?? { title: '', content: '', icon: null, year: '' }}
      />
    </section>
  );
};
