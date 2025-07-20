import React from 'react';
import { Award, BookOpen, Users, Heart, CheckCircle, Star, Calendar, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, value: '500+', label: 'Clients Helped' },
    { icon: Calendar, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  const qualifications = [
    'B.A., M.Sc. Clinical Psychology',
    'Certified in CBT & DBT',
    'Trauma-Informed Care Specialist',
    'Mindfulness-Based Therapy',
    'Licensed Clinical Psychologist'
  ];

  const approaches = [
    {
      title: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Evidence-based approach focusing on thoughts, feelings, and behaviors'
    },
    {
      title: 'Dialectical Behavior Therapy (DBT)',
      description: 'Skills-based therapy for emotional regulation and distress tolerance'
    },
    {
      title: 'Client-Centered Therapy',
      description: 'Collaborative and empathetic approach honoring your unique experience'
    },
    {
      title: 'Mindfulness-Based Interventions',
      description: 'Integration of mindfulness practices for present-moment awareness'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Pihu Suri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founder & Lead Psychologist at MindWeal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image and Stats */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-to-br from-lavender-100 to-mint-100 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pihu Suri - Clinical Psychologist" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle">
                <Award className="h-8 w-8 text-lavender-500 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Licensed</div>
                <div className="text-xs text-gray-600">Clinical Psychologist</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <Heart className="h-8 w-8 text-mint-500 mb-2" />
                <div className="text-sm font-semibold text-gray-800">500+</div>
                <div className="text-xs text-gray-600">Lives Transformed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Partner in Mental Health & Wellness
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am Pihu Suri, a Counseling Psychologist and the Founder and Lead Psychologist of 
              MindWeal by Pihu Suri. As a Psychologist, I am on a mission to create a safe space 
              free from judgements and biases where I can help people untangle the complexities of 
              their mind, facilitate healing, and empower them to thrive in every aspect of life.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My therapeutic approach is based on Eclectic Therapy including therapy modalities 
              such as CBT, Client Centred Therapy, DBT, Mindfulness based Stress Reduction and 
              Psychodynamic Therapy. I believe that a collaborative and empathetic approach is 
              the key to successful therapy.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-lavender-600 mr-2" />
                Qualifications & Certifications
              </h4>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-mint-600 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-lavender-500 to-mint-600 text-white font-semibold rounded-xl hover:from-lavender-600 hover:to-mint-700 transition-all duration-300 transform hover:scale-105">
              <Calendar className="h-5 w-5 mr-2" />
              Book a Session with Pihu
            </button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-8 w-8 text-mint-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-gray-600 text-sm">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Therapeutic Approaches */}
        <div className="bg-gradient-to-br from-gray-50 to-mint-50 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Therapeutic Approaches</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I utilize evidence-based therapeutic modalities tailored to each client's unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approaches.map((approach, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{approach.title}</h4>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-lavender-500 to-mint-600 rounded-3xl p-8 md:p-12 text-white">
            <Globe className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl mb-6 opacity-90 max-w-4xl mx-auto leading-relaxed">
              At MindWeal by Pihu Suri, we foster a nurturing space that's free from biases and 
              embraces diversity in all its forms. Our therapy environment is gender-inclusive, 
              culturally aware, and open to all.
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We believe that everyone deserves access to quality mental health care, regardless of 
              their background, identity, or circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;