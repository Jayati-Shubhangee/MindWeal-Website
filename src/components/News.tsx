import React from 'react';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Video, Mic } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      type: 'blog',
      icon: BookOpen,
      title: '5 Evidence-Based Strategies for Managing Anxiety',
      excerpt: 'Discover practical, research-backed techniques to help manage anxiety in your daily life.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Mental Health Tips',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'mint'
    },
    {
      id: 2,
      type: 'announcement',
      icon: Video,
      title: 'New Online Group Therapy Sessions Available',
      excerpt: 'We\'re excited to announce our new virtual group therapy sessions starting February 2024.',
      date: '2024-01-10',
      readTime: '2 min read',
      category: 'Service Update',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'lavender'
    },
    {
      id: 3,
      type: 'podcast',
      icon: Mic,
      title: 'Mental Health Matters: Latest Podcast Episode',
      excerpt: 'Listen to our discussion on workplace stress and maintaining work-life balance.',
      date: '2024-01-08',
      readTime: '30 min listen',
      category: 'Podcast',
      image: 'https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'sage'
    },
    {
      id: 4,
      type: 'blog',
      icon: BookOpen,
      title: 'Understanding Trauma: A Compassionate Guide',
      excerpt: 'Learn about trauma responses and the journey of healing with evidence-based approaches.',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'mint'
    },
    {
      id: 5,
      type: 'announcement',
      icon: Calendar,
      title: 'Extended Hours for Holiday Support',
      excerpt: 'Special extended hours during the holiday season to support our community.',
      date: '2024-01-02',
      readTime: '1 min read',
      category: 'Service Update',
      image: 'https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'lavender'
    },
    {
      id: 6,
      type: 'blog',
      icon: BookOpen,
      title: 'Building Resilience: Tools for Life\'s Challenges',
      excerpt: 'Practical strategies to build emotional resilience and navigate life\'s ups and downs.',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Personal Growth',
      image: 'https://images.pexels.com/photos/7176321/pexels-photo-7176321.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'sage'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      mint: {
        bg: 'from-mint-50 to-mint-100',
        accent: 'text-mint-600',
        border: 'border-mint-200',
        badge: 'bg-mint-100 text-mint-700'
      },
      lavender: {
        bg: 'from-lavender-50 to-lavender-100',
        accent: 'text-lavender-600',
        border: 'border-lavender-200',
        badge: 'bg-lavender-100 text-lavender-700'
      },
      sage: {
        bg: 'from-sage-50 to-sage-100',
        accent: 'text-sage-600',
        border: 'border-sage-200',
        badge: 'bg-sage-100 text-sage-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = newsItems[0];
  const recentPosts = newsItems.slice(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-4">
            Updates & News
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest mental health insights, practice updates, and resources to support your wellness journey.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-gradient-to-br from-mint-50 to-sage-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-mint-700">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <span className={`inline-block px-3 py-1 ${getColorClasses(featuredPost.color).badge} rounded-full text-sm font-medium mb-4 w-fit`}>
                  {featuredPost.category}
                </span>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <button className="group inline-flex items-center text-mint-600 font-semibold hover:text-mint-700 transition-colors">
                  Read Full Article
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentPosts.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <article
                key={item.id}
                className={`group bg-gradient-to-br ${colors.bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border ${colors.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <Icon className={`h-4 w-4 ${colors.accent}`} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </span>
                  </div>
                  
                  <span className={`inline-block px-2 py-1 ${colors.badge} rounded-full text-xs font-medium mb-3`}>
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <button className="group/btn inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-mint-500 to-sage-600 rounded-3xl p-8 md:p-12 text-white text-center animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest mental health insights, tips, and practice updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-white text-mint-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm opacity-70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Categories/Tags */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Mental Health Tips', 'Therapy Techniques', 'Self-Care', 'Relationships', 'Anxiety', 'Depression', 'Trauma Recovery', 'Personal Growth'].map((tag, index) => (
              <button
                key={index}
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-mint-100 hover:text-mint-700 transition-colors transform hover:scale-105"
              >
                <Tag className="h-4 w-4 mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;