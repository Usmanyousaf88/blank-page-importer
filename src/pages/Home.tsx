import { HomePageHero } from '../components/PageSections/HeroSection/HomePageHero';
import { FeaturedProjects } from '../components/PageSections/FeaturedProjects/FeaturedProjects';
import { CTASection } from '../components/PageSections/CTASection/CTASection';
import { ScrollAnimation } from '../components/features/ScrollAnimation';

const Home = () => {
  return (
    <main className="min-h-screen">
      <ScrollAnimation>
        <HomePageHero />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <FeaturedProjects />
      </ScrollAnimation>
      <ScrollAnimation>
        <CTASection />
      </ScrollAnimation>
    </main>
  );
};

export default Home;
