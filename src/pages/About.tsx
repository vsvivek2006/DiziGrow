// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Rocket, Globe, PenTool } from "lucide-react";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "200+", label: "Projects Delivered" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We combine creativity & technology to build winning campaigns.",
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Result-Driven",
      description: "Focused on SEO, performance marketing & measurable outcomes.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Client-Centric",
      description: "We act as your extended digital team & focus on your growth.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Excellence",
      description: "We deliver high-quality web development & branding solutions.",
    },
  ];

  return (
    <div>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <html lang="en" />
        <title>About DiziGrow | Digital Marketing, SEO & Web Development Company Jaipur</title>
        <meta
          name="description"
          content="DiziGrow is Jaipur’s leading digital marketing company offering SEO, web development, performance marketing, branding, graphics design & social media marketing. Meet our founder, team and clients."
        />
        <meta
          name="keywords"
          content="About DiziGrow, digital marketing company Jaipur, SEO agency Jaipur, web development India, performance marketing Jaipur, graphics design Jaipur, branding services Jaipur, social media marketing India"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dizigrow.com/about" />
        {/* Open Graph */}
        <meta property="og:title" content="About DiziGrow – Digital Marketing & SEO Company Jaipur" />
        <meta
          property="og:description"
          content="Know more about DiziGrow – Jaipur’s best SEO & digital marketing agency providing web development, branding, performance marketing and graphics design services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dizigrow.com/about" />
        <meta property="og:image" content="https://dizigrow.com/og-image.jpg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DiziGrow | SEO & Web Development Jaipur" />
        <meta
          name="twitter:description"
          content="DiziGrow is Jaipur’s top digital marketing company for SEO, web design, performance marketing & branding. Learn more about us."
        />
        <meta name="twitter:image" content="https://dizigrow.com/og-image.jpg" />
        {/* ✅ JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DiziGrow",
            url: "https://dizigrow.com",
            logo: "https://dizigrow.com/logo.png",
            description:
              "DiziGrow is a Jaipur-based digital marketing, SEO, performance marketing and web development company helping 100+ businesses grow online.",
            sameAs: [
              "https://www.facebook.com/dizigrow",
              "https://www.instagram.com/dizigrow",
              "https://www.linkedin.com/company/dizigrow",
            ],
            founder: {
              "@type": "Person",
              name: "Harshit Chaudhary",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            About <span className="text-yellow-400">DiziGrow</span>
          </h1>
          {/* Scrolling SEO keywords */}
          <div className="relative h-12 overflow-hidden mb-8">
            <div className="animate-scrollText absolute inset-0 flex flex-col items-center space-y-3 text-xl md:text-2xl font-semibold text-purple-100">
              <span>🚀 Digital Marketing Company in Jaipur</span>
              <span>🌐 SEO & Web Development Experts</span>
              <span>📈 Performance Marketing Agency</span>
              <span>🎨 Branding & Graphics Design Services</span>
              <span>📲 Social Media Marketing & Strategy</span>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-purple-100">
            We are a <strong>full-service digital marketing agency</strong> in Jaipur, helping
            businesses grow through SEO, performance marketing, web development,
            social media & branding services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in Jaipur, <strong>DiziGrow</strong> was built with one mission:
              to make <em>digital success accessible</em> for every business. From{" "}
              <strong>SEO campaigns</strong> to <strong>website design</strong> and{" "}
              <strong>performance marketing</strong>, we provide everything businesses
              need to scale.
            </p>
            <p className="text-lg text-gray-600">
              Today, we’ve worked with <strong>100+ businesses</strong> and delivered{" "}
              <strong>200+ projects</strong>, becoming one of India’s trusted{" "}
              <em>digital marketing companies</em>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Globe className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with <strong>SEO, digital marketing & performance
                strategies</strong> that increase ROI, brand visibility & growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <PenTool className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become India’s most trusted <strong>digital marketing company</strong>,
                delivering world-class web development, branding & marketing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              HC
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Harshit Chaudhary</h3>
            <p className="text-purple-600 mb-3">CEO & Founder</p>
            <p className="text-gray-600">
              Harshit founded <strong>DiziGrow</strong> with a vision to make{" "}
              <em>digital growth accessible</em> for businesses in India.
              With expertise in <strong>SEO, web development & performance marketing</strong>,
              he has led the company to serve over 100+ clients across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 mb-12">
            A passionate team of <strong>digital marketers, designers & strategists</strong>
            dedicated to your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Manager */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                PG
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Praveen Gupta</h3>
              <p className="text-purple-600 mb-3">Manager</p>
              <p className="text-gray-600">
                Strategic planner ensuring smooth execution of{" "}
                <strong>digital marketing campaigns</strong>.
              </p>
            </div>
            {/* IT & Social Head */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                VS
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vikash Singh</h3>
              <p className="text-purple-600 mb-3">IT & Social Head</p>
              <p className="text-gray-600">
                Handles IT infrastructure & <strong>social media marketing strategies</strong>
                to expand digital footprints.
              </p>
            </div>
            {/* Graphics Head */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                RK
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rahul Kumar</h3>
              <p className="text-purple-600 mb-3">Graphics Design Head</p>
              <p className="text-gray-600">
                Leads our creative team delivering{" "}
                <strong>branding & visual designs</strong> that engage audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-12">Real stories from businesses we’ve helped grow</p>
          <div className="flex space-x-8 overflow-x-auto">
            <div className="min-w-[300px] flex-1">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/VIDEO_ID_1" title="Client Testimonial 1"></iframe>
              <p className="mt-4 text-gray-700">"DiziGrow transformed our online presence with SEO & ads!"</p>
            </div>
            <div className="min-w-[300px] flex-1">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Client Testimonial 2"></iframe>
              <p className="mt-4 text-gray-700">"Their web development & marketing strategies delivered amazing results."</p>
            </div>
            <div className="min-w-[300px] flex-1">
              <iframe width="100%" height="220" src="https://www.youtube.com/embed/VIDEO_ID_3" title="Client Testimonial 3"></iframe>
              <p className="mt-4 text-gray-700">"Best digital marketing company in Jaipur we’ve worked with."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-lg mb-8 text-purple-100">
          Partner with Jaipur’s trusted <strong>digital marketing & SEO company</strong>
          for web development, performance ads & branding.
        </p>
        <Link
          to="/services"
          className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition hover:scale-105 inline-flex items-center"
        >
          Explore Our Services
        </Link>
      </section>

      {/* Tailwind Animation for Hero Scroll */}
      <style>{`
        @keyframes scrollText {
          0% { transform: translateY(0); }
          20% { transform: translateY(-2.5rem); }
          40% { transform: translateY(-5rem); }
          60% { transform: translateY(-7.5rem); }
          80% { transform: translateY(-10rem); }
          100% { transform: translateY(0); }
        }
        .animate-scrollText {
          animation: scrollText 12s infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
