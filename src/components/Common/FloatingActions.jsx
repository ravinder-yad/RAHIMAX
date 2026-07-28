import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowUp, X, MessageSquare } from 'lucide-react';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Default open showing all action buttons and labels

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

  // Collapsed State: Display a tiny support bubble to expand
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title="Open Support Panel"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200 dark:border-zinc-800 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Open Support Panel
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-body">
      
      {/* Dismiss Toggle X Button */}
      <button 
        onClick={() => setIsOpen(false)}
        className="bg-white dark:bg-zinc-900 text-slate-500 dark:text-slate-400 p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-300 border border-slate-200 dark:border-zinc-800 cursor-pointer flex items-center justify-center group relative"
        title="Hide Support Menu"
      >
        <X className="w-3.5 h-3.5" />
        <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded shadow-md pointer-events-none whitespace-nowrap border border-slate-200 dark:border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hide Panel
        </span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-zinc-800 cursor-pointer flex items-center justify-center group relative"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-slate-800 dark:text-white" />
          <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200 dark:border-zinc-850 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200 dark:border-zinc-850 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200 dark:border-zinc-855 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Book a Call
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
        <WhatsAppIcon className="w-5 h-5" />
        <span className="absolute right-full mr-3 hidden sm:flex bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 text-[10px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-xl shadow-md border border-slate-200 dark:border-zinc-855 pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp Chat
        </span>
      </a>

    </div>
  );
};

// Official brand-compliant WhatsApp icon SVG path
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.641-1.03-5.124-2.902-6.999-1.872-1.875-4.36-2.907-7.001-2.907-5.432 0-9.854 4.415-9.856 9.865-.001 1.75.472 3.46 1.368 4.985l-.997 3.639 3.738-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default FloatingActions;
