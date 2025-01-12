import { 
  Home,
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  Calendar,
  Filter,
  ChevronRight
} from 'lucide-react';
import UnderConstructionPage from '../../../../components/UnderConstructionPage';

const RealEstatePlatform = () => {
  const isUnderConstruction = false; // or true, depending on your needs

  if (isUnderConstruction) {
    return <UnderConstructionPage />;
  }

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$1,250,000",
      location: "Beverly Hills, CA",
      specs: {
        beds: 4,
        baths: 3.5,
        sqft: "3,200"
      },
      type: "For Sale",
      image: "/images/properties/luxury-villa.jpg"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      price: "$8,500/mo",
      location: "Manhattan, NY",
      specs: {
        beds: 3,
        baths: 2,
        sqft: "2,100"
      },
      type: "For Rent",
      image: "/images/properties/penthouse.jpg"
    },
    {
      id: 3,
      title: "Waterfront Condo",
      price: "$750,000",
      location: "Miami, FL",
      specs: {
        beds: 2,
        baths: 2,
        sqft: "1,800"
      },
      type: "For Sale",
      image: "/images/properties/waterfront-condo.jpg"
    }
  ];

  const topAgents = [
    {
      name: "Sarah Johnson",
      title: "Luxury Property Specialist",
      sales: "50+ properties sold",
      rating: 4.9,
      image: "/images/agents/sarah.jpg"
    },
    {
      name: "Michael Chen",
      title: "Commercial Real Estate Expert",
      sales: "40+ commercial properties",
      rating: 4.7,
      image: "/images/agents/michael.jpg"
    }
  ];

  return (
    <div className="real-estate-platform">
      <h2>Featured Properties</h2>
      <div className="properties-grid">
        {featuredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{property.price} | {property.type}</p>
              <div className="property-specs">
                <span><Bed size={16} /> {property.specs.beds} Beds</span>
                <span><Bath size={16} /> {property.specs.baths} Baths</span>
                <span><Square size={16} /> {property.specs.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="top-agents">
        <h2>Top Performing Agents</h2>
        <div className="agents-grid">
          {topAgents.map((agent, index) => (
            <div key={index} className="agent-card">
              <div className="agent-header">
                <img src={agent.image} alt={agent.name} className="agent-image" />
                <div className="agent-contact">
                  <Phone className="contact-icon" />
                  <Mail className="contact-icon" />
                  <Calendar className="contact-icon" />
                </div>
              </div>
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p className="agent-title">
                  <Filter className="title-icon" />
                  {agent.title}
                </p>
                <div className="agent-stats">
                  <div className="sales-stat">
                    <ChevronRight className="stat-icon" />
                    <span>{agent.sales}</span>
                  </div>
                  <div className="rating-stat">
                    <Square className="stat-icon" />
                    <span>Rating: {agent.rating}/5</span>
                  </div>
                </div>
                <div className="agent-specialties">
                  <div className="specialty">
                    <Home className="specialty-icon" />
                    <span>Residential</span>
                  </div>
                  <div className="specialty">
                    <Search className="specialty-icon" />
                    <span>Property Finder</span>
                  </div>
                  <div className="specialty">
                    <MapPin className="specialty-icon" />
                    <span>Local Expert</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RealEstatePlatform;
