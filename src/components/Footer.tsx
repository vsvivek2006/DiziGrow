import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
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
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                DiziGrow
              </span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              Creative Digital Solutions That Deliver Growth 🚀
              <br />
              We provide branding, digital marketing, and web development solutions that help you succeed online.
            </p>

            <div className="space-y-2" aria-label="Contact information">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <a href="tel:+919521281509" className="hover:text-purple-300 transition-colors">
                  +91 9521281509
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <a href="mailto:info@dizigrow.com" className="hover:text-purple-300 transition-colors">
                  info@dizigrow.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" aria-hidden="true" />
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/onboarding-agreement" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Onboarding Agreement
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4" aria-label="Social links">
              <a
                href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {year} DiziGrow. All rights reserved. Made with ❤️ in India
          </p>
          {/* Optional: expose sitemap location */}
          {/* <p className="text-gray-500 text-xs mt-2">Sitemap: /sitemap.xml</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
