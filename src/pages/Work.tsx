import React, { useState, useCallback, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { WorkValuesModal } from '../components/Modals/WorkValuesModal';
import { WorkFeatures } from '../components/Modals/WorkFeatures';
import { 
  Users, 
  Shield,
  Target,
  Info
} from 'lucide-react';
import { Heart, Lightbulb } from 'lucide-react';
import { StreamingText } from '../components/features/StreamingText';
import { ScrollAnimation } from '../components/features/ScrollAnimation';
import { BorderTrail } from '../components/core/BorderTrail';

const Work = () => {
  const [selectedFeature, setSelectedFeature] = useState<'process' | 'commitment' | 'expectations' | null>(null);
  const [selectedValue, setSelectedValue] = useState<'innovation' | 'connection' | 'excellence' | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [features] = useState([
    {
      icon: Users,
      title: 'Our Process',
      description: 'We transform complex challenges into innovative solutions through a collaborative and strategic approach.',
      feature: 'process' as const,
      gradient: {
        from: "from-blue-500/20",
        to: "to-indigo-500/20",
        text: "from-blue-600 to-indigo-600"
      }
    },
    {
      icon: Shield,
      title: 'Our Commitment',
      description: 'Our commitment goes beyond delivering solutions—we create transformative partnerships that drive your success.',
      feature: 'commitment' as const,
      gradient: {
        from: "from-green-500/20",
        to: "to-emerald-500/20",
        text: "from-green-600 to-emerald-600"
      }
    },
    {
      icon: Target,
      title: 'Our Expectations',
      description: 'We set high standards and clear expectations, ensuring transparency, accountability, and exceptional outcomes.',
      feature: 'expectations' as const,
      gradient: {
        from: "from-purple-500/20",
        to: "to-violet-500/20",
        text: "from-purple-600 to-violet-600"
      }
    }
  ]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  }, [mouseX, mouseY]);

  const openModal = useCallback((feature: 'process' | 'commitment' | 'expectations') => {
    setSelectedFeature(feature);
  }, []);

  const openValueModal = useCallback((value: 'innovation' | 'connection' | 'excellence') => {
    setSelectedValue(value);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedFeature(null);
    setSelectedValue(null);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      color: 'text-blue-500',
      title: 'Innovation with Purpose',
      description: 'We don\'t just chase the latest trends – we pursue meaningful innovation that creates real value for our clients.',
      value: 'innovation',
      gradient: {
        from: "from-blue-500/20",
        to: "to-purple-500/20",
        text: "from-blue-600 to-purple-600"
      }
    },
    {
      icon: Users,
      color: 'text-purple-500',
      title: 'Personal Connection',
      description: 'We believe in building lasting relationships with our clients, understanding their vision and becoming true partners in their success.',
      value: 'connection',
      gradient: {
        from: "from-purple-500/20",
        to: "to-pink-500/20",
        text: "from-purple-600 to-pink-600"
      }
    },
    {
      icon: Target,
      color: 'text-green-500',
      title: 'Excellence in Delivery',
      description: 'We\'re committed to delivering solutions that exceed expectations and create lasting impact.',
      value: 'excellence',
      gradient: {
        from: "from-emerald-500/20",
        to: "to-cyan-500/20",
        text: "from-emerald-600 to-cyan-600"
      }
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative container mx-auto px-4 pt-24 pb-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <BorderTrail />
      
      {/* Hero Section */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Approach to Excellence
          </h1>
          <StreamingText
            text="At Intellisync Solutions, we believe that every project is more than just technical requirements—it's a story waiting to be told. By capturing the emotion and purpose behind your vision, we craft solutions that inspire action and create meaningful connections."
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            speed={50}
          />
        </motion.div>
      </ScrollAnimation>

      {/* Values Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
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
                  bg-gradient-to-br ${value.gradient.from} ${value.gradient.to}
                  hover:shadow-xl transition-all duration-300
                  transform hover:-translate-y-2
                `}>
                  <div className="flex items-center mb-4">
                    <div className={`
                      p-4 rounded-xl 
                      bg-gradient-to-br ${value.gradient.from} ${value.gradient.to}
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`
                      text-2xl font-bold ml-4 
                      bg-gradient-to-r ${value.gradient.text} 
                      bg-clip-text text-transparent
                    `}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {value.description}
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
                      onClick={() => openValueModal(value.value as 'innovation' | 'connection' | 'excellence')}
                      className="ml-2 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                    >
                      <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-foreground" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Personal Story Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20 bg-gray-50 dark:bg-gray-900 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-red-500" />
            The People Behind Intellisync
          </h2>
          
          <div className="space-y-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chris - Founder & CEO</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    As the founder of Intellisync Solutions, I believe in creating technology that makes a difference. 
                    My journey in tech has taught me that the best solutions come from truly understanding our clients' needs 
                    and building lasting relationships.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden shadow-lg border border-blue-200/50 dark:border-blue-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Aimee - The Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Behind every successful venture is a strong support system. My wife Aimee has been instrumental in shaping 
                    Intellisync's values of dedication, perseverance, and genuine care for others. Her influence reminds us daily 
                    that business is about making a positive impact in people's lives.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden shadow-lg border border-purple-200/50 dark:border-purple-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Our Family Values</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Our daughters, Courtney and Abbey, inspire us to think about the future - not just in terms of technology, 
                    but in terms of creating a better world. Their perspectives remind us to stay curious, innovative, and focused 
                    on what truly matters: making a positive difference in the world.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl overflow-hidden shadow-lg border border-green-200/50 dark:border-green-700/50">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Photo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* How We Work Section */}
      <ScrollAnimation>
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
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
                  bg-gradient-to-br ${feature.gradient.from} ${feature.gradient.to}
                  hover:shadow-xl transition-all duration-300
                  transform hover:-translate-y-2
                `}>
                  <div className="flex items-center mb-4">
                    <div className={`
                      p-4 rounded-xl 
                      bg-gradient-to-br ${feature.gradient.from} ${feature.gradient.to}
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`
                      text-2xl font-bold ml-4 
                      bg-gradient-to-r ${feature.gradient.text} 
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
                      onClick={() => openModal(feature.feature)}
                      className="ml-2 p-2 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                    >
                      <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-foreground" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </ScrollAnimation>

      {/* Modals */}
      {selectedFeature && (
        <WorkFeatures
          isOpen={!!selectedFeature}
          closeModal={closeModal}
          feature={selectedFeature}
        />
      )}
      {selectedValue && (
        <WorkValuesModal
          isOpen={!!selectedValue}
          closeModal={closeModal}
          value={selectedValue}
        />
      )}
    </div>
  );
};

export default Work;
