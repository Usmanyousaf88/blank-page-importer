import { Button } from '../../../../components/ui/Button/button';
import { 
  Code,
  Palette,
  Globe,
  
  Camera,
  Star,
  ExternalLink,
  Github
} from 'lucide-react';

const ModernPortfolio = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Web Development",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Digital Solutions",
      description: "Building scalable solutions for the modern web"
    },
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: "Visual Content",
      description: "Photography and visual content creation"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/images/projects/ecommerce.jpg",
      description: "A modern e-commerce solution built with Next.js and Stripe",
      links: {
        live: "https://example.com",
        github: "https://github.com/example"
      }
    },
    {
      title: "Portfolio Website",
      category: "Design & Development",
      image: "/images/projects/portfolio.jpg",
      description: "A minimalist portfolio website with dark mode support",
      links: {
        live: "https://example.com",
        github: "https://github.com/example"
      }
    },
    {
      title: "Mobile App",
      category: "App Development",
      image: "/images/projects/mobile-app.jpg",
      description: "Cross-platform mobile app built with React Native",
      links: {
        live: "https://example.com",
        github: "https://github.com/example"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Creative Developer & Designer</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Crafting digital experiences that make a difference
          </p>
          <div className="flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-muted"></div>
              <div className="p-6">
                <span className="text-sm text-blue-500 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-500 hover:text-blue-600"
                  >
                    <Github className="w-4 h-4 mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Button size="lg">
            Get in Touch
            <Star className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ModernPortfolio;
