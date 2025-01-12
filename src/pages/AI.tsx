
import { AISection } from '../components/PageSections/AISection/AISection';
import AIModelNav from '../components/AIModelNav';

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <AISection />
      <div className="container mx-auto px-4 py-8">
        <AIModelNav />
      </div>
    </div>
  );
};

export default AI;