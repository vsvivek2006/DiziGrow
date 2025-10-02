import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Blurb */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="DiziGrow Logo" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Brand Name with Haboro Serif Font */}
              <div className="flex flex-col">
                <span 
                  className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: '"Haboro Serif", serif',
                    fontWeight: 700,
                    letterSpacing: '-0.025em'
                  }}
                >
                  DiziGrow
                </span>
                <span 
                  className="text-sm text-gray-400 -mt-1"
                  style={{ fontFamily: '"Haboro Serif", serif' }}
                >
                  Digital Growth Partners
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Creative Digital Solutions That Deliver Growth 🚀
              <br />
              We provide branding, digital marketing, and web development solutions that help you succeed online.
            </p>

            <div className="space-y-3" aria-label="Contact information">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+919521281509" 
                  className="hover:text-purple-300 transition-colors duration-200 text-lg"
                >
                  +91 9521281509
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:info@dizigrow.com" 
                  className="hover:text-purple-300 transition-colors duration-200 text-lg"
                >
                  info@dizigrow.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-lg">Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4 text-yellow-400"
              style={{ fontFamily: '"Haboro Serif", serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
                { name: "FAQ", path: "/faq" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4 text-yellow-400"
              style={{ fontFamily: '"Haboro Serif", serif' }}
            >
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                { name: "Onboarding Agreement", path: "/onboarding-agreement" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 
              className="text-lg font-semibold mb-4 text-yellow-400"
              style={{ fontFamily: '"Haboro Serif", serif' }}
            >
              Follow Us
            </h3>
            <div className="flex space-x-4" aria-label="Social links">
              {[
                { 
                  icon: MessageCircle, 
                  href: "https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online.", 
                  color: "text-green-400 hover:text-green-300",
                  label: "WhatsApp"
                },
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/dizi_grow/", 
                  color: "text-gray-300 hover:text-pink-400",
                  label: "Instagram"
                },
                { 
                  icon: Linkedin, 
                  href: "https://www.linkedin.com/company/109423940/", 
                  color: "text-gray-300 hover:text-blue-400",
                  label: "LinkedIn"
                },
                { 
                  icon: Facebook, 
                  href: "https://www.facebook.com/profile.php?id=61581763886467#", 
                  color: "text-gray-300 hover:text-blue-500",
                  label: "Facebook"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={social.label}
                >
                  <social.icon className="h-7 w-7" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 w-full text-center"
              >
                <MessageCircle className="h-5 w-5" />
                Start Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p 
            className="text-gray-300 text-lg mb-2"
            style={{ fontFamily: '"Haboro Serif", serif' }}
          >
            © {year} DiziGrow. All rights reserved.
          </p>
          <p className="text-gray-400 text-md">
            Made with ❤️ in India | Empowering Businesses Digitally
          </p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 mt-4 pt-4 border-t border-gray-800">
            <div className="text-gray-400 text-sm">🚀 Premium Digital Solutions</div>
            <div className="text-gray-400 text-sm">⭐ 5-Star Rated Service</div>
            <div className="text-gray-400 text-sm">⚡ Fast & Reliable</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;