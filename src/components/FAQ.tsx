import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can benefit anyone looking to improve their mental health, work through challenges, or enhance their personal growth. If you're experiencing persistent stress, anxiety, depression, relationship issues, or simply want to understand yourself better, therapy can provide valuable support and tools. At MindWeal, we offer a free 15-minute consultation to help you determine if our services align with your needs."
    },
    {
      question: "What can I expect in my first therapy session?",
      answer: "Your first session is an opportunity for us to get to know each other. We'll discuss what brought you to therapy, your goals, and any concerns you have. I'll explain my therapeutic approach and answer any questions about the process. This session is confidential and judgment-free, designed to help you feel comfortable and understood. We'll also discuss practical matters like session frequency and treatment planning."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The duration of therapy varies greatly depending on individual needs, goals, and circumstances. Some people find significant benefit in a few sessions for specific issues, while others prefer longer-term therapy for deeper personal growth. We'll regularly check in about your progress and adjust our approach as needed. The goal is to provide you with tools and insights that serve you long after therapy ends."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, we offer both in-person and online therapy sessions to accommodate your preferences and lifestyle. Our online sessions use secure, HIPAA-compliant video platforms to ensure your privacy and confidentiality. Many clients find online therapy convenient and just as effective as in-person sessions. We can discuss which option might work best for you during our initial consultation."
    },
    {
      question: "Are therapy sessions confidential?",
      answer: "Absolutely. Confidentiality is a cornerstone of therapy and is protected by law. Everything discussed in our sessions remains private between you and me. There are very few exceptions, such as if there's an immediate risk of harm to yourself or others, or if required by court order. I'll explain these limitations clearly during our first session, and I'm always available to discuss any concerns about privacy."
    },
    {
      question: "How much do therapy sessions cost?",
      answer: "Session fees vary depending on the type of service (individual, couples, group therapy). We offer competitive rates and work with several insurance providers. We also provide a sliding scale for those with financial constraints because we believe mental health care should be accessible. Please contact us for detailed pricing information and to discuss payment options that work for your situation."
    },
    {
      question: "What types of therapy do you provide?",
      answer: "I use an eclectic approach, drawing from various evidence-based therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Client-Centered Therapy, and Mindfulness-Based interventions. The approach is tailored to your specific needs and preferences. We offer individual therapy, couples counseling, group sessions, and career counseling."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "Scheduling is easy! You can call us at +91 9599618238, send an email to mindweal.ps@gmail.com, or use our online booking system. We offer flexible scheduling including evening and weekend appointments. We'll work together to find a time that fits your schedule and ensure you can access the support you need when you need it."
    },
    {
      question: "What if I need support between sessions?",
      answer: "Your wellbeing is our priority. While we can't provide 24/7 crisis support, we do offer guidance on accessing appropriate resources between sessions. We'll discuss coping strategies and provide you with crisis resources during our work together. For immediate mental health emergencies, please contact emergency services or call the National Suicide Prevention Lifeline at 988."
    },
    {
      question: "Do you work with specific age groups or populations?",
      answer: "I work primarily with adults (18+) and specialize in creating an inclusive, culturally sensitive environment. Our practice welcomes individuals from all backgrounds, orientations, and identities. We have experience with diverse populations and are committed to providing affirming care that respects your unique identity and experiences."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Questions About Therapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services, therapy process, and what to expect at MindWeal.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 animate-slide-up ${
                  isOpen ? 'shadow-lg border-mint-200' : 'border-gray-200 hover:border-mint-200'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-4 focus:ring-mint-100 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-mint-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="bg-mint-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-mint-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help you feel confident about starting your therapy journey. 
              Reach out to us for personalized answers to your specific questions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-mint-50 transition-colors">
              <Phone className="h-8 w-8 text-mint-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
              <a href="tel:+919599618238" className="text-mint-600 font-semibold hover:text-mint-700 transition-colors">
                +91 9599618238
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-lavender-50 transition-colors">
              <Mail className="h-8 w-8 text-lavender-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm mb-3">Get detailed written responses</p>
              <a href="mailto:mindweal.ps@gmail.com" className="text-lavender-600 font-semibold hover:text-lavender-700 transition-colors">
                mindweal.ps@gmail.com
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-sage-50 transition-colors">
              <MessageSquare className="h-8 w-8 text-sage-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
              <p className="text-gray-600 text-sm mb-3">15-minute phone consultation</p>
              <button className="text-sage-600 font-semibold hover:text-sage-700 transition-colors">
                Schedule Now
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-6 text-center animate-fade-in">
          <h4 className="font-semibold text-red-800 mb-2">Crisis Support Available</h4>
          <p className="text-red-700 text-sm">
            If you're experiencing a mental health emergency, please don't wait for a response. 
            Call <a href="tel:988" className="font-bold underline hover:text-red-600">988 (Suicide & Crisis Lifeline)</a> 
            or visit your nearest emergency room immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;