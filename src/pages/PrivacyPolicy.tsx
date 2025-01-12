import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>Privacy Policy | Chris June</title>
        <meta name="description" content="Privacy policy for Chris June's personal website" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Privacy Policy
      </h1>

      <section className="space-y-6 text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p>
            This website collects minimal personal information. When you visit my site, 
            we may collect standard web traffic information such as your IP address, 
            browser type, and pages visited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>
            We use collected information to improve user experience, analyze site traffic, 
            and ensure the security of our website. We do not sell or share your personal 
            information with third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
          <p>
            This website may use cookies to enhance your browsing experience and 
            provide personalized content. You can choose to disable cookies through 
            your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">4. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal information against unauthorized access, alteration, 
            disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">5. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact me at 
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

export default PrivacyPolicy;
