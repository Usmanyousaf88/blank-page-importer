import { ServicesHero } from '../components/PageSections/ServicesHero/ServicesHero';
import { ServicesCTA } from '../components/PageSections/ServicesHero/ServicesCTA';
import { ScrollAnimation } from '../components/features/ScrollAnimation';

const Services = () => {
  return (
    <main className="min-h-screen">
      <ScrollAnimation>
        <ServicesHero />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <ServicesCTA />
      </ScrollAnimation>
    </main>
  );
};

export default Services;