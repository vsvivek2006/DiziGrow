// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "200+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that drive your business growth.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "Clear communication, honest pricing, and no hidden costs - ever.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality First",
      description: "We never compromise on quality, delivering excellence in every project.",
    },
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
              We’re passionate about helping businesses thrive in the digital world through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
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

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600">
              The visionary behind DiziGrow: Harshit Chaudhary, CEO & Founder
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              HC
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Harshit Chaudhary</h3>
            <p className="text-purple-600 mb-3">CEO and Founder</p>
            <p className="text-gray-600">
              Harshit founded DiziGrow with a vision to help businesses succeed in the digital age. With a deep passion for technology and innovation, Harshit has led DiziGrow to new heights, helping over 100+ clients achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Manager */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                PG
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Praveen Gupta</h3>
              <p className="text-purple-600 mb-3">Manager</p>
              <p className="text-gray-600">
                A strategic planner who ensures smooth execution of digital marketing strategies for clients.
              </p>
            </div>
            {/* IT and Social Head */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                VS
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vikash Singh</h3>
              <p className="text-purple-600 mb-3">IT and Social Head</p>
              <p className="text-gray-600">
                Oversees IT infrastructure and manages social media strategies, helping businesses increase their digital footprint.
              </p>
            </div>
            {/* Graphics Design Head */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                RG
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rahul Kumar</h3>
              <p className="text-purple-600 mb-3">Graphics Design Head</p>
              <p className="text-gray-600">
                Rahul leads our creative design team, bringing visually stunning and functional designs that resonate with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Reel Format) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from our satisfied clients</p>
          </div>
          <div className="flex space-x-8 overflow-x-auto">
            {/* Testimonial Video 1 */}
            <div className="w-1/3">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" title="Client Testimonial 1"></iframe>
              <p className="mt-4 text-gray-700">"DiziGrow transformed our online presence and boosted sales!"</p>
            </div>
            {/* Testimonial Video 2 */}
            <div className="w-1/3">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="Client Testimonial 2"></iframe>
              <p className="mt-4 text-gray-700">"Their team’s strategy and execution was top-notch!"</p>
            </div>
            {/* Testimonial Video 3 */}
            <div className="w-1/3">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID_3" title="Client Testimonial 3"></iframe>
              <p className="mt-4 text-gray-700">"Exceptional service that led to measurable results!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-purple-100">Let’s discuss how we can help you achieve your digital goals.</p>
          <Link to="/services" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 inline-flex items-center space-x-2">
            <span>Explore Our Services</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
