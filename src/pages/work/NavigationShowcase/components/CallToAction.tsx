import { Button } from '../../../../components/ui/Button/button';

const CallToAction = () => {
  return (
    <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Want to Use These Navigation Components?
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Our navigation components are designed for optimal user experience across all devices. 
        Contact us to learn how we can help implement these and other beautiful 
        components in your project.
      </p>
      <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
        Get Started
      </Button>
    </div>
  );
};

export default CallToAction;
