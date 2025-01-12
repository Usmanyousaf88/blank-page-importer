import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = 2024;
  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/yourusername", 
      label: "Twitter" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/yourusername", 
      label: "LinkedIn" 
    },
    { 
      icon: Github, 
      href: "https://github.com/yourusername", 
      label: "GitHub" 
    }
  ];

  const footerLinks = [
    { title: "Navigation", links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
      { name: "GPT Builder", path: "/gpt-builder" }
    ]},
   
    { title: "Legal", links: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" }
    ]}
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info & Description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            IntelliSync Solutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Creating personalized digital experiences
          </p>
          
          {/* Contact Info */}
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Mail size={16} />
            <a 
              href="mailto:info@intellisyncsolutions.io" 
              className="hover:text-blue-600 transition-colors"
            >
              chris.june@intellisync.ca
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <MapPin size={16} />
            <span>Chatham-Kent, Ontario</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-4">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Time */}
        <div className="space-y-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Current Time */}
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Clock size={16} />
            <span>
              {new Date('2024-12-30T16:16:23-05:00').toLocaleString('en-US', {
                timeZone: 'America/New_York',
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Bar */}
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {currentYear} IntelliSync Solutions. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="/privacy" 
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
