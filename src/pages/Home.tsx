import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // install: npm i react-helmet
import {
  Rocket,
  Target,
  Zap,
  Shield,
  Clock,
  RefreshCw,
  Headphones,
  Star,
  Palette,
  TrendingUp,
  Code,
  Settings,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding & Design",
      description:
        "Professional logos, brand identity, and visual designs that make you stand out.",
      link: "/services",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description:
        "SEO, social media, Google Ads, and Meta Ads to grow your online presence.",
      link: "/services",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom websites, e-commerce stores, and web applications built for success.",
      link: "/services",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Solutions",
      description:
        "Tailored digital solutions designed specifically for your business needs.",
      link: "/services",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Hidden Costs",
      description: "Transparent pricing with no surprises",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Unlimited Revisions",
      description: "We refine until you're 100% satisfied",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Always here when you need us",
    },
  ];

  const portfolioPreview = [
    {
      title: "E-commerce Store",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image:
        "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Mobile App",
      category: "Development",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Ltd",
      text: "DiziGrow transformed our online presence completely. Sales increased by 300% in just 3 months!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      text: "Excellent service! They created a beautiful website and managed our social media perfectly.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Local Restaurant",
      text: "Professional team, great communication, and amazing results. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* SEO Meta */}
      <Helmet>
        <title>DiziGrow – Digital Marketing, Branding & Web Development</title>
        <meta
          name="description"
          content="Grow your business digitally with DiziGrow. Branding, Digital Marketing, SEO, Web Development & Custom Solutions."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Branding, Web Development, SEO, Google Ads"
        />
        <link rel="canonical" href="https://Dizigrow.com/" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grow Your Business
            <span className="block text-yellow-400">
              Digitally with DiziGrow
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            We provide branding, digital marketing, and web development
            solutions that help you succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <span>📞 Get Free Quote</span>
            </Link>
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <span>💬 WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100 group"
              >
                <div className="text-purple-600 mb-4 group-hover:text-yellow-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DiziGrow?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Speaks
            </h2>
            <p className="text-xl text-gray-600">
              Check out some of our recent successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioPreview.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} – ${project.category}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-purple-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* package 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Startup Package
              </h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">₹19,999</p>
              <p className="text-gray-600 mb-6">
                Perfect for new businesses starting their digital journey
              </p>
              <Link
                to="/pricing"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
              >
                Learn More
              </Link>
            </div>
            {/* package 2 */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Growth Package
              </h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">₹39,999</p>
              <p className="text-gray-600 mb-6">
                Ideal for growing businesses ready to scale
              </p>
              <Link
                to="/pricing"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
              >
                Choose Package
              </Link>
            </div>
            {/* package 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise Package
              </h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">₹69,999</p>
              <p className="text-gray-600 mb-6">
                Complete digital transformation for established businesses
              </p>
              <Link
                to="/pricing"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take your business online?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's build something amazing together.
          </p>
          <a
            href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>👉 WhatsApp Us Now</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
