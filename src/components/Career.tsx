import React from 'react';
import { Briefcase, Users, Heart, Award, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react';

const Career = () => {
  const positions = [
    {
      title: "Clinical Psychology Intern",
      type: "Internship",
      location: "Delhi NCR / Remote",
      schedule: "Part-time, Flexible",
      description: "Join our team as a psychology intern and gain hands-on experience in clinical practice under expert supervision.",
      requirements: [
        "Currently pursuing Masters in Clinical Psychology",
        "Strong interpersonal and communication skills",
        "Commitment to ethical practice and client confidentiality",
        "Interest in evidence-based therapeutic approaches"
      ],
      benefits: [
        "Mentorship from licensed professionals",
        "Exposure to diverse therapeutic modalities",
        "Professional development opportunities",
        "Flexible scheduling around studies"
      ],
      color: "mint"
    },
    {
      title: "Associate Therapist",
      type: "Full-time",
      location: "Delhi NCR",
      schedule: "Full-time, Evening hours available",
      description: "We're seeking a licensed therapist to join our growing practice and help expand our impact in the community.",
      requirements: [
        "Masters/PhD in Clinical Psychology or related field",
        "Valid license to practice therapy",
        "2+ years of clinical experience",
        "Experience with CBT, DBT, or similar modalities"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Professional development budget",
        "Collaborative work environment",
        "Work-life balance support"
      ],
      color: "lavender"
    },
    {
      title: "Mental Health Advocate",
      type: "Part-time",
      location: "Remote",
      schedule: "Part-time, Flexible hours",
      description: "Help us spread mental health awareness and support our community outreach initiatives.",
      requirements: [
        "Background in psychology, social work, or related field",
        "Passion for mental health advocacy",
        "Strong written and verbal communication skills",
        "Experience with social media and content creation preferred"
      ],
      benefits: [
        "Flexible remote work",
        "Opportunity to make a community impact",
        "Training and development provided",
        "Networking opportunities"
      ],
      color: "sage"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We put empathy and understanding at the center of everything we do."
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "We believe in supporting each other's professional and personal development."
    },
    {
      icon: Award,
      title: "Excellence in Practice",
      description: "We're committed to maintaining the highest standards of clinical practice."
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "We understand the importance of caring for ourselves while caring for others."
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
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-mint-100 text-mint-700 rounded-full text-sm font-medium mb-4">
            Career Opportunities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's transforming lives through compassionate mental health care. 
            Grow your career while making a meaningful impact in your community.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-mint-100 to-sage-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-sage-600 mx-auto" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in">Current Openings</h3>
          <div className="space-y-8">
            {positions.map((position, index) => {
              const colors = getColorClasses(position.color);
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up border ${colors.border}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Position Details */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h4 className="text-2xl font-bold text-gray-900">{position.title}</h4>
                        <span className={`px-3 py-1 ${colors.button} text-white text-sm font-medium rounded-full`}>
                          {position.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.schedule}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{position.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Requirements</h5>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Benefits</h5>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Application Section */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-gray-900 mb-4">Ready to Apply?</h5>
                        <p className="text-gray-600 text-sm mb-6">
                          Send us your resume and a cover letter explaining why you'd be a great fit for our team.
                        </p>
                        
                        <div className="space-y-3">
                          <button className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                            Apply Now
                          </button>
                          <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your resume and cover letter" },
              { step: "2", title: "Review", description: "We'll review your application within 5 business days" },
              { step: "3", title: "Interview", description: "Phone or video interview with our team" },
              { step: "4", title: "Decision", description: "We'll contact you with next steps" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-mint-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-mint-500 to-sage-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Don't See the Right Fit?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our mission. 
              Send us your information and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-mint-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Submit General Application
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-mint-700 transition-all duration-300">
                Contact HR: mindweal.ps@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;