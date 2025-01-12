import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Terms of Service | Chris June</title>
        <meta name="description" content="Terms of service for Chris June's personal website" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Terms of Service
      </h1>

      <section className="space-y-6 text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you agree to be bound by these Terms of Service. 
            If you do not agree with any part of these terms, please do not use the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. Use of Website</h2>
          <p>
            This website is provided for personal and informational purposes. 
            You agree to use the website only for lawful purposes and in a way 
            that does not infringe the rights of, restrict, or inhibit anyone 
            else's use and enjoyment of the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, 
            is the property of Chris June and protected by copyright laws. 
            Reproduction without explicit permission is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Disclaimer</h2>
          <p>
            The content on this website is provided "as is" without any representations 
            or warranties. Chris June makes no representations or warranties in relation 
            to this website or the information and materials provided on it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p>
            Chris June will not be liable for any losses, damages, or inconvenience 
            arising from the use of this website. Visitors use the website at their 
            own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">6. Changes to Terms</h2>
          <p>
            These Terms of Service may be updated at any time. Continued use of the 
            website constitutes acceptance of any changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">7. Contact Information</h2>
          <p>
            For any questions about these Terms of Service, please contact 
            chris.june@intellisync.ca.
          </p>
        </div>

        <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>Last Updated: December 30, 2024</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
