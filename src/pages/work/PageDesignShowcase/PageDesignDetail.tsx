import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/Button/button';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StreamingText } from '../../../components/features/StreamingText';
import UnderConstructionPage from '../../../components/UnderConstructionPage';

interface PageDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  screenshots?: { url: string; caption: string }[];
}

const pageDesigns: Record<string, PageDesign> = {
  'business-one': {
    id: 'business-one',
    title: 'Intellisync Solutions - BusinessOne',
    description: 'A comprehensive suite of tools and calculators designed to assist entrepreneurs and seasoned business professionals in making data-driven decisions.',
    image: '/projects/business-one.png',
    demoUrl: '/not-found',
    category: 'Business',
    tags: ['React', 'TypeScript', 'Firebase'],
    featured: true,
    fullDescription: 'BusinessOne is a powerful platform that combines advanced analytics, AI-driven insights, and comprehensive business tools to help entrepreneurs and professionals make informed decisions. From financial planning to pricing optimization, BusinessOne provides all the tools needed for business success.',
    features: [
      'Smart AI Business Planning with strategy recommendations',
      'Advanced Cashflow Analysis and forecasting',
      'Financial Ratio Analysis with industry benchmarking',
      'Interactive Break-Even Calculator with visual charts',
      'Smart Pricing Optimization tools',
      'Real-time business metrics monitoring'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Firebase',
      'TailwindCSS',
      'OpenAI API',
      'Chart.js'
    ],
    screenshots: [
      {
        url: '/projects/business-one/dashboard.png',
        caption: 'Main dashboard with key business metrics'
      },
      {
        url: '/projects/business-one/analytics.png',
        caption: 'Advanced analytics and reporting'
      }
    ]
  },
  'serenity': {
    id: 'serenity',
    title: 'Serenity',
    description: 'An interactive mental health and wellness platform featuring mood tracking, daily affirmations, journaling, guided meditation, and sleep tracking.',
    image: '/projects/serenity.png',
    demoUrl: '/work/serenity',
    category: 'Health & Wellness',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase'],
    featured: true,
    fullDescription: 'Serenity is a comprehensive mental health and wellness platform designed to support users in their journey to better mental health. With features ranging from AI-powered mood analysis to guided meditation sessions, Serenity provides a holistic approach to mental wellness.',
    features: [
      'AI-powered mood tracking and pattern recognition',
      'Personalized meditation sessions with progress tracking',
      'Smart journaling with emotion analysis',
      'Comprehensive sleep tracking and analytics',
      'Customizable wellness routines',
      'Safe community support groups'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Firebase',
      'TailwindCSS',
      'OpenAI API'
    ],
    screenshots: [
      {
        url: '/projects/serenity/dashboard.png',
        caption: 'Personal wellness dashboard'
      },
      {
        url: '/projects/serenity/meditation.png',
        caption: 'Guided meditation interface'
      }
    ]
  },
  'teen-minds-matter': {
    id: 'teen-minds-matter',
    title: 'Teen Minds Matter',
    description: 'A social networking platform for youth mental health, featuring community groups, peer-led tutoring, and gamified interactions for ages 10-18.',
    image: '/projects/teen-minds.png',
    demoUrl: '/work/teen-minds-matter',
    category: 'Social',
    tags: ['React', 'TypeScript', 'Supabase', 'Node.js'],
    featured: true,
    fullDescription: 'Teen Minds Matter is a safe, engaging platform designed specifically for young people aged 10-18 to support their mental health journey. With features like peer support groups, interactive learning, and crisis support, it provides a comprehensive support system for youth mental health.',
    features: [
      'Age-appropriate social networking',
      'Moderated peer support groups',
      'Gamified mental health education',
      '24/7 crisis support access',
      'Secure parent dashboard',
      'AI-powered mentoring'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Supabase',
      'Node.js',
      'TailwindCSS',
      'Socket.io'
    ],
    screenshots: [
      {
        url: '/projects/teen-minds/community.png',
        caption: 'Community support groups'
      },
      {
        url: '/projects/teen-minds/learning.png',
        caption: 'Interactive learning platform'
      }
    ]
  },
  'education-one': {
    id: 'education-one',
    title: 'Intellisync Solutions - EducationOne',
    description: 'A comprehensive AI-powered educational platform featuring expert AI tutors across multiple subjects, with specialized dashboards for students, parents, teachers, and administrators.',
    image: '/projects/education-one.png',
    demoUrl: '/work/education-one',
    category: 'Education',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true,
    fullDescription: 'EducationOne revolutionizes the learning experience with AI-powered tutoring across multiple subjects. The platform provides specialized views for all stakeholders in the educational journey, from students to administrators, ensuring comprehensive support and progress tracking.',
    features: [
      'Specialized AI tutors for multiple subjects',
      'Personalized learning paths',
      'Real-time progress monitoring',
      'Comprehensive analytics for teachers',
      'Administrative oversight tools',
      'Parent communication portal'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Firebase',
      'OpenAI API',
      'TailwindCSS'
    ],
    screenshots: [
      {
        url: '/projects/education-one/dashboard.png',
        caption: 'Student learning dashboard'
      },
      {
        url: '/projects/education-one/analytics.png',
        caption: 'Teacher analytics view'
      }
    ]
  },
  'time-capsule': {
    id: 'time-capsule',
    title: 'Intellisync Solutions - TimeCapsule',
    description: 'AI-enhanced photo sharing platform with smart albums, family sharing, and interactive AI storytelling for preserving and sharing memories.',
    image: '/projects/time-capsule.png',
    demoUrl: '/not-found',
    category: 'Media',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true,
    fullDescription: 'TimeCapsule transforms how we preserve and share memories through AI-powered photo organization and storytelling. With features like smart categorization, family sharing, and interactive timelines, it makes preserving memories both easy and engaging.',
    features: [
      'AI-powered photo categorization',
      'Interactive memory stories',
      'Secure family sharing',
      'Interactive timeline views',
      'Natural language photo search',
      'Automatic photo enhancement'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Firebase',
      'OpenAI API',
      'TensorFlow.js'
    ],
    screenshots: [
      {
        url: '/projects/time-capsule/albums.png',
        caption: 'Smart photo albums'
      },
      {
        url: '/projects/time-capsule/timeline.png',
        caption: 'Interactive timeline view'
      }
    ]
  },
  'personal-one': {
    id: 'personal-one',
    title: 'Intellisync Solutions - PersonalOne',
    description: 'A comprehensive personal finance platform offering advanced tools for wealth management, investment planning, tax projections, and retirement planning.',
    image: '/projects/personal-one.png',
    demoUrl: '/work/personal-one',
    category: 'Finance',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: true,
    fullDescription: 'PersonalOne is your complete personal finance companion, offering sophisticated tools for wealth management, investment planning, and retirement goals. From real-time net worth tracking to AI-powered investment analysis, it provides everything needed for sound financial planning.',
    features: [
      'Real-time net worth tracking',
      'AI-powered budget recommendations',
      'Advanced tax planning tools',
      'Investment portfolio management',
      'Historical performance analysis',
      'Retirement planning calculator'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Firebase',
      'OpenAI API',
      'D3.js'
    ],
    screenshots: [
      {
        url: '/projects/personal-one/dashboard.png',
        caption: 'Financial dashboard'
      },
      {
        url: '/projects/personal-one/investments.png',
        caption: 'Investment portfolio view'
      }
    ]
  }
};

const PageDesignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  const design = id ? pageDesigns[id] : null;

  if (!design) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 pl-[280px]">
          <div
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              <StreamingText 
                text="Yikes, How did you get here? 🤔" 
                speed={40}
              />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              <StreamingText 
                text="This design seems to have wandered off into the digital void."
                speed={30}
                delay={1500}
              />
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              <StreamingText 
                text="✨ That was a neat animation effect"
                speed={40}
                delay={3000}
              />
            </p>
            <div
            >
              <Button 
                onClick={() => navigate('/work/pages')}
                className="text-lg px-6 py-3"
              >
                Take Me Back to Safety
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const selectedDesign = design;

  return (
    <div className="min-h-screen bg-background">
      {!selectedDesign && <UnderConstructionPage pageName="Page Design Details" />}
      {selectedDesign && (
        <div className="container mx-auto px-4 py-8 pl-[280px]">
          <div
          >
            <Button
              variant="ghost"
              className="mb-6 flex items-center gap-2"
              onClick={() => navigate('/work/pages')}
            >
              <ArrowLeft size={16} />
              Back to Designs
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {selectedDesign.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedDesign.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  {selectedDesign.fullDescription || selectedDesign.description}
                </p>

                {selectedDesign.features && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Features
                    </h2>
                    <ul className="space-y-2">
                      {selectedDesign.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedDesign.technologies && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedDesign.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  className="flex items-center gap-2"
                  onClick={() => window.open(selectedDesign.demoUrl, '_blank')}
                >
                  View Live Demo
                  <ExternalLink size={16} />
                </Button>
              </div>

              <div>
                {selectedDesign.screenshots && (
                  <div className="space-y-6">
                    <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={selectedDesign.screenshots[activeImage].url}
                        alt={selectedDesign.screenshots[activeImage].caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {selectedDesign.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          className={`relative aspect-video rounded-lg overflow-hidden ${
                            index === activeImage ? 'ring-2 ring-blue-500' : ''
                          }`}
                          onClick={() => setActiveImage(index)}
                        >
                          <img
                            src={screenshot.url}
                            alt={screenshot.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {selectedDesign.screenshots[activeImage].caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDesignDetail;
