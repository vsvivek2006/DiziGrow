import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  Palette, 
  TrendingUp, 
  Code, 
  Settings,
  Brush,
  CreditCard,
  FileText,
  Search,
  Facebook,
  MousePointer,
  Monitor,
  ShoppingCart,
  Smartphone,
  Video,
  HeadphonesIcon
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Branding & Design',
      icon: <Palette className="h-12 w-12" />,
      description: 'Create a memorable brand identity that resonates with your audience',
      services: [
        {
          icon: <Brush className="h-6 w-6" />,
          name: 'Logo Design',
          description: 'Professional logo design to represent your brand.',
          includes: ['Multiple design concepts', 'Unlimited revisions', 'Vector & high-res files', 'Brand guidelines'],
          price: '₹999'
        },
        {
          icon: <CreditCard className="h-6 w-6" />,
          name: 'Business Cards',
          description: 'Professional business card designs that make an impression.',
          includes: ['Custom design', 'Multiple layouts', 'Print-ready files', 'Digital versions'],
          price: '₹499'
        },
        {
          icon: <FileText className="h-6 w-6" />,
          name: 'Brand Identity Package',
          description: 'Complete brand identity with logo, colors, and guidelines.',
          includes: ['Logo design', 'Color palette', 'Typography selection', 'Brand guidelines'],
          price: '₹4,999'
        }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <TrendingUp className="h-12 w-12" />,
      description: 'Drive traffic, generate leads, and grow your online presence',
      services: [
        {
          icon: <Search className="h-6 w-6" />,
          name: 'SEO Monthly',
          description: 'Comprehensive SEO services to improve your search rankings.',
          includes: ['Keyword research', 'On-page optimization', 'Content optimization', 'Monthly reports'],
          price: '₹8,999'
        },
        {
          icon: <Facebook className="h-6 w-6" />,
          name: 'Meta Ads Setup',
          description: 'Facebook and Instagram ads setup and management.',
          includes: ['Campaign setup', 'Audience targeting', 'Ad creation', 'Performance monitoring'],
          price: '₹4,999'
        },
        {
          icon: <MousePointer className="h-6 w-6" />,
          name: 'Google Ads',
          description: 'Google Ads campaigns to drive targeted traffic.',
          includes: ['Campaign setup', 'Keyword research', 'Ad copywriting', 'Bid optimization'],
          price: '₹6,999'
        }
      ]
    },
    {
      title: 'Web Development',
      icon: <Code className="h-12 w-12" />,
      description: 'Build powerful websites and applications that drive results',
      services: [
        {
          icon: <Monitor className="h-6 w-6" />,
          name: 'WordPress Website',
          description: 'Professional WordPress website with custom design.',
          includes: ['Custom design', 'Responsive layout', 'SEO optimization', 'Admin training'],
          price: '₹9,999'
        },
        {
          icon: <ShoppingCart className="h-6 w-6" />,
          name: 'Shopify Store',
          description: 'Complete e-commerce store setup on Shopify.',
          includes: ['Store setup', 'Product upload', 'Payment gateway', 'Theme customization'],
          price: '₹14,999'
        },
        {
          icon: <Smartphone className="h-6 w-6" />,
          name: 'Mobile App',
          description: 'Custom mobile app development for your business.',
          includes: ['iOS & Android app', 'Custom features', 'App store submission', 'Maintenance'],
          price: 'Contact Us'
        }
      ]
    },
    {
      title: 'Custom Solutions',
      icon: <Settings className="h-12 w-12" />,
      description: 'Tailored solutions designed specifically for your business needs',
      services: [
        {
          icon: <Video className="h-6 w-6" />,
          name: 'Video Editing',
          description: 'Professional video editing for marketing and promotional content.',
          includes: ['Video editing', 'Motion graphics', 'Color correction', 'Audio enhancement'],
          price: '₹2,999'
        },
        {
          icon: <HeadphonesIcon className="h-6 w-6" />,
          name: 'Digital Consulting',
          description: 'Strategic consulting to optimize your digital presence.',
          includes: ['Business analysis', 'Strategy development', 'Implementation roadmap', 'Ongoing support'],
          price: '₹7,999'
        },
        {
          icon: <Settings className="h-6 w-6" />,
          name: 'Custom Packages',
          description: 'Tailored packages combining multiple services.',
          includes: ['Custom service mix', 'Flexible pricing', 'Dedicated support', 'Priority delivery'],
          price: 'Contact Us'
        }
      ]
    }
  ];

  const whatsappUrl = 'https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20discuss';

 return (
    <div>
      {/* ✅ SEO Integration */}
      <Helmet>
        <title>Digital Services | DiziGrow – Branding, Web Development & Marketing Solutions</title>
        <meta
          name="description"
          content="Discover DiziGrow's comprehensive digital services including branding, web development, e-commerce, and digital marketing solutions tailored to grow your business."
        />
        <meta
          name="keywords"
          content="DiziGrow services, branding services Jaipur, web development, SEO services, digital marketing, e-commerce development, logo design, WordPress website, Shopify store, mobile app development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dizigrow.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Services | DiziGrow – Branding, Web Development & Marketing Solutions" />
        <meta property="og:description" content="Explore DiziGrow's digital services to boost your business growth, from branding and web development to e-commerce and digital marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dizigrow.com/services" />
        <meta property="og:image" content="https://dizigrow.com/og-image-services.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Services | DiziGrow – Branding, Web Development & Marketing Solutions" />
        <meta name="twitter:description" content="Explore DiziGrow's digital services to boost your business growth, from branding and web development to e-commerce and digital marketing solutions." />
        <meta name="twitter:image" content="https://dizigrow.com/og-image-services.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Organization",
              "name": "DiziGrow",
              "url": "https://dizigrow.com"
            },
            "areaServed": "IN",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": serviceCategories.map((category) => ({
                "@type": "OfferCatalog",
                "name": category.title,
                "itemListElement": category.services.map((service) => ({
                  "@type": "Offer",
                  "name": service.name,
                  "description": service.description,
                  "price": service.price === 'Contact Us' ? undefined : service.price.replace(/₹/g, ''),
                  "priceCurrency": "INR",
                  "url": `${whatsappUrl}%20${encodeURIComponent(service.name)}`
                }))
              }))
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Comprehensive digital solutions to accelerate your business growth and online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'py-16 bg-white' : 'py-16 bg-gray-50'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-purple-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="text-purple-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      {service.price !== 'Contact Us' && (
                        <span className="text-sm text-gray-500">One-time</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <a
                        href={`${whatsappUrl}%20${encodeURIComponent(service.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>💬 WhatsApp Inquiry</span>
                      </a>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Special Combo Offers
            </h2>
            <p className="text-xl text-purple-100">
              Save more with our bundled services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Website + Hosting Bundle</h3>
              <p className="text-purple-100 mb-6">
                Complete website with 1 year hosting included
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-yellow-400">₹12,999</span>
                <span className="text-lg text-purple-100 ml-2">+ ₹2,000/year hosting</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Professional WordPress website
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  1 year hosting included
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  SSL certificate
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Email accounts setup
                </li>
              </ul>
              <a
                href={`${whatsappUrl}%20Website%20+%20Hosting%20Bundle`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>💬 WhatsApp Now</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Digital Marketing Starter</h3>
              <p className="text-purple-100 mb-6">
                Complete digital marketing setup for new businesses
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-yellow-400">₹15,999</span>
                <span className="text-lg text-purple-100 ml-2">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Social media setup
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Google My Business optimization
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Basic SEO (3 months)
                </li>
                <li className="flex items-center text-purple-100">
                  <span className="text-green-400 mr-2">✓</span>
                  Content creation
                </li>
              </ul>
              <a
                href={`${whatsappUrl}%20Digital%20Marketing%20Starter`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>💬 WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We create tailored packages that perfectly fit your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${whatsappUrl}%20a%20custom%20solution%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 Discuss Custom Package</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;