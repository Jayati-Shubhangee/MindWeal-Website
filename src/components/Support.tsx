import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Shield, 
  Heart, 
  Users, 
  BookOpen,
  AlertTriangle,
  ExternalLink,
  Headphones,
  FileText
} from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Crisis Hotline",
      description: "Immediate support for mental health emergencies",
      contact: "988",
      contactLabel: "Call 988",
      availability: "24/7 Available",
      color: "red",
      urgent: true
    },
    {
      icon: MessageCircle,
      title: "Direct Support",
      description: "Reach out to our team for appointment or general inquiries",
      contact: "+91 9599618238",
      contactLabel: "Call Now",
      availability: "Mon-Sat: 9 AM - 8 PM",
      color: "mint",
      urgent: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions or concerns via email",
      contact: "mindweal.ps@gmail.com",
      contactLabel: "Send Email",
      availability: "Response within 24 hours",
      color: "lavender",
      urgent: false
    },
    {
      icon: Users,
      title: "Peer Support Groups",
      description: "Connect with others who understand your journey",
      contact: "Schedule",
      contactLabel: "Join Group",
      availability: "Weekly Sessions",
      color: "sage",
      urgent: false
    }
  ];

  const resources = [
    {
      title: "Mental Health Resources",
      items: [
        { name: "National Suicide Prevention Lifeline", link: "tel:988", external: true },
        { name: "Crisis Text Line", link: "sms:741741", external: true },
        { name: "SAMHSA National Helpline", link: "tel:1-800-662-4357", external: true },
        { name: "Mental Health First Aid", link: "#", external: false }
      ]
    },
    {
      title: "Self-Help Tools",
      items: [
        { name: "Anxiety Management Techniques", link: "#", external: false },
        { name: "Mindfulness Exercises", link: "#", external: false },
        { name: "Depression Resources", link: "#", external: false },
        { name: "Stress Management Guide", link: "#", external: false }
      ]
    },
    {
      title: "Educational Materials",
      items: [
        { name: "Understanding Therapy", link: "#", external: false },
        { name: "Mental Health Myths", link: "#", external: false },
        { name: "Coping Strategies", link: "#", external: false },
        { name: "Recovery Stories", link: "#", external: false }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      mint: {
        bg: 'from-mint-50 to-mint-100',
        accent: 'text-mint-600',
        border: 'border-mint-200',
        button: 'bg-mint-500 hover:bg-mint-600'
      },
      lavender: {
        bg: 'from-lavender-50 to-lavender-100',
        accent: 'text-lavender-600',
        border: 'border-lavender-200',
        button: 'bg-lavender-500 hover:bg-lavender-600'
      },
      sage: {
        bg: 'from-sage-50 to-sage-100',
        accent: 'text-sage-600',
        border: 'border-sage-200',
        button: 'bg-sage-500 hover:bg-sage-600'
      },
      red: {
        bg: 'from-red-50 to-red-100',
        accent: 'text-red-600',
        border: 'border-red-200',
        button: 'bg-red-500 hover:bg-red-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
            Support & Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access immediate support, helpful resources, and connect with our community. 
            Your mental health matters, and you're never alone in your journey.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-lg animate-fade-in">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Mental Health Emergency?</h3>
              <p className="text-red-700 mb-4">
                If you or someone you know is in immediate danger or having thoughts of self-harm, 
                please seek immediate help.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:988" 
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 988 - Crisis Lifeline
                </a>
                <a 
                  href="tel:911" 
                  className="inline-flex items-center px-4 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 911 - Emergency
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            const colors = getColorClasses(option.color);
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up border ${colors.border} ${
                  option.urgent ? 'ring-2 ring-red-200' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${option.urgent ? 'bg-red-100' : 'bg-white'} rounded-2xl flex-shrink-0`}>
                    <Icon className={`h-8 w-8 ${option.urgent ? 'text-red-600' : colors.accent}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{option.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {option.availability}
                      </div>
                      {option.urgent && (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                          URGENT
                        </span>
                      )}
                    </div>
                    
                    <button className={`w-full ${option.urgent ? 'bg-red-600 hover:bg-red-700' : colors.button} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                      {option.contactLabel}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">
            Mental Health Resources
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {resources.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h4>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.link}
                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                      >
                        <span className="text-gray-700 group-hover:text-mint-600 transition-colors">
                          {item.name}
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-mint-600 transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-mint-100 p-3 rounded-2xl mr-4">
                <Headphones className="h-8 w-8 text-mint-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7 Listening Support</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sometimes you just need someone to listen. Our trained volunteers provide compassionate, 
              non-judgmental support whenever you need it.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <Shield className="h-4 w-4 text-mint-600 mr-3" />
                Completely confidential
              </li>
              <li className="flex items-center text-gray-700">
                <Heart className="h-4 w-4 text-mint-600 mr-3" />
                No judgment, just support
              </li>
              <li className="flex items-center text-gray-700">
                <Clock className="h-4 w-4 text-mint-600 mr-3" />
                Available 24/7
              </li>
            </ul>
            <button className="w-full bg-mint-500 hover:bg-mint-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              Connect Now
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <div className="bg-lavender-100 p-3 rounded-2xl mr-4">
                <FileText className="h-8 w-8 text-lavender-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Wellness Resources</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access our comprehensive library of self-help tools, worksheets, and guides 
              to support your mental health journey.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <BookOpen className="h-4 w-4 text-lavender-600 mr-3" />
                Evidence-based techniques
              </li>
              <li className="flex items-center text-gray-700">
                <Users className="h-4 w-4 text-lavender-600 mr-3" />
                Community support
              </li>
              <li className="flex items-center text-gray-700">
                <Heart className="h-4 w-4 text-lavender-600 mr-3" />
                Personal growth tools
              </li>
            </ul>
            <button className="w-full bg-lavender-500 hover:bg-lavender-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
              Browse Resources
            </button>
          </div>
        </div>

        {/* Community Support */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-sage-500 to-mint-600 rounded-3xl p-8 md:p-12 text-white">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Support Community</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with others who understand your journey. Share experiences, find encouragement, 
              and build lasting connections in our supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-sage-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Join Community
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-sage-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;