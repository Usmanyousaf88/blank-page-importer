import { 
  UtensilsCrossed,
  Clock,
  Calendar,
  Users,
  Phone,
  MapPin,
  Star,
  Wine,
  ChevronRight,
  Instagram
} from 'lucide-react';
import UnderConstructionPage from '../../../../components/UnderConstructionPage';
import { Button } from '../../../../components/ui/Button/button'; // Import Button component

const RestaurantPlatform = () => {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Truffle Burrata",
          description: "Fresh burrata, truffle honey, toasted pine nuts, micro herbs",
          price: "$18",
          isSignature: true
        },
        {
          name: "Tuna Tartare",
          description: "Yellowfin tuna, avocado, citrus ponzu, wonton crisps",
          price: "$22"
        },
        {
          name: "Wild Mushroom Soup",
          description: "Forest mushrooms, cream, truffle oil, chives",
          price: "$14"
        }
      ]
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Wagyu Ribeye",
          description: "12oz prime cut, garlic confit, red wine jus",
          price: "$65",
          isSignature: true
        },
        {
          name: "Pan-Seared Salmon",
          description: "Scottish salmon, asparagus, lemon beurre blanc",
          price: "$38"
        },
        {
          name: "Wild Mushroom Risotto",
          description: "Arborio rice, porcini, parmesan, truffle oil",
          price: "$32"
        }
      ]
    }
  ];

  const specialEvents = [
    {
      title: "Wine Tasting Evening",
      date: "Every Thursday",
      description: "Explore our curated selection of fine wines paired with artisanal cheeses",
      price: "$85 per person"
    },
    {
      title: "Chef's Table Experience",
      date: "Friday & Saturday",
      description: "An intimate 7-course tasting menu with wine pairing",
      price: "$150 per person"
    },
    {
      title: "Sunday Jazz Brunch",
      date: "Sundays 11am-3pm",
      description: "Live jazz music with our signature brunch menu",
      price: "$55 per person"
    }
  ];

  const galleryImages = [
    "/images/restaurant/interior.jpg",
    "/images/restaurant/dish1.jpg",
    "/images/restaurant/wine.jpg",
    "/images/restaurant/chef.jpg"
  ];

  return (
    <div className="container mx-auto p-4">
      <UnderConstructionPage pageName="Restaurant Platform" />
      <div className="restaurant-details grid md:grid-cols-2 gap-8 mb-8">
        <div className="restaurant-info space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="text-primary w-6 h-6" />
            <span>123 Culinary Street, Gourmet City</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-primary w-6 h-6" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="text-primary w-6 h-6" />
            <span>Open Daily: 11am - 10pm</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="text-primary w-6 h-6" />
            <span>Reservations Recommended</span>
          </div>
        </div>
        
        <div className="restaurant-highlights space-y-4">
          <div className="flex items-center space-x-3">
            <UtensilsCrossed className="text-primary w-6 h-6" />
            <span>Modern Fusion Cuisine</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="text-primary w-6 h-6" />
            <span>Capacity: 120 Guests</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="text-primary w-6 h-6" />
            <span>4.8/5 Customer Rating</span>
          </div>
          <div className="flex items-center space-x-3">
            <Wine className="text-primary w-6 h-6" />
            <span>Extensive Wine Selection</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4 p-3 bg-gray-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{item.name} {item.isSignature && <span className="text-sm text-red-500 ml-2">Signature</span>}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button>Explore Menu</Button>

      <div className="special-events-section">
        <h2>Special Events</h2>
        {specialEvents.map((event) => (
          <div key={event.title} className="special-event-card">
            <h3>{event.title}</h3>
            <p><Calendar className="inline-icon" /> {event.date}</p>
            <p>{event.description}</p>
            <p>Price: {event.price}</p>
          </div>
        ))}
      </div>

      <div className="gallery mt-8">
        <h2 className="text-2xl font-bold mb-4">Restaurant Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Restaurant gallery image ${index + 1}`} 
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media flex items-center justify-between mt-8 bg-gray-100 p-4 rounded-lg">
        <span className="text-lg font-semibold">Follow Our Culinary Journey</span>
        <a 
          href="https://instagram.com/restaurantname" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          <Instagram className="w-6 h-6 mr-2" />
          <span>@restaurantname</span>
          <ChevronRight className="w-5 h-5 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default RestaurantPlatform;
