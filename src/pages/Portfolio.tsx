import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Digital Marketing', 'Websites', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Solutions',
      category: 'Websites',
      description: 'Complete website redesign for a technology startup',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'Responsive', 'SEO'],
      results: '300% increase in conversions'
    },
    {
      id: 2,
      title: 'Fashion Hub Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for fashion retailer',
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      results: 'Brand recognition increased by 250%'
    },
    {
      id: 3,
      title: 'FoodieDelight E-commerce',
      category: 'E-commerce',
      description: 'Custom Shopify store for food delivery service',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify', 'Payment Gateway', 'Mobile App'],
      results: '500% increase in online orders'
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Social media and PPC campaign for local business',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Facebook Ads', 'Google Ads', 'SEO'],
      results: '400% ROI on ad spend'
    },
    {
      id: 5,
      title: 'HealthCare Plus Website',
      category: 'Websites',
      description: 'Professional website for healthcare provider',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'Booking System', 'HIPAA Compliant'],
      results: '200% increase in appointments'
    },
    {
      id: 6,
      title: 'Luxury Watches Brand',
      category: 'Branding',
      description: 'Premium brand identity for luxury watch retailer',
      image: 'https://images.pexels.com/photos/1697911/pexels-photo-1697911.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Luxury Branding', 'Photography', 'Catalog Design'],
      results: 'Premium positioning achieved'
    },
    {
      id: 7,
      title: 'E-learning Platform',
      category: 'Websites',
      description: 'Custom learning management system',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Custom Development', 'LMS', 'Video Streaming'],
      results: '10,000+ active learners'
    },
    {
      id: 8,
      title: 'Real Estate Marketing',
      category: 'Digital Marketing',
      description: 'Complete digital marketing strategy for real estate',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Lead Generation', 'Virtual Tours', 'Social Media'],
      results: '150% increase in qualified leads'
    },
    {
      id: 9,
      title: 'Organic Beauty Store',
      category: 'E-commerce',
      description: 'Shopify store for organic beauty products',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify Plus', 'Subscription Model', 'Influencer Integration'],
      results: '600% growth in 6 months'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Discover the success stories of businesses we've helped grow through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-green-700 text-sm font-medium">
                      📈 {project.results}
                    </p>
                  </div>
                  
                  <a
                    href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20discuss%20a%20similar%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Discuss Similar Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Real results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-700">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20start%20my%20success%20story"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 Start Your Project</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;