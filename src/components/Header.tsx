import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";

type NavItem = { name: string; href: string };
const primaryNav: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" }, // NEW
];

const legalNav: NavItem[] = [
  { name: "Onboarding Agreement", href: "/onboarding-agreement" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [legalOpen, setLegalOpen] = React.useState<boolean>(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} bg-purple-600 text-white`
      : `${linkBase} text-gray-700 hover:bg-purple-100 hover:text-purple-600`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" aria-label="DiziGrow Home">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                DiziGrow
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {primaryNav.map((item) => (
              <NavLink key={item.name} to={item.href} className={navClass} end={item.href === "/"} >
                {item.name}
              </NavLink>
            ))}

            {/* Legal dropdown (desktop) */}
            <div className="relative">
              <button
                className={`${linkBase} text-gray-700 hover:bg-purple-100 hover:text-purple-600 flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={legalOpen}
                onClick={() => setLegalOpen((v) => !v)}
                onBlur={(e) => {
                  // close when focus leaves dropdown
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setLegalOpen(false);
                }}
              >
                Legal <ChevronDown className="h-4 w-4" />
              </button>
              {legalOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow-lg p-2"
                >
                  {legalNav.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        isActive
                          ? "block px-3 py-2 rounded-md bg-purple-600 text-white"
                          : "block px-3 py-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                      }
                      role="menuitem"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <span>💬 WhatsApp Us</span>
            </a>
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-4 py-2 rounded-lg font-medium transition-all"
            >
              📞 Get Free Quote
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {[...primaryNav].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={navClass}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Legal (mobile) */}
              <div className="pt-2">
                <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-500">Legal</div>
                {legalNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-3 py-2 rounded-md bg-purple-600 text-white"
                        : "block px-3 py-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <a
                  href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20want%20to%20grow%20my%20business%20online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  💬 WhatsApp Us
                </a>
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-lg font-medium transition-all text-center"
                >
                  📞 Get Free Quote
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
