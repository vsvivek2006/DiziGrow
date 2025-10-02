import React from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, ShoppingCart, Video, Mail, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  // Monthly Services - Minimum 3 Months
  const monthlyServices = [
    { 
      name: 'SEO Service', 
      price: '₹14,999/month', 
      originalPrice: '₹22,499',
      duration: 'Minimum 3 months commitment',
      description: 'Complete SEO optimization for better Google rankings',
      popular: true,
      features: [
        'Comprehensive Keyword Research (50+ keywords)',
        'On-Page SEO Optimization',
        'Technical SEO Audit & Fixes',
        'Content Optimization & Strategy',
        'Quality Backlink Building',
        'Monthly Ranking Reports',
        'Google Analytics & Search Console Setup',
        'Local SEO Optimization',
        'Website Speed Optimization',
        'Monthly Strategy Calls'
      ],
      badge: 'BEST FOR GROWTH'
    },
    { 
      name: 'Social Media Management', 
      price: '₹4,999/month', 
      originalPrice: '₹18,000',
      duration: 'Minimum 3 months commitment',
      description: 'Complete social media management across all platforms',
      popular: false,
      features: [
        '15 Creative Design Posts Monthly',
        '2 Professional Videos/Reels',
        'Platform Management: Instagram, Meta, Twitter(X), WhatsApp',
        'Trending Hashtags & Keyword Research',
        'Content Calendar & Strategy',
        'Audience Engagement Management',
        'Performance Analytics Report',
        'Monthly Growth Strategy'
      ],
      badge: 'MOST POPULAR'
    },
    { 
      name: 'Google Ads Management', 
      price: '₹9,999/month', 
      originalPrice: '₹14,999',
      duration: 'Minimum 3 months commitment',
      description: 'Professional Google Ads campaign management',
      popular: false,
      features: [
        'Campaign Strategy & Setup',
        'Keyword Research & Analysis',
        'Ad Copy Creation & Optimization',
        'Landing Page Quality Score Optimization',
        'Daily Budget & Bid Management',
        'A/B Testing of Ads & Landing Pages',
        'Conversion Tracking Setup',
        'Monthly Performance Reports',
        'ROI Optimization',
        '24/7 Campaign Monitoring'
      ],
      badge: 'HIGH ROI'
    }
  ];

  // One-time Digital Marketing Services
  const digitalMarketingServices = [
    { 
      name: 'Social Media Account Creation', 
      price: '₹1,999', 
      originalPrice: '₹4,999',
      description: 'Professional social media account setup',
      features: [
        'META Business Account Setup',
        'Instagram Professional Account',
        'Twitter (X) Business Profile',
        'Profile Optimization',
        'Cover & Profile Picture Design',
        'Bio & Description Writing'
      ]
    },
    { 
      name: 'Google Business Page', 
      price: '₹999', 
      originalPrice: '₹2,499',
      description: 'Google My Business listing setup & optimization',
      features: [
        'Google Business Profile Creation',
        'Category & Description Optimization',
        'Photos & Logo Upload',
        'Service/Product Listings',
        'Review Management Setup',
        'Google Map Integration'
      ]
    },
    { 
      name: 'Business WhatsApp', 
      price: '₹999', 
      originalPrice: '₹2,999',
      description: 'Business WhatsApp API setup with catalog',
      features: [
        'Business WhatsApp API Setup',
        'Business Profile Creation',
        '10 Product Catalog Listings',
        'Quick Reply Setup',
        'Away Message Configuration',
        'Business Hours Setup'
      ]
    },
    { 
      name: 'YouTube Channel Creation', 
      price: '₹999', 
      originalPrice: '₹2,499',
      description: 'Professional YouTube channel setup',
      features: [
        'Channel Branding & Artwork',
        'Channel Description & SEO',
        'Section Setup & Organization',
        'Channel Trailer Creation',
        'Basic Monetization Setup',
        'Video Upload Strategy'
      ]
    },
    { 
      name: 'E-commerce Account Creation', 
      price: '₹5,999', 
      originalPrice: '₹12,999',
      description: 'Multi-platform e-commerce store setup',
      features: [
        'Amazon Seller Account',
        'Flipkart Seller Account',
        'Meesho Store Setup',
        'Product Category Optimization',
        'Store Branding & Design',
        'Basic Listing Setup'
      ]
    },
    { 
      name: 'Meta & Google Ads Setup', 
      price: '₹3,999', 
      originalPrice: '₹7,999',
      description: 'Complete advertising account setup',
      features: [
        'Meta Business Manager Setup',
        'Google Ads Account Creation',
        'Pixel Installation & Tracking',
        'Conversion API Setup',
        'Audience Research & Creation',
        'Initial Campaign Structure'
      ]
    }
  ];

  // IT & Website Services
  const itServices = [
    { 
      name: 'Static Website', 
      price: '₹17,999', 
      originalPrice: '₹35,999',
      description: 'Professional static website with hosting',
      popular: false,
      features: [
        '5 Page Responsive Website',
        'Mobile-Friendly Design',
        'Contact Form Integration',
        'Basic SEO Setup',
        '1 Year Hosting Included',
        'SSL Certificate',
        'Social Media Integration',
        '6 Months Technical Support'
      ]
    },
    { 
      name: 'Theme Page Creation', 
      price: '₹17,999', 
      originalPrice: '₹29,999',
      description: 'Custom theme-based website development',
      popular: false,
      features: [
        'Custom Theme Development',
        'WordPress CMS Setup',
        'Responsive Design',
        'Plugin Integration',
        'Content Population',
        'Basic SEO Optimization',
        'Training & Documentation',
        '6 Months Support'
      ]
    },
    { 
      name: 'Shopify Website', 
      price: '₹24,999', 
      originalPrice: '₹49,999',
      description: 'Complete e-commerce website on Shopify',
      popular: true,
      features: [
        'Custom Shopify Theme',
        'Product Listing (Up to 50 products)',
        'Payment Gateway Setup',
        'Inventory Management',
        'Order Processing System',
        'Mobile App Ready',
        'SEO Optimized',
        '1 Year Technical Support'
      ]
    },
    { 
      name: 'Dynamic Website & App', 
      price: '₹49,999', 
      originalPrice: '₹99,999',
      description: 'Custom dynamic website with admin panel',
      popular: false,
      features: [
        'Custom Web Application',
        'Admin Dashboard',
        'User Management System',
        'Database Integration',
        'API Development',
        'Advanced Security Features',
        'Performance Optimization',
        '1 Year Support & Maintenance'
      ]
    }
  ];

  // Marketing Services
  const marketingServices = [
    { 
      name: 'Logo Creation', 
      price: '₹2,999', 
      originalPrice: '₹5,999',
      description: 'Professional logo design with multiple concepts',
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      name: 'Influencer Marketing', 
      price: '₹9,999', 
      originalPrice: '₹19,999',
      description: 'Influencer campaign management & coordination',
      icon: <Users className="h-6 w-6" />
    },
    { 
      name: 'Flyer & Video Creation', 
      price: '₹1,999', 
      originalPrice: '₹3,999',
      description: 'Professional flyer design & video editing',
      icon: <Video className="h-6 w-6" />
    },
    { 
      name: 'Email Marketing', 
      price: '₹4,999', 
      originalPrice: '₹9,999',
      description: 'Email campaign setup & management',
      icon: <Mail className="h-6 w-6" />
    },
    { 
      name: 'Bulk Message Service', 
      price: '₹2,999', 
      originalPrice: '₹5,999',
      description: 'Bulk SMS/WhatsApp campaign service',
      icon: <MessageCircle className="h-6 w-6" />
    },
    { 
      name: 'Online Presence Creation', 
      price: '₹7,999', 
      originalPrice: '₹15,999',
      description: 'Complete digital presence setup across platforms',
      icon: <ShoppingCart className="h-6 w-6" />
    }
  ];

  // Combo Packages - High Value Bundles
  const comboPackages = [
    {
      name: 'Website + SEO Combo',
      price: '₹29,999',
      originalPrice: '₹67,497',
      popular: true,
      type: 'one-time + 3 months',
      description: 'Complete website with 3 months SEO service - Perfect for business growth',
      features: [
        'Professional Static Website (5 pages)',
        '3 Months SEO Service Included',
        'Google Business Page Setup',
        'Social Media Account Creation',
        'Mobile Responsive Design',
        'Basic On-Page SEO',
        'Monthly SEO Reports',
        '12 Months Technical Support',
        'Website Hosting & SSL',
        'Performance Analytics'
      ],
      savings: '₹37,498',
      whatsappText: 'Hello DiziGrow, I want the Website + SEO Combo Package for my business'
    },
    {
      name: 'Social Media Pro Package',
      price: '₹12,999',
      originalPrice: '₹24,997',
      popular: false,
      type: '3 months service',
      description: 'Complete social media management for 3 months with account setup',
      features: [
        '3 Months Social Media Management',
        'Social Media Account Creation (All Platforms)',
        '45 Creative Design Posts',
        '6 Professional Videos/Reels',
        'Google Business Page Setup',
        'Content Strategy & Calendar',
        'Performance Analytics Dashboard',
        'Hashtag Research & Optimization',
        'Competitor Analysis',
        'Monthly Strategy Reports'
      ],
      savings: '₹11,998',
      whatsappText: 'Hello DiziGrow, I want the Social Media Pro Package for my business'
    },
    {
      name: 'E-commerce Complete Package',
      price: '₹34,999',
      originalPrice: '₹69,997',
      popular: false,
      type: 'one-time setup',
      description: 'Complete e-commerce solution with multi-platform presence',
      features: [
        'Professional Shopify Website',
        'E-commerce Account Creation (Amazon, Flipkart, Meesho)',
        'Product Listing Setup (Up to 50 products)',
        'Payment Gateway Integration',
        'Inventory Management System',
        'Order Processing Setup',
        'Basic SEO Optimization',
        'Social Media Integration',
        'Google Business Page',
        '6 Months Technical Support'
      ],
      savings: '₹34,998',
      whatsappText: 'Hello DiziGrow, I want the E-commerce Complete Package for my online store'
    }
  ];

  // Add-ons & Extra Services
  const addOns = [
    { 
      name: 'Extra Social Media Post', 
      price: '₹100/post', 
      description: 'Additional creative posts for social media',
      category: 'social'
    },
    { 
      name: 'Extra Video/Reel Creation', 
      price: '₹200/video', 
      description: 'Additional video content (Max 2 minutes)',
      category: 'content'
    },
    { 
      name: 'Product Listing', 
      price: '₹50/product', 
      description: 'Additional product listings for e-commerce',
      category: 'ecommerce'
    },
    { 
      name: 'Photo-shoot Service', 
      price: '₹2,999/session', 
      description: 'Professional product photography',
      category: 'content'
    },
    { 
      name: 'Video Editing Service', 
      price: '₹499/video', 
      description: 'Professional video editing for YouTube/social media',
      category: 'content'
    },
    { 
      name: 'Paid Promotion Management', 
      price: '20% of ad spend', 
      description: 'Meta & Google ads campaign management',
      category: 'ads'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Digital Marketing Pricing | Social Media, SEO, Website Packages - DiziGrow</title>
        <meta
          name="description"
          content="Affordable digital marketing packages: Social Media Management ₹4,999/month, SEO ₹14,999/month, Website Development ₹17,999. Combo packages available. 70% OFF on all services."
        />
        <meta 
          name="keywords" 
          content="digital marketing pricing, social media management cost, SEO services price, website development cost, e-commerce setup, Google Ads management, affordable digital marketing India"
        />
        <link rel="canonical" href="https://dizigrow.com/pricing" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "DiziGrow Digital Marketing Services",
            "image": "https://dizigrow.com/og-image.jpg",
            "description": "Professional digital marketing services including social media management, SEO, website development, and e-commerce solutions.",
            "brand": {
              "@type": "Brand",
              "name": "DiziGrow"
            },
            "offers": comboPackages.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "url": `https://wa.me/919521281509?text=${encodeURIComponent(pkg.whatsappText)}`,
              "priceCurrency": "INR",
              "price": pkg.price.replace(/[^0-9]/g, ''),
              "availability": "https://schema.org/InStock",
              "description": pkg.description
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Professional Digital Marketing Services at 70% OFF - Minimum 3 Months Commitment for Real Results
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>70% Discount on All Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>Minimum 3 Months for Real Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Minimum 3 Months Commitment Required for Optimal Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyServices.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6 text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {Math.round((1 - parseInt(service.price.replace(/[^0-9]/g, '')) / parseInt(service.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to get ${service.name} monthly service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                      service.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    Start 3 Months Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Value Combo Packages
            </h2>
            <p className="text-xl text-gray-600">
              Save Big with Our Carefully Curated Service Bundles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                pkg.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>MOST POPULAR</span>
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      Save {pkg.savings}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{pkg.type}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {Math.round((1 - parseInt(pkg.price.replace(/[^0-9]/g, '')) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                      </span>
                    </div>
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
                      Get This Package
                    </a>
                    <a
                      href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to know more about the ${pkg.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors block text-center"
                    >
                      💬 WhatsApp for Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              One-time Setup Services for Immediate Digital Presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SAVE {Math.round((1 - parseInt(service.price.replace(/[^0-9]/g, '')) / parseInt(service.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to get ${service.name} service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website & IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional Website Development & IT Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                service.popular ? 'border-yellow-400' : 'border-gray-200'
              } hover:shadow-xl transition-shadow`}>
                {service.popular && (
                  <div className="inline-block bg-yellow-500 text-purple-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    RECOMMENDED
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                  <div className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SAVE {Math.round((1 - parseInt(service.price.replace(/[^0-9]/g, '')) / parseInt(service.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to get ${service.name} service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                    service.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  Get This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive Digital Marketing Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold inline-block">
                  SAVE {Math.round((1 - parseInt(service.price.replace(/[^0-9]/g, '')) / parseInt(service.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                </div>
                <a
                  href={`https://wa.me/919521281509?text=Hello DiziGrow, I want to get ${service.name} service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                >
                  💬 Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance Your Package with These Additional Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors">
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
                    Add Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get Professional Digital Marketing Services at 70% OFF - Limited Time Offer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509?text=Hello DiziGrow, I want to discuss digital marketing services for my business"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 WhatsApp for 70% OFF</span>
            </a>
            <a
              href="tel:+919521281509"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📞 Call: +91 9521281509</span>
            </a>
          </div>
          <p className="text-purple-200 mt-4">
            Limited Time Offer - Prices increasing soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;