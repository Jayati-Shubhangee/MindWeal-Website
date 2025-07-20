import React from 'react';
import { 
  Brain, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  Shield,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Individual Therapy', href: '#services' },
    { name: 'Couples Therapy', href: '#services' },
    { name: 'Group Sessions', href: '#services' },
    { name: 'Career Counseling', href: '#services' },
    { name: 'About Pihu Suri', href: '#about' },
    { name: 'Book Appointment', href: '#hero' }
  ];

  const resources = [
    { name: 'Mental Health Resources', href: '#' },
    { name: 'Self-Help Articles', href: '#' },
    { name: 'Crisis Support', href: '#' },
    { name: 'Insurance & Pricing', href: '#' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-mint-500 to-sage-600 p-3 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MindWeal</h3>
                <p className="text-mint-300 font-medium">by Pihu Suri</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in mental health and wellness. Creating safe spaces for healing, growth, and transformation.
            </p>

            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="h-4 w-4 text-mint-400" />
                <span className="text-gray-300">HIPAA Compliant & Confidential</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Award className="h-4 w-4 text-mint-400" />
                <span className="text-gray-300">Licensed Clinical Psychologist</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Users className="h-4 w-4 text-mint-400" />
                <span className="text-gray-300">500+ Lives Transformed</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-mint-600 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Icon className="h-5 w-5 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-6 text-mint-300">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-mint-300 transition-colors duration-300 group flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 -ml-5 mr-1" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-6 text-mint-300">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-mint-300 transition-colors duration-300 group flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 -ml-5 mr-1" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-6 text-mint-300">Get In Touch</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-mint-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+919599618238" className="text-white font-semibold hover:text-mint-300 transition-colors">
                    +91 9599618238
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-mint-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:mindweal.ps@gmail.com" className="text-white font-semibold hover:text-mint-300 transition-colors">
                    mindweal.ps@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mint-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-semibold">Online & In-Person Sessions</p>
                  <p className="text-gray-300 text-sm">Delhi NCR, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-mint-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Hours</p>
                  <p className="text-white font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-900/30 border border-red-700 rounded-2xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-4 w-4 text-red-400" />
                <h5 className="font-semibold text-red-300">Crisis Support</h5>
              </div>
              <p className="text-red-200 text-sm">
                If you're in crisis, call <a href="tel:988" className="font-bold underline hover:text-red-100">988</a> (Suicide & Crisis Lifeline) or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MindWeal by Pihu Suri. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-mint-300 transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-mint-300 transition-colors">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-mint-300 transition-colors">HIPAA Notice</a>
            </div>
          </div>
          
          {/* Professional Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
              <strong>Professional Disclaimer:</strong> The content on this website is for informational purposes only and does not constitute medical or psychological advice. 
              Always consult with a qualified mental health professional for diagnosis and treatment. In case of a mental health emergency, 
              please contact emergency services or call the National Suicide Prevention Lifeline at 988.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;