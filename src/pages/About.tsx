import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Happy Clients' },
    { number: '200+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive your business growth.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Transparency',
      description: 'Clear communication, honest pricing, and no hidden costs - ever.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We work as an extension of your team.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality First',
      description: 'We never compromise on quality, delivering excellence in every project.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">DiziGrow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              We're passionate about helping businesses thrive in the digital world through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DiziGrow was founded with a simple yet powerful vision: to make digital success accessible to every business, regardless of size or budget. We started as a small team of passionate digital experts who believed that every business deserves to grow online.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've helped over 100+ businesses transform their digital presence, increase their online visibility, and achieve sustainable growth. Our journey has been fueled by our clients' success stories and our commitment to delivering results that matter.
              </p>
              <p className="text-lg text-gray-600">
                What sets us apart is our holistic approach to digital growth. We don't just build websites or run ads; we create comprehensive digital ecosystems that work together to maximize your business potential.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with creative digital solutions that drive real growth. We're committed to making digital transformation accessible, affordable, and effective for every business we work with.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital growth partner for businesses across India, known for our innovation, transparency, and unwavering commitment to client success. We envision a future where every business thrives online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DG
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Growth Experts</h3>
              <p className="text-purple-600 mb-3">Strategy & Planning</p>
              <p className="text-gray-600">
                Our strategy team analyzes your business and creates comprehensive digital growth plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                CD
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Designers</h3>
              <p className="text-purple-600 mb-3">Design & Branding</p>
              <p className="text-gray-600">
                Our creative team brings your brand to life with stunning visuals and compelling designs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                TD
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Developers</h3>
              <p className="text-purple-600 mb-3">Development & Implementation</p>
              <p className="text-gray-600">
                Our development team builds robust, scalable solutions that power your digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Link
            to="/services"
            className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;