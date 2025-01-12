import { 
  ArrowRight, 
  BarChart2, 
  Zap, 
  Shield, 
  Users, 
  Layout, 
  Clock,
  CheckCircle2
} from 'lucide-react';
import UnderConstructionPage from '../../../../components/UnderConstructionPage';

const SaasDashboard = () => {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
      title: "Real-time Analytics",
      description: "Get instant insights with our powerful analytics dashboard"
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Lightning Fast",
      description: "Optimized performance for the smoothest user experience"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your sensitive data"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Collaborative Workspace",
      description: "Seamless team collaboration and communication"
    },
    {
      icon: <Layout className="w-6 h-6 text-indigo-500" />,
      title: "Intuitive Interface",
      description: "Clean, modern design that enhances user productivity"
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "Time Management",
      description: "Advanced tools to track and optimize your workflow"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-indigo-500" />,
      title: "Goal Tracking",
      description: "Set, monitor, and achieve your business objectives"
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-indigo-500" />,
      title: "Continuous Progress",
      description: "Always moving forward with smart, data-driven insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Standard support"
      ]
    },
    {
      name: "Pro",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for large organizations",
      features: [
        "Unlimited team members",
        "Full feature set",
        "Dedicated support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <UnderConstructionPage pageName="SaaS Dashboard" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <section className="pricing-section mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SaasDashboard;
