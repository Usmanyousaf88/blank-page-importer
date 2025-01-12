import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import Animation from '../../features/Animation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactFormModal from '../../Modals/ContactFormModal';
import { AdvancedInteractiveButton } from '../../../pages/Contact';

export const ServicesCTA = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/5 dark:shadow-blue-500/10">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20" />

            <div className="relative">
              {/* Sparkle Icon */}
              <Animation type="bounce">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse">
                      <Sparkles className="w-8 h-8 text-purple-500 opacity-50" />
                    </div>
                    <Sparkles className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
              </Animation>

              {/* Heading */}
              <Animation type="fade" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                  Ready to Transform Your Digital Presence?
                </h2>
              </Animation>

              {/* Subheading */}
              <Animation type="fade" delay={0.3}>
                <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                  Let's collaborate and turn your innovative ideas into powerful, scalable digital solutions that drive your business forward.
                </p>
              </Animation>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Animation type="slide" delay={0.4} direction="left">
                  <AdvancedInteractiveButton 
                    icon={MessageCircle}
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Start a Conversation
                  </AdvancedInteractiveButton>
                </Animation>

                <Animation type="slide" delay={0.5} direction="right">
                  <Link to="/contact" className="group flex items-center text-primary hover:text-primary/80 transition-colors">
                    Book a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isContactModalOpen && (
        <ContactFormModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      )}
    </section>
  );
};

export default ServicesCTA;