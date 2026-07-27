import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "+919876543210";
  const defaultMessage = "Hello Rahimax! I'm interested in building a web application. Let's chat.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 font-body">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="bg-primary text-white p-3.5 rounded-full shadow-lg hover:bg-secondary hover:scale-110 transition-all duration-300 border border-slate-700 cursor-pointer flex items-center justify-center group relative"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-white text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border-light">
            Scroll Top
          </span>
        </button>
      )}

      {/* Email Button */}
      <a 
        href="mailto:info@rahimax.com"
        className="bg-[#F59E0B] text-white p-3.5 rounded-full shadow-lg hover:bg-[#D97706] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Email Us"
      >
        <Mail className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-white text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border-light">
          Email Us
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919876543210"
        className="bg-secondary text-white p-3.5 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-white text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border-light">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#22C55E] text-white p-3.5 rounded-full shadow-lg hover:bg-[#1E9F4C] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="absolute right-full mr-3 bg-white text-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border-light">
          WhatsApp Chat
        </span>
      </a>

    </div>
  );
};

export default FloatingActions;
