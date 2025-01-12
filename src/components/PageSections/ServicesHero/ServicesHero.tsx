import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code, Laptop, Lightbulb, Rocket, Cpu, Cloud, Info } from 'lucide-react';
import Animation from '../../features/Animation';
import { ServicesModal } from '../../Modals/ServicesModal';

export const ServicesHero = () => {
  const [selectedService, setSelectedService] = useState<{
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
    gradient: {
      from: string;
      to: string;
      text: string;
    };
  } | null>(null);
  const services = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Web Development",
      description: "Creating stunning, responsive websites that deliver exceptional user experiences.",
      delay: 0.2,
      gradient: {
        from: "from-blue-500/20",
        to: "to-purple-500/20",
        text: "from-blue-600 to-purple-600"
      }
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Application Software",
      description: "Building tailored A.I. solutions that solve your unique business needs.",
      delay: 0.3,
      gradient: {
        from: "from-purple-500/20",
        to: "to-pink-500/20",
        text: "from-purple-600 to-pink-600"
      }
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Leveraging cutting-edge artificial intelligence to transform your business capabilities.",
      delay: 0.35,
      gradient: {
        from: "from-indigo-500/20",
        to: "to-blue-500/20",
        text: "from-indigo-600 via-blue-600 to-indigo-600"
      }
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Digital Innovation",
      description: "Transforming ideas into cutting-edge digital solutions.",
      delay: 0.4,
      gradient: {
        from: "from-cyan-500/20",
        to: "to-blue-500/20",
        text: "from-cyan-600 to-blue-600"
      }
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Integrated Intelligence",
      description: "Building Personalized Intelligent solutions that enhance your digital experience.",
      delay: 0.45,
      gradient: {
        from: "from-emerald-500/20",
        to: "to-cyan-500/20",
        text: "from-emerald-600 to-cyan-600"
      }
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Solutions",
      description: "Accelerating your business with scalable technology solutions.",
      delay: 0.5,
      gradient: {
        from: "from-violet-500/20",
        to: "to-purple-500/20",
        text: "from-violet-600 via-purple-600 to-violet-600"
      }
    }
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Animation type="scale" duration={0.6}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our</span>
              <span className="relative ml-4 text-gray-900 dark:text-gray-100">
                Services
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </span>
            </h1>
          </Animation>
          
          <Animation type="fade" duration={0.6} delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Empowering your digital journey with <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">innovative solutions</span> and <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">cutting-edge technology</span>. We transform ideas into reality.
            </p>
          </Animation>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: service.delay
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
                bg-gradient-to-br ${service.gradient.from} ${service.gradient.to}
                hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-2
              `}>
                <div className="flex items-center mb-4">
                  <div className={`
                    p-4 rounded-xl 
                    bg-gradient-to-br ${service.gradient.from} ${service.gradient.to}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {service.icon}
                  </div>
                  <h3 className={`
                    text-2xl font-bold ml-4 
                    bg-gradient-to-r ${service.gradient.text} 
                    bg-clip-text text-transparent
                  `}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
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
                    onClick={() => setSelectedService(service)}
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

      <ServicesModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService ?? { title: '', description: '', icon: null }}
      />
    </section>
  );
};
