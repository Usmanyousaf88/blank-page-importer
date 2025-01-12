import { ExternalLink } from 'lucide-react';
import { Button } from '../../../../components/ui/Button/button';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../../../../components/ui/badge';
import MenuBar from '../../../../components/Navigation/MenuBar';
import Animation from '../../../../components/features/Animation';
import ContactFormModal from '../../../../components/Modals/ContactFormModal';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../../lib/utils';

interface PageDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const pageDesigns: PageDesign[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'A modern and intuitive SaaS dashboard design with beautiful UI components and seamless user experience.',
    image: 'https://placehold.co/600x400/6366f1/ffffff?text=SaaS+Dashboard',
    demoUrl: '/work/pages/saas-dashboard',
    category: 'Dashboard',
    tags: ['SaaS', 'Modern', 'Dashboard'],
    featured: false
  },
  {
    id: 'modern-portfolio',
    title: 'Modern Portfolio',
    description: 'A clean and modern portfolio design showcasing projects and skills',
    image: '/images/portfolio-preview.jpg',
    demoUrl: '/work/pages/modern-portfolio',
    category: 'Portfolio',
    tags: ['Portfolio', 'Modern', 'Responsive'],
    featured: false
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with a clean UI and smooth shopping experience',
    image: '/images/ecommerce-preview.jpg',
    demoUrl: '/work/pages/ecommerce-platform',
    category: 'E-commerce',
    tags: ['E-commerce', 'Shopping', 'Responsive'],
    featured: false
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Modern blog platform design with rich content editing and social sharing features',
    image: '/images/blog-preview.jpg',
    demoUrl: '/work/pages/blog-platform',
    category: 'Blog',
    tags: ['Content', 'Social', 'Personal'],
    featured: false
  },
  {
    id: 'business-one',
    title: 'Intellisync Solutions - BusinessOne',
    description: 'A comprehensive suite of tools and calculators designed to assist entrepreneurs and seasoned business professionals in making data-driven decisions.',
    image: '/projects/business-one.png',
    demoUrl: '/work/business-one',
    category: 'Business',
    tags: ['React', 'TypeScript', 'Firebase'],
    featured: false
  },
  {
    id: 'serenity',
    title: 'Serenity',
    description: 'An interactive mental health and wellness platform featuring mood tracking, daily affirmations, journaling, guided meditation, and sleep tracking.',
    image: '/projects/serenity.png',
    demoUrl: '/work/serenity',
    category: 'Health & Wellness',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase'],
    featured: false
  },
  {
    id: 'teen-minds-matter',
    title: 'Teen Minds Matter',
    description: 'A social networking platform for youth mental health, featuring community groups, peer-led tutoring, and gamified interactions for ages 10-18.',
    image: '/projects/teen-minds.png',
    demoUrl: '/work/teen-minds-matter',
    category: 'Social',
    tags: ['React', 'TypeScript', 'Supabase', 'Node.js'],
    featured: false
  },
  {
    id: 'education-one',
    title: 'Intellisync Solutions - EducationOne',
    description: 'A comprehensive AI-powered educational platform featuring expert AI tutors across multiple subjects, with specialized dashboards for students, parents, teachers, and administrators.',
    image: '/projects/education-one.png',
    demoUrl: '/work/education-one',
    category: 'Education',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: false
  },
  {
    id: 'time-capsule',
    title: 'Intellisync Solutions - TimeCapsule',
    description: 'AI-enhanced photo sharing platform with smart albums, family sharing, and interactive AI storytelling for preserving and sharing memories.',
    image: '/projects/time-capsule.png',
    demoUrl: '/work/time-capsule',
    category: 'Media',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: false
  },
  {
    id: 'personal-one',
    title: 'Intellisync Solutions - PersonalOne',
    description: 'A comprehensive personal finance platform offering advanced tools for wealth management, investment planning, tax projections, and retirement planning.',
    image: '/projects/personal-one.png',
    demoUrl: '/work/personal-one',
    category: 'Finance',
    tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'OpenAI'],
    featured: false
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "A modern real estate platform for property listings, agent profiles, and viewing schedules",
    image: "/images/real-estate-preview.jpg",
    demoUrl: "/work/pages/real-estate-platform",
    category: "Real Estate",
    tags: ["Real Estate", "Property", "Responsive"],
    featured: false
  },
  {
    id: "restaurant-platform",
    title: "Restaurant Platform",
    description: "An elegant restaurant website featuring menu showcase, reservations, and special events",
    image: "/images/restaurant-preview.jpg",
    demoUrl: "/work/pages/restaurant-platform",
    category: "Restaurant",
    tags: ["Restaurant", "Food", "Responsive"],
    featured: false
  }
];

const PageShowcase = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Filter designs based on selected filters and search
  const filteredDesigns = useMemo(() => {
    return pageDesigns.filter(design => {
      // Filter by search query
      const matchesSearch = searchQuery === '' || 
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filter by selected filters
      const matchesFilters = selectedFilters.length === 0 || 
        selectedFilters.some(filter => 
          design.category.toLowerCase() === filter.toLowerCase() ||
          design.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        );

      return matchesSearch && matchesFilters;
    });
  }, [selectedFilters, searchQuery]);

  const hasDetailPage = (id: string) => {
    return [
      'modern-portfolio',
      'saas-dashboard',
      'blog-platform',
      'business-one',
      'serenity',
      'teen-minds-matter',
      'education-one',
      'time-capsule',
      'personal-one',
      'ecommerce-platform',
      'real-estate-platform',
      'restaurant-platform'
    ].includes(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Filter Section - Vertical */}
      <div className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background/95 backdrop-blur-sm z-40">
        <div className="h-full p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <MenuBar
            onFilterChange={setSelectedFilters}
            searchValue={searchQuery}
            onSearch={setSearchQuery}
          />
        </div>
      </div>

      {/* Main Content - Offset for sidebar */}
      <div className="ml-64">
        {/* Masonry Layout */}
        <div className="p-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className={cn(
                  "break-inside-avoid group relative",
                  index % 3 === 0 && "mt-12",
                  index % 3 === 1 && "mt-24",
                )}
              >
                {/* Design Card */}
                <div className="relative bg-card border rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Featured Badge */}
                  {design.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Animation type="pulse" delay={0.1}>
                        <div className="rounded-full px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground shadow-lg">
                          Featured ✨
                        </div>
                      </Animation>
                    </div>
                  )}

                  {/* Image with Parallax Effect */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] transform transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full shadow-lg"
                        onClick={() => hasDetailPage(design.id) ? navigate(design.demoUrl) : window.open(design.demoUrl, '_blank')}
                      >
                        {hasDetailPage(design.id) ? (
                          <ChevronRight className="h-4 w-4" />
                        ) : (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        className="rounded-full shadow-lg"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        Inquire
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {design.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {design.description}
                        </p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {design.category}
                      </Badge>
                    </div>

                    {/* Interactive Tags */}
                    <div className="flex flex-wrap gap-2">
                      {design.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => {
                            if (!selectedFilters.includes(tag)) {
                              setSelectedFilters([...selectedFilters, tag]);
                            }
                          }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredDesigns.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24">
              <p className="text-lg text-muted-foreground mb-4">
                No designs match your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilters([]);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageShowcase;
