import React from 'react';
import { User, Users, MessageSquare, Briefcase, Clock, Shield, Heart, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Individual Therapy',
      description: 'One-on-one sessions tailored to your unique needs and goals.',
      features: ['CBT & DBT approaches', 'Anxiety & Depression', 'Trauma Recovery', 'Personal Growth'],
      color: 'mint',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Couples Therapy',
      description: 'Strengthen your relationship with evidence-based couples counseling.',
      features: ['Communication Skills', 'Conflict Resolution', 'Intimacy Building', 'Relationship Goals'],
      color: 'lavender',
      image: 'https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: MessageSquare,
      title: 'Group Sessions',
      description: 'Connect with others who share similar experiences and challenges.',
      features: ['Support Groups', 'Skill Building', 'Peer Connection', 'Guided Discussions'],
      color: 'sage',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Navigate career transitions and workplace challenges with confidence.',
      features: ['Career Planning', 'Work-Life Balance', 'Professional Development', 'Burnout Prevention'],
      color: 'mint',
      image: 'https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const additionalServices = [
    { icon: Clock, title: 'Flexible Scheduling', description: 'Evening and weekend appointments available' },
    { icon: Shield, title: 'Confidential & Safe', description: 'HIPAA compliant with complete privacy protection' },
    { icon: Heart, title: 'Holistic Approach', description: 'Mind, body, and spirit wellness integration' },
    { icon: Award, title: 'Evidence-Based', description: 'Proven therapeutic methods and techniques' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      mint: {
        bg: 'bg-mint-50',
        border: 'border-mint-200',
        icon: 'text-mint-600',
        button: 'bg-mint-500 hover:bg-mint-600',
        accent: 'text-mint-600'
      },
      lavender: {
        bg: 'bg-lavender-50',
        border: 'border-lavender-200',
        icon: 'text-lavender-600',
        button: 'bg-lavender-500 hover:bg-lavender-600',
        accent: 'text-lavender-600'
      },
      sage: {
        bg: 'bg-sage-50',
        border: 'border-sage-200',
        icon: 'text-sage-600',
        button: 'bg-sage-500 hover:bg-sage-600',
        accent: 'text-sage-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-mint-100 text-mint-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Mental Health Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At MindWeal, we offer a complete range of psychological services designed to support your mental health 
            journey with personalized, evidence-based approaches.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 ${colors.bg} ${colors.border} border rounded-2xl`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${colors.button.split(' ')[0]}`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 px-6 ${colors.button} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose MindWeal?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-gradient-to-br from-mint-100 to-sage-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:from-mint-200 group-hover:to-sage-200 transition-all duration-300">
                    <Icon className="h-8 w-8 text-sage-600 mx-auto" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-mint-500 to-sage-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards better mental health. Book a consultation today and discover 
              how we can support your path to wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-mint-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-mint-700 transition-all duration-300">
                Call: +91 9599618238
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;