import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const individualServices = [
    { name: 'Logo Design', price: '₹999', description: 'Professional logo with unlimited revisions' },
    { name: 'WordPress Website', price: '₹9,999', description: 'Custom WordPress site with SEO optimization' },
    { name: 'Shopify Store', price: '₹14,999', description: 'Complete e-commerce setup with payment gateway' },
    { name: 'SEO Monthly', price: '₹8,999', description: 'Comprehensive monthly SEO services' },
    { name: 'Meta Ads Setup', price: '₹4,999', description: 'Facebook & Instagram ads setup and optimization' },
    { name: 'Website + Hosting', price: '₹12,999', description: 'Website with 1 year hosting (+ ₹2,000/year)' },
  ];

  const packages = [
    {
      name: 'Startup Package',
      price: '₹19,999',
      originalPrice: '₹25,000',
      popular: false,
      description: 'Perfect for new businesses starting their digital journey',
      features: [
        'Professional Logo Design',
        'Business Cards Design',
        'WordPress Website',
        'Social Media Setup (3 platforms)',
        'Google My Business Setup',
        'Basic SEO (3 months)',
        'Unlimited Revisions',
        '3 Months Support'
      ],
      whatsappText: 'Hello DiziGrow, I want to choose the Startup Package'
    },
    {
      name: 'Growth Package',
      price: '₹39,999',
      originalPrice: '₹50,000',
      popular: true,
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'Complete Brand Identity',
        'Professional WordPress Website',
        'Social Media Management (3 months)',
        'Google Ads Campaign Setup',
        'Advanced SEO (6 months)',
        'Content Creation (20 posts)',
        'Google My Business Optimization',
        'Performance Analytics',
        'Priority Support',
        'Unlimited Revisions'
      ],
      whatsappText: 'Hello DiziGrow, I want to choose the Growth Package'
    },
    {
      name: 'Enterprise Package',
      price: '₹69,999',
      originalPrice: '₹90,000',
      popular: false,
      description: 'Complete digital transformation for established businesses',
      features: [
        'Premium Brand Identity Package',
        'Custom Website Development',
        'E-commerce Store Setup',
        'Digital Marketing (6 months)',
        'Advanced SEO & Analytics',
        'Social Media Management (6 months)',
        'Google & Meta Ads Management',
        'Content Marketing Strategy',
        'Email Marketing Setup',
        'Dedicated Account Manager',
        'Monthly Strategy Calls',
        '24/7 Priority Support'
      ],
      whatsappText: 'Hello DiziGrow, I want to choose the Enterprise Package'
    }
  ];

  const addOns = [
    { name: 'Additional Website Pages', price: '₹999/page', description: 'Extra pages beyond standard package' },
    { name: 'E-commerce Integration', price: '₹5,999', description: 'Add shopping cart to existing website' },
    { name: 'Mobile App Development', price: 'Contact Us', description: 'iOS and Android app development' },
    { name: 'Advanced Analytics Setup', price: '₹2,999', description: 'Google Analytics 4 with custom tracking' },
    { name: 'Speed Optimization', price: '₹1,999', description: 'Website speed optimization and caching' },
    { name: 'Security Package', price: '₹3,999', description: 'SSL, security monitoring, and backup' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              No hidden costs, no surprises. Choose the perfect plan for your business growth.
            </p>
            <div className="flex items-center justify-center space-x-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive packages designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                pkg.popular ? 'border-yellow-400 scale-105' : 'border-gray-200'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/919521281509?text=${encodeURIComponent(pkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                        pkg.popular
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      Choose Package
                    </a>
                    <a
                      href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to know more about the ${pkg.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors block text-center"
                    >
                      💬 WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Services
            </h2>
            <p className="text-xl text-gray-600">
              Need just one service? We've got you covered with competitive pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <Zap className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to get ${service.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💬 WhatsApp Inquiry
                  </a>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your package with these optional add-ons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600">{addon.price}</span>
                  <a
                    href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to add ${addon.name} to my package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded font-medium text-sm transition-colors"
                  >
                    Add to Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Pricing is Different
            </h2>
            <p className="text-xl text-gray-600">
              Transparent, fair, and designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">
                What you see is what you pay. No surprise charges or hidden fees ever.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising on quality or attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlimited Revisions</h3>
              <p className="text-gray-600">
                We work until you're 100% satisfied. No limits on revisions or changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Choose your package or get a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509?text=Hello DiziGrow, I want to get a custom quote for my business"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 Get Custom Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;