import { AboutUs } from '../components/PageSections/AboutUsSection/AboutUs';
import { ScrollAnimation } from '../components/features/ScrollAnimation';

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      <ScrollAnimation>
        <AboutUs />
      </ScrollAnimation>
    </main>
  );
};

export default About;