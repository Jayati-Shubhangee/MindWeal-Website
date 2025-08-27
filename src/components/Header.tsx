import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, User, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gradient-to-br from-mint-500 to-sage-600 p-2 rounded-xl">
              <img src ="/images/logo.png" alt="MindWeal Logo" className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MindWeal</h1>
              <p className="text-sm text-sage-600 font-medium">by Pihu Suri</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('career')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              Career
            </button>
            <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              Support
            </button>
            <button onClick={() => scrollToSection('faqs')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
              FAQs
            </button>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-mint-600 border border-mint-300 rounded-lg hover:bg-mint-50 transition-colors">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-mint-500 to-sage-600 text-white rounded-lg hover:from-mint-600 hover:to-sage-700 transition-all transform hover:scale-105">
                <User className="h-4 w-4" />
                <span>Sign Up</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-mint-50 hover:text-mint-600 transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-mint-600 font-medium transition-colors">
                Team
            </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-mint-50 hover:text-mint-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('career')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-mint-50 hover:text-mint-600 transition-colors">
                Career
              </button>
              <button onClick={() => scrollToSection('support')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-mint-50 hover:text-mint-600 transition-colors">
                Support
              </button>
              <button onClick={() => scrollToSection('faqs')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-mint-50 hover:text-mint-600 transition-colors">
                FAQs
              </button>
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-mint-600 border border-mint-300 rounded-lg hover:bg-mint-50 transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-mint-500 to-sage-600 text-white rounded-lg hover:from-mint-600 hover:to-sage-700 transition-all">
                  <User className="h-4 w-4" />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;