import {
  BookOpen,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Search,
  User,
  Bell,
  Settings,
  PenTool,
} from 'lucide-react';
import { Badge } from '../../../../components/ui/badge';

const BlogPlatform = () => {
  const featuredPost = {
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development...",
    author: "Sarah Johnson",
    date: "Dec 19, 2023",
    readTime: "5 min read",
    tags: ["Web Development", "Technology", "Future"],
    image: "https://placehold.co/800x400/2563eb/ffffff?text=Featured+Post"
  };

  const recentPosts = [
    {
      title: "Getting Started with TypeScript",
      excerpt: "A comprehensive guide to TypeScript for JavaScript developers...",
      author: "Mike Chen",
      date: "Dec 18, 2023",
      readTime: "4 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=TypeScript"
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Deep dive into React Hooks and how to use them effectively...",
      author: "Emma Wilson",
      date: "Dec 17, 2023",
      readTime: "6 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=React+Hooks"
    },
    {
      title: "The Art of Clean Code",
      excerpt: "Best practices for writing maintainable and scalable code...",
      author: "David Brown",
      date: "Dec 16, 2023",
      readTime: "7 min read",
      image: "https://placehold.co/400x300/2563eb/ffffff?text=Clean+Code"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Post Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title} 
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="p-6">
            <Badge variant="secondary" className="mb-4">Featured</Badge>
            <h2 className="text-3xl font-bold mb-2">{featuredPost.title}</h2>
            <p className="mb-4">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <User className="w-5 h-5 mr-2" />
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="flex space-x-4">
                <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
                <Bookmark className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                <Share2 className="w-6 h-6 cursor-pointer hover:text-green-500" />
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Bar with Additional Icons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <Search className="w-6 h-6 cursor-pointer" />
          <BookOpen className="w-6 h-6 cursor-pointer" />
          <PenTool className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <Bell className="w-6 h-6 cursor-pointer" />
          <Settings className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {recentPosts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="mx-2 text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <BookOpen className="w-5 h-5 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPlatform;
