import React from 'react';
import { Calendar, Phone, ArrowRight, Heart, Users, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-lavender-50" />

        {/* Floating Decorative Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-mint-200 rounded-full opacity-30 animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-lavender-200 rounded-full opacity-30 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-sage-200 rounded-full opacity-30 animate-bounce-gentle" style={{ animationDelay: '2s' }} />

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="mb-6">
                <span className="inline-flex items-center space-x-2 px-4 py-2 bg-mint-100 text-mint-700 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4" />
                  <span>Trusted by 500+ clients</span>
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-mint-600">Untangle</span> — 
                <span className="text-lavender-600"> Heal</span> — 
                <span className="text-sage-600"> Thrive</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Your one-stop destination for compassionate mental health care. 
                At MindWeal, we create a safe, judgment-free space where you can explore, 
                heal, and discover your path to emotional well-being.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-mint-500 to-sage-600 text-white text-lg font-semibold rounded-xl hover:from-mint-600 hover:to-sage-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-mint-300 text-mint-600 text-lg font-semibold rounded-xl hover:bg-mint-50 transition-all duration-300"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Learn More
                </button>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-mint-600">500+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lavender-600">5+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sage-600">4.9★</div>
                  <div className="text-gray-600 text-sm">Client Rating</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Hero Image + Floating Cards */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-mint-100 to-lavender-100 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Therapy session illustration" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>

              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle">
                <Users className="h-8 w-8 text-mint-500 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Group Sessions</div>
                <div className="text-xs text-gray-600">Available</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
                <Phone className="h-8 w-8 text-lavender-500 mb-2" />
                <div className="text-sm font-semibold text-gray-800">24/7 Support</div>
                <div className="text-xs text-gray-600">Always here</div>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 text-center animate-fade-in">
            <p className="text-gray-700">
              <span className="font-semibold text-red-600">Crisis Support:</span> If you're experiencing a mental health emergency, 
              please call <a href="tel:988" className="font-bold text-red-600 hover:underline">988 (Suicide & Crisis Lifeline)</a> 
              or visit your nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE + CTA SECTION */}
<section className="bg-[#f5faff] py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT: Two Images Side by Side */}
    <div className="grid grid-cols-2 gap-4 w-full">
      <img 
        src="/MindWeal-Website/ex1.png" 
        alt="Therapy Illustration 1" 
        className="rounded-2xl shadow-md w-full h-auto object-cover"
      />
      <img 
        src="/MindWeal-Website/ex2.png" 
        alt="Therapy Illustration 2" 
        className="rounded-2xl shadow-md w-full h-auto object-cover"
      />
    </div>

    {/* RIGHT: Logo + Buttons */}
    <div className="flex flex-col items-center text-center">
      <img 
        src="/images/mwlogo.jpg" 
        alt="MindWeal Logo" 
        className="w-24 sm:w-32 mb-4 object-contain"
      />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#281c48] mb-2">
        MindWeal By Pihu Suri
      </h2>
      <p className="text-gray-700 mb-6 max-w-md">
        Your one stop destination for all mental health services
      </p>

      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <button className="w-full bg-gradient-to-r from-mint-500 to-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          BOOK DISCOVERY CALL
        </button>
        <button className="w-full bg-gradient-to-r from-mint-500 to-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          BOOK THERAPY SESSION
        </button>
        <button className="w-full bg-gradient-to-r from-mint-500 to-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          BOOK SOS THERAPY SESSION
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
