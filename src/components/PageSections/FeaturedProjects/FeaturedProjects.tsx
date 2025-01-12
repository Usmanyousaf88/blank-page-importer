import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain,
  Heart,
  Users,
  Clock,
  Calculator,
  Target,
  Zap,
  Lightbulb,
 
  LucideIcon
} from 'lucide-react';
import { ProjectFeaturesModal } from '../../Modals/ProjectFeaturesModal';
import { TextShimmer } from '@/components/core/text-shimmer';
import { InfiniteSlider } from '@/components/core/infinite-slider';
import { TextEffect } from '@/components/core/text-effect';
import type { Project } from './types';

const iconVariations = [
  { Icon: Brain, color: 'text-purple-400', description: 'Intelligent Solutions' },
  { Icon: Heart, color: 'text-pink-400', description: 'Passionate Craftsmanship' },
  { Icon: Users, color: 'text-blue-400', description: 'Collaborative Approach' },
];

const ProjectFeatureHighlight = ({ icon, title }: { 
  icon: LucideIcon, 
  title: string 
}) => {
  // Find a matching icon variation or use a default
  const variation = iconVariations.find(v => v.Icon === icon) || iconVariations[0];
  
  return (
    <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-2 group">
      <div className={`${variation.color} opacity-70 group-hover:opacity-100 transition-all`}>
        {React.createElement(icon, { size: 20 })}
      </div>
      <div>
        <span className="text-xs text-white/80 truncate block">{title}</span>
        <span className="text-[10px] text-white/50 hidden group-hover:block transition-all">
          {variation.description}
        </span>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: "Intellisync Solutions - BusinessOne",
    displayTitle: <TextEffect preset="fade">Intellisync Solutions - BusinessOne</TextEffect>,
    description: "A comprehensive suite of tools and calculators designed to assist entrepreneurs and seasoned business professionals in making data-driven decisions.",
    imageUrl: "/images/business-one.png",
    link: "/work/business-one",
    tags: ["React", "TypeScript", "Firebase"],
    features: [
      {
        title: "Business Analytics",
        description: "Advanced analytics and reporting tools for business insights",
        icon: Calculator
      },
      {
        title: "Financial Planning",
        description: "Comprehensive financial planning and forecasting tools",
        icon: Code
      },
      {
        title: "Strategic Insights",
        description: "AI-powered strategic recommendations and trend analysis",
        icon: Zap
      },
      {
        title: "Performance Tracking",
        description: "Real-time performance metrics and KPI monitoring",
        icon: Target
      },
      {
        title: "Innovation Tools",
        description: "Creative problem-solving and innovation frameworks",
        icon: Lightbulb
      },
      {
        title: "Goal Setting",
        description: "Precise goal setting and progress tracking mechanisms",
        icon: Target
      }
    ]
  },
  
  {
    title: "Serenity",
    displayTitle: <TextEffect preset="fade">Serenity</TextEffect>,
    description: "An interactive mental health and wellness platform featuring mood tracking, daily affirmations, journaling, guided meditation, and sleep tracking.",
    imageUrl: "/images/serenity.png",
    link: "/work/serenity",
    tags: ["React", "TypeScript", "Node.js", "Firebase"],
    features: [
      {
        title: "AI Mood Analysis",
        description: "Advanced AI-powered mood tracking and pattern recognition with personalized insights",
        icon: Brain
      },
      {
        title: "Guided Meditation",
        description: "Personalized meditation sessions with breathing exercises and progress tracking",
        icon: Heart
      },
      {
        title: "Smart Journaling",
        description: "AI-enhanced journaling with emotion analysis and therapeutic writing prompts",
        icon: Brain
      },
      {
        title: "Sleep Analytics",
        description: "Comprehensive sleep tracking with quality analysis and improvement recommendations",
        icon: Clock
      },
      {
        title: "Wellness Routines",
        description: "Customizable daily wellness routines with reminders and habit tracking",
        icon: Heart
      },
      {
        title: "Community Support",
        description: "Safe, moderated peer support groups and professional guidance",
        icon: Users
      }
    ]
  },
  {
    title: "Teen Minds Matter",
    displayTitle: <TextEffect preset="fade">Teen Minds Matter</TextEffect>,
    description: "A social networking platform for youth mental health, featuring community groups, peer-led tutoring, and gamified interactions for ages 10-18.",
    imageUrl: "/images/teen-minds.png",
    link: "/work/teen-minds-matter",
    tags: ["React", "TypeScript", "Supabase", "Node.js"],
    features: [
      {
        title: "Safe Social Networking",
        description: "Age-appropriate, moderated social platform with real-time content filtering",
        icon: Users
      },
      {
        title: "Peer Support Groups",
        description: "Themed support groups led by trained peer mentors and supervised by professionals",
        icon: Heart
      },
      {
        title: "Interactive Learning",
        description: "Gamified mental health education with achievements and rewards",
        icon: Brain
      },
      {
        title: "Crisis Support",
        description: "24/7 access to crisis resources and professional support with smart escalation",
        icon: Heart
      },
      {
        title: "Parent Dashboard",
        description: "Secure parent portal for activity monitoring and professional communications",
        icon: Users
      },
      {
        title: "AI Mentor",
        description: "AI-powered companion providing age-appropriate guidance and support",
        icon: Brain
      }
    ]
  },
  {
    title: "Intellisync Solutions - EducationOne",
    displayTitle: <TextEffect preset="fade">Intellisync Solutions - EducationOne</TextEffect>,
    description: "A comprehensive AI-powered educational platform featuring expert AI tutors across multiple subjects, with specialized dashboards for students, parents, teachers, and administrators.",
    imageUrl: "/images/education-one.png",
    link: "/work/education-one",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    features: [
      {
        title: "AI Subject Tutors",
        description: "Specialized AI tutors for Mathematics, Physics, Languages, and Humanities with interactive problem-solving",
        icon: Brain
      },
      {
        title: "Student Dashboard",
        description: "Personalized learning paths, progress tracking, and adaptive study recommendations",
        icon: Users
      },
      {
        title: "Parent Portal",
        description: "Real-time progress monitoring, performance analytics, and direct communication with teachers",
        icon: Users
      },
      {
        title: "Teacher Analytics",
        description: "Comprehensive class performance metrics, individual student insights, and curriculum planning tools",
        icon: Calculator
      },
      {
        title: "Admin Management",
        description: "Institution-wide analytics, resource allocation, and performance benchmarking tools",
        icon: Brain
      },
      {
        title: "Progress Tracking",
        description: "Advanced analytics showing learning patterns, strengths, and areas for improvement",
        icon: Calculator
      }
    ]
  },
  {
    title: "Intellisync Solutions - TimeCapsule",
    displayTitle: <TextEffect preset="fade">Intellisync Solutions - TimeCapsule</TextEffect>,
    description: "AI-enhanced photo sharing platform with smart albums, family sharing, and interactive AI storytelling for preserving and sharing memories.",
    imageUrl: "/images/time-capsule.png",
    link: "/work/time-capsule",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    features: [
      {
        title: "Smart Photo Organization",
        description: "AI-powered photo categorization and tagging with facial recognition and scene detection",
        icon: Brain
      },
      {
        title: "Memory Stories",
        description: "AI-generated narratives that transform your photos into engaging stories and timelines",
        icon: Brain
      },
      {
        title: "Family Sharing",
        description: "Secure family albums with collaborative features and privacy controls",
        icon: Users
      },
      {
        title: "Time Travel",
        description: "Interactive timeline view with AI-enhanced memory exploration and reminiscence",
        icon: Clock
      }
    ]
  },
  {
    title: "Intellisync Solutions - PersonalOne",
    displayTitle: <TextEffect preset="fade">Intellisync Solutions - PersonalOne</TextEffect>,
    description: "A comprehensive personal finance platform offering advanced tools for wealth management, investment planning, tax projections, and retirement planning.",
    imageUrl: "/images/personal-one.png",
    link: "/work/personal-one",
    tags: ["React", "TypeScript", "Node.js", "Firebase"],
    features: [
      {
        title: "Wealth Management",
        description: "Comprehensive investment tracking and portfolio optimization tools",
        icon: Calculator
      },
      {
        title: "Tax Planning",
        description: "Advanced tax projection and optimization strategies",
        icon: Code
      },
      {
        title: "Retirement Planner",
        description: "Interactive retirement savings and income projection tools",
        icon: Brain
      },
      {
        title: "Financial Goal Setting",
        description: "Smart goal tracking with personalized recommendations",
        icon: Target
      }
    ]
  }
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden w-full">
      <div className="relative z-10 w-full max-w-[2000px] px-4 sm:px-6 lg:px-8 mx-auto">
        <section className="relative min-h-screen flex flex-col justify-center items-center py-16 overflow-hidden w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100 
                }}
                className="group relative bg-white/5 dark:bg-black/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
              >
                {/* Subtle gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col space-y-6">
                    <div>
                      <TextShimmer className="text-2xl md:text-3xl font-bold mb-3 break-words">
                        {project.displayTitle}
                      </TextShimmer>
                      <p className="text-gray-300 text-sm md:text-base mb-4 break-words">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-3 py-1.5 bg-white/5 rounded-full text-xs font-medium text-white/90 hover:bg-white/10 transition-colors duration-200 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features?.slice(0, 4).map((feature, featureIndex) => (
                        <ProjectFeatureHighlight 
                          key={`${feature.title}-${featureIndex}`} 
                          icon={feature.icon} 
                          title={feature.title} 
                        />
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/25"
                    >
                      View Full Features
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 w-full max-w-screen-2xl">
            <InfiniteSlider gap={32} duration={50} reverse>
              {projects.flatMap(project => 
                project.features?.map((feature, index) => (
                  <ProjectFeatureHighlight 
                    key={`${project.title}-${index}`} 
                    icon={feature.icon} 
                    title={feature.title} 
                  />
                ))
              )}
            </InfiniteSlider>
          </div>

          <AnimatePresence initial={false}>
            {selectedProject && (
              <ProjectFeaturesModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)}
                isOpen={!!selectedProject}
              />
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
