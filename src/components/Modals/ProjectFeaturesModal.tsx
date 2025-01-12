import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Target, Zap } from 'lucide-react';
import { BorderTrail } from '../core/BorderTrail';
import { Project } from '../PageSections/FeaturedProjects/types';

interface ProjectFeaturesModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

export const ProjectFeaturesModal = ({ project, onClose, isOpen }: ProjectFeaturesModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-background w-full max-w-4xl mx-4 rounded-2xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <BorderTrail 
              className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
              size={120}
            />
            <div className="p-8 relative z-10">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-6 h-6 object-contain" 
                  />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h2>
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-500" /> 
                    Project Vision
                  </h3>
                  <p className="text-muted-foreground">
                    A comprehensive digital solution that transforms complex challenges into elegant, user-centric experiences through innovative design and cutting-edge technology.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-500" /> 
                    Technology Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.tags.map((tag, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="w-5 h-5 mt-1 text-primary">
                        {React.createElement(feature.icon, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-6 flex justify-end space-x-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
