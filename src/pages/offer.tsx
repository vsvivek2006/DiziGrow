// src/pages/Offer.tsx
import React, { useState, useEffect } from "react";
// Temporary fix - Direct key use

import { Helmet } from "react-helmet";
import { 
  Check, 
  Star, 
  Rocket, 
  Clock, 
  Users, 
  MessageCircle, 
  Phone, 
  X, 
  Send, 
  CreditCard, 
  Shield,
  Search,
  Globe,
  ShoppingCart,
  ThumbsUp,
  Eye,
  Target,
  Sparkles,
  Gift,
  Award,
  Heart,
  Quote,
  ChevronDown,
  MapPin,
  Mail,
  Zap
} from "lucide-react";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Offer: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer
  const [flashSaleTime, setFlashSaleTime] = useState(15); // 15 seconds flash sale
  const [isSpecialPrice, setIsSpecialPrice] = useState(true);
  const [isFlashSale, setIsFlashSale] = useState(true);
  const [hasFlashSaleOccurred, setHasFlashSaleOccurred] = useState(false);
  const [offerExpired, setOfferExpired] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [successFormData, setSuccessFormData] = useState({
    name: "",
    email: "",
    utr: "",
    service: "",
    amount: ""
  });
  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);
  const [isGoogleService, setIsGoogleService] = useState(false);

  // Razorpay Keys
  const RAZORPAY_KEY_ID = 'rzp_live_ROjWHHKbSiP7Al'; // ✅ Direct key
  // Initialize timers from localStorage
  useEffect(() => {
    const savedTime = localStorage.getItem('diwaliOfferTime');
    const savedFlashSale = localStorage.getItem('flashSaleOccurred');
    const savedOfferExpired = localStorage.getItem('offerExpired');
    
    if (savedTime) {
      const remainingTime = parseInt(savedTime);
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        setOfferExpired(true);
        setIsSpecialPrice(false);
      }
    }
    
    if (savedFlashSale === 'true') {
      setHasFlashSaleOccurred(true);
      setIsFlashSale(false);
    }

    if (savedOfferExpired === 'true') {
      setOfferExpired(true);
      setIsSpecialPrice(false);
    }
  }, []);

  // Main Timer Effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setOfferExpired(true);
      setIsSpecialPrice(false);
      localStorage.setItem('offerExpired', 'true');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem('diwaliOfferTime', newTime.toString());
        
        if (newTime <= 0) {
          setOfferExpired(true);
          setIsSpecialPrice(false);
          localStorage.setItem('offerExpired', 'true');
          return 0;
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Flash Sale Timer - Only runs once per browser session
  useEffect(() => {
    if (flashSaleTime <= 0 || hasFlashSaleOccurred) {
      setIsFlashSale(false);
      setHasFlashSaleOccurred(true);
      localStorage.setItem('flashSaleOccurred', 'true');
      return;
    }

    const flashTimerId = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev <= 1) {
          setIsFlashSale(false);
          setHasFlashSaleOccurred(true);
          localStorage.setItem('flashSaleOccurred', 'true');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(flashTimerId);
  }, [flashSaleTime, hasFlashSaleOccurred]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Normal prices (when offer expires)
  const normalPrices = {
    smo: 7999,
    seo: 14999,
    web: 18000,
    ecommerce: 8999,
    social: 3999,
    google: 1999
  };

  // Price data with ₹1 GMB setup
  const priceData = {
    smo: {
      special: 4999,
      regular: 7999,
      save: "₹3,000",
      name: "Social Media Optimization",
      features: [
        "3 Social Media Platforms",
        "15 Creative Posts/Month",
        "Content Strategy & Calendar",
        "Hashtag Research & Optimization",
        "Engagement Management",
        "Monthly Performance Analytics"
      ],
      icon: "📱",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    seo: {
      special: 8999,
      regular: 14999,
      save: "₹6,000",
      name: "Search Engine Optimization",
      features: [
        "50+ Keyword Research",
        "Complete On-Page SEO",
        "Technical SEO Audit",
        "Google Business Optimization",
        "Monthly Ranking Reports",
        "Content Optimization"
      ],
      icon: "🔍",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    web: {
      special: 12000,
      regular: 18000,
      save: "₹6,000",
      name: "Professional Website Development",
      features: [
        "5 Page Responsive Website",
        "Mobile-First Design",
        "SEO Optimized Structure",
        "Contact/Lead Forms",
        "1 Year Free Hosting*",
        "3 Months Free Support"
      ],
      icon: "💻",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    ecommerce: {
      special: 5999,
      regular: 8999,
      save: "₹3,000",
      name: "E-commerce Management",
      features: [
        "Platform Account Creation",
        "AMAZON • FLIPKART • MEESHO",
        "Product Listing Support",
        "Photo-shoot Available*",
        "Catalog Management",
        "Sales Optimization"
      ],
      icon: "🛒",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    social: {
      special: 1999,
      regular: 3999,
      save: "₹2,000",
      name: "Social Account Creation",
      features: [
        "META Business Account",
        "INSTAGRAM Professional",
        "TWITTER (X) Business",
        "Complete Profile Setup",
        "Branding & Optimization",
        "Verification Support"
      ],
      icon: "👥",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    google: {
      special: 1,
      regular: 1999,
      save: "₹1,998",
      name: "Google Business Setup",
      features: [
        "GOOGLE BUSINESS PAGE",
        "Google Map Listing",
        "BUSINESS WHATSAPP",
        "10 Free Product Listings",
        "YOUTUBE CHANNEL Creation",
        "Basic SEO Setup"
      ],
      icon: "🌐",
      gradient: "bg-gradient-to-r from-yellow-500 to-amber-500"
    }
  };

  const scrollToOffer = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSuccessFormData({
      ...successFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🪔 Diwali Offer Inquiry - DiziGrow 🪔\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919341436937?text=${encodedMessage}`, '_blank');
    
    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleSuccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `✅ Payment Success - DiziGrow 🪔\n\nPayment Details:\nName: ${successFormData.name}\nEmail: ${successFormData.email}\nUTR Number: ${successFormData.utr}\nService: ${successFormData.service}\nAmount Paid: ₹${successFormData.amount}\n\nPlease verify my payment and start the service!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919341436937?text=${encodedMessage}`, '_blank');
    
    setIsSuccessFormOpen(false);
    setSuccessFormData({ name: "", email: "", utr: "", service: "", amount: "" });
    alert("Thank you! We'll verify your payment and start your service within 24 hours. 🎉");
  };

  const openQuickForm = (service: string) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
    setIsFormOpen(true);
  };

  // Payment Functions
  const openPaymentModal = (serviceKey: keyof typeof priceData) => {
    const service = priceData[serviceKey];
    const isGoogle = serviceKey === 'google';
    
    setIsGoogleService(isGoogle);
    
    if (offerExpired) {
      // Normal prices after offer expires
      setPaymentAmount(normalPrices[serviceKey]);
      setOriginalAmount(normalPrices[serviceKey]);
    } else if (isGoogle) {
      setPaymentAmount(service.special); // ₹1 for Google service
      setOriginalAmount(service.regular);
    } else {
      let originalPrice = isSpecialPrice ? service.special : service.regular;
      let discountedPrice = Math.floor(originalPrice * 0.9); // 10% discount
      
      // Apply 90% discount for flash sale
      if (isFlashSale) {
        discountedPrice = Math.floor(originalPrice * 0.1); // 90% off
      }
      
      setPaymentAmount(discountedPrice);
      setOriginalAmount(originalPrice);
    }
    
    setPaymentService(service.name);
    setIsPaymentOpen(true);
  };

  const initiateRazorpayPayment = async () => {
    try {
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: paymentAmount * 100,
        currency: 'INR',
        name: 'DiziGrow - Diwali Special',
        description: isGoogleService ? `Diwali Special - ${paymentService} for ₹1` : `Diwali Advance - ${paymentService}`,
        image: '/logo.png',
        handler: function (response: any) {
          // Open success form after payment
          setIsSuccessFormOpen(true);
          setSuccessFormData(prev => ({
            ...prev,
            service: paymentService,
            amount: paymentAmount.toString()
          }));
          setIsPaymentOpen(false);
          
          // Mark flash sale as used
          if (isFlashSale) {
            setHasFlashSaleOccurred(true);
            localStorage.setItem('flashSaleOccurred', 'true');
          }
        },
        prefill: {
          name: formData.name || 'Customer',
          email: formData.email || 'customer@example.com',
          contact: formData.phone || ''
        },
        notes: {
          service: paymentService,
          type: isGoogleService ? 'Diwali Special ₹1' : 'Diwali Advance'
        },
        theme: {
          color: '#F59E0B'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact us on WhatsApp.');
    }
  };

  const getServicePrice = (serviceKey: keyof typeof priceData) => {
    if (offerExpired) {
      return normalPrices[serviceKey];
    }
    
    if (serviceKey === 'google') return 1;
    
    if (isFlashSale) {
      return Math.floor(priceData[serviceKey].special * 0.1); // 90% off during flash sale
    }
    
    return isSpecialPrice ? priceData[serviceKey].special : priceData[serviceKey].regular;
  };

  const getDiscountedPrice = (serviceKey: keyof typeof priceData) => {
    if (offerExpired) {
      return normalPrices[serviceKey];
    }
    
    if (serviceKey === 'google') return 1;
    const originalPrice = getServicePrice(serviceKey);
    return Math.floor(originalPrice * 0.9);
  };

  const servicesList = [
    { key: 'smo' as const, label: 'SMO' },
    { key: 'seo' as const, label: 'SEO' },
    { key: 'web' as const, label: 'Web Dev' },
    { key: 'ecommerce' as const, label: 'E-commerce' },
    { key: 'social' as const, label: 'Social' },
    { key: 'google' as const, label: 'Google Business' }
  ];

  // Diwali Sparkles Component
  const DiwaliSparkles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );

  // Reset everything (for testing)
  const resetAll = () => {
    localStorage.removeItem('diwaliOfferTime');
    localStorage.removeItem('flashSaleOccurred');
    localStorage.removeItem('offerExpired');
    setTimeLeft(60);
    setFlashSaleTime(15);
    setIsSpecialPrice(true);
    setIsFlashSale(true);
    setHasFlashSaleOccurred(false);
    setOfferExpired(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50" style={{ fontFamily: "'Haboro Serif', serif" }}>
      <Helmet>
        <title>Diwali Mega Offer - Google Business at ₹1 + 90% OFF Flash Sale | DiziGrow</title>
        <meta name="description" content="Diwali Special: Get Google Business Setup for just ₹1 + 90% FLASH SALE on SMO, SEO, Web Development, E-commerce & more. Limited time!" />
        <link href="https://fonts.googleapis.com/css2?family=Haboro+Serif:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Developer Reset Button (Hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={resetAll}
          className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-3 py-2 rounded-lg text-xs opacity-50 hover:opacity-100"
        >
          Reset All
        </button>
      )}

      {/* Flash Sale Banner */}
      {isFlashSale && !offerExpired && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 text-center animate-pulse">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            <span className="font-bold">FLASH SALE: 90% OFF - Ends in {flashSaleTime}s!</span>
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Floating Timer */}
      <div className="fixed top-4 right-4 z-40">
        <div className={`bg-gradient-to-r ${offerExpired ? 'from-gray-500 to-gray-700' : isSpecialPrice ? 'from-green-500 to-emerald-500' : 'from-red-500 to-orange-500'} text-white px-4 py-2 rounded-full shadow-2xl animate-pulse border-2 border-yellow-300`}>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-spin" />
            <div className="text-center">
              <div className="text-xs font-semibold">
                {offerExpired ? '❌ OFFER EXPIRED' : isSpecialPrice ? '🪔 ENDS IN' : '⏰ ENDED'}
              </div>
              <div className={`text-sm font-bold ${offerExpired && 'line-through'}`}>
                {offerExpired ? '00:00' : formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-600 text-white pt-16 pb-12 md:py-20 overflow-hidden">
        <DiwaliSparkles />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {!offerExpired && (
            <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-2xl ${isSpecialPrice ? 'bg-green-500/20 border border-green-300' : 'bg-red-500/20 border border-red-300'} backdrop-blur-sm`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 animate-pulse" />
                  <span className="text-sm md:text-lg font-bold">{isSpecialPrice ? '⏰ DIWALI OFFER ENDS IN:' : '❌ OFFER EXPIRED'}</span>
                </div>
                <div className={`text-xl md:text-2xl font-bold ${isSpecialPrice ? 'text-yellow-300' : 'text-red-300'} font-mono`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          )}

          {isFlashSale && !offerExpired && (
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-yellow-300">
              ⚡ FLASH SALE: 90% OFF - {flashSaleTime}s LEFT!
            </div>
          )}

          {!offerExpired && (
            <div className="bg-yellow-400 text-orange-800 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-orange-300">
              🪔 Google Business at ₹1 Only! 🪔
            </div>
          )}
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {offerExpired ? (
              <>
                Offer <span className="text-red-300">Expired</span><br />
                <span className="text-yellow-300">Contact for Prices</span>
              </>
            ) : isSpecialPrice ? (
              <>
                Digital Success<br />
                <span className="text-yellow-300">This Diwali</span>
              </>
            ) : (
              <>
                Offer <span className="text-red-300">Ended</span><br />
                <span className="text-yellow-300">Check New Offers</span>
              </>
            )}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-orange-100 max-w-4xl mx-auto font-medium">
            {offerExpired ? (
              "Diwali offer period has ended. Contact us for current pricing!"
            ) : isSpecialPrice ? (
              isFlashSale ? 
                "Google Business at ₹1 + 90% FLASH SALE on All Services!" :
                "Complete Digital Solution Package - Google Business at ₹1 + 10% OFF!"
            ) : (
              "Special offer period has ended. Contact us for current pricing!"
            )}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-6 md:mb-8 max-w-6xl mx-auto">
            {servicesList.map((service, index) => (
              <div key={service.key} className={`${priceData[service.key].gradient} text-white p-2 md:p-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white/30 text-center`}>
                <div className="text-lg md:text-xl mb-1">{priceData[service.key].icon}</div>
                <div className="text-sm md:text-base font-bold mb-1">
                  ₹{getServicePrice(service.key).toLocaleString()}
                </div>
                <div className="text-xs font-medium">{service.label}</div>
                {!offerExpired && isSpecialPrice && service.key !== 'google' && !isFlashSale && (
                  <div className="text-[10px] bg-white/20 rounded px-1 mt-1">
                    Advance: ₹{getDiscountedPrice(service.key).toLocaleString()}
                  </div>
                )}
                {!offerExpired && isFlashSale && service.key !== 'google' && (
                  <div className="text-[10px] bg-red-500/80 rounded px-1 mt-1 text-white">
                    90% OFF!
                  </div>
                )}
                {offerExpired && (
                  <div className="text-[10px] bg-gray-500/80 rounded px-1 mt-1 text-white">
                    Normal Price
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <Rocket className="h-4 w-4 md:h-5 md:w-5" />
              {offerExpired ? 'View Services' : 'View All Services'}
            </button>
            <button onClick={() => setIsFormOpen(true)} className={`px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center ${offerExpired ? 'bg-blue-500 hover:bg-blue-600 text-white' : isSpecialPrice ? 'bg-green-500 hover:bg-green-600 text-white border-2 border-green-300' : 'bg-gray-500 hover:bg-gray-600 text-white'}`}>
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              {offerExpired ? '📞 Contact Now' : isSpecialPrice ? '💬 Get Offer' : '📞 Contact Now'}
            </button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      {!offerExpired && (
        <section className="py-4 md:py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
          <DiwaliSparkles />
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <Gift className="h-5 w-5 md:h-6 md:w-6 text-yellow-300 animate-pulse" />
                <span className="text-lg md:text-xl font-bold">Google Business at Just ₹1!</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
                <span>{isFlashSale ? '+ 90% FLASH SALE on All Services!' : '+ 10% EXTRA OFF on All Services'}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section id="offers" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {offerExpired ? (
                <>Our <span className="text-orange-500">Services</span></>
              ) : (
                <>🪔 Diwali <span className="text-orange-500">Special</span> Services 🪔</>
              )}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {offerExpired ? "Professional digital services for your business growth" : "Light up your business with our premium digital services"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {servicesList.map((service) => (
              <div key={service.key} className={`bg-white border-2 ${offerExpired ? 'border-gray-300' : 'border-orange-200'} rounded-2xl p-4 md:p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}>
                {!offerExpired && service.key === 'google' && isSpecialPrice && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    🪔 Special
                  </div>
                )}
                
                {!offerExpired && isFlashSale && service.key !== 'google' && (
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    ⚡ 90% OFF
                  </div>
                )}

                {offerExpired && (
                  <div className="absolute -top-2 -right-2 bg-gray-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold rotate-12 shadow-lg z-10">
                    Standard
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    ₹{getServicePrice(service.key).toLocaleString()}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-gray-900">{priceData[service.key].name}</div>
                  {!offerExpired && (
                    <div className="text-gray-500 line-through text-sm md:text-base">₹{priceData[service.key].regular.toLocaleString()}</div>
                  )}
                  
                  {!offerExpired && isSpecialPrice && service.key !== 'google' && !isFlashSale && (
                    <div className="mt-2 p-2 bg-green-500/10 rounded-lg">
                      <div className="text-green-700 font-bold text-xs md:text-sm">Diwali Advance:</div>
                      <div className="text-green-600 font-bold text-lg md:text-xl">₹{getDiscountedPrice(service.key).toLocaleString()}</div>
                      <div className="text-green-500 text-xs">Save 10% Extra!</div>
                    </div>
                  )}

                  {!offerExpired && isFlashSale && service.key !== 'google' && (
                    <div className="mt-2 p-2 bg-red-500/10 rounded-lg border border-red-200">
                      <div className="text-red-700 font-bold text-xs md:text-sm">FLASH SALE:</div>
                      <div className="text-red-600 font-bold text-lg md:text-xl">₹{getServicePrice(service.key).toLocaleString()}</div>
                      <div className="text-red-500 text-xs">Save 90%!</div>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-2 mb-4 text-xs md:text-sm">
                  {priceData[service.key].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => openPaymentModal(service.key)} 
                    className={`w-full py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block text-sm md:text-base ${
                      offerExpired 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-300' 
                        : service.key === 'google' 
                          ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white border-2 border-yellow-300' 
                          : isFlashSale
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-2 border-red-300'
                            : isSpecialPrice 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300' 
                              : 'bg-gray-500 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {offerExpired 
                      ? '💳 Book Now' 
                      : service.key === 'google' 
                        ? '🪔 Get for ₹1 Now!' 
                        : isFlashSale
                          ? '⚡ Grab 90% OFF Now!'
                          : isSpecialPrice 
                            ? '💳 Book Now - Save 10%' 
                            : '📞 Contact for Price'
                    }
                  </button>
                  <button 
                    onClick={() => openQuickForm(priceData[service.key].name)} 
                    className="w-full py-2 rounded-xl font-bold transition-all hover:scale-105 text-center block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs md:text-sm border-2 border-blue-300"
                  >
                    💬 {offerExpired ? 'Get Quote' : 'Free Consultation'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-500 to-red-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {offerExpired ? 'Ready to Grow Your Business?' : 'Ready to Transform Your Business?'}
          </h2>
          <p className="text-lg md:text-xl mb-6">
            {offerExpired ? 'Contact us now for professional digital services!' : 'Contact us now and get your digital transformation started!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919341436937', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              WhatsApp Now
            </button>
            <button 
              onClick={() => window.open('tel:+919341436937', '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call: +91 93414 36937
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-orange-400">DiziGrow</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Your trusted partner for digital growth and online success.
              </p>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm md:text-base text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 93414 36937</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@dizigrow.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open('https://wa.me/919341436937', '_blank')}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button 
                  onClick={() => window.open('tel:+919341436937', '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 DiziGrow. All rights reserved. | {offerExpired ? 'Professional Services' : 'Diwali Special Offer'}
            </p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-orange-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  {offerExpired ? 'Book Service' : isGoogleService ? 'Diwali Special ₹1' : isFlashSale ? 'Flash Sale 90% OFF' : 'Diwali Advance Booking'}
                </h3>
                <p className="text-orange-600 font-semibold text-xs md:text-sm mt-1">{paymentService}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className={`p-3 md:p-4 rounded-xl border-2 ${
                offerExpired 
                  ? 'bg-blue-50 border-blue-200' 
                  : isGoogleService 
                    ? 'bg-yellow-50 border-yellow-200' 
                    : isFlashSale
                      ? 'bg-red-50 border-red-200'
                      : 'bg-green-50 border-green-200'
              }`}>
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                    offerExpired 
                      ? 'text-blue-600' 
                      : isGoogleService 
                        ? 'text-yellow-600' 
                        : isFlashSale 
                          ? 'text-red-600' 
                          : 'text-green-600'
                  }`}>
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className={`font-semibold text-sm md:text-base ${
                    offerExpired 
                      ? 'text-blue-700' 
                      : isGoogleService 
                        ? 'text-yellow-700' 
                        : isFlashSale 
                          ? 'text-red-700' 
                          : 'text-green-700'
                  }`}>
                    {offerExpired 
                      ? 'Service Price' 
                      : isGoogleService 
                        ? 'Diwali Special Price!' 
                        : isFlashSale 
                          ? 'Flash Sale 90% OFF!' 
                          : 'After 10% Diwali Discount'
                    }
                  </div>
                  {!offerExpired && !isGoogleService && (
                    <div className="text-gray-500 text-xs md:text-sm line-through mt-1">
                      Original: ₹{originalAmount.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={initiateRazorpayPayment}
                className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg ${
                  offerExpired 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-300' 
                    : isGoogleService 
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white border-2 border-yellow-300' 
                      : isFlashSale
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white border-2 border-red-300'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300'
                }`}
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                {offerExpired 
                  ? `Pay ₹${paymentAmount.toLocaleString()}` 
                  : `Pay ₹${paymentAmount.toLocaleString()} Now`
                }
              </button>

              <button 
                onClick={() => {setIsPaymentOpen(false); setIsFormOpen(true);}}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block border-2 border-purple-300 text-sm md:text-base"
              >
                💬 Contact First Instead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Form Modal - Opens after payment */}
      {isSuccessFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-green-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                  Payment Successful! 🎉
                </h3>
                <p className="text-green-600 font-semibold text-xs md:text-sm mt-1">Complete your details to start service</p>
              </div>
              <button onClick={() => setIsSuccessFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSuccessSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={successFormData.name} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={successFormData.email} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UTR Number *</label>
                <input 
                  type="text" 
                  name="utr" 
                  required 
                  value={successFormData.utr} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter UTR number from payment" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                <input 
                  type="text" 
                  name="service" 
                  required 
                  value={successFormData.service} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base bg-gray-50" 
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid *</label>
                <input 
                  type="text" 
                  name="amount" 
                  required 
                  value={successFormData.amount} 
                  onChange={handleSuccessFormChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base bg-gray-50" 
                  readOnly
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Submit & Start Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 max-w-md w-full shadow-2xl border-2 border-orange-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {offerExpired ? '📞 Contact Us' : '🪔 Diwali Offer Application'}
                </h3>
                {selectedService && <p className="text-orange-600 font-semibold text-xs md:text-sm mt-1">{selectedService}</p>}
              </div>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Enter your WhatsApp number" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In *</label>
                <select 
                  name="service" 
                  required 
                  value={formData.service} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Select your service</option>
                  {servicesList.map(service => (
                    <option key={service.key} value={priceData[service.key].name}>
                      {priceData[service.key].name} - ₹{getServicePrice(service.key).toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                <textarea 
                  name="message" 
                  rows={3} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base" 
                  placeholder="Tell us about your requirements..." 
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-2 border-orange-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                {offerExpired ? 'Send Inquiry' : 'Send Diwali Offer Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;