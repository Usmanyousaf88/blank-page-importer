import { 
  ShoppingBag, 
  Search, 
  Heart,
  CreditCard,
  Truck,
  ShieldCheck,
  Star,
  Tag
} from 'lucide-react';

const EcommercePlatform = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      rating: 4.8,
      image: "/images/products/headphones.jpg",
      category: "Electronics",
      wishlist: true
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: "$199.99",
      rating: 4.9,
      image: "/images/products/watch.jpg",
      category: "Accessories",
      wishlist: false
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "$129.99",
      rating: 4.7,
      image: "/images/products/backpack.jpg",
      category: "Fashion",
      wishlist: true
    }
  ];

  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Secure Payments",
      description: "Shop with confidence using our encrypted payment system"
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Quality Guarantee",
      description: "30-day return policy on all products"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">E-commerce Platform</h1>
        <div className="flex space-x-4">
          <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Tag className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold">{product.price}</span>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Heart 
                  className={`w-6 h-6 ${product.wishlist ? 'text-red-500' : 'text-gray-300'} cursor-pointer`} 
                />
              </div>
              <button className="mt-4 w-full bg-primary text-white py-2 rounded flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 bg-gray-50 p-8 rounded-lg">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            {feature.icon}
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePlatform;
