import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../PageSections/FeaturedProjects/types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[400px] max-w-[400px]"
    >
      <button
        onClick={() => onClick(project)}
        className="block w-full text-left"
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 pt-8 px-8 -mt-4 relative bg-card rounded-t-3xl">
          <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-primary font-medium">
            View Project
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </button>
    </motion.div>
  );
};
