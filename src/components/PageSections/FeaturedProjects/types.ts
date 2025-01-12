import { LucideIcon } from 'lucide-react';

export interface ProjectFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  features?: ProjectFeature[];
  demoUrl?: string;
  githubUrl?: string;
  displayTitle?: React.ReactNode;  // Optional field for fancy rendering
}
